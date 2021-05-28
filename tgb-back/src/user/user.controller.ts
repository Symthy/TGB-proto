import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserCreateCommand } from './command/userCreate.command';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const userCreateCommand = new UserCreateCommand(createUserDto);
    if (userCreateCommand.password !== userCreateCommand.retryPassword) {
      throw new Error("no match password and retry password.");
    }
    return this.userService.create(userCreateCommand);
  }

  @Get()
  findAll(): Promise<Array<UserEntity>> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
