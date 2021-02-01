<template>
  <form id="nameForm" @submit.prevent="saveFullname">
    <div>
      <label>First name</label>
      <input type="text" required v-model="first" />
    </div>

    <div>
      <label>Last name</label>
      <input type="text" required v-model="last" />
    </div>

    <button class="submit">Save</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      first: "",
      last: "",
    };
  },
  methods: {
    ...mapActions(["updateFullname"]),
    toggle() {
      this.$emit("toggleEdit");
    },
    saveFullname() {
      let name = {
        firstName: this.first,
        lastName: this.last,
      };

      this.updateFullname(name);
      this.toggle();
    },
  },
  computed: {
    ...mapGetters(["fullName", "firstName", "lastName", "gravatar"]),
  },
  created() {
    this.last = this.lastName;
    this.first = this.firstName;
  },
};
</script>

<style lang="scss">
#nameForm {
  display: flex;
  position: relative;

  div {
    margin-right: 20px;
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
}
</style>