import { IsString, IsDate } from 'class-validator';

export class ResponseDTO {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsDate()
  birtday: Date;
  @IsString()
  password: string;
}

export class ResponseNull {
  message: string;
}
