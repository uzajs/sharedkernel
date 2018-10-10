import { Entity } from "../../src/model/entity";
import { Guid } from "guid-typescript";

export class TestProduct extends Entity<Guid> {
    name: string;

    constructor(name: string) {
        super();
        this.id = Guid.create();
        this.name = name;
    }

    toString(): string {
        return `${this.name} [${this.id}]`;
    }
}