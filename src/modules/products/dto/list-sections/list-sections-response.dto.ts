import { ApiProperty } from '@nestjs/swagger';

class SectionDto {
  @ApiProperty({ description: 'Section ID' })
  id: number;

  @ApiProperty({ description: 'Title of the Section' })
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

export class ListSectionsResponseDto {
  @ApiProperty({ type: [SectionDto] })
  sections: SectionDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
