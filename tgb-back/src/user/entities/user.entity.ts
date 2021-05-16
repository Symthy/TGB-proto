import { ValueNullException } from "@/exception/valueNullException";
import { Role } from "@/tgb/domain/model/user/role";
import { User } from "@prisma/client";

export class UserEntity {

  constructor(
    private id: number,
    private nickname: string,
    private email: string,
    private role: Role) { }

  static toResponse(user: User): UserEntity {
    if (user.id == null) throw new ValueNullException("id");
    return new UserEntity(
      user.id,
      user.nickname,
      user.email,
      user.role === 'ADMIN' ? 'ADMIN' : 'USER'
    );
  }

}
