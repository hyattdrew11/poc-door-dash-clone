import { BaseMixin } from './baseMixin';

export interface File extends BaseMixin {
  path: string;
  size: number;
  extension: string;
  bucket: string;
  name: string;
  url: string;
}
