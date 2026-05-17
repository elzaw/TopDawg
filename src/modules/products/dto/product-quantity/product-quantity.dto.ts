import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProductQuantityDto {
  @ApiProperty({ description: 'Array of Product TDID-s', type: [String], example: ['S000487B001525P000444V002'] })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  tdids: string[];

  @ApiPropertyOptional({ description: 'Integration ID for particular store', example: 84807 })
  @IsOptional()
  @IsNumber()
  integration_id?: number;
}
