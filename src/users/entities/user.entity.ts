import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'users',
})

export class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })

    declare id: number;
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })

    name: string;
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })

    email: string;
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })

    password: string;
    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })

    accountNumber: string;
    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })

    balance: number;
}