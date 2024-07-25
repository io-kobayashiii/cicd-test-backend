import { Controller, Get } from '@nestjs/common';

@Controller('api/health')
export class HealthController {
  @Get()
  getHealth(): string {
    return "OK"
  }
}
