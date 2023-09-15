export interface Shloka {
  shloka: number;
  original: string;
  romanised: string;
  translations: {
    hindi: string;
    hindi_translator: string;
    english: string;
    english_translator: string;
  };
}
