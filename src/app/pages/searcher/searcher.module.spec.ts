import { SearcherModule } from './searcher.module';

describe('SearcherModule', () => {
  let searcherModule: SearcherModule;

  beforeEach(() => {
    searcherModule = new SearcherModule();
  });

  it('should create an instance', () => {
    expect(searcherModule).toBeTruthy();
  });
});
