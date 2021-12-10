import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponseToken {
  token: string;
  student: {
    id: string;
    name: string;
    email: string;
  };
}

@injectable()
class AuthenticateStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponseToken> {
    const student = await this.studentsRepository.findByEmail(email);

    if (!student) {
      throw new AppError("Email or password incorrect");
    }

    const matchPassword = await compare(password, student.password);

    if (!matchPassword) {
      throw new AppError("Email or password incorrect");
    }

    const token = await sign({}, process.env.JWT_SECRET, {
      subject: student.id,
      expiresIn: "1d",
    });

    const responseToken: IResponseToken = {
      token,
      student: {
        id: student.id,
        name: student.name,
        email: student.email,
      },
    };

    return responseToken;
  }
}

export { AuthenticateStudentUseCase };
