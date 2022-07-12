import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateUser, Login } from 'src/graphql';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query('user')
  getUserById(@Args('id') id: string) {
    return this.userService.getUser(id);
  }

  @Mutation('register')
  register(@Args('user') user: CreateUser) {
    return this.userService.createUser(user);
  }

  @Query('jwt')
  login(@Args('login') login: Login) {
    return this.userService.login(login);
  }
}
