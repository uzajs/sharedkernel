import { IRepository } from "../interfaces/irepository";
import { Entity } from "../model/entity";


export abstract class BaseRepository<T extends Entity<TId>, TId> implements IRepository<T, TId> {

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
}