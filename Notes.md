## 68 Higher Order Functions

Definition: A function that returns a function
Tell it what data to use + function

### Example

function sing(person){
return 'la la la' + person.name
}
letPerson(person,fn){
if (person.level === 'admin'){
return fn(person)
} else if (person.level === 'user'){
return fn(person)
}
}
letPerson({level: 'admin', name: 'Tim'},sing)

## 69 Higher Order Functions Example

### Example

const multiplyBy = function(num1) {
return function(num2) {
return num1*num2
}
}

const multiplyByTwo = multiplyBy(2) //Now multiplyByTwo is this function: function(X){return 2*X}

Same as: multiplyBy = (num1) => (num2) => num1*num2

multiplyBy(4)(6) //This was the objective!

## 70 Closures

Closure if unique to JS //Really?
JS is lexically scoped and keeps track of the scope chain
Functions that return functions + lexical scope
Where we write the function matters

## 71 Exercise Closures

const not hoisted!
function callMeMayBe(){
setTimeout(function(){
console.log(callme)
},4000)
const callMe = 'Hi I am here //Even though not hoisted, by the time setTimeout callback is triggered callme becomes available
}
callMeMayBe()

## 72 Closures and Memory

Closures are great because:

1. Memory efficient
2. Provide encapsulation

function heavyDuty2(){
const bigArr = new Array(7000).fill(':)')
return function(index){
return bigArr[index]
}
}

const = getHeavyDuty = heavyDuty2()
getHeavyDuty(500)
getHeavyDuty(5000)
getHeavyDuty(6000)
//bigArr is only created once and then reused via the function it returns - nice!

## 73 Closures and Encapsulation

A very good example with setTimers
const makeNuclearButton = () => {
let timeWithoutDestruction = 0;
const passTime = () => timeWithoutDestruction++;
const totalPeaceTime = () => timeWithoutDestruction;
const launch = () => {
timeWithoutDestruction = -1;
return '💥';
}

setInterval(passTime, 1000);
return {totalPeaceTime}
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime()

## 74 Exercise 2 Closures

## 75 Exercise 2 Closures

let view;
function initialize() {
let called = 0;
return function() {
if (called > 0) {
return
} else {
view = '🏔';
called = true;
console.log('view has been set!')
}
}
}

const start = initialize();
start();
start();
start();
console.log(view)

## 76 77 Exercise: Closures 3

let creates a new scope for each "i"
OR create with IIF - immediately invoked function

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
(function(closureI) {
setTimeout(function(){
console.log('I am at index ' + array[closureI])
}, 3000)
})(i)
}

## 78 Closures Review

function and lexical scope

## 79 Prototypal Inheritence

Arrays and functions are objects
Array gets access to methods and properties of objects
Function gets access to methods and properties of objects
array.**proto**
array.**proto**.**proto**
class is sytactic sugar. no class in js

## 80 Protypal inheritence 2

## 81 Protypal inheritence 3

lizard.**proto** = dragon
"inherit everything from dragon but overwite whatever lizard already has!"
"I don't see sing() here, then I need to go up the property chain!"
dragon.isPrototypeOf(lizard) //true
for (let prop in lizard) {
if (lizard.hasOwnProperty(prop)) {
console.log(prop)
}
}
All those inherited properties refer to the SAME place in memory - only one instance of the method!

## 82 Protypal inheritence 4

obj.**proto**.**proto** //null "null pointer - nothing more!"
multiplyBy5.**proto** POINTS TO Function.prototype WHICH IS BASE OBJECT
Object.prototype.**proto**
**proto** is a reference to up the chain prototype
array = []
array.**proto**.hasOwnProperty('map') //true
Array.prototype // [BASE ARRAY]
array.**proto** //[BASE ARRAY]

## 83 Protypal inheritence
let human = {
mortal: true
}
let socrates = Object.create(human)
console.log(human.isPrototypeOf(socrates)) //true

