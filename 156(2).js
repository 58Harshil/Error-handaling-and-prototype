const Product =(n,p,r)=>{
    this.name= n;
    this.price =p;
    this.rating=r;
}

const p = new Product("iphone",2500,6)
console.log(p);
