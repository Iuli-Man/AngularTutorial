import { LikeComponent } from './like';
let like = new LikeComponent(10, true);
like.onClick();
console.log(`likes: ${like.likes}, isSelected: ${like.isSelected}`);
like.onClick();
console.log(`likes: ${like.likes}, isSelected: ${like.isSelected}`);