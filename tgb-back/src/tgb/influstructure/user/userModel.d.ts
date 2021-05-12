import { Role } from "@prisma/client";

export interface UserModel {
  email: string
  password: string
  name: string
  role: Role
}
