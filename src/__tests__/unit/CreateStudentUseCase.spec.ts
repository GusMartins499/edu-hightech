import { AppError } from "@erros/AppError";
import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { StudentsRepositoryInMemory } from "@modules/students/repositories/in-memory/StudentsRepositoryInMemory";
import { CreateStudentUseCase } from "@modules/students/useCases/createStudent/CreateStudentUseCase";

let createStudentUseCase: CreateStudentUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe("Create Student", () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentsRepositoryInMemory);
  });

  it("Should not be able to create a new student with same email", () => {
    expect(async () => {
      const student_one: ICreateStudentDTO = {
        name: "Student One",
        email: "student_one@example.com",
        password: "1234",
        bio: "I'm a student One",
        isDeficiency: false,
        typeDeficiency: null,
      };

      await createStudentUseCase.execute(student_one);
      await createStudentUseCase.execute(student_one);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create a new student without deficiency", async () => {
    const student: ICreateStudentDTO = {
      name: "Student One",
      email: "student@example.com",
      password: "1234",
      bio: "I'm a student One",
      isDeficiency: false,
      typeDeficiency: null,
    };

    await createStudentUseCase.execute(student);

    const isCreatedStudent = await studentsRepositoryInMemory.findByEmail(
      student.email
    );

    expect(isCreatedStudent).toHaveProperty("id");
  });

  it("Should be able to create a new student with deficiency", async () => {
    const student: ICreateStudentDTO = {
      name: "Student One",
      email: "student@example.com",
      password: "1234",
      bio: "I'm a student One",
      isDeficiency: true,
      typeDeficiency: "hearing",
    };

    await createStudentUseCase.execute(student);

    const isCreatedStudent = await studentsRepositoryInMemory.findByEmail(
      student.email
    );

    expect(isCreatedStudent).toHaveProperty("id");
  });

  it("Should not be able to create a new student with deficiency without type of deficiency", () => {
    expect(async () => {
      const student: ICreateStudentDTO = {
        name: "Student One",
        email: "student@example.com",
        password: "1234",
        bio: "I'm a student One",
        isDeficiency: true,
      };

      await createStudentUseCase.execute(student);
    }).rejects.toBeInstanceOf(AppError);
  });
});
