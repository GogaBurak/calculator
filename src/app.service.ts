import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validate(problem: string) {
    const numRe = /\d*\.?\d*/g // reqexp to find number
    const num1 = problem.match(numRe)[0]
    const num2 = problem.match(numRe)[2]

    const operationRe = /[\/*\+-]/g
    const operation = problem.match(operationRe)[0]

    if (!num1 || !num2 || !operation) {
      return null
    }

    return problem
  }

  solve(problem: string) {
    const re = /\d*\.?\d*/g // reqexp to find number
    const num1 = +problem.match(re)[0]
    const num2 = +problem.match(re)[2]

    const operationRe = /[\/*\+-]/g // regexp to 
    const operation = problem.match(operationRe)[0]

    switch (operation) {
      case "+":
        return Math.round( (num1 + num2) * 1E6) / 1E6
      case "-":
        return Math.round( (num1 - num2) * 1E6) / 1E6
      case "*":
        return Math.round( (num1 * num2) * 1E6) / 1E6
      case "/":
        return Math.round( (num1 / num2) * 1E6) / 1E6
    }

    return +num1 + +num2
  }
}
