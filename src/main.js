// Vue
import { createApp } from "vue";
import App from "./App.vue";

// Icon
import { Icon } from "@iconify/vue";

// Components
import { AppMainLayout } from "@/modules/app/components/layout";
import {
  AppBaseTable,
  AppBaseButton,
  AppBaseDialog,
  AppBaseInput,
  AppBaseBadge,
  AppBasePopover,
} from "@/modules/app/components/base";

// Router
import router from "@/modules/app/router";

// Library
import pinia from "@/plugins/pinia";

// Styles
import "./style.css";
import "../src/assets/css/index.css";

// Setup
createApp(App)
  .use(router)
  .use(pinia)
  .component("Icon", Icon)
  .component("AppMainLayout", AppMainLayout)
  .component("AppBaseTable", AppBaseTable)
  .component("AppBaseButton", AppBaseButton)
  .component("AppBaseInput", AppBaseInput)
  .component("AppBaseDialog", AppBaseDialog)
  .component("AppBaseBadge", AppBaseBadge)
  .component("AppBasePopover", AppBasePopover)
  .mount("#app");
