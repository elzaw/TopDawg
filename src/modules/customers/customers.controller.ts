import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { ListCustomersDto } from './dto/list-customers/list-customers.dto';
import { ListCustomersResponseDto } from './dto/list-customers/list-customers-response.dto';
import { ViewCustomerDto } from './dto/view-customer/view-customer.dto';
import { ViewCustomerResponseDto } from './dto/view-customer/view-customer-response.dto';
import { UpdateCustomerDto } from './dto/update-customer/update-customer.dto';
import { UpdateCustomerResponseDto } from './dto/update-customer/update-customer-response.dto';
import { CreateCustomerDto } from './dto/create-customer/create-customer.dto';
import { CreateCustomerResponseDto } from './dto/create-customer/create-customer-response.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Post('list')
  @ApiOperation({ summary: 'List reseller customers with pagination' })
  @ApiResponse({ status: 200, description: 'Return a paginated list of customers.', type: ListCustomersResponseDto })
  listCustomers(@Body() dto: ListCustomersDto) {
    return this.customersService.listCustomers(dto);
  }

  @Post('view')
  @ApiOperation({ summary: 'View reseller customer details by ID' })
  @ApiResponse({ status: 200, description: 'Return detailed customer information.', type: ViewCustomerResponseDto })
  viewCustomer(@Body() dto: ViewCustomerDto) {
    return this.customersService.viewCustomer(dto);
  }

  @Post('update')
  @ApiOperation({ summary: 'Update reseller customer details (including address details)' })
  @ApiResponse({ status: 200, description: 'Return status and customer validation errors if any.', type: UpdateCustomerResponseDto })
  updateCustomer(@Body() dto: UpdateCustomerDto) {
    return this.customersService.updateCustomer(dto);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new reseller customer (with nested address validation)' })
  @ApiResponse({ status: 201, description: 'Return status and created customer details.', type: CreateCustomerResponseDto })
  createCustomer(@Body() dto: CreateCustomerDto) {
    return this.customersService.createCustomer(dto);
  }
}
