import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 36 })
  uuid: string;

  @Column('date')
  dateCreated: Date;

  @Column('date')
  dateUpdated: Date;

  @Column()
  isActive: boolean;
}
