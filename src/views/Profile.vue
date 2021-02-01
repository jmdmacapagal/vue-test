<template>
  <div class="profile">
    <img :src="gravatar" />

    <div class="detail-container" v-if="!isEditName">
      <h3>{{ fullName }}</h3>
      <button @click="toggleEditNameForm">
        <font-awesome-icon icon="pencil-alt" />
      </button>
    </div>

    <div class="detail-container" v-if="!isEditEmail">
      <h3>{{ email }}</h3>
      <button @click="toggleEditEmailForm">
        <font-awesome-icon icon="pencil-alt" />
      </button>
    </div>

    <button
      class="changePasswordBtn"
      @click="toggleChangePasswordForm"
      v-if="!isChangePassword"
    >
      Change Password
    </button>

    <div v-if="isEditName">
      <FullnameForm @toggleEdit="toggleEditNameForm" />
    </div>

    <div v-if="isEditEmail">
      <EmailForm @toggleEdit="toggleEditEmailForm" />
    </div>

    <div v-if="isChangePassword">
      <PasswordForm @toggleEdit="toggleChangePasswordForm" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import PasswordForm from "@/components/forms/PasswordForm";
import FullnameForm from "@/components/forms/FullnameForm";
import EmailForm from "@/components/forms/EmailForm";

export default {
  components: { PasswordForm, FullnameForm, EmailForm },
  data() {
    return {
      isEditName: false,
      isChangePassword: false,
      isEditEmail: false,
    };
  },
  methods: {
    toggleEditNameForm() {
      this.isEditName = !this.isEditName;
      this.isChangePassword = false;
      this.isEditEmail = false;
    },
    toggleChangePasswordForm() {
      this.isChangePassword = !this.isChangePassword;
      this.isEditName = false;
      this.isEditEmail = false;
    },
    toggleEditEmailForm() {
      this.isEditEmail = !this.isEditEmail;
      this.isChangePassword = false;
      this.isEditName = false;
    },
    ...mapActions(["fetchGravatar"]),
  },
  computed: {
    ...mapGetters(["fullName", "gravatar", "email"]),
  },
  created() {
    this.fetchGravatar();
  },
};
</script>

<style lang="scss">
.profile {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;

  .changePasswordBtn {
    background-color: white;
    color: black;
    border: 2px solid #0b6dff;
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    padding: 10px 0;
    cursor: pointer;
    margin-top: 20px;
  }

  .detail-container {
    display: flex;
    align-items: center;
    margin-top: 20px;

    h3 {
      margin: 0;
    }

    button {
      background-color: white;
      color: black;
      border: 2px solid #0b6dff;
      width: 100%;
      border-radius: 10px;
      max-width: 50px;
      padding: 0;
      height: 20px;
      margin-left: 20px;
      cursor: pointer;
      font-size: 10px;
    }
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .submit {
    background: #0b6dff;
    border: 0;
    padding: 0 20px;
    color: #fff;
    border-radius: 20px;
    height: 30px;
    cursor: pointer;
    margin-top: 30px;
  }
}
</style>