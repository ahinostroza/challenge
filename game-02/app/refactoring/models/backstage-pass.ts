import { ItemUpdater } from "./item-updater";

export class BackstagePass extends ItemUpdater {
    updateQuality(): void {
        this.increaseQuality()
        if (this.item.sellIn < 11) {
            this.increaseQuality();
        }
        if (this.item.sellIn < 6) {
            this.increaseQuality();
        }
        this.decreaseSellIn();
        if (this.item.sellIn < 0) {
            this.resetQuality();
        }
    }
}