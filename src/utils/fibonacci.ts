export function Fibonacci(n: number) {
  if (n === 0 || n === 1) {
    return n
  }

  const fib: number = Fibonacci(n - 1) + Fibonacci(n - 2)

  return fib
}
