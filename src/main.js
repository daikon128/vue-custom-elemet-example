import Vue from 'vue'
import vueCustomElement from "vue-custom-element";
import CustomButton from "./components/CustomButton.vue";
import DeleteText from "@/components/DeleteText";

Vue.config.productionTip = false

Vue.config.ignoredElements = ["custom-button"];
Vue.config.ignoredElements = ["delete-text"];
Vue.use(vueCustomElement);
Vue.customElement("custom-button", CustomButton, {
  shadow: true,
  shadowCss: `
      button {
        cursor: pointer;
        background: wheat;
        height: 30px;
        width: 120px;
      }
    `,
})
Vue.customElement("delete-text", DeleteText, {
  shadow: true
})
