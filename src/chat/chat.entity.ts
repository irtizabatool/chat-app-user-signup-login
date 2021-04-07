import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.sent)
  sender: User;

  @ManyToOne(() => User, (user) => user.received)
  receiver: User;

  @Column()
  message: string;

  @CreateDateColumn()
  date: string;
}
