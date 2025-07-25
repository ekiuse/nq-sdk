import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    SurahsListRequestParams,
    SurahsListResponseData,
    SurahsViewResponseData,
    SurahsAddRequestData,
    SurahsAddResponseData,
    SurahsEditRequestData,
    SurahsEditResponseData,
    SurahsPartialEditRequestData,
    SurahsPartialEditResponseData,
} from "../types/surahs";

export class ControllerSurahs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /surahs/ */
    async list(
        config?: RequestConfig<SurahsListRequestParams>
    ): Promise<AxiosResponse<SurahsListResponseData>> {
        return await this.axiosGet(`/surahs/`, config);
    }

    /** GET /surahs/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahsViewResponseData>> {
        return await this.axiosGet(`/surahs/${uuid}/`, config);
    }

    /** POST /surahs/ */
    async add(
        data: SurahsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahsAddResponseData>> {
        return await this.axiosPost(`/surahs/`, data, config);
    }

    /** PUT /surahs/{uuid}/ */
    async edit(
        uuid: string,
        data: SurahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahsEditResponseData>> {
        return await this.axiosPut(`/surahs/${uuid}/`, data, config);
    }

    /** PATCH /surahs/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: SurahsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahsPartialEditResponseData>> {
        return await this.axiosPatch(`/surahs/${uuid}/`, data, config);
    }

    /** DELETE /surahs/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surahs/${uuid}/`, config);
    }
}
