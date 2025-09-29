import Gateway from '#models/gateway'

interface GatewayData {
  name: string
  isActive: boolean
  priority: number
}

export default class GatewayService {
  public static async getAll() {
    return Gateway.all()
  }

  public static async getById(id: number) {
    return Gateway.find(id)
  }

  public static async create(data: GatewayData) {
    return Gateway.create(data)
  }

  public static async update(id: number, data: GatewayData) {
    const gateway = await Gateway.find(id)
    if (!gateway) return null

    gateway.merge(data)
    await gateway.save()
    return gateway
  }

  public static async delete(id: number) {
    const gateway = await Gateway.find(id)
    if (!gateway) return false

    await gateway.delete()
    return true
  }
}
