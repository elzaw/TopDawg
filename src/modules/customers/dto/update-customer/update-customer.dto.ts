import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested, IsOptional, Matches, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

class UpdateAddressDto {
  @ApiPropertyOptional({ description: 'Address ID (if omitted or null, a new address will be created)', example: '2442' })
  @IsOptional()
  @IsString()
  address_id?: string;

  @ApiProperty({ description: 'Address Line 1', example: '123 Main Street' })
  @IsNotEmpty()
  @IsString()
  address_1: string;

  @ApiPropertyOptional({ description: 'Address Line 2', example: 'APT 111', nullable: true })
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

export class UpdateCustomerDto {
  @ApiProperty({ description: 'Customer ID to update', example: '2884' })
  @IsNotEmpty()
  @IsString()
  customer_id: string;

  @ApiProperty({ description: 'Customer First Name', example: 'Leroy' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'Customer Last Name', example: 'Jenkins' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'Customer phone with international prefix', example: '2345678901' })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(14)
  @Matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
  phone: string;

  @ApiProperty({ type: [UpdateAddressDto], description: 'Array of customer addresses' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAddressDto)
  addresses: UpdateAddressDto[];
}