## 84 Prototypal inheritence 6
Only functions have the prototype property
Object is a function, however Object.prototype is an object (as the base object)
Functions has a prototype ONLY
'string'.prototype //undefined
String.prototype //yes! but actually it is first converted to string and then all the methods become available
**proto** ALWAYS point to prototype. And ONLY functions has a prototype

## 85 Exercise
## 86 Solution
Date.prototype.lastYear = function(){
return this.getFullYear()-1
}

Array.prototype.map = function(){
let arr = []
for (let i=0; i<this.length; i++){
arr.push((this[i]+'boom'))
}
return arr
}

## 87 Another Example
## 88 Section Review
Function.prototype.bind = function(whoIsCallingMe){
const self = this;
return function(){
return self.apply(whoIsCallingMe, arguments);
};
}

MULTI PARADIGM! Based on Closures and Prototypal inheritence
## 89 OOP and FP
## 90
Clear understandable
Easy to extend
Easy to maintain
Memory efficient
DRY

Data and functions are different
## 91 OOP
## 92
Encapsulation
state
data
//factory functions
const elfFunctions = {
attack(){
        return "attack with" + this.weapon
    }
}
function createElf(name,weapon){
    name,
    weapon
}

const peter = createElf('Peter','bow')
peter.attack = elfFunctions.attack
## 93 Object.create
const elfFunctions = {
    attack(){
        return 'attack with' + this.weapon
    }
}
function createElf(name,weapon){
    let newElf = Object.create(elfFunctions)
    newElf.name = name
    newElf.weapon = weapon
    return newElf
}

now we have object.__proto__

## 94 OOP - constructor functions
## 95
//Constructor function
function Elf(name,weapon){
    this.name = name,
    this.weapon = weapon
}

Elf.prototype.attack = function(){
    return 'attack with' + this.weapon
}

const peter = new Elf('Peter','stone')

## 96 Funny
new Date() //has lots of methods!
difference b/w == and === when it comes to using a=5 and b=new Number(5)

## 97 ES6 Classes
class Elf {
    constructor(name,weapon){
        this.name = name,
        this.weapon = weapon
    }
    attack(){
        return 'attack with' + this.weapon
    }
}
const peter = new Elf('Peter','fire')
console.log( peter instanceOf Elf)

## 98 ES6 Classes
we can achieve the same with Object.create()

## 99 this - 4 ways
//new binding this
function Person(name,age){
    this.name = name,
    this.age = age
}
const person1 = new Person('Tom',44)

//implicit binding this
const person = {
    name: 'Karen',
    age: 40,
    hi(){
        return 'hi + this.name
    }
}

//explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function(){
        return 'hi' + this.setTimeout
    }.bind(window)
}

//arrow functions: lexical scoping - whereever we write
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function(){
        var inner = () => {
            console.log('hi' + this.name)
        }
        return inner()
    }
}
person4.hi()

