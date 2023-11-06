import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Cat{
    @Prop()
    name: string;

    @Prop()
   description: string;

   @Prop()
    price: string;

}

export const CatSchema = SchemaFactory.createForClass(Cat);