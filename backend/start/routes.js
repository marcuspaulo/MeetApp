'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('password', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.post('events', 'EventController.store').validator('Event')
Route.get('events', 'EventController.index')
Route.get('events/:id', 'EventController.show')
Route.put('events/:id', 'EventController.update')
Route.delete('events/:id', 'EventController.destroy')

Route.post('/banners', 'BannerController.store')
