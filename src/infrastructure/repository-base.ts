import { EntityBase } from "../core/model/entity-base";
import { Connection, getManager } from "typeorm";
import { IRepositoryBase } from "../core/interfaces/irepository-base";

export abstract class RepositoryBase<T extends EntityBase> implements IRepositoryBase<T> {
    connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    create(entity: T): Promise<T> {
        return this.connection.manager.save(entity);
    }

    createBatch(entities: Array<T>): Promise<Array<T>> {
        return this.connection.manager.save(entities);
    }
}