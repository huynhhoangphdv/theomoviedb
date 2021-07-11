import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class DetailService {
  constructor(private httpService: HttpService) {}

  async getMovieDetail(id): Promise<any> {
    return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=836ff5b1b7493b53599521d2b84c13bd`)
    .then(({data, status} ) => ({data, status} ))
    .catch(error => ({status: 500, error}))
  }
}
