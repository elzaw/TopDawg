import { ApiProperty } from '@nestjs/swagger';

class CriticalProductDto {
  @ApiProperty({ description: 'TopDawg Product ID' })
  tdid: string;

  @ApiProperty({ description: 'Initial quantity of the product' })
  quantity_initial: string;

  @ApiProperty({ description: 'Available quantity of the product' })
  quantity_available: string;

  @ApiProperty({ description: 'Product cost' })
  cost: string;
}

class PaginationMetadataDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  total_pages: number;
}

export class CriticalUpdateResponseDto {
  @ApiProperty({ type: [CriticalProductDto] })
  products: CriticalProductDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
