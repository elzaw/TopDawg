import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SubscriptionService {

    constructor(private readonly httpService: HttpService,
        private readonly configService: ConfigService,) { }

    async getSubscription() {
        const baseUrl = this.configService.get<string>('TOPDAWG_BASE_URL');
        const token = this.configService.get<string>('TOPDAWG_ACCESS_TOKEN');

        const url = `${baseUrl}/TDApi/Reseller/subscription/`;

        console.log('Calling TopDawg API (Subscription):', url);

        try {
            const response = await lastValueFrom(
                this.httpService.post(url, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                }),
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('TopDawg API Error Response:', error.response.data);
                throw error;
            }
            throw error;
        }
    }
}
