declare module '@adonisjs/core/http' {
  interface Request {
    extraInfo?: {
      userId: number
      email: string
      role?: string
      requestTime: Date
    }
  }
}
