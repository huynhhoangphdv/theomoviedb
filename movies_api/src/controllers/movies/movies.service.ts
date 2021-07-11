import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import { AxiosResponse } from 'axios';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  async getMovies(page=1): Promise<any> {
    return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=836ff5b1b7493b53599521d2b84c13bd&language=en-US&page=${page}`)
    .then(({data, status} ) => ({data, status} ))
    .catch(error => ({status: 500, error}))
  }
}
