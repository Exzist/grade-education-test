import translateI18 from "@/core/plugins/translatei18";
import LangUtils from "@/assets/ts/utils/LangUtils";
import { Languages } from "@/assets/ts/enums/LangEnum";

export function ReviewCard() {
  const langUtils = new LangUtils();
  const { translate } = translateI18();

  const changeLocale = () => {
    if (langUtils.getCurrentLocale() === Languages.English) {
      langUtils.changeLocale(Languages.Ukrainian);
    } else {
      langUtils.changeLocale(Languages.English);
    }
  };

  return { translate, changeLocale };
}
