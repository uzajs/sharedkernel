import { IRepository } from "../interfaces/irepository";
import { Entity } from "../model/entity";
import Sequelize from "sequelize";

export abstract class BaseRepository<T extends Entity<TId>, TId> implements IRepository<T, TId> {


    db = "expressapp";
    username = "root";
    password = "root";
    entities: Array<T>;

    connection = new Sequelize(this.db, this.username, this.password, {
        dialect: "sqlite",
        storage: "uza.sqlite",
        operatorsAliases: false
    });

    constructor() {
        this.connnectDb();
        this.entities = [];
    }

    get(id: TId): T {
        return this.entities.filter(x => x.id === id)[0];
    }

    getAll(): Array<T> {
        return this.entities;
    }

    create(entity: T): void {
        this.entities.push(entity);
    }

    remove(id: TId): void {
        const e = this.entities.find(x => x.id === id);
        if (e) {
            this.entities.splice(this.entities.indexOf(e), 1);
        }
    }

    connnectDb(): void {
        this.connection.authenticate().then(() => {
            console.log("connection successful");
        }).catch(reason => {
            console.error("Connection FAILED", reason);
        });
    }
}