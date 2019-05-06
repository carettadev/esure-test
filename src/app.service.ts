import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Film } from './film';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getFilms(): Observable<Film[]> {
    return this.httpService
      .get<Film[]>('https://ghibliapi.herokuapp.com/films')
      .pipe(map(response => response.data));
  }
}
