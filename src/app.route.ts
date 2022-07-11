import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';

export const routes = [
  {
    path: '/auth',
    module: AuthModule,
  },
  {
    path: '/movie',
    module: MovieModule,
  },
];
