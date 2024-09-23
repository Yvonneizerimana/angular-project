import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet} from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavbarComponent,PostsListComponent,FormsModule,NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  postTitle:string="Post 1"

  student:string[]=["001","19RP00512","Yvonne IZERIMANA"]
  myName='Keza Giselle'
  imageUrl:string='https://media.istockphoto.com/id/584573082/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=Ox9T0JIeGaCXPs_EEoAy5Uc98mY_kCnP9pTz06tb6iI='
  isDisabled:boolean=true
  isActive:boolean=true
  userName:string='JOHN DOE'
  userOne:string="Umutoniwase Aline"


  fullName:string="Musanabera Ange Gaju"
  isLoggedIn:boolean=false
  loginCount=0

  names:Array<string>=["Ange","Rugwiro","Umutoni","Vaness","AUdrey"]
  studentsDetails:Array<any>=[
    {id:1 ,name:"Yvonne IZERIMANA",Regno:"230100388"},
    {id:2 ,name:"Ange UMURAZA",Regno:"27Y0388"},
    {id:3 ,name:"Gimmy KARENZI",Regno:"278760388"},
    {id:4 ,name:"Berwa MUNYANA",Regno:"76657382"},
    {id:5 ,name:"Munana Samuel",Regno:"7899100388"},
  ]

  userRole:string="admin"
  
  messageFromChild:string=''

  receiveMessage(message:string){
    this.messageFromChild=message
  }

  buttonClick(){
    console.log('buttonClicked')
  }
  mouseOver(){
    console.log("hhhh goood mouse over")
  }
  keyEnter(event:any){
    if(event.code==="Enter")
    console.log("you pressed enter key")
  }
  keyUpFiltering(){
    console.log("keyup event triggered")
  }
  displayUserContentToConsole(user:HTMLInputElement){
    this.myName=user.value
console.log(this.myName)
  }

  updateUsername(username:HTMLInputElement){
this.userName=username.value
console.log(this.userName)
  }

  countNumberOfLogin(){
    this.loginCount++
    console.log(this.loginCount)
  }

  addNewUser(){
    let newUser={id:6,name:"nuko yeee", RegNumber:"78367834"}
    
    this.studentsDetails.push(newUser)
  }
  onDelete(){
     let index=this .studentsDetails.indexOf(this.studentsDetails)
    this.studentsDetails.splice(index,1)
     console.log(index)
  }
  constructor(){
    let length=this.studentsDetails.length
    console.log(length)
  }

  deleteByIndex(index:number){
     this.studentsDetails.splice(index,1)
     console.log(index)
  }

  

}


