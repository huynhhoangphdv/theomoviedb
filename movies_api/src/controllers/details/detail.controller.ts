import { Controller, Get, Param } from '@nestjs/common';
import { DetailService } from './detail.service';

@Controller('detail')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @Get(':id')
  async getMovieDetail(@Param('id') id: string): Promise<any> {
    return await this.detailService.getMovieDetail(id);
  }
}
