- Build a small nestjs app that has the endpoint http://localhost:3000/ghibli-films
- This endpoint returns JSON containing a list of Studio Ghibli Films, sorted by RT score
- The app uses the public Sudio Ghibli API to get its data https://ghibliapi.herokuapp.com/#
- Write some unit tests in Jasmin
- Include a README with instructions on how to build the project
- Document any other test scenarios you think are needed (no need to code these) 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

App will be running at http://localhost:3000/ghibli-films

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Unit tests to write/improve:
1) unit tests required for app.service.ts with mocked http service get response
2) Add spyOn to check correct functions are called
3) More sorting scenarios. i.e. What happens if 0 array? What happens with 1 item in array? What happens when all have same rt_score

Code can also be improved by adding exception handling scenarios for when http calls fail or data does not come back as expected.