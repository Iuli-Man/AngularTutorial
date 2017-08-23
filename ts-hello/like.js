"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = (function () {
    function LikeComponent(_likes, _isSelected) {
        this._likes = _likes;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._likes += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
