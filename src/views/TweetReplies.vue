<template>
  <div class="tweet-replies">
    <section class="center-view">
      <page-name-banner
        :banner-title="bannerTitle"
        :banner-link-back="bannerLinkBack"
      />
      <ScaleLoader :is-loading="isLoading"/>
      <tweet-card
        v-if="!isLoading"
        :initial-tweet="tweet"
        @after-show-reply-modal="afterShowReplyModal"
        @after-add-like="afterAddLike"
        @after-delete-like="afterDeleteLike"
      />
      <reply-list v-if="!isLoading" :tweet="tweet" />
    </section>
    <section class="right-card">
      <popular-users-card />
    </section>
    <reply-model
      v-show="showReplyModal"
      :reply-tweet="tweet"
      @after-reply-submit="afterReplySubmit"
      @after-comment-checkout="afterCommentCheckout"
    />
    <Toast :ToastMessage="ToastMessage" />
  </div>
</template>

<script>
import PageNameBanner from "../components/PageNameBanner.vue";
import TweetCard from "../components/TweetCard.vue";
import ReplyList from "../components/ReplyList.vue";
import PopularUsersCard from "../components/PopularUsersCard.vue";
import ReplyModel from "../components/ReplyModel.vue";
import Toast from "../components/AlertToast.vue";
import ScaleLoader from "../components/ScaleLoader.vue"
import tweetsAPI from "../api/tweets.js";
import usersAPI from "../api/users.js";

export default {
  components: {
    PageNameBanner,
    TweetCard,
    ReplyList,
    PopularUsersCard,
    ReplyModel,
    Toast,
    ScaleLoader,
  },
  data() {
    return {
      bannerLinkBack: true,
      bannerTitle: "推文",
      tweet: {},
      showReplyModal: false,
      ToastMessage: {
        message: "",
        dataStatus: "",
      },
      isLoading: true,
    };
  },
  created() {
    this.isLoading = true
    const tweetId = this.$route.params.id;
    this.fetchTweetData(tweetId);
  },
  methods: {
    async fetchTweetData(tweetId) {
      try {
        const { data } = await tweetsAPI.getTweet({ tweetId });
        const {
          id,
          UserId,
          User,
          description,
          createdAt,
          Replies,
          Likes,
          replyCount,
          likeCount,
          isLiked: isLike,
        } = data;
        this.tweet = {
          id,
          UserId,
          account: User.account,
          name: User.name,
          avatar: User.avatar,
          description,
          createdAt,
          Replies,
          Likes,
          replyCount,
          likeCount,
          isLike,
        };
        this.tweet.Replies = this.tweet.Replies.map((reply) => {
          const { id, UserId, User, comment, createdAt } = reply;
          return {
            id,
            UserId,
            account: User.account,
            name: User.name,
            comment,
            avatar: User.avatar,
            createdAt,
          };
        });
        this.isLoading = false
      } catch (error) {
        console.log(error);
        this.ToastMessage.message = `無法取得推文資料，請稍後再試`;
        this.ToastMessage.dataStatus = "error";
        this.isLoading = false
      }
    },
    afterShowReplyModal() {
      this.showReplyModal = true;
    },
    afterCommentCheckout() {
      this.showReplyModal = false;
    },
    afterReplySubmit() {
      const tweetId = this.$route.params.id;
      this.fetchTweetData(tweetId);
    },
    async afterAddLike(tweetId) {
      try {
        const { data } = await usersAPI.addLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.isLike = true;
        this.tweet.likeCount += 1;
      } catch (error) {
        console.log(error);
        this.ToastMessage.message = `無法取新增最愛，請稍後再試`;
        this.ToastMessage.dataStatus = "error";
      }
    },
    async afterDeleteLike(tweetId) {
      try {
        const { data } = await usersAPI.deleteLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.isLike = false;
        this.tweet.likeCount -= 1;
      } catch (error) {
        console.log(error);
        this.ToastMessage.message = `無法移除最愛，請稍後再試`;
        this.ToastMessage.dataStatus = "error";
      }
    },
  },
};
</script>
