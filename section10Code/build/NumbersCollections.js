"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
class NumbersCollections {
    constructor(data) {
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}
exports.NumbersCollections = NumbersCollections;