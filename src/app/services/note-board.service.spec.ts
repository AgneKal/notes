import { TestBed } from '@angular/core/testing';

import { NoteBoardService } from './note-board.service';

describe('NoteBoardService', () => {
  let service: NoteBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
