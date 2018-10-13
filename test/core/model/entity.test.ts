import { TestProduct } from "./test-product";

describe("BaseEntity", () => {

    let testProducts: Array<TestProduct> = [];

    beforeAll(() => {
        testProducts = TestProduct.getTestProducts(2);
    });

    test("should have id", () => {
        testProducts.forEach(p => expect(p.id).not.toBeUndefined());
        testProducts.forEach(p => console.log(`${p}`));
    });
});