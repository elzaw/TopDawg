import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { ListOrdersDto } from './dto/list-orders/list-orders.dto';
import { ViewOrderDto } from './dto/view-order/view-order.dto';
import { CreateOrderDto } from './dto/create-order/create-order.dto';
import { UpdateOrderDto } from './dto/update-order/update-order.dto';
import { ProcessOrderDto } from './dto/process-order/process-order.dto';
import { CancelOrderDto } from './dto/cancel-order/cancel-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async listOrders(dto: ListOrdersDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerOrder/list`;

    console.log('Calling TopDawg API (Orders List):', url);
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

  async viewOrder(dto: ViewOrderDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerOrder/view`;

    console.log('Calling TopDawg API (View Order):', url);
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

  async createOrder(dto: CreateOrderDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const payload = {
      ...dto,
      integration_id: defaultIntegrationId ? Number(defaultIntegrationId) : undefined,
    };

    const url = `${baseUrl}/TDApi/ResellerOrder/create`;

    console.log('Calling TopDawg API (Create Order):', url);
    console.log('Request Body:', JSON.stringify(payload));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, payload, {
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

  async updateOrder(dto: UpdateOrderDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerOrder/update`;

    console.log('Calling TopDawg API (Update Order):', url);
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

  async processOrder(dto: ProcessOrderDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerOrder/process`;

    console.log('Calling TopDawg API (Process Order):', url);
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

  async cancelOrder(dto: CancelOrderDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerOrder/cancel`;

    console.log('Calling TopDawg API (Cancel Order):', url);
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
