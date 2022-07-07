import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class ArtistsInput {
  @Field()
  readonly name: string;
}
