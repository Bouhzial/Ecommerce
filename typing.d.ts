export interface Products {
    _createdAt: String,
    _id: String,
    _rev: String,
    _type: String,
    _updatedAt: String,
    details: String,
    image: Images[],
    name: String,
    price: number,
    slug: Slug,
}
interface Images{
    asset:{_ref:String,_type:String}
_key: String
_type: String
}
interface Slug {
    _type:String,
    current:String,
}
export interface Banner {
    _createdAt: String,
    _id: String,
    _rev: String,
    _type: String,
    _updatedAt: String,
    image: Image,
}
interface Image {
    _type:String,
    asset? :HTMLImageElement,
}