import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import GatewaysController from'#controllers/gateways_controller'
import clientsController from '#controllers/ClientsController'

router.resource('gateways', GatewaysController)


// Users Routes
router.get('/users', [UsersController, 'index'])
router.post('/users', [UsersController, 'store'])
router.get('/users/:id', [UsersController, 'show'])
router.put('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'destroy'])

// gateways Routes

router.get('/gateways', [GatewaysController, 'index'])
router.post('/gateways', [GatewaysController, 'store'])
router.get('/gateways/:id', [GatewaysController, 'show'])
router.put('/gateways/:id', [GatewaysController, 'update'])
router.delete('/gateways/:id', [GatewaysController, 'destroy'])

// Clients Routes
router.get('/clients', [clientsController, 'index'])
router.post('/clients', [clientsController, 'store'])
router.get('/clients/:id', [clientsController, 'show'])
router.put('/clients/:id', [clientsController, 'update'])
router.delete('/clients/:id', [clientsController, 'destroy'])