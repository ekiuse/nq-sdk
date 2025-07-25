import { FilterQueryParams, Status } from "../utils/globalTypes";

//Translations
interface TranslationsDefaultRequestData {
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
interface TranslationsDefaultResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}

//Translations List
export interface TranslationsListRequestParams extends FilterQueryParams {
    language?: string;
    mushaf_uuid: string;
}
export type TranslationsListResponseItem = TranslationsDefaultResponseData;
export type TranslationsListResponseData = TranslationsListResponseItem[];

//Translations View
export interface TranslationsViewRequestParams extends FilterQueryParams {
    surah_uuid?: string; 
}
export interface TranslationsViewAyah {
    uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}
export interface TranslationsViewResponseData
    extends TranslationsDefaultResponseData {
    ayahs: TranslationsViewAyah[];
}

//Translations Add
export type TranslationsAddRequestData = TranslationsDefaultRequestData;
export type TranslationsAddResponseData = TranslationsDefaultResponseData;

//Translations Edit
export type TranslationsEditRequestData = TranslationsDefaultRequestData;
export type TranslationsEditResponseData = TranslationsDefaultResponseData;

//Translations PartialEdit
export type TranslationsPartialEditRequestData = TranslationsDefaultRequestData;
export type TranslationsPartialEditResponseData =
    Partial<TranslationsDefaultResponseData>;

// AyahsTranslation 
interface AyahsTranslationDefaultResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
  }
  
  // AyahsTranslation List 
  export interface AyahsTranslationListRequestParams {
    translation_uuid?: string;
    ayah_uuid?: string;
    surah_uuid?: string;
  }
  
  export type AyahsTranslationListResponseItem = AyahsTranslationDefaultResponseData;
  export type AyahsTranslationListResponseData = AyahsTranslationListResponseItem[];
  
  // AyahsTranslation Add
  export interface AyahsTranslationAddRequestData {
    translation_uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
  }

  // Translation Import
  export interface TranslationImportRequestData {
    file: File;
  }
  export type TranslationImportResponseData = TranslationsDefaultResponseData;

