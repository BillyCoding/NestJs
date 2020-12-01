import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
// @Unique('UQ_NAMES', ['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: new Date() })
  birtday: Date;
}
