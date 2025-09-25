import { BaseCommand } from '@adonisjs/core/ace'
import { args } from '@adonisjs/core/ace'
import { join } from 'node:path'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'

export default class MakeService extends BaseCommand {
  static commandName = 'make:service'
  static description = 'Cria um service em app/services'

  @args.string({ description: 'Nome do service' })
  declare name: string

  async run() {
    const servicesPath = join(process.cwd(), 'app', 'services')
    if (!existsSync(servicesPath)) {
      mkdirSync(servicesPath, { recursive: true })
    }

    const filePath = join(servicesPath, `${this.name.toLowerCase()}_service.ts`)

    const content = `export default class ${this.capitalize(this.name)}Service {
  public async example() {
    return 'Service ${this.name} funcionando 🚀'
  }
}
`

    writeFileSync(filePath, content)
    this.logger.success(`Service criado: ${filePath}`)
  }

  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}
