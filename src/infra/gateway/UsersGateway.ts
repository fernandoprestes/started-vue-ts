/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface UsersGateway {
  getSingleUser(id: number): Promise<any>;
}
