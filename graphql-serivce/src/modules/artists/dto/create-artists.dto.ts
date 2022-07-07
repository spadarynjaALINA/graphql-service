import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class ArtistsType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
}
