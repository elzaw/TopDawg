import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CancelOrderDto {
  @ApiProperty({ description: 'ID of the order to be cancelled', example: '15533' })
  @IsNotEmpty()
  @IsString()
  order_id: string;

  @ApiProperty({ description: 'Verbal description of order cancellation reason', example: 'Order was duplicate' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  reason: string;
}
