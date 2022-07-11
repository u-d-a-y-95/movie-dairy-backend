import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './app.route';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RouterModule.register(routes),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_STRING),
    AuthModule,
  ],
})
export class AppModule {}
