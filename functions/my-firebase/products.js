/*
	This file includes functions that will be used to access Firestore. The API will use this functions to
	perform CRUD operations on Firestore DB
*/

const admin = require('firebase-admin');

/*
	Initializing the App
	There are multiple ways of initializing. In this method, serviceAccount token is generated using Firebase
	console. Its advantage is that the server can be deployed anywhere (including aws, Heroku etc) but still
	we will be able to access our firestore that is on Firebase
*/


const db = admin.firestore();

let collectionName = "cigars";

let funcs_ = {
	"create" : (item) => {
		return new Promise((resolve, reject) => {
			db.collection(collectionName).add(item).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		});
	},
	"get" : (id) => {
		console.log(id);
		let data = new Object();
		return new Promise((resolve, reject) => {
			db.collection(collectionName).doc(id).get().then(doc => {
				data[doc.id] = doc.data();
				resolve(data);
			}).catch(err => {
				reject(err);
			})
		})
	},
	"getAll" : () => {
		let data = new Object();
		return new Promise((resolve, reject) => {
			db.collection(collectionName).get().then(docs => {
				docs.forEach(doc => {
					data[doc.id] = doc.data();
				});
				resolve(data);
			}).catch(err => {
				reject(err);
			})
		})
	},
	"update" : (id, item) => {
		return new Promise((resolve, reject) => {
			db.collection(collectionName).doc(id).set(item).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		});
	},
	"delete" : (id) => {
		return new Promise((resolve, reject) => {
			db.collection(collectionName).doc(id).delete().then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		});
	}
}

module.exports = funcs_;