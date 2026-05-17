import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt, Max, Min, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class ListOrdersDto {
  @ApiProperty({ description: 'Number of orders to return per page', example: '100' })
  @IsNotEmpty()
  @IsString()
  per_page: string;

  @ApiPropertyOptional({ description: 'Filter by order status ID', example: '3' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Filter orders created after this date (YYYY-MM-DD)', example: '2021-01-01' })
  @IsOptional()
  @IsDateString()
  created_from?: string;

  @ApiPropertyOptional({ description: 'Filter orders created before this date (YYYY-MM-DD)', example: '2021-05-31' })
  @IsOptional()
  @IsDateString()
  created_to?: string;

  @ApiPropertyOptional({ description: 'Filter orders delivered after this date (YYYY-MM-DD)', example: '2021-01-01' })
  @IsOptional()
  @IsDateString()
  delivered_from?: string;

  @ApiPropertyOptional({ description: 'Filter orders delivered before this date (YYYY-MM-DD)', example: '2021-05-31' })
  @IsOptional()
  @IsDateString()
  delivered_to?: string;

  @ApiPropertyOptional({ description: 'Page index to retrieve', example: '1' })
  @IsOptional()
  @IsString()
  page?: string;
}
