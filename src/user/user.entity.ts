import { Chat } from 'src/chat/chat.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  contact: string;

  @OneToMany(() => Chat, (sent) => sent.sender)
  sent: Chat[];

  @OneToMany(() => Chat, (received) => received.receiver)
  received: Chat[];

  @CreateDateColumn()
  createdAt: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
