import { TypeOrmModule } from '@nestjs/typeorm';
export default TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [],
  synchronize: true,
});
