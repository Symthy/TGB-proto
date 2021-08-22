import { UserRepository } from '@/tgb/db/repository';
import { Inject, Injectable } from '@nestjs/common';
import { UserCreateCommand } from './command/userCreate.command';
import { UserUpdateCommand } from './command/userUpdate.command';
import { User } from './domain/user';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@Inject('USER_REPOSITORY') private userRepository: UserRepository) {
  }

  create(command: UserCreateCommand): Promise<UserEntity> {
    const user = User.create(command);
    return this.userRepository.create(user.toDbModel()).then(
      user => UserEntity.toResponse(user)
    );
  }

  findAll(): Promise<Array<UserEntity>> {
    const users = this.userRepository.findMany()
    return users.then(users => {
      return users.map(user => UserEntity.toResponse(user));
    });
  }

  findById(id: number): Promise<UserEntity> {
    const user = this.userRepository.findById(id);
    return user.then(user => UserEntity.toResponse(user));
  }

  update(command: UserUpdateCommand): Promise<UserEntity> {
    const user = User.create(command);
    return this.userRepository.update(user.toDbModel()).then(
      user => UserEntity.toResponse(user)
    );
  }

  remove(id: number): Promise<UserEntity> {
    return this.userRepository.remove(id).then(
      user => UserEntity.toResponse(user)
    );
  }
}
