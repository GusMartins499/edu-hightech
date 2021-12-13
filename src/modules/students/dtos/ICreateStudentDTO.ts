interface ICreateStudentDTO {
  name: string;
  email: string;
  password: string;
  bio: string;
  isDeficiency: boolean;
  typeDeficiency?: "visual" | "mobility" | "hearing" | "another" | null;
}

export { ICreateStudentDTO };
