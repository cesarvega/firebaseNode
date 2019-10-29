const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')({ origin: true });
const firebase = require('./my-firebase/index.js');
const firebaseProducts = require('./my-firebase/products.js');
const ItemModel = require('./models/item.js');
const bodyParser = require('body-parser');

const app = express();
var origin;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', '*');
		return res.status(200).json({});
	}
	next();
})

app.get("/view", (req, res) => {
	console.log("Hello World");
	res.sendFile(__dirname + "/test_pages/view.htm");
});

app.get("/", (req, res) => {
	firebase.getAll().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.get("/item/:id", (req, res) => {
	firebase.get(req.params.id).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err);
	})
});


app.put("/", (req, res) => {	
	item = new ItemModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebase.update(req.body.id, item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})	
});

app.post("/", (req, res) => {
	item = new ItemModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebase.create(item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.delete("/item/:id", (req, res) => {
	firebase.delete(req.body.id).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});


app.get("/product/", (req, res) => {
	firebaseProducts.getAll().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.get("/product/item/:id", (req, res) => {
	firebaseProducts.get(req.params.id).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err);
	})
});

app.put("/product/", (req, res) => {	
	item = new ItemModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebaseProducts.update(req.body.id, item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
	
});

app.post("/product/", (req, res) => {
	item = new ItemModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebaseProducts.create(item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.delete("/product/item/:id", (req, res) => {
	firebaseProducts.delete(req.body.id).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});



exports.app = functions.https.onRequest(app);
