import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto, SignupDto, UpdateDto } from 'src/dto';

@Injectable()
export class UserService {
  constructor (private auth:AuthService) {} 

  login (dto:LoginDto) {
    return this.auth.login(dto)
  }

  signup (dto:SignupDto) {
    return this.auth.signup(dto)
  }

  update (payload:object , dto:UpdateDto) {
    return this.auth.update(payload,dto)
  }

  delete (payload:object) {
    return this.auth.delete(payload)
  }

  profile (payload:object) {
    return this.auth.profile(payload)
  }
}
