import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class ListCategoriesDto {
  @ApiPropertyOptional({ description: 'Index of the page to be retrieved', example: '1' })
  @IsOptional()
  @IsString()
  page?: string;

  @ApiProperty({ description: 'Categories to be displayed per each paged response', example: '100' })
  @IsString()
  per_page: string;
}
