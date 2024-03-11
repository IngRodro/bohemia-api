import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop()
  status: Status;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true, trim: true })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
