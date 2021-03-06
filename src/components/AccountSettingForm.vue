<template>
  <form
    @submit.prevent.stop="handleFormSubmit"
    class="account-setting-form"
    action=""
    novalidate
  >
    <div class="form-row">
      <label for="account" class="form-row__label"> 帳號 </label>
      <input
        v-model="accountDetail.account"
        id="account"
        class="form-row__input"
        :class="{ invalid: formValidation.account.error }"
        type="text"
        name="account"
        required
      />
      <div v-if="formValidation.account.error" class="form-row__error-message">
        {{ formValidation.account.message }}
      </div>
    </div>
    <div class="form-row">
      <label for="name" class="form-row__label"> 名稱 </label>
      <input
        v-model="accountDetail.name"
        id="name"
        class="form-row__input"
        :class="{ invalid: formValidation.name.error }"
        type="text"
        name="name"
        required
      />
      <div class="form-row__length-counter">
        <span class="form-row__length-counter__current-length">
          {{ accountDetail.name.length }}
        </span>
        <span class="form-row__length-counter__length-limit">
          / {{ formValidation.name.lengthLimit }}
        </span>
      </div>
      <div v-if="formValidation.name.error" class="form-row__error-message">
        {{ formValidation.name.message }}
      </div>
    </div>
    <div class="form-row">
      <label for="email" class="form-row__label"> Email </label>
      <input
        v-model="accountDetail.email"
        id="email"
        class="form-row__input"
        :class="{ invalid: formValidation.email.error }"
        type="email"
        name="email"
        required
      />
      <div v-if="formValidation.email.error" class="form-row__error-message">
        {{ formValidation.email.message }}
      </div>
    </div>
    <div class="form-row">
      <label for="password" class="form-row__label"> 密碼 </label>
      <input
        v-model="accountDetail.password"
        id="password"
        class="form-row__input"
        :class="{ invalid: formValidation.password.error }"
        type="password"
        name="password"
        required
      />
      <div v-if="formValidation.password.error" class="form-row__error-message">
        {{ formValidation.password.message }}
      </div>
    </div>
    <div class="form-row">
      <label for="checkPassword" class="form-row__label"> 密碼確認 </label>
      <input
        v-model="accountDetail.checkPassword"
        id="checkPassword"
        class="form-row__input"
        :class="{ invalid: formValidation.checkPassword.error }"
        type="password"
        name="checkPassword"
        required
      />
      <div
        v-if="formValidation.checkPassword.error"
        class="form-row__error-message"
      >
        {{ formValidation.checkPassword.message }}
      </div>
    </div>
    <button :disabled="isProcessing || formValidation.name.error" type="submit" class="account-setting-form__submit-btn btn">
      {{ initialAccountDetail ? '儲存' : '註冊'}}
    </button>
  </form>
</template>

<script>
export default {
  name: "AccountSettingForm",
  props: {
    initialAccountDetail: {
      type: Object,
    },
    isProcessing: {
      type: Boolean,
      default: false
    },
    clearPasswordInput: {
        type: Boolean,
        default: false
      },
  },
  data() {
    return {
      accountDetail: {
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
        role: "user",
      },
      formValidation: {
        account: {
          error: false,
          message: "test",
        },
        name: {
          lengthLimit: 50,
          error: false,
          message: "",
        },
        email: {
          error: false,
          message: "",
        },
        password: {
          error: false,
          message: "",
        },
        checkPassword: {
          error: false,
          message: "",
        },
      },
    };
  },
  created() {
    this.updateAccountDetail();
  },
  watch: {
    initialAccountDetail: function () {
      this.updateAccountDetail();
    },
    "accountDetail.name": function () {
      if (
        this.accountDetail.name.length > this.formValidation.name.lengthLimit
      ) {
        this.formValidation.name.error = true;
        this.formValidation.name.message = "字數超過限制";
      } else {
        this.formValidation.name.error = false;
      }
    },
    clearPasswordInput: function () {
      if (this.clearPasswordInput) {
        this.clearInput()
      }
    }
  },
  methods: {
    updateAccountDetail() {
      this.accountDetail = {
        ...this.accountDetail,
        ...this.initialAccountDetail,
        password: "",
      };
    },
    handleFormSubmit() {
      // reset data of this.formValidation
      const fileName = Object.keys(this.formValidation);
      fileName.forEach((name) => {
        this.formValidation[name].error = false;
        this.formValidation[name].message = "";
      });
      // form validation of account
      if (this.accountDetail.account.trim().length === 0) {
        this.formValidation.account.error = true;
        this.formValidation.account.message = "請填入帳號";
        return;
      }
      // form validation of name
      if (this.accountDetail.name.trim().length === 0) {
        this.formValidation.name.error = true;
        this.formValidation.name.message = "請填入名稱";
        return;
      }
      // form validation of email
      if (this.accountDetail.email.trim().length === 0) {
        this.formValidation.email.error = true;
        this.formValidation.email.message = "請填入信箱";
        return;
      } else if (
        !this.accountDetail.email.includes("@") ||
        !this.accountDetail.email.includes(".com")
      ) {
        this.formValidation.email.error = true;
        this.formValidation.email.message = "請填入正確的信箱格式";
        return;
      }
      // form validation of password
      if (this.accountDetail.password.trim().length === 0) {
        this.formValidation.password.error = true;
        this.formValidation.password.message = "請填入密碼";
        return;
      }
      if (this.accountDetail.checkPassword.trim().length === 0) {
        this.formValidation.checkPassword.error = true;
        this.formValidation.checkPassword.message = "請再次填入密碼已進行確認";
        return;
      } else if (
        this.accountDetail.password !== this.accountDetail.checkPassword
      ) {
        this.formValidation.checkPassword.error = true;
        this.formValidation.checkPassword.message = "密碼不相符，請重新確認";
        this.accountDetail.checkPassword = "";
        return;
      }
      // formSubmit
      this.$emit("after-form-submit", this.accountDetail);
    },
    clearInput () {
      this.accountDetail.password = ''
      this.accountDetail.checkPassword = ''
    }
  },
};
</script>