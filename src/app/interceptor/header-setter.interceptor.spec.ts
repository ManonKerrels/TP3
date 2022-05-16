import { TestBed } from '@angular/core/testing';

import { HeaderSetterInterceptor } from './header-setter.interceptor';

describe('HeaderSetterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderSetterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderSetterInterceptor = TestBed.inject(HeaderSetterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
