import { EntityBase } from "../model/entity-base";

export interface IRepositoryBase<T extends EntityBase> {
    create(entity: T): Promise<T>;

    createBatch(entities: Array<T>): Promise<Array<T>>;

    getAll(): Promise<Array<T>>;
}