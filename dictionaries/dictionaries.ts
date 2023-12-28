export interface Dictionary {
  [key: string]: string;
}

const dictionaries: { [locale: string]: () => Promise<Dictionary> } = {
  en: () => import("./en.json").then((module) => module.default),
  hu: () => import("./hu.json").then((module) => module.default),
};

// Define the type for 'locale' parameter
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]();
};
