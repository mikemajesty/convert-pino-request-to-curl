import { Types } from './entity';

declare module 'convert-pino-request-to-curl' {
  export function getCurl(request: Types.RequestType, anonymizedFields: string[]): string;
}