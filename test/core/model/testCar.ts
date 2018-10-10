import { Entity } from "../../../src/core/model/entity";

export class TestCar extends Entity<number> {
    name: string;

    constructor(id: number, name: string) {
        super();
        this.id = id;
        this.name = name;
    }

    toString(): string {
        return `${this.name} [${this.id}]`;
    }
}