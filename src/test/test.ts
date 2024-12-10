export const a = 'a'
// import { Something } from "./interfaces"
// import  type { Something } from "./interfaces"
import { type Something, ourExport } from "./interfaces.js"
const test = 'test'
const watch = 'tsc --watch'
const something: Something = {
  some: 'something',
  amount: 111,
  fn(){ console.log(this.some, ourExport)}
}
something.fn()
// @internal
function fn (str: string): string
{
  return str
}
console.log( fn( 'Declaration: true' ) )

function otherOne (number: number)
{
  return number
}
console.log(otherOne(100))

const object: Record <string, number > = {
  some: 19
}

const objTest: {[key: string]: number} = {
  some: 119
}
interface IndexSignature
{
  [ key: string ]: number | string
}
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
}
console.log( ( 4 as unknown as string ).length )
