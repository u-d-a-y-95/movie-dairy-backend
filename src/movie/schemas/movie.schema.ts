import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Movie {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop()
  directorName: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  description: string;

  @Prop()
  castings: string[];

  @Prop()
  ratings: number;

  @Prop()
  review: string;
}
export type MovieDocumnet = Movie & Document;
export const MovieSchema = SchemaFactory.createForClass(Movie);
