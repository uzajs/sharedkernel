import { TestCarRepository } from "./test-car.repository";
import { TestCar } from "../model/testCar";

describe("BaseRepository", () => {
    const rep = new TestCarRepository();
    rep.create(new TestCar(11, "Nissan"));

    it("should find item", () => {
        const car = rep.get(11);
        expect(car).not.toBeNull();
        console.log(`${car}`);
    });

    it("should load item list", () => {
        const cars = rep.getAll();
        expect(cars.length > 0);
        cars.forEach(x => console.log(`${x}`));
    });

    it("should add item", () => {
        rep.create(new TestCar(22, "Isuzu"));
        const cars = rep.getAll();
        expect(cars.length === 2);
        cars.forEach(x => console.log(`${x}`));
    });

    it("should remove item", () => {
        rep.remove(11);
        const deletedCar = rep.get(11);
        expect(deletedCar).toBeUndefined();
    });
});