import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateUser, Login } from 'src/graphql';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query('getUser')
  getUserById(@Args('id') id: string) {
    return this.userService.getUser(id);
  }

  @Mutation('createUser')
  createUser(@Args('newUser') newUser: CreateUser) {
    return this.userService.createUser(newUser);
  }

  @Query('login')
  login(@Args('login') login: Login) {
    return this.userService.login(login);
  }
}
