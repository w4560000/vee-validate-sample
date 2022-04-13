<template>
  <div id="app">
    原生validate(required)
    <input name="data1" type="text" v-model="data1" v-validate="`required`" />
    <br />
    <span class="error">{{ errors.first("data1") }}</span>

    <br />
    全局註冊的validate (需>0)
    <input
      name="data2"
      type="text"
      v-model="data2"
      v-validate="`numberThanZero`"
    />
    <br />
    <span class="error">{{ errors.first("data2") }}</span>
  </div>
</template>

<script>
import zhTW from "vee-validate/dist/locale/zh_TW";
import customValidateMessage from "./customValidateMessage";

export default {
  name: "App",
  data() {
    return {
      data1: "",
      data2: "",
    };
  },
  mounted() {
    this.$validator.localize("zh", zhTW);
    this.$validator.localize("zh", customValidateMessage.locale);
  },
};
</script>

<style>
.error {
  color: red;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
