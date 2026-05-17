import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class ListStatesDto {
  @ApiPropertyOptional({ description: 'Index of the page to be retrieved', example: '1' })
  @IsOptional()
  @IsString()
  page?: string;

  @ApiProperty({ description: 'States to be displayed per each paged response', example: '100' })
  @IsString()
  per_page: string;

  @ApiProperty({ description: '2-character Country Code', example: 'US', minLength: 2, maxLength: 2 })
  @IsString()
  @Length(2, 2)
  country_code: string;
}
