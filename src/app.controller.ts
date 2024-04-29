import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('prospects')
  generateProspects(@Body() body: {
    name: string,
    email: string,
    cpf: string,
    lastName: string,
    cellphone: string,
    birthday?: string
  }) {
    return this.appService.generateProspects(body);
  }
}