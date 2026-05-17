import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested, IsOptional, Matches, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

class CreateAddressDto {
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
}

export class CreateCustomerDto {
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

  @ApiProperty({ description: 'Customer phone with international prefix', example: '1 234 567 89 01' })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @Matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
  phone: string;

  @ApiProperty({ type: [CreateAddressDto], description: 'Array of customer addresses' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  addresses: CreateAddressDto[];
}
