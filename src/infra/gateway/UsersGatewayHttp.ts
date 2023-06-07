/* eslint-disable @typescript-eslint/no-explicit-any */
import type AvatarGateway from './UsersGateway';
import type HttpClient from '../http/HttpClient';
import User from '~/@types/User';

export default class AvatarGatewayHttp implements AvatarGateway {
	constructor(readonly httpClient: HttpClient) {}
	async getSingleUser(id: number): Promise<User> {
		const userResponse = await this.httpClient.get(`users/${id}`);
		return userResponse;
	}
}
