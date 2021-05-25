import { Body, Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Put()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    if (createUserDto.getPassword() !== createUserDto.getRetryPassword()) {
      throw new Error("no match password and retry password.");
    }
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Array<UserEntity>> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
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
