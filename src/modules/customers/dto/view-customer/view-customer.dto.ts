import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ViewCustomerDto {
  @ApiProperty({ description: 'Customer ID', example: '2884' })
  @IsNotEmpty()
  @IsString()
  customer_id: string;
}
