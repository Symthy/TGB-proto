import { UserRepository } from '@/tgb/influstructure/repository';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@Inject('USER_REPOSITORY') private userRepository: UserRepository) {
  }

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = createUserDto.toDomain();

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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
