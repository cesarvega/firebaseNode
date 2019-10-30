class categoryByVendorModel {
	constructor(
        name,
        description,
        address,
        city,
        zipcode,
        state,
        contry,
        picture,
        member,
        active,
        phones,
        website
        )
        {
		this.data = new Object();
		this.data.name = name;
        this.data.description = description;
        this.data.address = address;
        this.data.city = city;
        this.data.zipcode = zipcode;
        this.data.state = state;
        this.data.contry = contry;
        this.data.picture = picture;
        this.data.member = member;
        this.data.active = active;
        this.data.phones = phones;
        this.data.website = website;
		this.data.dateCreated = Date.now();
	}
	get json(){
		return this.data;
	}
};

module.exports = categoryByVendorModel;