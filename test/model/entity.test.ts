import { TestCar } from "./testCar";

describe("Entity", () => {
    it("should have id", () => {
        const subaru = new TestCar(1, "Subaru");
        expect(subaru.id).toEqual(1);
        console.log(`${subaru}`);
    });
});