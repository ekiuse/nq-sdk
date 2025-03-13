import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig } from "../utils/globalTypes";

export class BaseController {
    protected conn: Connection;
    protected token: string | undefined;

    constructor(connection: Connection, auth_token?: string) {
        this.conn = connection;
        this.token = auth_token;
        if (auth_token) {
            this.setAuthToken(auth_token);
        }
    }

    private setAuthToken(token: string) {
        this.token = token;
    }

    // Helper method to add token to the request config if available
    protected getAuthConfig<P>(config?: RequestConfig<P>): RequestConfig<P> {
        if (this.token) {
            return {
                ...config,
                headers: {
                    ...config?.headers,
                    Authorization: this.token, // Add token to Authorization header
                },
            };
        }
        return config || {}; // Return empty config if no token is available
    }

    // Optionally, you can have methods for making common requests like GET, POST, etc.
    protected axiosGet<T, P>(
        url: string,
        config?: RequestConfig<P>
    ): Promise<T> {
        return this.conn.axios
            .get(url, this.getAuthConfig(config))
            .then((res) => res.data);
    }

    protected axiosPost<T>(
        url: string,
        data: any,
        config?: RequestConfig
    ): Promise<T> {
        return this.conn.axios
            .post(url, data, this.getAuthConfig(config))
            .then((res) => res.data);
    }

    protected axiosDelete<T>(url: string, config?: RequestConfig): Promise<T> {
        return this.conn.axios
            .delete(url, this.getAuthConfig(config))
            .then((res) => res.data);
    }
}
