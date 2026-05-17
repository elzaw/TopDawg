import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class ListProductsDto {
  @ApiPropertyOptional({ description: 'Index of the page to be retrieved', example: '1' })
  @IsOptional()
  @IsString()
  page?: string;

  @ApiProperty({ description: 'Products to be displayed per each paged response', example: '100' })
  @IsString()
  per_page: string;

  @ApiPropertyOptional({ description: 'Integration ID for particular store', example: 84807 })
  @IsOptional()
  integration_id?: number;

  @ApiPropertyOptional({ description: 'Array of the Product TDID-s', type: [String], example: ['S000487B001525P000444V002'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tdid_array?: string[];

  @ApiPropertyOptional({ description: 'Array of the Departments to list products from', type: [String], example: ['pet-supplies'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  departments?: string[];

  @ApiPropertyOptional({ description: 'Array of the Sections to list products from', type: [String], example: ['apparel'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sections?: string[];

  @ApiPropertyOptional({ description: 'Array of the Categories to list products from', type: [String], example: ['hand-tools'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @ApiPropertyOptional({ description: 'Array of the Brands to list products from', type: [String], example: ['ali-industries'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  brands?: string[];

  @ApiPropertyOptional({ description: 'Array of the Country Codes to list products from', type: [String], example: ['US'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  countries?: string[];

  @ApiPropertyOptional({ description: 'Array of Channels', type: [String], example: ['amazon'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  no_channel_restrictions?: string[];

  @ApiPropertyOptional({ description: 'Array of Variant Group ID', type: [String], example: ['6-851-1'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variant_group_id?: string[];

  @ApiPropertyOptional({ description: 'Minimal count of products per pack', example: '2' })
  @IsOptional()
  @IsString()
  min_pack_of?: string;

  @ApiPropertyOptional({ description: 'Minimal count of products in stock', example: '100' })
  @IsOptional()
  @IsString()
  min_quantity?: string;

  @ApiPropertyOptional({ description: 'Filter products by international shipping availability', enum: ['yes', 'no', 'Yes', 'No'], example: 'Yes' })
  @IsOptional()
  @IsEnum(['yes', 'no', 'Yes', 'No'])
  international_shipping?: string;

  @ApiPropertyOptional({ description: 'Filter products by updated date', example: '2022-11-27 05:01:01' })
  @IsOptional()
  @IsString()
  product_updated_at?: string;
}
