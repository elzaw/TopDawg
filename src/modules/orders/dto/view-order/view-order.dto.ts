import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ViewOrderDto {
  @ApiProperty({ description: 'The unique ID of the order in TopDawg', example: '18453' })
  @IsNotEmpty()
  @IsString()
  order_id: string;
}
