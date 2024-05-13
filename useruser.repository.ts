import { User } from 'src/user/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // You can add custom methods for user operations here
}
