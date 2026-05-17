import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsBoolean, IsArray, ValidateNested, MaxLength, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

class OrderCustomerDto {
  @ApiPropertyOptional({ description: 'Existing customer ID if known', example: '2884' })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({ description: 'Customer First Name', example: 'Leroy' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  first_name: string;

  @ApiProperty({ description: 'Customer Last Name', example: 'Jenkins' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  last_name: string;

  @ApiPropertyOptional({ description: 'Customer phone number with international prefix', example: '1 234 567 89 01', nullable: true })
  @IsOptional()
  @IsString()
  phone?: string | null;
}

class OrderAddressToDto {
  @ApiPropertyOptional({ description: 'Existing address ID if known', example: '2442' })
  @IsOptional()
  @IsString()
  address_id?: string;

  @ApiProperty({ description: 'Address Line 1', example: '123 Main Street' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  address_1: string;

  @ApiPropertyOptional({ description: 'Address Line 2', example: 'APT 111', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  address_2?: string | null;

  @ApiProperty({ description: 'City', example: 'Edison' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  city: string;

  @ApiProperty({ description: 'State Code', example: 'NJ' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  state_code: string;

  @ApiProperty({ description: 'Country Code (2 characters)', example: 'US' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  country_code: string;

  @ApiProperty({ description: 'ZIP Code', example: '08818' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  zip_code: string;

  @ApiPropertyOptional({ description: 'Delivery Instructions for carrier', example: 'Leave the package at the front door.', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  delivery_instructions?: string | null;
}

class CreateTransactionDto {
  @ApiProperty({ description: 'TopDawg product ID identifier', example: 'S000487B001525P000444V002' })
  @IsNotEmpty()
  @IsString()
  tdid: string;

  @ApiProperty({ description: 'Quantity of the product to order (1 to 10)', example: 3 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  quantity: number;
}

export class CreateOrderDto {
  @ApiPropertyOptional({ description: 'Flag to trigger immediate shipping and payment cost generation', example: true, default: true })
  @IsOptional()
  @IsBoolean()
  auto_process?: boolean;

  @ApiPropertyOptional({ description: 'Flag to bypass customer address validation audits', example: false, default: false })
  @IsOptional()
  @IsBoolean()
  bypass_address_validation?: boolean;

  @ApiPropertyOptional({ description: 'Aggregation company or platform source identifier', example: 'inventory_source' })
  @IsOptional()
  @IsString()
  @MaxLength(25)
  api_aggregator?: string;

  @ApiPropertyOptional({ description: 'JSON string metadata block (e.g. {"id": 4456, "order": 13334562, "source": "shopify"})', example: '{"id":4456, "order":13334562,"source":"shopify"}' })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  metadata?: string;

  @ApiProperty({ type: OrderCustomerDto, description: 'Customer details profile' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => OrderCustomerDto)
  customer: OrderCustomerDto;

  @ApiProperty({ type: OrderAddressToDto, description: 'Delivery target address details' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => OrderAddressToDto)
  address_to: OrderAddressToDto;

  @ApiProperty({ type: [CreateTransactionDto], description: 'List of order items/transactions' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTransactionDto)
  transactions: CreateTransactionDto[];
}
