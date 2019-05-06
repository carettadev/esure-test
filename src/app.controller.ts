import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Film } from './film';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ghibli-films')
  getFilms(): Observable<Film[]> {
    return this.appService.getFilms().pipe(map(films => this.sortFilms(films)));
  }

  private sortFilms(films: Film[]): Film[] {
    return films.sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
  }
}
