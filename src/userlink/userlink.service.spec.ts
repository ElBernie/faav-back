import { Test, TestingModule } from '@nestjs/testing';
import { UserlinkService } from './userlink.service';

describe('UserlinkService', () => {
  let service: UserlinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserlinkService],
    }).compile();

    service = module.get<UserlinkService>(UserlinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
