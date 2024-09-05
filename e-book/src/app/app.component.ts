import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from './body/body.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student:string[]=["001","19RP00512","Yvonne IZERIMANA"]
  imageUrl:string='https://media.istockphoto.com/id/584573082/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=Ox9T0JIeGaCXPs_EEoAy5Uc98mY_kCnP9pTz06tb6iI='
  isDisabled:boolean=true
  isActive:boolean=true

  buttonClick(){
    console.log('buttonClicked')
  }
  mouseOver(){
    console.log("hhhh goood mouse over")
  }
  keyEnter(){
    console.log("gooog gooog goood key enter")
  }
}
