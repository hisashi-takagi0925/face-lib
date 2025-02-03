import { Module } from '@nestjs/common';
import { ActressModule } from './actress/actress.module';
import { ProductsModule } from './products/products.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [ActressModule, ProductsModule, PictureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
