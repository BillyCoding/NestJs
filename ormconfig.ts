import { TypeOrmModule } from '@nestjs/typeorm';
export default TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'nestdb',
  entities: [],
  synchronize: true,
});
