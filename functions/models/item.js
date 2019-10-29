class itemModel {
	constructor(name, description, price, salePrice){
		this.data = new Object();
		this.data.name = name;
		this.data.description = description;
		this.data.price = price;
		this.data.salePrice = salePrice;
		this.data.dateCreated = Date.now();
	}
	get json(){
		return this.data;
	}
};

module.exports = itemModel;