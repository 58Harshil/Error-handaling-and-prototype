class Product{
    name;
    price;
    rating;

    constructor(n,p,r){
        console.log("Calling the constructor");
        this.name= n;
        this.price =p;
        this.rating=r;
        //return 10
    }

    display(){
        //console.log(this);
       // console.log("Displaying the current product");
    }
}

const p = new Product('Iphone',10000,5);
console.log(p);
//p.display();

let x= {
    p: Product
};
x.p("Airpods",1500,6)
console.log(x);
