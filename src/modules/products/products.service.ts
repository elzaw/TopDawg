import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { ListProductsDto } from './dto/list-products/list-products.dto';
import { ListCategoriesDto } from './dto/list-categories/list-categories.dto';
import { ListStatesDto } from './dto/list-states/list-states.dto';
import { ViewProductDto } from './dto/view-product/view-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  async listProducts(dto: ListProductsDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const url = `${baseUrl}/TDApi/ResellerProduct/list`;
    
    // Inject default integration_id if missing
    if (!dto.integration_id && defaultIntegrationId) {
      dto.integration_id = defaultIntegrationId;
    }

    console.log('Calling TopDawg API:', url);
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

  async getSubscription() {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/Reseller/subscription/`;

    console.log('Calling TopDawg API (Subscription):', url);

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
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

  async criticalUpdateList(dto: any) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/criticalupdatelist/`;

    console.log('Calling TopDawg API (Critical Update List):', url);
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

  async viewProduct(dto: ViewProductDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const payload = {
      ...dto,
      integration_id: defaultIntegrationId ? Number(defaultIntegrationId) : undefined,
    };

    const url = `${baseUrl}/TDApi/ResellerProduct/view/`;

    console.log('Calling TopDawg API (View Product):', url);
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

  async getProductQuantity(dto: any) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const url = `${baseUrl}/TDApi/ResellerProduct/quantity/`;

    // Inject default integration_id if missing
    if (!dto.integration_id && defaultIntegrationId) {
      dto.integration_id = defaultIntegrationId;
    }

    console.log('Calling TopDawg API (Quantity):', url);
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

  async listDepartments(dto: any) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/departments/`;

    console.log('Calling TopDawg API (Departments):', url);
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

  async listSections(dto: any) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/sections/`;

    console.log('Calling TopDawg API (Sections):', url);
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

  async listFavorites(dto: ListProductsDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const url = `${baseUrl}/TDApi/ResellerProduct/listfavorites/`;

    // Inject default integration_id if missing
    if (!dto.integration_id && defaultIntegrationId) {
      dto.integration_id = defaultIntegrationId;
    }

    console.log('Calling TopDawg API (List Favorites):', url);
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

  async listEbayProducts(dto: ListProductsDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');
    const defaultIntegrationId = this.configService.get<number>('TOPDAWG_INTEGRATION_ID');

    const url = `${baseUrl}/TDApi/ResellerProduct/listebay/`;

    // Inject default integration_id if missing
    if (!dto.integration_id && defaultIntegrationId) {
      dto.integration_id = defaultIntegrationId;
    }

    console.log('Calling TopDawg API (List eBay Products):', url);
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

  async listCountries(dto: any) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/listcountries/`;

    console.log('Calling TopDawg API (Countries):', url);
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

  async listCategories(dto: ListCategoriesDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/categories`;

    console.log('Calling TopDawg API (Categories):', url);
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

  async listStates(dto: ListStatesDto) {
    const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
    const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

    const url = `${baseUrl}/TDApi/ResellerProduct/liststates`;

    console.log('Calling TopDawg API (States):', url);
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
