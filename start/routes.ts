import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'

// Users Routes
router.get('/users', [UsersController, 'index'])
router.post('/users', [UsersController, 'store'])
router.get('/users/:id', [UsersController, 'show'])
router.put('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'destroy'])

// gateways Routes

router.get('/gateways', [UsersController, 'index'])
router.post('/gateways', [UsersController, 'store'])
router.get('/gateways/:id', [UsersController, 'show'])
router.put('/gateways/:id', [UsersController, 'update'])
router.delete('/gateways/:id', [UsersController, 'destroy'])