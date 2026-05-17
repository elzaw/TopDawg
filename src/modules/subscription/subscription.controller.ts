import { Controller, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @Post('get-subscription')
  @ApiOperation({ summary: 'Get reseller subscription details (including integration_id)' })
  @ApiResponse({ status: 200, description: 'The subscription details.' })
  async getSubscription() {
    return this.subscriptionService.getSubscription();
  }
}
