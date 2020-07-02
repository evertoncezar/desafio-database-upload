import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column()
  value: number;

  // Criar relacionamento com a tabela de Categorias
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category_id: string;

  @ManyToOne(() => Category, category => category.transaction, { eager: true }) // funcionalidade de eager loading, para trazer os dados dos relacionamentos no modelo
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
