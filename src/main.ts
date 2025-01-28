import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import ApiService from "@/core/services/ApiService";
import i18n from "@/core/plugins/i18n";

const app = createApp(App);

ApiService.init(app);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
