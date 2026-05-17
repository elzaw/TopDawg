import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ViewProductDto {
  @ApiProperty({ description: 'TopDawg Product ID', example: 'S000487B001525P000444V002' })
  @IsNotEmpty()
  @IsString()
  tdid: string;
}
