import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class AddressDto {
  @ApiProperty({ description: 'Address ID', example: '2442' })
  address_id: string;

  @ApiProperty({ description: '1 if address was validated, 0 otherwise', example: '1' })
  is_valid: string;

  @ApiProperty({ description: 'Address line 1', example: '123 Main Street' })
  address_1: string;

  @ApiPropertyOptional({ description: 'Address line 2', example: 'APT 111', nullable: true })
  address_2: string | null;

  @ApiProperty({ description: 'City name', example: 'Edison' })
  city: string;

  @ApiProperty({ description: 'State Code', example: 'NJ' })
  state_code: string;

  @ApiProperty({ description: 'Country Code (2-characters)', example: 'US' })
  country_code: string;

  @ApiProperty({ description: 'ZIP Code', example: '08818' })
  zip_code: string;
}

class CustomerDto {
  @ApiProperty({ description: 'Customer ID', example: '2884' })
  customer_id: string;

  @ApiProperty({ description: 'Customer First Name', example: 'Leroy' })
  first_name: string;

  @ApiProperty({ description: 'Customer Last Name', example: 'Jenkins' })
  last_name: string;

  @ApiProperty({ description: 'Customer phone with international prefix', example: '1 234 567 89 01' })
  phone: string;

  @ApiProperty({ type: [AddressDto], description: 'List of customer addresses' })
  addresses: AddressDto[];
}

class PaginationMetadataDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  total_pages: number;
}

export class ListCustomersResponseDto {
  @ApiProperty({ type: [CustomerDto] })
  customers: CustomerDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
