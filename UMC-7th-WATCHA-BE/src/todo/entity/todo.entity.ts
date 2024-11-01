import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from '@src/common/entity/base-table.entity';

@Entity()
export class Todo extends BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  checked?: boolean;
}
