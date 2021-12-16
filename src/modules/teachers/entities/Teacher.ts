import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 } from "uuid";

import { Classes } from "@modules/classes/entities/Classes";

@Entity("teachers")
class Teacher {
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
  techs: string;

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

export { Teacher };
