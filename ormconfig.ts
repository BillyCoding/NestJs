import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './src/users/user.entity';

export default TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'nestdb',
  entities: [User],
  synchronize: true,
});
