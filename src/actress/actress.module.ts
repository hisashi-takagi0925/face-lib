import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ActressService } from './actress.service';
import { ActressController } from './actress.controller';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ActressController],
  providers: [ActressService],
})
export class ActressModule {}
