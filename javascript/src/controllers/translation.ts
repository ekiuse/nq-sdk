import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../interfaces/utils/utils.js";
import {
    TranslationListRequestParameters,
    TranslationListResponseData,
    TranslationTextModifyrequestBody,
    TranslationTextViewRequestParameters,
    TranslationTextViewResponseData,
    TranslationViewRequestParameters,
    TranslationAddrequestBody,
    TranslationViewResponseData,
} from "../interfaces/translation.js";

export class ControllerTranslation {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig<TranslationListRequestParameters>
    ): Promise<AxiosResponse<TranslationListResponseData>> {
        return this.conn.axios.get(`/translation`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig<TranslationViewRequestParameters>
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return this.conn.axios.get(`/translation/${target}`, config);
    }

    add(
        data: TranslationAddrequestBody,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation`, data, config);
    }

    edit(
        target: UUID,
        data: TranslationAddrequestBody,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation/${target}`, data, config);
    }

    delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/translation/${target}`, config);
    }

    /**
     * @description `/translation/text`
     */
    text() {
        return new ActionText(this.conn);
    }
}

class ActionText {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    view(
        target: string,
        config: RequestConfig<TranslationTextViewRequestParameters>
    ): Promise<AxiosResponse<TranslationTextViewResponseData>> {
        return this.conn.axios.get(`/translation/text/${target}`, config);
    }

    modify(
        target: string,
        data: TranslationTextModifyrequestBody,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(
            `/translation/text/${target}`,
            data,
            config
        );
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/translation/text/${target}`, config);
    }
}
