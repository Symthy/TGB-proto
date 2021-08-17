import { Role } from "@prisma/client";

export interface UserModel {
  id: number;
  password: string;
  nickname: string;
  email: string;
  role: Role;
}
