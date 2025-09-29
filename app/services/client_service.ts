import Client from '#models/cliente'

interface ClientData {
  name: string
  email: string
}

export default class ClientService {
  public static async getAll() {
    return Client.all()
  }

  public static async getById(id: number) {
    return Client.find(id)
  }

  public static async create(data: ClientData) {
    return Client.create(data)
  }

  public static async update(id: number, data: ClientData) {
    const client = await Client.find(id)
    if (!client) return null

    client.merge(data)
    await client.save()
    return client
  }

  public static async delete(id: number) {
    const client = await Client.find(id)
    if (!client) return false

    await client.delete()
    return true
  }
}
