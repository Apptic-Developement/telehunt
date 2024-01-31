import { prop, getModelForClass } from "@typegoose/typegoose";

export class UserModel {
  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public name!: string;
}

export const User = getModelForClass(UserModel);
