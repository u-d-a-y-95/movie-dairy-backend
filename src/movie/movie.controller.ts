import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/createMovie.dto';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';

@Controller('')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get('')
  getMovies(): Promise<Movie[]> {
    return this.movieService.getMovies();
  }
  @Post('')
  @UsePipes(ValidationPipe)
  postMovies(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieService.createMovie(createMovieDto);
  }
  @Delete(':id')
  deleteMovies(@Param('id') id: string): Promise<Movie> {
    return this.movieService.deleteMovie(id);
  }
}
