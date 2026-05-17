import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProcessOrderDto {
  @ApiProperty({ description: 'ID of the order for automatic processing', example: '15533' })
  @IsNotEmpty()
  @IsString()
  order_id: string;
}
