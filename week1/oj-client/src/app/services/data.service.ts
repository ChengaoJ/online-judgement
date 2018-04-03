import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';

@Injectable()
export class DataService {

    problems: Problem[] = PROBLEMS;

    constructor() { }

    // return a list of problems
    getProblems(): Problem[] {
        return this.problems;
    }

    // return a problem by input id
    getProblem(id: number): Problem {
        return this.problems.find((problem) => problem.id === id);
    }

    addProblem(problem: Problem) {
        problem.id = this.problems.length + 1;
        this.problems.push(problem);
    }
}
