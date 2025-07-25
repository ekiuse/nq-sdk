import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    MushafsListResponseData,
    MushafsViewResponseData,
    MushasfAddRequestData,
    MushafAddResponseData,
    MushafsEditRequestData,
    MushafEditResponseData,
    MushafsPartialEditRequestData,
    MushafsPartialEditResponseData,
    MushafImportRequestData,
    MushafImportResponseData,
    MushafAyahMapResponseData,
    MushafAyahMapRequestParams,
    MushafImportBreakersRequestParams,
    MushafImportBreakersRequestData,
} from "../types/mushafs";

export class ControllerMushafs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /mushafs/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafsListResponseData>> {
        return await this.axiosGet(`/mushafs/`, config);
    }

    /** GET /mushafs/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafsViewResponseData>> {
        return await this.axiosGet(`/mushafs/${uuid}/`, config);
    }

    /** POST /mushafs/ */
    async add(
        data: MushasfAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafAddResponseData>> {
        return await this.axiosPost(`/mushafs/`, data, config);
    }

    /** PUT /mushafs/{uuid}/ */
    async edit(
        uuid: string,
        data: MushafsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafEditResponseData>> {
        return await this.axiosPut(`/mushafs/${uuid}/`, data, config);
    }

    /** PATCH /mushafs/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: MushafsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafsPartialEditResponseData>> {
        return await this.axiosPatch(`/mushafs/${uuid}/`, data, config);
    }

    /** DELETE /mushafs/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/mushafs/${uuid}/`, config);
    }

    /** POST /mushafs/import/ */
  async import (
    data: MushafImportRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<MushafImportResponseData>> {
    const formData = new FormData();
    formData.append("file", data.file);

    const importConfig = {
      ...config,
      headers: {
        ...(config?.headers || {}),
        "Content-Type": "multipart/form-data",
      },
    };

    return await this.axiosPost(`/mushafs/import/`, formData, importConfig);
  }
    /** POST /mushafs/import_breakers/{mushaf_uuid}/?type=page */
    async importBreakers(
        params: MushafImportBreakersRequestParams,
        data: MushafImportBreakersRequestData,
        config?: RequestConfig
      ): Promise<AxiosResponse> {
        const formData = new FormData();
        formData.append("file", data.file);
    
        const query = params.type ? `?type=${params.type}` : "";
        const url = `/mushafs/import_breakers/${params.mushaf_uuid}/${query}`;
    
        const importConfig = {
          ...config,
          headers: {
            ...(config?.headers || {}),
            "Content-Type": "multipart/form-data",
          },
        };
    
        return await this.axiosPost(url, formData, importConfig);
      }
    
      /** GET /mushafs/map/{mushaf_uuid}/ */
      async getAyahMap(
        params: MushafAyahMapRequestParams,
        config?: RequestConfig
      ): Promise<AxiosResponse<MushafAyahMapResponseData>> {
        return await this.axiosGet(`/mushafs/map/${params.mushaf_uuid}/`, config);
      } 
}

