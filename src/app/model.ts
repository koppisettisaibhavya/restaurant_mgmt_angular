export interface Upload{
  _id?:string,
    item_name:string,
    item_type:string,
      qty_avail:number,
      desc:string,
      price:number,
      img:Blob
}
export interface orderitem{
  name:string,
  qty:number,
  price:number,
  cost:number,
  total:number
}
export interface registeruser{
  email:string,
  dob:Date,
  password:string,
  cpassword?:string,
  check?:string
}
export interface loginuser{
  email:string,
  password:string,
  check?:string
}
export interface LoginResponse {
  message : string,
  token : string
}
export interface storeorder{
  email:string;
  date:string;
  order:Array<orderitem>;
  total:number
}