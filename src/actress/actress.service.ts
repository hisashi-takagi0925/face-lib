import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  ActressResponse,
  ActressSearchParams,
  SingleActressResponse,
} from './dto/actress.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ActressService {
  private readonly baseUrl = 'https://api.dmm.com/affiliate/v3/ActressSearch';
  private readonly API_ID = 'kcyJ3aTeF7x4z40KqByL';
  private readonly AFFILIATE_ID = 'emovier0925-990';

  constructor(private readonly httpService: HttpService) {}

  async findAll(params: ActressSearchParams = {}) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<ActressResponse>(this.baseUrl, {
          params: {
            api_id: this.API_ID,
            affiliate_id: this.AFFILIATE_ID,
            output: 'json',
            ...params,
          },
        }),
      );

      return data;
    } catch (_error) {
      throw new HttpException(
        'Failed to fetch actress data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: ActressSearchParams['actress_id']) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<SingleActressResponse>(this.baseUrl, {
          params: {
            api_id: this.API_ID,
            affiliate_id: this.AFFILIATE_ID,
            output: 'json',
            actress_id: id,
          },
        }),
      );

      return data;
    } catch (_error) {
      throw new HttpException(
        'Failed to fetch actress data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
