import 'server-only'

const dictionaries = {
  en: () => import('../locales/en.json').then(module => module.default),
  pt: () => import('../locales/pt.json').then(module => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()