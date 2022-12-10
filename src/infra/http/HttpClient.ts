/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface HttpClient {
  get(url: string): Promise<any>;
}
