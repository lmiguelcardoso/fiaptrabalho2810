import { Injectable } from '@nestjs/common';
import clientType from './utils/clients';


@Injectable()
export class ClientsService {
    register(cliente:clientType): string{
        return `Cliente ${cliente.name} cadastrado com sucesso!`
    }
}
