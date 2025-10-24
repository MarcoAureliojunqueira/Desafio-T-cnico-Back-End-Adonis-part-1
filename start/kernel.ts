import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

server.errorHandler(() => import('#exceptions/handler'))

server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
])   

// ✅ Aqui vem a parte essencial:
export const middleware = {    
  named: {
    // @ts-ignore: module has no type declarations in this project
    auth: () => import('@adonisjs/auth/middleware'), // ← este é o caminho certo
  },
}   
