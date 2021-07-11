import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}


  @Get(':page')
  async getMovies(@Param('page') page): Promise<any> {
    return await this.moviesService.getMovies(page);
  }
}
