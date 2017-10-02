import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question:Question;
  @Output() questionAdded = new EventEmitter<Question>();
  constructor() {
  }

  ngOnInit() {
    this.question={text:'',
              answer:'',
              hide:true};
  }
  addQuestion(){
    this.questionAdded.emit(this.question);
    this.question={text:'',
              answer:'',
              hide:true};

  }
}
