/* eslint-disable @typescript-eslint/no-explicit-any */
import type HttpClient from '../http/HttpClient';
import type AvatarGateway from './UsersGateway';

export default class AvatarGatewayHttp implements AvatarGateway {
  constructor(readonly httpClient: HttpClient) {}
  async getSingleUser(id: number): Promise<any> {
    const userResponse = await this.httpClient.get(`users/${id}`);
    return userResponse;
  }
}
