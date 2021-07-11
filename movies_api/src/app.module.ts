import { Module, HttpModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MoviesController } from './controllers/movies/movies.controller';
import { DetailController } from './controllers/details/detail.controller';
import { MoviesService } from './controllers/movies/movies.service';
import { DetailService } from './controllers/details/detail.service';
import { LoggingInterceptor } from './interceptors/logging';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController, DetailController],
  providers: [MoviesService, DetailService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule {}
