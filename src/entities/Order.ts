import { Column, CreateDateColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { OrderStatus } from '../enums/OrderStatus';
import { Product } from './Product';

class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    address: string;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    moment: Date;
    @Column() 
    status: OrderStatus;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];

}

export { Order };