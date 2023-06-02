let myHeros  = ["thor","spiderman"]
let dcHeros = ["batman","flash","superman"]
let heropower = {
    thor:"hammer",
    sipderman:"sling",

    getSpidermanPower: function(){
       console.log('Spider power is ' (this.spiderman));
    }
}

Object.prototype.hitsh = function(){
   console.log('hitesh is presenting all object here');
}

console.log(myHeros.hitsh());
console.log(heropower.hitsh());

Array.prototype.heyHitesh = function(){
    console.log('hitesh say hi');
}

//console.log(myHeros.heyHitesh());
//console.log(heropower.heyHitesh());



const User = {
    nmae: 'top names',
    email: 'top@gmail.com'
}

const Teacher = {
    makevideos: true
}

const TeachingSupport ={
  isAvarable: false
}

const TAAssistan ={
    makeAssigment:"JS Assigment",
    fulltime: true,
    __proto__:TeachingSupport
}
//Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TAAssistan.isAvarable);



String.prototype.truelength = function(){
    console.log('true length is' (this.trim().length));
}

"HArshil   ".truelength()
