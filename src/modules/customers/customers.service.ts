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
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async listCustomers(dto: ListCustomersDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerCustomer/list`;

    console.log('Calling TopDawg API (Customers List):', url);
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

  async viewCustomer(dto: ViewCustomerDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerCustomer/view`;

    console.log('Calling TopDawg API (View Customer):', url);
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

  async updateCustomer(dto: UpdateCustomerDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerCustomer/update`;

    console.log('Calling TopDawg API (Update Customer):', url);
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

  async createCustomer(dto: CreateCustomerDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerCustomer/create`;

    console.log('Calling TopDawg API (Create Customer):', url);
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
