import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArtistsDocument = Artists & Document;

@Schema()
export class Artists {
  @Prop()
  name: string;
}

export const ArtistsSchema = SchemaFactory.createForClass(Artists);
