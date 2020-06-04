import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // order: Order;

  // product: Product;

  // @Column()
  // product_id: string;

  // @Column()
  // order_id: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column()
  created_at: Date;

  updated_at: Date;
}

export default OrdersProducts;
