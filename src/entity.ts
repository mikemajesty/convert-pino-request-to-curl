
export namespace Types {
  export type RequestType = {
    id: number | string;
    method: string;
    url: string;
    query: any;
    params: any;
    raw: {
      body: {}
      protocol: string
      _body?: boolean
    };
    headers: any;
    remoteAddress: string;
    remotePort: number;
  }
}
