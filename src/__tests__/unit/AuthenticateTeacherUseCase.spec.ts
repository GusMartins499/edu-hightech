import { AppError } from "@erros/AppError";
import { ICreateTeacherDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { TeachersRepositoryInMemory } from "@modules/teachers/repositories/in-memory/TeachersRepositoryInMemory";
import { AuthenticateTeacherUseCase } from "@modules/teachers/useCases/authenticateTeacher/AuthenticateTeacherUseCase";
import { CreateTeacherUseCase } from "@modules/teachers/useCases/createTeacher/CreateTeacherUseCase";

let authenticateTeacherUseCase: AuthenticateTeacherUseCase;
let teachersRepositoryInMemory: TeachersRepositoryInMemory;
let createTeacherUseCase: CreateTeacherUseCase;

describe("Authenticate Teacher", () => {
  beforeEach(() => {
    teachersRepositoryInMemory = new TeachersRepositoryInMemory();
    authenticateTeacherUseCase = new AuthenticateTeacherUseCase(
      teachersRepositoryInMemory
    );
    createTeacherUseCase = new CreateTeacherUseCase(teachersRepositoryInMemory);
  });

  it("Should be able to authenticate a teacher", async () => {
    const teacher: ICreateTeacherDTO = {
      name: "Teacher Test",
      email: "teacher@example.com",
      password: "1234",
      bio: "I love being a teacher",
      techs: "Javascript, React, HTML, SCSS, Postgresql",
    };

    await createTeacherUseCase.execute(teacher);

    const responseToken = await authenticateTeacherUseCase.execute({
      email: teacher.email,
      password: teacher.password,
    });
    expect(responseToken).toHaveProperty("token");
  });

  it("Should be not be able to authenticate a non-existent teacher", () => {
    expect(async () => {
      await authenticateTeacherUseCase.execute({
        email: "non-existent-teacher@gmail.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a teacher with invalid password", () => {
    expect(async () => {
      const teacher: ICreateTeacherDTO = {
        name: "Teacher Test",
        email: "teacher@example.com",
        password: "1234",
        bio: "I love being a teacher",
        techs: "Javascript, React, HTML, SCSS, Postgresql",
      };

      await authenticateTeacherUseCase.execute({
        email: teacher.email,
        password: "password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a teacher with invalid e-mail", () => {
    expect(async () => {
      const teacher: ICreateTeacherDTO = {
        name: "Teacher Test",
        email: "teacher@example.com",
        password: "1234",
        bio: "I love being a teacher",
        techs: "Javascript, React, HTML, SCSS, Postgresql",
      };

      await authenticateTeacherUseCase.execute({
        email: "anothermail@example.com",
        password: teacher.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
