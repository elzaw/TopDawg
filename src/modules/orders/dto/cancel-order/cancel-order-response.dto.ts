import { ApiProperty } from '@nestjs/swagger';

export class CancelOrderResponseDto {
  @ApiProperty({ description: 'Order ID that was requested to cancel', example: '15533' })
  order_id: string;

  @ApiProperty({ description: 'Result status of cancelling processed order', example: 'success' })
  result: string;

  @ApiProperty({ description: 'Response message from TopDawg order cancellation endpoint', example: 'variable content' })
  message: string;
}
