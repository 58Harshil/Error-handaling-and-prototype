class Product{
    name;
    price;
    rating;
    display(){
        console.log("Displaying the current product");
    }
}

const p = new Product();
console.log(p);
p.display();
