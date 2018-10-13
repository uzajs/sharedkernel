import { TestCarRepository } from "./test-car-repository";
import { TestProduct } from "../core/model/test-product";
import { createConnection } from "typeorm";
import * as fs from "fs";

describe("RepositoryBase", () => {

    const dbPath: string = "test/uzatest.sqlite3";
    let repository: TestCarRepository;
    beforeAll(async () => {
        fs.unlink(dbPath, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log("db deleted !");
            }
        );
        const connection = await createConnection({
            logging: true,
            type: "sqlite",
            database: dbPath,
            entities: ["test/core/model/*.ts"],
            synchronize: true
        });
        repository = new TestCarRepository(connection);
        await repository.createBatch(TestProduct.getTestProducts(5));
    });

    test("should create entity", async () => {
        const testProduct = await repository.create(new TestProduct("Mazda"));
        expect(testProduct).not.toBeUndefined();
        console.log(`${testProduct}`);
    });

    test("should create batch entities", async () => {
        const testProducts = await repository.createBatch(TestProduct.getTestProducts(2));
        expect(testProducts.length === 2);
        testProducts.forEach((p: TestProduct) => console.log(`${p}`));
    });

    test("should read  entities", async () => {
        const testProducts = await repository.getAll();
        expect(testProducts.length > 0);
        testProducts.forEach((p: TestProduct) => console.log(`${p}`));
    });
});