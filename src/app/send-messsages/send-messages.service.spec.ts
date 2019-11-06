import { TestBed } from '@angular/core/testing';

import { SendMessagesService } from './send-messages.service';

describe('SendMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendMessagesService = TestBed.get(SendMessagesService);
    expect(service).toBeTruthy();
  });
});
