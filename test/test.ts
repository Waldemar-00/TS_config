// export const a = 'a'

const test = 'test'
const watch = 'tsc --watch'

interface Something
{
  some: string,
  amount: number,
  fn: () => void
}
//@internal
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
