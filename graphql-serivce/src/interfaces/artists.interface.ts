import { Document } from 'mongoose';

export interface Artists extends Document {
  readonly id: string;
  readonly name: string;
}
