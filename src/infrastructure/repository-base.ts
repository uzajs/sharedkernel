import "reflect-metadata";
import { EntityBase } from "../core/model/entity-base";
import { Connection } from "typeorm";
import { IRepositoryBase } from "../core/interfaces/irepository-base";

export type ObjectType<T> = { new (): T } | Function;

export abstract class RepositoryBase<T extends EntityBase> implements IRepositoryBase<T> {
    private type: ObjectType<T>;
    connection: Connection;

    constructor(type: ObjectType<T>, connection: Connection) {
        this.type = type;
        this.connection = connection;
    }

    create(entity: T): Promise<T> {
        return this.connection.manager.save(entity);
    }

    createBatch(entities: Array<T>): Promise<Array<T>> {
        return this.connection.manager.save(entities);
    }

    getAll(): Promise<Array<T>> {
        return this.connection.manager.find(this.type);
    }
}