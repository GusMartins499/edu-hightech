import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStudentUseCase } from "./CreateStudentUseCase";

class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, bio, isDeficiency, typeDeficiency } =
      request.body;

    const createStudentUseCase = container.resolve(CreateStudentUseCase);

    await createStudentUseCase.execute({
      name,
      email,
      password,
      bio,
      isDeficiency,
      typeDeficiency,
    });

    return response.status(201).send();
  }
}

export { CreateStudentController };
