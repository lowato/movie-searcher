import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const _storageService: StorageService = TestBed.get(StorageService);
    expect(_storageService).toBeTruthy();
  });
});
