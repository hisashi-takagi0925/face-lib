import { Module } from '@nestjs/common';
import { ActressModule } from './actress/actress.module';
import { ProductsModule } from './products/products.module';
import { PictureModule } from './picture/picture.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ActressModule,
    ProductsModule,
    PictureModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
