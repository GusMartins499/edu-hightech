import { AppError } from "@erros/AppError";
import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { StudentsRepositoryInMemory } from "@modules/students/repositories/in-memory/StudentsRepositoryInMemory";
import { AuthenticateStudentUseCase } from "@modules/students/useCases/authenticateStudent/AuthenticateStudentUseCase";
import { CreateStudentUseCase } from "@modules/students/useCases/createStudent/CreateStudentUseCase";

let authenticateStudentUseCase: AuthenticateStudentUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;

describe("Authenticate Student", () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    authenticateStudentUseCase = new AuthenticateStudentUseCase(
      studentsRepositoryInMemory
    );
    createStudentUseCase = new CreateStudentUseCase(studentsRepositoryInMemory);
  });

  it("Should be able to authenticate a student", async () => {
    const student: ICreateStudentDTO = {
      name: "Student One",
      email: "student_one@example.com",
      password: "1234",
      bio: "I'm a student One",
      isDeficiency: false,
      typeDeficiency: null,
    };

    await createStudentUseCase.execute(student);

    const responseToken = await authenticateStudentUseCase.execute({
      email: student.email,
      password: student.password,
    });
    expect(responseToken).toHaveProperty("token");
  });

  it("Should be not be able to authenticate a non-existent student", () => {
    expect(async () => {
      await authenticateStudentUseCase.execute({
        email: "non-existent-student@gmail.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a student with invalid password", () => {
    expect(async () => {
      const student: ICreateStudentDTO = {
        name: "Student One",
        email: "student_one@example.com",
        password: "1234",
        bio: "I'm a student One",
        isDeficiency: false,
        typeDeficiency: null,
      };

      await authenticateStudentUseCase.execute({
        email: student.email,
        password: "password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a teacher with invalid e-mail", () => {
    expect(async () => {
      const student: ICreateStudentDTO = {
        name: "Student One",
        email: "student_one@example.com",
        password: "1234",
        bio: "I'm a student One",
        isDeficiency: false,
        typeDeficiency: null,
      };

      await authenticateStudentUseCase.execute({
        email: "anothermail@example.com",
        password: student.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
