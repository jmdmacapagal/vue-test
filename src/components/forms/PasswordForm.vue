<template>
  <form id="passwordForm" @submit.prevent="savePassword">
    <div :class="{ error: isError }">
      <label>Password</label>
      <password v-model="password" :toggle="true" :showStrengthMeter="true" />
    </div>
    <button type="submit" class="confirmPasswordBtn">Confirm</button>
    <span class="error-message" v-if="isError">{{ errorMessage }}</span>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Password from "vue-password-strength-meter";
import { passwordValidate } from "@/helpers/passwordValidate";

export default {
  components: { Password },
  data() {
    return {
      password: "",
      isError: false,
      errorMessage: "Password must be atleast 8 characters.",
    };
  },
  methods: {
    ...mapActions(["updatePassword"]),
    savePassword() {
      let isValid = passwordValidate(this.password);

      if (isValid) {
        this.updatePassword(this.password);
        this.isError = false;
        this.toggle();
      } else {
        this.isError = true;
      }
    },
    toggle() {
      this.$emit("toggleEdit");
    },
  },
};
</script>

<style lang="scss">
#passwordForm {
  position: relative;

  .Password__badge {
    display: none;
  }

  .seePassword {
    display: flex;
    align-items: center;
    border: none;
    background: #fff;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid #ddd;
  }

  .confirmPasswordBtn {
    background-color: white;
    color: black;
    border: 2px solid #0b6dff;
    width: 100%;
    border-radius: 10px;
    padding: 10px 0;
    cursor: pointer;
    margin: 10px auto 0;
    text-transform: uppercase;
  }

  .error-message {
    position: absolute;
    bottom: 50px;
    font-size: 10px;
    color: red;
    left: 0;
  }

  .error .Password__field {
    border: 1px solid red;
  }
}
</style>