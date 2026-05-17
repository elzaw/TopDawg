import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsOptional,
  IsString,
} from 'class-validator';

export class CriticalUpdateListDto {
  @ApiPropertyOptional({ description: 'Index of the page to be retrieved', example: '1' })
  @IsOptional()
  @IsString()
  page?: string;

  @ApiProperty({ description: 'Products to be displayed per each paged response', example: '100' })
  @IsString()
  per_page: string;

  @ApiPropertyOptional({ description: 'Array of the Product TDID-s', type: [String], example: ['S000487B001525P000444V002'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tdid_array?: string[];

  @ApiPropertyOptional({ description: 'Filter products by updated date', example: '2022-11-27 05:01:01' })
  @IsOptional()
  @IsString()
  product_updated_at?: string;
}
