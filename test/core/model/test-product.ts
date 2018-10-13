import { EntityBase } from "../../../src/core/model/entity-base";
import { Column, Entity } from "typeorm";
import * as faker from "faker";

@Entity()
export class TestProduct extends EntityBase {
    @Column()
    name: string;

    constructor(name?: string) {
        super();
        if (name) {
            this.name = name;
        }
    }

    static getTestProducts(count: number = 2): Array<TestProduct> {
        let i: number;
        const products: Array<TestProduct> = [];
        for (i = 0; i < count; i++) {
            products.push(new TestProduct(faker.commerce.productName()));
        }
        return products;
    }

    toString(): string {
        return `${this.name} [${this.id}]`;
    }
}

