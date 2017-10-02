import { Component, OnInit, Renderer2 } from '@angular/core';
import { Question } from '../../models/Question';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];
  constructor(public dataService: DataService, private renderer: Renderer2) {
    let global = this.renderer.listen('window', 'storage', (evt) => {
      this.questions = this.dataService.getQuestions();
      console.log('Storage Event:', evt);
    })
  }


  ngOnInit() {

    this.questions = this.dataService.getQuestions();
    console.log('ngOnInit');
  }
  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }
}
