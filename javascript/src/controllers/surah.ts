import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../interfaces/utils/utils.js";
import {
    SurahListRequestParameters,
    SurahListResponseData,
    SurahViewRequestParameters,
    SurahViewrequestBody,
    SurahViewResponseData,
} from "../interfaces/surah.js";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig<SurahListRequestParameters>
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig<SurahViewRequestParameters>
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return this.conn.axios.get(`/surah/${target}`, config);
    }

    add(
        data: SurahViewrequestBody,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah`, data, config);
    }

    edit(
        target: UUID,
        data: SurahViewrequestBody,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah/${target}`, data, config);
    }

    delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/surah/${target}`, config);
    }
}
