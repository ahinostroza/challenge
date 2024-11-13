import { ItemUpdater } from "./item-updater";

export class AgeBrie extends ItemUpdater {
    updateQuality(): void {
        this.increaseQuality()
        this.decreaseSellIn()
        if (this.item.sellIn < 0) {
            this.increaseQuality()
        }
    }
}