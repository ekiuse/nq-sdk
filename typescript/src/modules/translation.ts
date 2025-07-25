import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TranslationsListRequestParams,
    TranslationsListResponseData,
    TranslationsViewResponseData,
    TranslationsAddRequestData,
    TranslationsAddResponseData,
    TranslationsEditRequestData,
    TranslationsEditResponseData,
    TranslationsPartialEditRequestData,
    TranslationsPartialEditResponseData,
    TranslationsViewRequestParams,
    AyahsTranslationListRequestParams,
    AyahsTranslationListResponseData,
    AyahsTranslationAddRequestData,
    TranslationImportResponseData,
    TranslationImportRequestData,
    
} from "../types/translations";

export class ControllerTranslations extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /translations/ */
    async list(
        config?: RequestConfig<TranslationsListRequestParams>
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations/`, config);
    }

    /** GET /translations/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig<TranslationsViewRequestParams>
    ): Promise<AxiosResponse<TranslationsViewResponseData>> {
        return await this.axiosGet(`/translations/${uuid}/`, config);
    }

    /** POST /translations/ */
    async add(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsAddResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }

    /** PUT /translations/{uuid}/ */
    async edit(
        uuid: string,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsEditResponseData>> {
        return await this.axiosPut(`/translations/${uuid}/`, data, config);
    }

    /** PATCH /translations/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: TranslationsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsPartialEditResponseData>> {
        return await this.axiosPatch(`/translations/${uuid}/`, data, config);
    }

    /** DELETE /translations/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${uuid}/`, config);
    }
    // ===== Ayahs Translation =====

    /** GET /ayahs/translation/ */
    async listTranslations(
        config?: RequestConfig<AyahsTranslationListRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationListResponseData>> {
        return this.axiosGet(`/ayahs/translation/`, config);
    }

    /** POST /ayahs/translation/ */
    async addTranslation(
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse> {
        return this.axiosPost(`/ayahs/translation/`, data, config);
    }

    /** DELETE /ayahs/translation/{uuid}/ */
    async deleteTranslation(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/translation/${uuid}/`, config);
    }

    /** POST /translations/import/ */
    async import (
        data: TranslationImportRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationImportResponseData>> {
        const formData = new FormData();
        formData.append("file", data.file);

        const importConfig = {
            ...config,
            headers: {
                ...(config?.headers || {}),
                "Content-Type": "multipart/form-data",
            },
        };
        return this.axiosPost(`/translations/import/`, formData, importConfig);
    }
}

