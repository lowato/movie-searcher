import { DetailMovieModule } from './detail-movie.module';

describe('DetailMovieModule', () => {
  let detailMovieModule: DetailMovieModule;

  beforeEach(() => {
    detailMovieModule = new DetailMovieModule();
  });

  it('should create an instance', () => {
    expect(detailMovieModule).toBeTruthy();
  });
});
