import { BaseMixin } from './baseMixin';
import { Dish } from './dish';

export interface Order extends BaseMixin {
  status: string;
  dishes: Dish[];
  dateScheduled: string;
  user: number | string;
  restaurant: number | string;
}
