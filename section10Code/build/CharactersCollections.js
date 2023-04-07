"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
class CharactersCollections {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
}
exports.CharactersCollections = CharactersCollections;
