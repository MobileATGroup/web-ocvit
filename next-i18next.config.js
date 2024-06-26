module.exports = {
  i18n: {
    locales: ["en-US", "zh-HK", "cn-HK"],
    defaultLocale: "en-US",
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
}
