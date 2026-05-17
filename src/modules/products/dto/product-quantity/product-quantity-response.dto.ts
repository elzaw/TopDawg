import { ApiProperty } from '@nestjs/swagger';

class QuantityProductDto {
  @ApiProperty({ description: 'TopDawg Product ID' })
  tdid: string;

  @ApiProperty({ description: 'Available quantity of the product' })
  qty_available: string;

  @ApiProperty({ description: 'Product cost' })
  cost: string;

  @ApiProperty({ description: 'JSON formatted shipping cost estimate' })
  shipping_estimate: string;
}

export class ProductQuantityResponseDto {
  @ApiProperty({ type: [QuantityProductDto] })
  products: QuantityProductDto[];
}
