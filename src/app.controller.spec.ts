import { Film } from './film';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [{ provide: AppService, useClass: MockAppService }],
    }).compile();
  });

  describe('getFilms', () => {
    it('should return a sorted film list', done => {
      const expectedFilms = [...sortedMockFilms];
      const appController = app.get<AppController>(AppController);
      appController.getFilms().subscribe(data => {
        expect(data[0].rt_score).toEqual('100');
        data.forEach((film: Film, index) => {
          expect(film).toEqual(expectedFilms[index]);
        });
        done();
      });
    });
  });
});

class MockAppService {
  public getFilms(): Observable<Film[]> {
    return of(mockFilms);
  }
}

const mockFilms = [
  {
    id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    title: 'Porco Rosso',
    description:
      "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '1992',
    rt_score: '1',
  },
  {
    id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    title: 'My Neighbor Totoro',
    description:
      'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1988',
    rt_score: '2',
  },
  {
    id: '5fdfb320-2a02-49a7-94ff-5ca418cae602',
    title: 'When Marnie Was There',
    description:
      'The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.',
    director: 'Hiromasa Yonebayashi',
    producer: 'Yoshiaki Nishimura',
    release_date: '2014',
    rt_score: '3',
  },
  {
    id: '758bf02e-3122-46e0-884e-67cf83df1786',
    title: 'Ponyo',
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2008',
    rt_score: '4',
  },
  {
    id: '67405111-37a5-438f-81cc-4666af60c800',
    title: 'The Wind Rises',
    description:
      'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.',
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2013',
    rt_score: '100',
  },
];

const sortedMockFilms = [
  {
    id: '67405111-37a5-438f-81cc-4666af60c800',
    title: 'The Wind Rises',
    description:
      'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.',
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2013',
    rt_score: '100',
  },
  {
    id: '758bf02e-3122-46e0-884e-67cf83df1786',
    title: 'Ponyo',
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2008',
    rt_score: '4',
  },
  {
    id: '5fdfb320-2a02-49a7-94ff-5ca418cae602',
    title: 'When Marnie Was There',
    description:
      'The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.',
    director: 'Hiromasa Yonebayashi',
    producer: 'Yoshiaki Nishimura',
    release_date: '2014',
    rt_score: '3',
  },
  {
    id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    title: 'My Neighbor Totoro',
    description:
      'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1988',
    rt_score: '2',
  },
  {
    id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    title: 'Porco Rosso',
    description:
      "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '1992',
    rt_score: '1',
  },
];
