import { Controller, Get, Param, Query } from '@nestjs/common';
import { ActressService } from './actress.service';
import { ActressSearchParams } from './dto/actress.dto';

@Controller('actress')
export class ActressController {
  constructor(private readonly actressService: ActressService) {}

  @Get()
  findAll(@Query() query: ActressSearchParams) {
    return this.actressService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actressService.findOne(+id);
  }
}
