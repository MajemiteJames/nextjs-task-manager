import { Task } from '../tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['Home_Owner', 'financial_institute', 'SME'],
  })
  account: string;

  @Column({
    default: 'Pending',
  })
  status: string;

  @Column({ nullable: true })
  masterID: string;

  @Column({
    default: false,
  })
  isSubUser: boolean;

  @Column({
    default: false,
  })
  isAdmin: boolean;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
