<template>
  <div>
    <div id="snackbar">
      <span class="snackbar_text">{{ this.ToastMessage.message }}</span>
      <span class="snackbar_img" v-if="this.ToastMessage.dataStatus == 'error'"
        ><img src="../assets/images/error.svg" alt=""
      /></span>
      <span class="snackbar_img" v-else
        ><img src="../assets/images/success.svg" alt=""
      /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    ToastMessage: {
      type: Object,
      required: true,
    },
  },
  watch: {
    // 監看 props 中 status 的變化 (由空值變為 error 或 success) 觸發 toast
    ToastMessage: {
      handler: function () {
        this.toast();
      },
      deep: true,
    },
  },
  methods: {
    toast() {
      const toastElement = document.getElementById("snackbar");
      toastElement.className = "show";
      setTimeout(function () {
        toastElement.className = toastElement.className.replace("show", "");
      }, 2750);
    },
  },
};
</script>

