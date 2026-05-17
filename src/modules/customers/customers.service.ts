import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { ListCustomersDto } from './dto/list-customers/list-customers.dto';
import { ViewCustomerDto } from './dto/view-customer/view-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer/create-customer.dto';

@Injectable()
export class CustomersService {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL') || '';
    this.token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN') || '';
  }

  async listCustomers(dto: ListCustomersDto) {
    const url = `${this.baseUrl}/TDApi/ResellerCustomer/list`;

    console.log('Calling TopDawg API (Customers List):', url);
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

  async viewCustomer(dto: ViewCustomerDto) {
    const url = `${this.baseUrl}/TDApi/ResellerCustomer/view`;

    console.log('Calling TopDawg API (View Customer):', url);
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

  async updateCustomer(dto: UpdateCustomerDto) {
    const url = `${this.baseUrl}/TDApi/ResellerCustomer/update`;

    console.log('Calling TopDawg API (Update Customer):', url);
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

  async createCustomer(dto: CreateCustomerDto) {
    const url = `${this.baseUrl}/TDApi/ResellerCustomer/create`;

    console.log('Calling TopDawg API (Create Customer):', url);
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
