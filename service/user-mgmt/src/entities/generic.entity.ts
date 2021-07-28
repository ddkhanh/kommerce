
import {PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class DBEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @VersionColumn()
    version: number;

}