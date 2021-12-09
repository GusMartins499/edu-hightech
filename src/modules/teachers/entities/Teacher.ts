import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Teacher };
