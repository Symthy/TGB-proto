import { UserRepository } from '@/tgb/influstructure/repository';
import { Inject, Injectable } from '@nestjs/common';
import { UserCreateCommand } from './command/userCreate.command';
import { UserUpdateCommand } from './command/userUpdate.command';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@Inject('USER_REPOSITORY') private userRepository: UserRepository) {
  }

  create(command: UserCreateCommand): Promise<UserEntity> {
    const user = command.toDomain();
    return this.userRepository.create(user.toModel()).then(user => {
      return UserEntity.toResponse(user);
    });
  }

  findAll(): Promise<Array<UserEntity>> {
    const users = this.userRepository.findMany()
    return users.then(users => {
      return users.map(user => UserEntity.toResponse(user));
    });
  }

  findById(id: number) {
    const user = this.userRepository.findById(id);
    return user.then(user => UserEntity.toResponse(user));
  }

  update(command: UserUpdateCommand) {
    const user = command.toDomain()
    return this.userRepository.update(user.toModel()).then(user => UserEntity.toResponse(user));
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
