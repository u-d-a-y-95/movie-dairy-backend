import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dtos/createMovie.dto';
import { Movie, MovieDocumnet } from './schemas/movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocumnet>,
  ) {}
  async getMovies(): Promise<Movie[]> {
    return this.movieModel.find();
  }
  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = await this.movieModel.create(createMovieDto);
    return movie;
  }
  async deleteMovie(id: string): Promise<Movie> {
    const movie = await this.movieModel.findByIdAndDelete(id);
    return movie;
  }
}
