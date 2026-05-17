import { ApiProperty } from '@nestjs/swagger';

export class ProcessOrderResponseDto {
  @ApiProperty({ description: 'The unique order ID processed', example: '15533' })
  order_id: string;

  @ApiProperty({ description: 'Status of sending order to processing queue', example: 'success' })
  result: string;
}
