import { AppMainLayout } from "@/modules/app/components/layout";

/**
 * Global components
 * @param app
 */
const GlobalComponent = (app) => {
  app.component("AppMainLayout", AppMainLayout);
  // .component('AppBaseCard', AppBaseCard)
};

export default GlobalComponent;
