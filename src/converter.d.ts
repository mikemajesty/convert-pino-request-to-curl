import { Types } from './entity';

declare module 'convert-pino-request-to-curl' {
  export class PinoRequestConverter {
    /**
   * Converts an Axios error request into a cURL command.
   *
   * @param request - The Axios request object containing the request details.
   * @param anonymizedFields - An array of field names that should be anonymized in the output.
   * @returns A string representing the cURL command equivalent of the request.
   *
   * @example
   * ```typescript
   * import { getCurl } from 'convert-pino-request-to-curl';
   * 
   * const request = {
   *   method: 'POST',
   *   url: 'https://api.example.com/data',
   *   headers: { Authorization: 'Bearer token' },
   *   data: { sensitiveField: 'secretValue' },
   * };
   * 
   * const anonymizedFields = ['Authorization', 'sensitiveField'];
   * 
   * const curlCommand = getCurl(request, anonymizedFields);
   * console.log(curlCommand);
   * ```
   */
    static getCurl(request: Types.RequestType, anonymizedFields: string[]): string;
  }
}