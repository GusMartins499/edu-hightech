import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Student } from "@modules/students/entities/Student";
import { Teacher } from "@modules/teachers/entities/Teacher";

@Entity("classes")
class Classes {
  @PrimaryColumn()
  id: string;

  @Column()
  teacher_id: string;

  @Column()
  student_id: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Teacher)
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;

  @OneToOne(() => Student)
  @JoinColumn({ name: "student_id" })
  student: Student;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Classes };
