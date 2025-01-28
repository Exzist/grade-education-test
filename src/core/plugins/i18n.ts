import { createI18n } from "vue-i18n";
import ua from "@/core/plugins/lang/ua/index";
import en from "@/core/plugins/lang/en/index";
import { Languages } from "@/assets/ts/enums/LangEnum";

const messages = {
  ua: ua,
  en: en,
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || Languages.Ukrainian,
  globalInjection: true,
  messages,
});

export default i18n;
