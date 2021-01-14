import { TestBed } from '@angular/core/testing';

import { RecupProduitService } from './recup-produit.service';

describe('RecupProduitService', () => {
  let service: RecupProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
