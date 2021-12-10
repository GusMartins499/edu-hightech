import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Student };
