import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { AppService } from './app.service';
import { Query } from "@nestjs/common";

@Controller('/api')
export class AppController {

    constructor(private AppService: AppService) {}
    @Get('/leads')
    async getUsers(@Query('query') query: string) {
        return this.AppService.getLeads(query)
    }
}