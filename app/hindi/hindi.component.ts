import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {

  constructor() { }

  urls = [
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
    {name : 'video',url : 'https://archive.org/download/4Lecture/01.mp4'},
  ]

  ngOnInit() {
  }

}