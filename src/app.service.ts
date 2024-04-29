import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateProspects(data: {
    name: string,
    email: string,
    cpf: string,
    lastName: string,
    cellphone: string,
    birthday?: string
  }) {
    try {
      const res = await axios.post('https://evo-integracao.w12app.com.br/api/v1/prospects', data, {headers: {
        Authorization: 'Basic c3R1ZGlvZXZvbHV0aW9uOjI1RTJDNTI5LTRDODYtNERDNy05NjczLTcxRTRDMTlDNjhDNw==',
      }}).then(res => res.data);

      return {
        success: true,
        data: res,
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}