import { findIndex, remove } from "lodash";

class Cart {
    constructor() {
        this.items = [];
    }

    add(item) {
        const itemIndex = findIndex(this.items, { product: item.product });

        if (itemIndex > -1) {
            this.items[itemIndex].quantity += item.quantity;
            return;
        }

        this.items.push(item);
    }

    remove(product) {
        remove(this.items, { product });
    }

    getTotal() {
        return this.items.reduce((acc, item) => {
            return acc + item.quantity * item.product.price;
        }, 0);
    }
}

export { Cart };
