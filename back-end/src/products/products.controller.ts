import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductSearchParams } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  findByProduct(
    @Param('id') id: string,
    @Query() query: Omit<ProductSearchParams, 'actress_id'>,
  ) {
    return this.productsService.findByActress(+id, query);
  }
}
