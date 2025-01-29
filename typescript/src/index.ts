// Types
export { type LangCodeType } from "./utils/langCode";

// Interfaces
export {
    type AccountSendCodeRequestData,
    type AccountVerifyRequestData,
} from "./types/account";
export {
    type MushafListResponseItem,
    type MushafListResponseData,
    type MushafViewResponseData,
    type MushafAddRequestData,
} from "./types/mushaf";
export {
    type SurahListRequestParams,
    type SurahListResponseItem,
    type SurahListResponseData,
    type SurahViewRequestParams,
    type SurahViewResponseAyah,
    type SurahViewResponseData,
    type SurahAddRequestData,
} from "./types/surah";
export {
    type AyahListRequestParams,
    type AyahListResponseItem,
    type AyahListResponseData,
    type AyahViewResponseData,
    type AyahAddRequestData,
} from "./types/ayah";
export {
    type TranslationListRequestParams,
    type TranslationListResponseItem,
    type TranslationListResponseData,
    type TranslationViewRequestParams,
    type TranslationViewResponseAyah,
    type TranslationViewResponseData,
} from "./types/translation";
export {
    type TranslationTextViewRequestParams,
    type TranslationTextViewResponseData,
    type TranslationTextModifyRequestData,
} from "./types/translation";
export {
    type PhraseListResponseData,
    type PhraseViewResponseData,
    type PhraseAddRequestData,
} from "./types/phrase";
export {
    type WordViewResponseData,
    type WordAddRequestData,
} from "./types/word";
export {
    type PermissionListResponseData,
    type PermissionViewResponseData,
    type PermissionAddRequestData,
} from "./types/permission";

// Controllers
export { Connection } from "./client/connection";
export { ControllerAccount } from "./modules/account";
export { ControllerUser } from "./modules/user";
export { ControllerOrganization } from "./modules/organization";
export { ControllerPermission } from "./modules/permission";
export { ControllerMushaf } from "./modules/mushaf";
export { ControllerSurah } from "./modules/surah";
export { ControllerAyah } from "./modules/ayah";
export { ControllerWord } from "./modules/word";
export { ControllerTranslation } from "./modules/translation";
export { ControllerPhrase } from "./modules/phrese";
export { ControllerProfile } from "./modules/profile";

//Functions
export { getLangNameFromCode } from "./utils/langCode";
