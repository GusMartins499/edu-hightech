import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Classes } from "@modules/classes/entities/Classes";

@Entity("students")
class Student {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  bio: string;

  @Column()
  isDeficiency: boolean;

  @Column()
  typeDeficiency: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Classes)
  @JoinColumn({ name: "class_id" })
  class: Classes;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Student };
