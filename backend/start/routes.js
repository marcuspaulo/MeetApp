'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')

Route.put('users', 'UserController.update')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('password', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.resource('events', 'EventController').apiOnly()
//.middleware('auth')

Route.get('/listMyOwnEvents', 'EventController.listMyOwnEvents').middleware('auth')

Route.post('subscribers/:eventId/event', 'SubscriptionController.store').middleware('auth')

Route.get('/banners/:id', 'BannerController.show')
Route.post('/banners', 'BannerController.store')

Route.resource('permission', 'PermissionController').apiOnly().middleware('auth')
