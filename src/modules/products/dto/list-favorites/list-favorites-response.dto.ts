import { ApiProperty } from '@nestjs/swagger';

class FavoriteProductDto {
  @ApiProperty()
  tdid: string;

  @ApiProperty()
  product_name: string;

  @ApiProperty()
  upc: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  product_country: string;

  @ApiProperty()
  ship_country: string;

  @ApiProperty()
  ship_state: string;

  @ApiProperty()
  shipping_estimate: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  ingredients: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  width: string;

  @ApiProperty()
  length: string;

  @ApiProperty()
  height: string;

  @ApiProperty()
  product_weight: string;

  @ApiProperty()
  ship_length: string;

  @ApiProperty()
  ship_height: string;

  @ApiProperty()
  ship_width: string;

  @ApiProperty()
  msrp: string;

  @ApiProperty()
  price_map: string;

  @ApiProperty()
  pack_of: string;

  @ApiProperty()
  qty_initial: string;

  @ApiProperty()
  qty_available: string;

  @ApiProperty()
  cost: string;

  @ApiProperty()
  channel_restriction: string;

  @ApiProperty()
  product_code: string;

  @ApiProperty()
  packing_fee: string;

  @ApiProperty()
  return: string;

  @ApiProperty()
  brand_name: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  section: string;

  @ApiProperty()
  age_group: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  variant_group_id: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  image_url: string;

  @ApiProperty()
  thumbnail_url: string;

  @ApiProperty()
  product_updated_at: string;
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

export class ListFavoritesResponseDto {
  @ApiProperty({ type: [FavoriteProductDto] })
  products: FavoriteProductDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
