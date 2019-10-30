class ProductsModel {
    constructor(
        name,
        active,
        availability,
        blinder,
        box_of,
        cigar_origin,
        cigar_ring_gauge,
        cigar_shape,        
        description,
        filler,
        manufacturer,
        msrp,
        our_price,
        price,
        quantity_in_stock,
        regular_price,
        reviews,
        rolled_by,
        rolling_type,
        sale_price,
        shipping,
        single,
        single_packaging,
        sku,
        smoke_rings,
        stock,
        strength,
        upc,
        user_ratings,
        vendor_id,
        wrapper,
        wrapper_color,
        you_save
    ) {
        this.data = new Object();
        this.data.name = name;
        this.data.active = active;
        this.data.availability = availability;
        this.data.blinder = blinder;
        this.data.box_of = box_of;
        this.data.cigar_origin = cigar_origin;
        this.data.cigar_ring_gauge = cigar_ring_gauge;
        this.data.cigar_shape = cigar_shape;
        this.data.description = description;
        this.data.filler = filler;
        this.data.manufacturer = manufacturer;
        this.data.msrp = msrp;
        this.data.our_price = our_price;
        this.data.price = price;
        this.data.quantity_in_stock = quantity_in_stock;
        this.data.regular_price = regular_price;
        this.data.reviews = reviews;
        this.data.rolled_by = rolled_by;
        this.data.rolling_type = rolling_type;
        this.data.sale_price = sale_price;
        this.data.shipping = shipping;
        this.data.single = single;
        this.data.single_packaging = single_packaging;
        this.data.sku = sku;
        this.data.smoke_rings = smoke_rings;
        this.data.stock = stock;
        this.data.strength = strength;
        this.data.upc = upc;
        this.data.user_ratings = user_ratings;
        this.data.vendor_id = vendor_id;
        this.data.wrapper = wrapper;
        this.data.wrapper_color = wrapper_color;
        this.data.you_save = you_save;
        this.data.date_created = Date.now();
    }
    get json() {
        return this.data;
    }
};

module.exports = ProductsModel;