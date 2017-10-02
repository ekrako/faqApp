import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
@Injectable()
export class DataService {
  questions:Question[];
  constructor() {
    // this.questions = [
    //   {
    //     text: "What is my name?",
    //     answer: "My name is Eran",
    //     hide: true
    //   }, {
    //     text: "What is my wife name?",
    //     answer: "My wife name is Lilach",
    //     hide: true
    //   }, {
    //     text: "What is my favourite color?",
    //     answer: "My favourite color is blue",
    //     hide: true
    //   }
    // ]

  }

  getQuestions(){
    if(localStorage.getItem('questions')===null){
      this.questions=[];
    }else{
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(question:Question){
    this.questions.unshift(question);
    localStorage.setItem('questions',JSON.stringify(this.questions));
  }
  removeQuestion(index:number){
    this.questions.splice(index,1);
    localStorage.setItem('questions',JSON.stringify(this.questions));

  }

}
