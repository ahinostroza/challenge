import { ItemUpdater } from "./item-updater";

export class Default extends ItemUpdater {
    updateQuality(): void {
        if(this.item.quality > 0) this.decreaseQuality()
        this.decreaseQuality()
        this.decreaseSellIn()
        if(this.item.sellIn < 0) {
            if(this.item.quality > 0) this.decreaseQuality()
        }
    }
}