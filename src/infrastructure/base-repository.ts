import { IRepository } from "../interfaces/irepository";
import { Entity } from "../model/entity";
import * as r from "rethinkdb";
import { Connection } from "rethinkdb";


export abstract class BaseRepository<T extends Entity<TId>, TId> implements IRepository<T, TId> {

    connection: Connection;
    entities: Array<T>;

    constructor() {
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
        r.connect({host: "127.0.0.1", port: 28015}, (err, conn) => {
            if (err) throw err;
            this.connection = conn;
        });
    }
}