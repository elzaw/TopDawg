import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { CreateShippingEstimateDto } from './dto/create-shipping-estimate/create-shipping-estimate.dto';

@Injectable()
export class ShippingService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async createShippingEstimate(dto: CreateShippingEstimateDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ShippingCostEstimator/create`;

    console.log('Calling TopDawg API (Shipping Cost Estimate):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }),
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('TopDawg API Error Response:', error.response.data);
        throw error;
      }
      throw error;
    }
  }
}
