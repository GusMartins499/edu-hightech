import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateStudentUseCase } from "./AuthenticateStudentUseCase";

class AuthenticateStudentController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateStudentUseCase = container.resolve(
      AuthenticateStudentUseCase
    );

    const token = await authenticateStudentUseCase.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateStudentController };
