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
  private readonly baseUrl: string;
  private readonly token: string;
  private readonly defaultIntegrationId?: number;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL') || '';
    this.token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN') || '';
    this.defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');
  }

  async listOrders(dto: ListOrdersDto) {
    const url = `${this.baseUrl}/TDApi/ResellerOrder/list`;

    console.log('Calling TopDawg API (Orders List):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
    const url = `${this.baseUrl}/TDApi/ResellerOrder/view`;

    console.log('Calling TopDawg API (View Order):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
    const payload = {
      ...dto,
      integration_id: this.defaultIntegrationId ? Number(this.defaultIntegrationId) : undefined,
    };

    const url = `${this.baseUrl}/TDApi/ResellerOrder/create`;

    console.log('Calling TopDawg API (Create Order):', url);
    console.log('Request Body:', JSON.stringify(payload));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
    const url = `${this.baseUrl}/TDApi/ResellerOrder/update`;

    console.log('Calling TopDawg API (Update Order):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
    const url = `${this.baseUrl}/TDApi/ResellerOrder/process`;

    console.log('Calling TopDawg API (Process Order):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
    const url = `${this.baseUrl}/TDApi/ResellerOrder/cancel`;

    console.log('Calling TopDawg API (Cancel Order):', url);
    console.log('Request Body:', JSON.stringify(dto));

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, dto, {
          headers: {
            Authorization: `Bearer ${this.token}`,
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
