import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        fullName: 'Marco Aurélio Junqueira Alcino',
        email: 'marco@email.com',
        password: '123456'
      },
      {
        fullName: 'admin',
        email: 'admin@email.com',
        password: 'admin123'
      }
    ])
  }
}