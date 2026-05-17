import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShippingService } from './shipping.service';
import { CreateShippingEstimateDto } from './dto/create-shipping-estimate/create-shipping-estimate.dto';
import { CreateShippingEstimateResponseDto } from './dto/create-shipping-estimate/create-shipping-estimate-response.dto';

@ApiTags('shipping')
@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post('create')
  @ApiOperation({ summary: 'Retrieve shipping cost estimations based on product TDID and destination' })
  @ApiResponse({ status: 201, description: 'Return shipping cost estimations and duration.', type: CreateShippingEstimateResponseDto })
  createShippingEstimate(@Body() dto: CreateShippingEstimateDto) {
    return this.shippingService.createShippingEstimate(dto);
  }
}
