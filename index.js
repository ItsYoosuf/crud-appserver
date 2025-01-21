const jsonServer = require('json-server')

const UserServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

UserServer.use(middleware)
UserServer.use(route)

UserServer.listen(PORT,()=>{
    console.log(`UserServer started at port:${PORT} `);
    
})