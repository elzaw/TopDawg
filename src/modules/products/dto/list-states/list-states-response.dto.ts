import { ApiProperty } from '@nestjs/swagger';

class StateDto {
  @ApiProperty({ description: 'State Name' })
  name: string;

  @ApiProperty({ description: 'State Code' })
  state_code: string;
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

export class ListStatesResponseDto {
  @ApiProperty({ type: [StateDto] })
  states: StateDto[];

  @ApiProperty()
  pagination: PaginationMetadataDto;
}
