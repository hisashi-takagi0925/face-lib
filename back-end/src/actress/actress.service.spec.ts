import { Test, TestingModule } from '@nestjs/testing';
import { ActressService } from './actress.service';

describe('ActressService', () => {
  let service: ActressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActressService],
    }).compile();

    service = module.get<ActressService>(ActressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
