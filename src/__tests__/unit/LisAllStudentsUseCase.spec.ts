import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { StudentsRepositoryInMemory } from "@modules/students/repositories/in-memory/StudentsRepositoryInMemory";
import { ListAllStudentsUseCase } from "@modules/students/useCases/listAllStudents/ListAllStudentsUseCase";

let studentsRepositoryInMemory: StudentsRepositoryInMemory;
let listAllStudentsUseCase: ListAllStudentsUseCase;

describe("List All Students", () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    listAllStudentsUseCase = new ListAllStudentsUseCase(
      studentsRepositoryInMemory
    );
  });

  it("Should be able to list all students", async () => {
    const student: ICreateStudentDTO = {
      name: "Student One",
      email: "student@example.com",
      password: "1234",
      bio: "I'm a student One",
      isDeficiency: true,
      typeDeficiency: "hearing",
    };

    await studentsRepositoryInMemory.create(student);

    const students = await listAllStudentsUseCase.execute();

    expect(students).toBeInstanceOf(Array);
  });
});
