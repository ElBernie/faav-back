import { Test, TestingModule } from '@nestjs/testing';
import { UserlinkResolver } from './userlink.resolver';

describe('UserlinkResolver', () => {
  let resolver: UserlinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserlinkResolver],
    }).compile();

    resolver = module.get<UserlinkResolver>(UserlinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
