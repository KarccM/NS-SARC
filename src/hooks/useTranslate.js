// import * as translations from "../Data/translations"

// export default function useTranslation() {
//   const [language, setLanguage] = useLocalStorage("language", "arabic")
//   const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
//     "fallbackLanguage",
//     "en"
//   )

//   const translate = key => {
//     const keys = key.split(".")

//     return (
//       getNestedTranslation(language, keys) ??
//       getNestedTranslation(fallbackLanguage, keys) ??
//       key
//     )
//   }

//   return {
//     language,
//     setLanguage,
//     fallbackLanguage,
//     setFallbackLanguage,
//     t: translate,
//   }
// }

// function getNestedTranslation(language, keys) {
//   return keys.reduce((obj, key) => {
//     return obj?.[key]
//   }, translations[language])
// }