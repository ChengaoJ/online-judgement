import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

const DEFAULT_PROBLEM: Problem = Object.freeze({
    id: '0',
    name: '',
    desc: '',
    difficulty: 'easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})

export class NewProblemComponent implements OnInit {
    // create a shadow copy of problem and assign it to newProblem
    // Object.assign() copies property values. If the source value is a
    // reference to an object, it only copies that reference value.
    newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
    difficulties: String[] = ['easy', 'medium', 'hard', 'super'];
    constructor(private dataService: DataService) { }

    ngOnInit() {
    }

    addProblem() {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }

}
