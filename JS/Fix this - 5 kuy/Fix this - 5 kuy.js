/*export const fix = fn => fn (fix (fn)) ;

export const factorial = n => n ? n * factorial(n-1n) : 1n ;

export const fibonacci = i =>
  i===0 ? 0n :
  i===1 ? 1n :
          fibonacci(i-1) + fibonacci(i-2) ;

export const foldr = fn => z => xs =>
  xs.length ?
    fn (xs[0]) (foldr (fn) (z) (xs.slice(1))) :
    z ;*/

// Strict-evaluation fix (Z-combinator): the recursive call is wrapped in a
// lambda so it is NOT evaluated until it's actually invoked.
export const fix = f => (x => f(y => x(x)(y)))(x => f(y => x(x)(y))) ;

// Non-recursive: takes "self" (the fixed function) as first argument instead
// of calling itself by name.
export const factorial = self => n => n ? n * self(n-1n) : 1n ;

export const fibonacci = self => i =>
  i===0 ? 0n :
  i===1 ? 1n :
          self(i-1) + self(i-2) ;

// self : fn -> z -> xs -> result (same shape as fixed foldr itself)
export const foldr = self => fn => z => xs => {
  const {value, done} = xs.next() ;
  return done ? z : fn (value) (() => self (fn) (z) (xs)) ;
} ;