import { Test, TestingModule } from '@nestjs/testing';
import { SpacesResolver } from './spaces.resolver';

describe('SpacesResolver', () => {
  let resolver: SpacesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpacesResolver],
    }).compile();

    resolver = module.get<SpacesResolver>(SpacesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
