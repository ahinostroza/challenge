import { AgeBrie } from "./models/aged-brie";
import { BackstagePass } from "./models/backstage-pass";
import { Default } from "./models/default";
import { Item } from "./models/item";
import { ItemUpdater } from "./models/item-updater";
import { SulfurasHand } from "./models/sulfuras-hand";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items = this.items.map(item => {
            this.getUpdater(item).updateQuality()
            return item
        })

        return this.items
    }

    private getUpdater(item: Item): ItemUpdater {
        switch(item.name) {
            case AGED_BRIE:
                return new AgeBrie(item)
            case BACKSTAGE_PASS:
                return new BackstagePass(item)
            case SULFURAS_HAND:
                return new SulfurasHand(item)
            default:
                return new Default(item)
        }
    }
}