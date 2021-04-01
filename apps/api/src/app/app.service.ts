import { Injectable } from '@nestjs/common';
import { Message } from '@sample-angular-nx-ngrx-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
