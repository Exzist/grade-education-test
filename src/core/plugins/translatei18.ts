import i18n from "@/core/plugins/i18n";

export default function translateI18() {
  const translate = (key: string, params?: any): string => {
    if (!key) {
      return "";
    }
    if (i18n.global.t(key)) {
      return i18n.global.t(key, params);
    } else {
      return key;
    }
  };

  return {
    translate,
  };
}
