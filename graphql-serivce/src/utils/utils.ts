import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
export class BaseAPI extends RESTDataSource {
  url: string;
  constructor(url: string) {
    super();
    this.url = url;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
}
