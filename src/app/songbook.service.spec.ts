import { TestBed, inject } from '@angular/core/testing';

import { SongbookService } from './songbook.service';

describe('SongbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongbookService]
    });
  });

  it('should be created', inject([SongbookService], (service: SongbookService) => {
    expect(service).toBeTruthy();
  }));
});
