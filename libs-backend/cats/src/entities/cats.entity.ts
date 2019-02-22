import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 500 })
  breed: string;
}
