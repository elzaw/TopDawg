import { ApiProperty } from '@nestjs/swagger';

class DepartmentDto {
  @ApiProperty({ description: 'Department ID' })
  id: number;

  @ApiProperty({ description: 'Title of the Department' })
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

export class ListDepartmentsResponseDto {
  @ApiProperty({ type: [DepartmentDto] })
  departments: DepartmentDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
