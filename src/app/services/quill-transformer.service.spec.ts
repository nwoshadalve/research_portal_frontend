import { TestBed } from '@angular/core/testing';

import { QuillTransformerService } from './quill-transformer.service';

describe('QuillTransformerService', () => {
  let service: QuillTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
