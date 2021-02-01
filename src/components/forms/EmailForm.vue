<template>
  <form id="emailForm" @submit.prevent="saveEmail">
    <div>
      <label>Email</label>
      <input
        type="text"
        required
        v-model="useremail"
        :class="{ error: isError }"
      />
    </div>

    <button class="submit">Save</button>
    <span class="error-message" v-if="isError">{{ errorMessage }}</span>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { emailValidate } from "@/helpers/emailValidate";

export default {
  data() {
    return {
      useremail: "",
      isError: false,
      errorMessage: "Must be a valid email",
    };
  },
  methods: {
    ...mapActions(["updateEmail"]),
    toggle() {
      this.$emit("toggleEdit");
    },
    saveEmail() {
      let isValid = emailValidate(this.useremail);

      if (isValid) {
        this.updateEmail(this.useremail);
        this.isError = false;
        this.toggle();
      } else {
        this.isError = true;
      }
    },
  },
  computed: {
    ...mapGetters(["email"]),
  },
  created() {
    this.useremail = this.email;
  },
};
</script>

<style lang="scss">
#emailForm {
  display: flex;
  position: relative;

  div {
    margin-right: 20px;
    width: 100%;
  }

  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  .error-message {
    position: absolute;
    bottom: -20px;
    font-size: 10px;
    color: red;
  }

  .error {
    border-bottom: 1px solid red;
  }
}
</style>