import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  ActressResponse,
  ActressSearchParams,
  SingleActressResponse,
} from './dto/actress.dto';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ActressService {
  private readonly baseUrl = 'https://api.dmm.com/affiliate/v3/ActressSearch';
  private readonly API_ID: string;
  private readonly AFFILIATE_ID: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.API_ID = this.configService.get<string>('DMM_API_ID');
    this.AFFILIATE_ID = this.configService.get<string>('DMM_AFFILIATE_ID');
  }

  private async fetchData<T>(params: Record<string, any>): Promise<T> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<T>(this.baseUrl, { params }),
      );
      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch actress data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(params: ActressSearchParams = {}) {
    return this.fetchData<ActressResponse>({
      api_id: this.API_ID,
      affiliate_id: this.AFFILIATE_ID,
      output: 'json',
      ...params,
    });
  }

  async findOne(id: ActressSearchParams['actress_id']) {
    return this.fetchData<SingleActressResponse>({
      api_id: this.API_ID,
      affiliate_id: this.AFFILIATE_ID,
      output: 'json',
      actress_id: id,
    });
  }
}
