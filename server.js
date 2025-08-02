const express = require( 'express' );

const app = express();

const users = [{
	id: 1,
	name: 'mohamed',
	age: 22,
}, {
	id: 2,
	name: 'ibrahim',
	age: 40,
}];

app.get( '/:id', ( req, res ) => {
	const id = parseInt( req.params.id );
	console.log( typeof id );
	const user = users.find( u => u.id === id );
	res.json( user );
} );

app.get('/',(req, res) => {
	// // get all mobiles
	// console.log(req.query.type);
	// // select * from products where type is equal mobile
	console.log(req.headers);
	res.send('all users')
	
})

app.get( '/posts', ( req, res ) => {
	res.send( 'this is all posts from backend' );
} );

// app.post('/login', (req, res)=>{
// 	const usersData = req.
//
// 	// create user from data userData
// })

const port = 3000;
app.listen( port, () => {
	console.log( 'server is running on port 3000' );
} );

//? Request
//?
//?
//? params -> :
//? query -> ?
//? body ->
//? headers ->
//?

// jwt -> key => expiration time