'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('books', 'BookController.store')
  Route.get('books', 'BookController.index')
  Route.get('books/:id', 'BookController.show')
  Route.put('books/:id', 'BookController.update')
  Route.delete('books/:id', 'BookController.delete')
}).prefix('api/v1')
