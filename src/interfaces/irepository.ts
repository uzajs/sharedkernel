import { Entity } from "../model/entity";

export interface IRepository<T extends Entity<TId>, TId> {
    getAll(): Array<T>;
}