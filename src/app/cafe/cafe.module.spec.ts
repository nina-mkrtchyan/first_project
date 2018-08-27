import { CafeModule } from './cafe.module';

describe('CafeModule', () => {
  let cafeModule: CafeModule;

  beforeEach(() => {
    cafeModule = new CafeModule();
  });

  it('should create an instance', () => {
    expect(cafeModule).toBeTruthy();
  });
});
