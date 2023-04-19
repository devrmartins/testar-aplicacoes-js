import { Cart } from "./cart";

describe("Cart", () => {
    let cart;
    let product = {
        title: "Adidas running shoes - men",
        price: 39990,
    };
    let product2 = {
        title: "Nike air shoes - men",
        price: 75999,
    };

    beforeEach(() => {
        cart = new Cart();
    });

    it("should return 0 when getTotal() is executed in a newly created instace", () => {
        expect(cart.getTotal()).toEqual(0);
    });

    it("should multiply quantity and price and receive the total amount", () => {
        const item = {
            product: {
                title: "Adidas running shoes - men",
                price: 39990,
            },
            quantity: 2,
        };

        cart.add(item);

        expect(cart.getTotal()).toEqual(79980);
    });

    it("should ensure no more then on product exists at a time", () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product,
            quantity: 1,
        });

        expect(cart.getTotal()).toEqual(119970);
    });

    it("should update total value when a product is removed", () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product: product2,
            quantity: 3,
        });

        cart.remove(product);

        expect(cart.getTotal()).toEqual(227997);
    });

    
});
