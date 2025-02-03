import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ProductResponse, ProductSearchParams } from './dto/product.dto';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  private readonly baseUrl = 'https://api.dmm.com/affiliate/v3/ItemList';
  private readonly API_ID: string;
  private readonly AFFILIATE_ID: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.API_ID = this.configService.get<string>('DMM_API_ID');
    this.AFFILIATE_ID = this.configService.get<string>('DMM_AFFILIATE_ID');
  }

  async findByActress(
    actressId: number,
    params: Omit<ProductSearchParams, 'actress_id'> = {},
  ) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<ProductResponse>(this.baseUrl, {
          params: {
            api_id: this.API_ID,
            affiliate_id: this.AFFILIATE_ID,
            site: 'FANZA',
            service: 'digital',
            floor: 'videoa',
            output: 'json',
            ...params,
            article: 'actress',
            article_id: actressId,
          },
        }),
      );

      return data;
    } catch (_error) {
      throw new HttpException(
        'Failed to fetch product data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
