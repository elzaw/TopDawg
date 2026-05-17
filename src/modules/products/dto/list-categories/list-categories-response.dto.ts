import { ApiProperty } from '@nestjs/swagger';

class CategoryDto {
  @ApiProperty({ description: 'Category ID' })
  id: number;

  @ApiProperty({ description: 'Title of the Category' })
  title: string;
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

export class ListCategoriesResponseDto {
  @ApiProperty({ type: [CategoryDto] })
  categories: CategoryDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
