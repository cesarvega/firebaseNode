const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')({ origin: true });
const firebase = require('./my-firebase/index.js');
const firebaseProducts = require('./my-firebase/products.js');
const firebaseUsers = require('./my-firebase/user.js');
const firebaseCategory = require('./my-firebase/categoryByVendor');
const ItemModel = require('./models/item.js');
const ProductsModel = require('./models/products.js');
const UsersModel = require('./models/user.js');
const categoryByVendorModel = require('./models/category');
const bodyParser = require('body-parser');

const app = express();

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







/////////////////////////////////////////////////////////////////////category////////////////////////////////////////////////////////////////////////
app.get("/category/", (req, res) => {
	firebaseCategory.getAll().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.get("/category/item/:id", (req, res) => {
	firebaseCategory.get(req.params.id).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err);
	})
});

app.put("/category/", (req, res) => {	
	item = new categoryByVendorModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebaseCategory.update(req.body.id, item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
	
});

app.post("/category/", (req, res) => {
	item = new categoryByVendorModel(
		req.body.name,
        req.body.description,
        req.body.address,
        req.body.city,
        req.body.zipcode,
        req.body.state,
        req.body.contry,
        req.body.picture,
        req.body.member,
        req.body.active,
        req.body.phones,
        req.body.website
		);
	firebaseCategory.create(item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.delete("/category/item/:id", (req, res) => {
	firebaseCategory.delete(req.body.id).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
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
/////////////////////////////////////////////////////////////////////product////////////////////////////////////////////////////////////////////////

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
	item = new ProductsModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebaseProducts.update(req.body.id, item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
	
});

app.post("/product/", (req, res) => {
	item = new ProductsModel(
		req.body.name,
		req.body.active,
		req.body.availability,
		req.body.blinder,
		req.body.box_of,
		req.body.cigar_origin,
		req.body.cigar_ring_gauge,
		req.body.cigar_shape,
		req.body.description,
		req.body.filler,
		req.body.manufacturer,
		req.body.msrp,
		req.body.our_price,
        req.body.price,
        req.body.quantity_in_stock,
        req.body.regular_price,
		req.body.reviews,
		req.body.rolled_by,
        req.body.rolling_type,
        req.body.sale_price,
        req.body.shipping,
        req.body.single,
        req.body.single_packaging,
        req.body.sku,
		req.body.smoke_rings,
		req.body.stock,
        req.body.strength,
        req.body.upc,
        req.body.user_ratings,
        req.body.vendor_id,
        req.body.wrapper,
        req.body.wrapper_color,
        req.body.you_save
		);
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


/////////////////////////////////////////////////////////////////////user////////////////////////////////////////////////////////////////////////
app.get("/user/", (req, res) => {
	firebaseUsers.getAll().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.get("/user/item/:id", (req, res) => {
	firebaseUsers.get(req.params.id).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err);
	})
});

app.put("/user/", (req, res) => {	
	item = new UsersModel(req.body.name, req.body.description, req.body.price, req.body.salePrice);
	firebaseUsers.update(req.body.id, item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
	
});

app.post("/user/", (req, res) => {
	item = new UsersModel(
		req.body.name,
        req.body.description,
        req.body.address,
        req.body.city,
        req.body.zipcode,
        req.body.state,
        req.body.contry,
        req.body.picture,
        req.body.member,
        req.body.active,
        req.body.phones,
        req.body.website,
		);
	firebaseUsers.create(item.json).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});

app.delete("/user/item/:id", (req, res) => {
	firebaseUsers.delete(req.body.id).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
});


exports.app = functions.https.onRequest(app);
