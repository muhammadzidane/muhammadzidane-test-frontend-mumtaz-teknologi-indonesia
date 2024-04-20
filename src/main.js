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
  AppBaseFormGroup,
} from "@/modules/app/components/base";

// Router
import router from "@/modules/app/router";

// Store

import store from "@/modules/app/store";

// Library
import pinia from "@/plugins/pinia";

// Styles
import "./style.css";
import "../src/assets/css/index.css";

// Setup
createApp(App)
  .use(router)
  .use(pinia)
  .use(store)
  .component("Icon", Icon)
  .component("AppMainLayout", AppMainLayout)
  .component("AppBaseTable", AppBaseTable)
  .component("AppBaseButton", AppBaseButton)
  .component("AppBaseInput", AppBaseInput)
  .component("AppBaseDialog", AppBaseDialog)
  .component("AppBaseBadge", AppBaseBadge)
  .component("AppBasePopover", AppBasePopover)
  .component("AppBaseFormGroup", AppBaseFormGroup)
  .mount("#app");
