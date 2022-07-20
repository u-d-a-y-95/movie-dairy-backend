import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  directorName: string;

  @IsOptional()
  releaseDate: Date;

  @IsOptional()
  description: string;

  @IsOptional()
  castings: string[];

  @IsOptional()
  ratings: number;

  @IsOptional()
  review: string;
}
