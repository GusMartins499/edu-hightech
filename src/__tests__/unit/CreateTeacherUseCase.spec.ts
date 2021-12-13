import { AppError } from "@erros/AppError";
import { ICreateTeacherDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { TeachersRepositoryInMemory } from "@modules/teachers/repositories/in-memory/TeachersRepositoryInMemory";
import { CreateTeacherUseCase } from "@modules/teachers/useCases/createTeacher/CreateTeacherUseCase";

let createTeacherUseCase: CreateTeacherUseCase;
let teachersRepositoryInMemory: TeachersRepositoryInMemory;

describe("Create Teacher", () => {
  beforeEach(() => {
    teachersRepositoryInMemory = new TeachersRepositoryInMemory();
    createTeacherUseCase = new CreateTeacherUseCase(teachersRepositoryInMemory);
  });

  it("Should be able to create a new teacher", async () => {
    const teacher: ICreateTeacherDTO = {
      name: "Teacher Test",
      email: "teacher@example.com",
      password: "1234",
      bio: "I love being a teacher",
      techs: "Javascript, React, HTML, SCSS, Postgresql",
    };

    await createTeacherUseCase.execute(teacher);

    const isCreatedTeacher = await teachersRepositoryInMemory.findByEmail(
      teacher.email
    );

    expect(isCreatedTeacher).toHaveProperty("id");
  });

  it("Should not be able to create a new teacher with same email", () => {
    expect(async () => {
      const teacher = {
        name: "Teacher Test",
        email: "teacher@example.com",
        password: "1234",
        bio: "I love being a teacher",
        techs: "Javascript, React, HTML, SCSS, Postgresql",
      };

      await createTeacherUseCase.execute(teacher);
      await createTeacherUseCase.execute(teacher);
    }).rejects.toBeInstanceOf(AppError);
  });
});
