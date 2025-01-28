import { useI18n, type Composer } from "vue-i18n";

export default class LangUtils {
  private _i18n: Composer;

  constructor(i18n = useI18n()) {
    this._i18n = i18n;
  }

  public changeLocale(lang: string) {
    localStorage.setItem("lang", lang);
    this._i18n.locale.value = "lang";
    window.location.reload();
  }

  public getCurrentLocale() {
    return this._i18n.locale.value;
  }
}
