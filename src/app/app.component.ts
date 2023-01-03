import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  myObservable = new Observable ((observer) =>{
    console.log('Observable starts')
    setTimeout(()=>{observer.next('1')}, 1000)
    setTimeout(()=>{observer.next('2')}, 2000)
    setTimeout(()=>{observer.next('3')}, 3000)
    setTimeout(()=>{observer.next('4')}, 4000)
    setTimeout(()=>{observer.next('5')}, 5000)
    // observer.next('1')
    // observer.next('2')
    // observer.next('3')
    // observer.next('4')
    // observer.next('5')
  } )

  ngOnInit(){
    this.myObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
