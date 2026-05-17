import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsArray, ValidateNested, MaxLength, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

class UpdateCustomerDto {
  @ApiPropertyOptional({ description: 'Customer ID', example: '2884' })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({ description: 'Customer first name', example: 'Leroy' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'Customer last name', example: 'Jenkins' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'Customer phone with international prefix', example: '1 234 567 89 01' })
  @IsNotEmpty()
  @IsString()
  phone: string;
}

class UpdateAddressToDto {
  @ApiPropertyOptional({ description: 'Address ID', example: '2442' })
  @IsOptional()
  @IsString()
  address_id?: string;

  @ApiProperty({ description: 'Address 1', example: '123 Main Street' })
  @IsNotEmpty()
  @IsString()
  address_1: string;

  @ApiPropertyOptional({ description: 'Address 2', example: 'APT 111', nullable: true })
  @IsOptional()
  @IsString()
  address_2?: string | null;

  @ApiProperty({ description: 'City', example: 'Edison' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ description: 'State Code', example: 'NJ' })
  @IsNotEmpty()
  @IsString()
  state_code: string;

  @ApiProperty({ description: 'Country Code (2 characters)', example: 'US' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  country_code: string;

  @ApiProperty({ description: 'ZIP Code', example: '08818' })
  @IsNotEmpty()
  @IsString()
  zip_code: string;
}

class UpdateTransactionItemDto {
  @ApiProperty({ description: 'TopDawg Product ID, Preferred ID field', example: 'S000487B001525P000444V002' })
  @IsNotEmpty()
  @IsString()
  tdid: string;

  @ApiProperty({ description: 'Quantity of the product (minimum of 1 and a maximum of 10)', example: 3 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  quantity: number;
}

export class UpdateOrderDto {
  @ApiProperty({ description: 'Order ID to update', example: '2241' })
  @IsNotEmpty()
  @IsString()
  order_id: string;

  @ApiProperty({ type: UpdateCustomerDto, description: 'Customer detailed properties' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateCustomerDto)
  customer: UpdateCustomerDto;

  @ApiProperty({ type: UpdateAddressToDto, description: 'Delivery Address properties' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateAddressToDto)
  address_to: UpdateAddressToDto;

  @ApiProperty({ type: [UpdateTransactionItemDto], description: 'Array of updated transactions' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateTransactionItemDto)
  transactions: UpdateTransactionItemDto[];
}
