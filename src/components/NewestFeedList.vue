<template>
  <div class="newest">
    <div
      class="newest__tweet d-flex"
      @click.prevent.stop="toReplyRouter(tweet.id)"
    >
      <!-- 目前 tweets 中，沒有該 tweet 之發文者資料，圖片先帶假資料 -->
      <span
        ><router-link :to="{ name: 'user', params: { id: tweet.User.id } }">
          <img
            :src="tweet.User.avatar"
            alt=""
            class="newest__tweet__image avatar-50"
            @click.prevent.stop="toUserPage(tweet.UserId)"
        /></router-link>
      </span>
      <div class="newest__tweet__container d-flex-col">
        <div class="newest__tweet__user">
          <h2
            class="newest__tweet__user__name user-name-text"
            @click.prevent.stop="toUserPage(tweet.UserId)"
          >
            {{ tweet.User.name }}
          </h2>
          <span class="newest__tweet__user__account user-account-text"
            >{{ tweet.User.account | accountTag }}・{{
              tweet.createdAt | fromNow
            }}</span
          >
        </div>
        <div class="newest__tweet__descriptoion">
          <p class="description-15">{{ tweet.description }}</p>
        </div>
        <div class="newest__tweet__icon d-flex">
          <div
            class="newest__tweet__icon__reply d-flex"
            @click.prevent.stop="replyLaunchHandler(tweet.id)"
          >
            <img
              src="../assets/images/reply.svg"
              alt=""
              class="icon newest__tweet__icon__image icon__reply__image"
            />
            <span class="newest__tweet__icon__count count-13">{{
              tweet.replyCount
            }}</span>
          </div>
          <div class="newest__tweet__icon__like d-flex">
            <img
              v-if="tweet.isLiked"
              @click.prevent.stop="deleteLike(tweet.id)"
              src="../assets/images/like-red.svg"
              alt=""
              class="icon newest__tweet__icon__image icon__like__image"
            />
            <img
              v-else
              @click.prevent.stop="addLike(tweet.id)"
              src="../assets/images/like.svg"
              alt=""
              class="icon newest__tweet__icon__image icon__like__image"
            />
            <span
              class="newest__tweet__icon__count count-13"
              :class="{ red: tweet.isLiked }"
              >{{ tweet.likeCount }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter, accountFilter } from "../utils/mixins.js";
export default {
  name: "Newest-tweets",
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  mixins: [fromNowFilter, accountFilter],
  methods: {
    addLike(tweetId) {
      this.$emit("after-add-like", tweetId);
    },
    deleteLike(tweetId) {
      this.$emit("after-delete-like", tweetId);
    },
    replyLaunchHandler(tweetId) {
      this.$emit("after-launch-reply-modal", tweetId);
    },
    // 點擊貼文跳轉至推文與回覆串
    toReplyRouter(tweetId) {
      this.$router.push({ name: "tweet-replies", params: { id: tweetId } });
    },
    toUserPage(userId) {
      this.$router.push({ name: "user", params: { id: userId } });
    },
  },
};
</script>