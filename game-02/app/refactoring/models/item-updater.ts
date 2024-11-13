import { Item } from "./item";

export abstract class ItemUpdater {
    constructor(protected item: Item) {}

    abstract updateQuality(): void;

    protected increaseQuality() {
        if (this.item.quality < 50) {
            this.item.quality += 1;
        }
    }

    protected decreaseQuality() {
        if (this.item.quality > 0) {
            this.item.quality -= 1;
        }
    }

    protected decreaseSellIn() {
        this.item.sellIn -= 1;
    }

    protected resetQuality() {
        this.item.quality = 0;
    }
}