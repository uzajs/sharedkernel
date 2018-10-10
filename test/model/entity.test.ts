import { TestCar } from "./testCar";
import { Guid } from "guid-typescript";
import { TestProduct } from "./testProduct";

describe("Entity", () => {
    it("should have id", () => {
        const subaru = new TestCar(1, "Subaru");
        const device = new TestProduct( "Alexa");

        expect(subaru.id).toEqual(1);
        expect(device.id).toBeInstanceOf(Guid);

        console.log(`${subaru}`);
        console.log(`${device}`);
    });
});