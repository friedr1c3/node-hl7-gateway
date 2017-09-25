import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Interface {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    port: number;

    @Column()
    enabled: boolean;

    @Column()
    created_at: Date;
}