## 100 Inheritence
## 101
class Character{
    constructor(name,weapon){
        this.name = name,
        this.weapon = weapon
    }
    attack(){
        return 'attack with' + this.weapon
    }
}
class Elf extends Character{
    constructor(name,weapon,type){
        super(name,weapon)
        this.type = type
    }
}
class Oger extends Character{
    constructor(name,weapon,color){
        super(name,weapon)
        this.color = color
    }
    makeFort(){ //only available to Ogers
        return 'some text'
    }
}
const shrek = new Ogre('Shrek','club','green')
//Above is same as Ogre.prototype.makeFort = ...
console.log(Ogre.isPrototypeOf(shrek)) //false!
console.log(Ogre.prototype.isPrototypeOf(shrek)) //true
console.log(shrek instanceOf Ogre) //true
## 102 Public vs private
private function(){
    //....//
}
## 103 OOP in React.js
## 104 4 pillars of OOP
Encapsulation
Abstraction
Inheritence
Polymorphism : Method overriding or overloading a method for derived classes. Customize or adapts methods in classes
## 105 Exercise
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Queen extends Character { 
  constructor(name, weapon, kind) {
    super(name, weapon) 
    this.kind = kind;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `
  }
}

const victoria = new Queen('Victoria', 'army', 'hearts');
victoria.attack()
## 106 Review
## 107 Functional Programming
## 108 
Simplicity. data and functional are seperated.
operate in well defined objects
same principles
PURE FUNCTIONS (seperation in between data and function)
IMMUTABLE - avoid shared state
## 109
## 110 Pure Functions
//No side effects
does it modify anything outside of itself?
function a() {
    console.log('hi) //side effects in outside world!
}
//same input => same output
referential transperancy

easy to test. no shared state, no mutation
very small, very predictable, one task only!
1 task
return statement
pure
no shared state
immutable state
composable
predictable

## 113 Idompotent
guarantee that code returns the same!
## 114 Imperative vs declerative
I - what to do and how to do (machine code is imperetive)
D  - what to do and what should happen (humans are declerative)

for (let i=0;...) //impretive
arr.map(...) /declerative

functional programming helps us being DECLERATIVE (a level higher)
## 115 Immutability
Not changing the data. Not changing the state.
## HOF and Closures
//HOF
Functions that takes a function as an argument
OR Functions that returns functions
const hof = () =() =>5
//same as above
const hof = function(){
    return function(){
        return 5
    }
}
hof() // a function
hof()() //5

cons hof2 = function(fn){
    return function{
        return fn
    }
}
hof2(function a(x){return x})

//CLOSURES
Use it for data privacy
## 117 Currying
you modify the function so that it gets only 1 parameter/input
usual world:
const multiply =(a,b) => a*b

curried version:
const curriedMultiply = (a) => (b) => a*b
now we can say:
const curriedMultipliedBy5 = curriedMultiply(5)
//after 10 years
curriedMultipliedBy5(4) //20 - saves memory!
## 118 Partial Application
Producing a function for some of its parts
" I am expecting the 2nd and 3rd in the second call" not like currying one-by-one
const multiply = (a,b,c) => a*b*c
const partialMultiplyBy5 = multiply.bind(null,5)
partialMultiplyBy5(4,10)
## 119
## 120 Memoization
## 121 
it is caching the return value and providing that in the next call if exists. so that you don't have to calculate again

let cache ={}
function memoizationAddTo80(n){
    if (n in cache) {
        return cache[n]
    } else {
        cache[n] = n + 80
        return cache[n]
    }
}

or even better:
function memoizationAddTo80(){
    let cache ={}
    return function(n){
        if (n in cache) {
            return cache[n]
        } else {
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizationAddTo80()
memoized(5)
## 122 Compose and Pipe
Composability: System design principle
Just like assembly line!

const compose = (f,g) => (data) => f(g(data))
//same as above
function compose(f,g){
    return function(data){
        return g(f(data))
    }
}
//then
const multiplyBy3 = (num) => num*3
const makePositive = (num) => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive)
multiplyBy3AndAbsolute(-50) //150

//pipe - the order is the other way around
compose right to left
pipe left to right
## 123 Arity
Arity: number of arguments it takes
## 124
## 125 Amazon example
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const history1 = [];

// const pipe = (f, g) => (...args) => g(f(...args))
// const purchaseItem2  = (...fns) => fns.reduce(pipe);
// purchaseItem2(
//   addItemToCart,
//   applyTaxToItems,
//   buyItem,
//   emptyUserCart,
// )(user, {name: 'laptop', price: 60})


const compose = (f, g) => (...args) => f(g(...args))
const purchaseItem  = (...fns) => fns.reduce(compose);
purchaseItem(
   emptyUserCart,
   buyItem,
   applyTaxToItems,
   addItemToCart
 )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {
  history1.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
  history1.push(user)
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart });
}
function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}
function refundItem() {}
function getUserState() {}
function goBack() {}
function goForward() {}
## 126 
Extension/Inheritence vs Composure
// Classes
//Inheritence - super class - it can easily go out of hand!
//What it is
//Rippling affect
//Tightcoupling - fragile base class problem
//Hierarchy problem
// classic gorilla-banana problem

//Composition
//What it does to data? What it is? What its abilities are?

function getAttack(character){
    return Object.assign({},character,{attackFn: ()=>return "attack" + this.weapon})
}
function Elf(name,weapon,type){
    let elf = {
        name,
        weapon,
        type
    }
    return getAttack(elf)
}
## 127 Composition vs Inheritence [LOTS OF DEFINITIONS!]
## 128
Paradign writing code according to a paradigm
OO grouping as object
Classes: Attribute, state, methods
FP: code cannot change the outside world... data immutable
High order functions
Functions first class citizens
Pure and composing

In OO, classes are first class citizens
## 129 
FP:
- many operations for which the data is fixed
- stateless - state is immutable
- pure - no side effects. no impact outside of the function
- declerative (what)
- lots of little operations - ML

OO:
- few operations on common data
- modifying state
- side effects. methods 
- imperetive (how)
- little 
## 130
## 131
## 132 Async JS
JS: Call Stack + Memory Heap
WebAPI: DOM, AJAX, setTimeout
Event Loop
Callback Queue
JS RTE: JS+WebAPI+EventLoop+Callback Queue
## 133 Promise
const promise = new Promise((resolve,reject)){
    if (true) {
        resolve('stuff worked') 
        } else {
        reject('error')
        }
}

promise.then(result=>{
    throw Error
    then result + !
})
.then(result2 => {
    console.log(result2)
})
.catch(()=>console.log('error!'))

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'HIII')
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,200,'HOOOO')
})

Promise.all([promise2,promise3])
.then(values=>{console.log(values)}) //['HIII','HOOO']

Fulfilled(resolved), rejected, pending
## 134 Async / await
async function playerStart(){
    const firstMove = await moviePlayer(100,'Left') //pause
    await movePlayer(400, 'Left') //pause
    await movePlayer(300,'Left)
}
 //synch looking code
async function fetchUsers(){
    const resp = await fetch('https:/...)
    const data = resp.json()
    console.log(data)
}

const getData = async function(){
    try {
        const [users,posts,albums] = await Promise.all(urls.map(url=>fetch(url.then(res=>res.json()))))
        ...some other code or use users,posts,albums now
    } catch(err) {
        console.log(err)
    }
}
## 135 ES9
const animals = {
    tiger: 23,
    lion: 5,
    cat: 6
}

const {tiger, ...rest} = animals

## 136 ES9 Async
promise.then(result=>{
    throw Error
    then result + !
})
.then(result2 => {
    console.log(result2)
})
.catch(()=>console.log('error!'))
.finally(()=>console.log('it will always come here)) //finally!

const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}

## 137 Job Queue
//Callback queue - Task queue
setTimeout(...)
//Job queue -MIcrotask queue
//Normal code

Job queue (should be empty then callback queue)> callback queue

## 138 
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
## 139 Threads, Concurrency, Parallelism
Good reference / reading material
## 140 What is a module?
## 141 
## 142 Module Pattern
//Global scope
    //Module scope
        //Function scope
            //Block scope

//Module pattern
let fightModule = (function(){
    //Any code here!
    return {
        fight: fight //this is the API interface!
    }
})()
## 143 Module Pattern, AMD, UMD
## 144
## 145
## 146
const module1 = require('module1')
const module2 = require('module2')
function fight(){
    //....
}
module.exports = {
    fight: fight
}
## 147 Error Handling
## 148 
new Error('error!')
throw new Error() 
const myError = new Error('erro!')
myError.name
myErrror.stack
myError.message
## 149 try catch
//try {} catch {}
function fail(){
    try {
        console.log('this works')
    } catch (error){
        console.log('made an error')
    } finally {
        console.log('still works')
    }
}
## 150 asycn error handling
