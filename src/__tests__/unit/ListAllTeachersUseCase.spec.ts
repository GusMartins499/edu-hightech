import { ICreateTeacherDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { TeachersRepositoryInMemory } from "@modules/teachers/repositories/in-memory/TeachersRepositoryInMemory";
import { ListAllTeachersUseCase } from "@modules/teachers/useCases/listAllTeachers/ListAllTeachersUseCase";

let teachersRepositoryInMemory: TeachersRepositoryInMemory;
let listAllTeachersUseCase: ListAllTeachersUseCase;

describe("List All Teachers", () => {
  beforeEach(() => {
    teachersRepositoryInMemory = new TeachersRepositoryInMemory();
    listAllTeachersUseCase = new ListAllTeachersUseCase(
      teachersRepositoryInMemory
    );
  });

  it("Should be able to list all teachers", async () => {
    const teacher: ICreateTeacherDTO = {
      name: "Teacher One",
      email: "teacherOne@example.com",
      password: "1234",
      bio: "I'm a teacher one",
      techs: "React, Javascript",
    };

    await teachersRepositoryInMemory.create(teacher);

    const teachers = await listAllTeachersUseCase.execute();

    expect(teachers).toBeInstanceOf(Array);
  });
});
