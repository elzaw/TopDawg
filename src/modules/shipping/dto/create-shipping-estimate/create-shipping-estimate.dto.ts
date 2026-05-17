import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, Matches, MinLength } from 'class-validator';

export class CreateShippingEstimateDto {
  @ApiProperty({ description: 'TopDawg Product ID', example: 'S000487B001525P000444V002' })
  @IsNotEmpty()
  @IsString()
  tdid: string;

  @ApiPropertyOptional({ description: 'Customer first name', example: 'Leroy' })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiPropertyOptional({ description: 'Customer last name', example: 'Jenkins' })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiPropertyOptional({ description: 'Customer phone with international prefix (min 10 characters)', example: '1 234 567 89 01' })
  @IsOptional()
  @IsString()
  @MinLength(10)
  @Matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: 'phone must match: ^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$',
  })
  phone?: string;

  @ApiPropertyOptional({ description: 'Address 1', example: '123 Main Street' })
  @IsOptional()
  @IsString()
  address_1?: string;

  @ApiPropertyOptional({ description: 'Address 2', example: 'APT 111', nullable: true })
  @IsOptional()
  @IsString()
  address_2?: string | null;

  @ApiPropertyOptional({ description: 'City', example: 'Edison' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'State Code', example: 'NJ' })
  @IsOptional()
  @IsString()
  state_code?: string;

  @ApiPropertyOptional({ description: 'Country Code (2 characters)', example: 'US' })
  @IsOptional()
  @IsString()
  @MaxLength(2)
  country_code?: string;

  @ApiProperty({ description: 'Country Code (2 characters, required)', example: 'US' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  country: string;

  @ApiProperty({ description: 'ZIP Code', example: '08818' })
  @IsNotEmpty()
  @IsString()
  zip_code: string;
}
