import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { ListOrdersDto } from './dto/list-orders/list-orders.dto';
import { ListOrdersResponseDto } from './dto/list-orders/list-orders-response.dto';
import { ViewOrderDto } from './dto/view-order/view-order.dto';
import { ViewOrderResponseDto } from './dto/view-order/view-order-response.dto';
import { CreateOrderDto } from './dto/create-order/create-order.dto';
import { CreateOrderResponseDto } from './dto/create-order/create-order-response.dto';
import { UpdateOrderDto } from './dto/update-order/update-order.dto';
import { UpdateOrderResponseDto } from './dto/update-order/update-order-response.dto';
import { ProcessOrderDto } from './dto/process-order/process-order.dto';
import { ProcessOrderResponseDto } from './dto/process-order/process-order-response.dto';
import { CancelOrderDto } from './dto/cancel-order/cancel-order.dto';
import { CancelOrderResponseDto } from './dto/cancel-order/cancel-order-response.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('list')
  @ApiOperation({ summary: 'List reseller orders with pagination and date/status filters' })
  @ApiResponse({ status: 200, description: 'Return a paginated list of orders matching filters.', type: ListOrdersResponseDto })
  listOrders(@Body() dto: ListOrdersDto) {
    return this.ordersService.listOrders(dto);
  }

  @Post('view')
  @ApiOperation({ summary: 'View reseller order details (including parcels tracking)' })
  @ApiResponse({ status: 200, description: 'Return detailed order information and parcels tracking.', type: ViewOrderResponseDto })
  viewOrder(@Body() dto: ViewOrderDto) {
    return this.ordersService.viewOrder(dto);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new reseller order' })
  @ApiResponse({ status: 201, description: 'Return created order details including ID and processing status.', type: CreateOrderResponseDto })
  createOrder(@Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(dto);
  }

  @Post('update')
  @ApiOperation({ summary: 'Update an existing un-processed reseller order' })
  @ApiResponse({ status: 200, description: 'Return updated order details including ID and current processing status.', type: UpdateOrderResponseDto })
  updateOrder(@Body() dto: UpdateOrderDto) {
    return this.ordersService.updateOrder(dto);
  }

  @Post('process')
  @ApiOperation({ summary: 'Process an existing order (generate shipping and capture payment)' })
  @ApiResponse({ status: 200, description: 'Return status result of sending order to processing queue.', type: ProcessOrderResponseDto })
  processOrder(@Body() dto: ProcessOrderDto) {
    return this.ordersService.processOrder(dto);
  }

  @Post('cancel')
  @ApiOperation({ summary: 'Cancel an existing reseller order' })
  @ApiResponse({ status: 200, description: 'Return cancellation outcome details.', type: CancelOrderResponseDto })
  cancelOrder(@Body() dto: CancelOrderDto) {
    return this.ordersService.cancelOrder(dto);
  }
}
