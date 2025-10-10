import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'

// Prefixo /auth
router.group(() => {
  router.post('/register', [AuthController, 'register'])
  router.post('/login', [AuthController, 'login'])
  router.post('/logout', [AuthController, 'logout']).middleware(['auth'])
  router.get('/me', [AuthController, 'me']).middleware(['auth'])
}).prefix('/auth')
