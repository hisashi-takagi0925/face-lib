import { Test, TestingModule } from '@nestjs/testing';
import { ActressController } from './actress.controller';
import { ActressService } from './actress.service';

describe('ActressController', () => {
  let controller: ActressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActressController],
      providers: [ActressService],
    }).compile();

    controller = module.get<ActressController>(ActressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
