import { BaseMixin } from './baseMixin';
export interface Review extends BaseMixin {
    user: number | string;
    images: File[];
    videos: File[];
    text: string;
    restaurant: number | string;
    dish: number | string;
}
