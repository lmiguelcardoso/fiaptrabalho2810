import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import clientType from './utils/clients';



@Controller('register')
export class ClientsController {
    constructor(private readonly clientService:ClientsService){}
    @Post()
    register(@Body() cliente:clientType){
        return this.clientService.register(cliente)
    }
}
