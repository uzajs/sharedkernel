import { Entity } from "../model/entity";

export interface IRepository<T extends Entity<TId>, TId> {
    get(id: TId): T;

    getAll(): Array<T>;

    create(entity: T): void;

    remove(id: TId): void;
}