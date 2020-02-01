import { ListMoviesModule } from './list-movies.module';

describe('ListMoviesModule', () => {
  let listMoviesModule: ListMoviesModule;

  beforeEach(() => {
    listMoviesModule = new ListMoviesModule();
  });

  it('should create an instance', () => {
    expect(listMoviesModule).toBeTruthy();
  });
});
