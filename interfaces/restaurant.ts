import { BaseMixin } from './baseMixin';
import { Review } from './review';
import { Dish } from './dish';

export interface Restaurant extends BaseMixin {
  name: string;
  reviews: Review[];
  dishes: Dish[];
}
