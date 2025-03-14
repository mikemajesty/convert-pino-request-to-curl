import { Types } from "../../../src/entity"

const getDefaultRequest: Types.RequestType = {
  "id": "96832c78-bfcb-46ec-8fe7-858c1d23182b", "method": "GET", "url": "/health", "query": {}, "params": {}, "raw": {
    "_body": false,
    "body": {},
    "protocol": 'http',
  }, "headers": { "host": "[::1]:3000", "connection": "keep-alive", "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"", "accept": "text/plain", "sec-ch-ua-mobile": "?0", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36", "sec-ch-ua-platform": "\"Linux\"", "sec-fetch-site": "same-origin", "sec-fetch-mode": "cors", "sec-fetch-dest": "empty", "referer": "http://[::1]:3000/docs/", "accept-encoding": "gzip, deflate, br", "accept-language": "en-US,en;q=0.9", "traceId": "96832c78-bfcb-46ec-8fe7-858c1d23182b" }, "remoteAddress": "::1", "remotePort": 54048
}

const postDefaultRequest: Types.RequestType = {
  "id": 2, "method": "POST", "url": "/api/login", "query": {}, "params": {}, "raw": {
    "_body": true,
    "body": {
      "login": "admin",
      "password": "senha"
    },
    "protocol": 'http',
  }, "headers": { "accept": "application/json, text/plain, */*", "content-type": "application/json", "user-agent": "axios/0.26.1", "content-length": "32", "host": "[::1]:4000", "connection": "close" }, "remoteAddress": "::1", "remotePort": 36810
}

export {
  getDefaultRequest,
  postDefaultRequest
}