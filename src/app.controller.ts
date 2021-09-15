import { BadRequestException, Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { SolveProblemDTO } from './dto/solveProblem.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Post("/solve")
  getResult(@Body() body: SolveProblemDTO) {
    const problem = body.problem.replace(" ", "")
  
    const validated = this.appService.validate(problem)
    if (!validated) {
      throw new BadRequestException()
    }

    return this.appService.solve(problem)
  }
}
