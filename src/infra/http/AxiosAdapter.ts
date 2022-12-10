/* eslint-disable @typescript-eslint/no-explicit-any */
import type HttpClient from './HttpClient';
import axios from 'axios';

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const httpConfig = { method: 'get' };
    return await this.axiosConfig(url, httpConfig);
  }

  private async axiosConfig(url: string, httpConfig: any): Promise<any> {
    try {
      const config = {
        ...httpConfig,
      };
      const response = await axios(`https://dummyjson.com/${url}`, config);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
}
