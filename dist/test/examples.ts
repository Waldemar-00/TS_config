function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log( createPair<string, number>( 'hello', 42 ) ); // ['hello', 42]

function createLoggedPair<S extends string | number = 4, T extends string | number = 'str'>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}


interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
  //! age: 42, Object literal may only specify known properties, and 'age' does not exist in type 'Omit<Person, "age" | "location">'
  // `Omit` has removed age and location from the type and they can't be defined here
}

type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
}
console.log(point)
interface Person1 {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person1, property: keyof Person1) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty( person, "age" ); // Printing person property name: "Max"


function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage( 0 ); // Prints 'Mileage: 0'

enum ETest {
  ADMIN, GUEST, DEVELOPER
}

interface User
{
  role: ETest
}

const user: User = {
  role: ETest.DEVELOPER
}

function entity<T> ( arg: T ): T
{
  return arg
}
console.log( entity( 34 ) )


interface IGetLength {
  length: number
}
function getLength<T extends {length: number}> ( arg: T ): number //! or IGetLength
{
  return arg.length
}

console.log( getLength( 'ABCD' ) )
console.log( getLength( [ 'ABCD' ] ) )

type Strings = 'str' | 'string' | string
type StrOrNumber = string | number
type CommonExtract = Extract<Strings, StrOrNumber>
interface Users
{
  role: string,
  firstUser: string,
  secondUser: string
}
type CommonExclude = Exclude<Strings, StrOrNumber>

type CommonProperty = Extract<keyof User, keyof Users>
const ourCommonProperty: CommonProperty = 'role'
console.log(ourCommonProperty)
type A = string | number | boolean
//! type B = {} | number | boolean  {}?????
type B =  number | boolean
type Result = Exclude< A, B >

type NonNulish = NonNullable<A | B | User | Users | null | undefined>


//! decorators

console.log('_________________________________decorators');

function LogClass(constructor: Function) {
  console.log(constructor);
}

function LogID(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const oldFn = descriptor.value;
  descriptor.value = function () {
    console.log(target, propertyKey, descriptor);
    return oldFn.apply(this, arguments)
  };
}

@LogClass
class Example {
  ID: number;

  constructor(ID: number) {
    this.ID = ID;
  }

  @LogID
  getID() {
    return this.ID;
  }
}

const example = new Example(123);
console.log(example.getID());

//! types
console.log('___________________types');

type CarBrand = 'BMW' | 'MECEDES' | 'PEGIO'
type CarPrice = '70.000' | '90.000' | '45.000'

type CarBrandPrice = `${ CarBrand }: ${ CarPrice }`

const BMW: CarBrandPrice = 'BMW: 70.000'