import { BaseMixin } from './baseMixin';
import { Review } from './review';

export interface Dish extends BaseMixin {
  name: string;
  price: number;
  reviews: Review[];
  restaurant: number | string;
}
