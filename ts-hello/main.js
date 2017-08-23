"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.LikeComponent(10, true);
like.onClick();
console.log("likes: " + like.likes + ", isSelected: " + like.isSelected);
like.onClick();
console.log("likes: " + like.likes + ", isSelected: " + like.isSelected);
