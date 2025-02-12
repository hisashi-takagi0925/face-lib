import { Module } from '@nestjs/common';
import { ActressModule } from './actress/actress.module';
import { ProductsModule } from './products/products.module';
import { PictureModule } from './picture/picture.module';
import { ConfigModule } from '@nestjs/config';
import { MonkeyPatchModule } from './lib/faceLib/monkey-patch.module';

@Module({
  imports: [
    ActressModule,
    ProductsModule,
    PictureModule,
    MonkeyPatchModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
