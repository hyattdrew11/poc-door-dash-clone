import { BaseMixin } from './baseMixin';

export interface Review extends BaseMixin {
  user: number | string;
  // ENUM(RESTAURANT, DISH)
  type: string;
  images: File[];
  videos: File[];
  text: string;
  restaurant: number | string;
  dish: number | string;

}
