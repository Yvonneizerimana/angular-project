import { Component , Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: []  ,
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  parentMessage="ooh wooh successfully sent from child to parent component"
  @Input() postListTitle:string=''

  @Output() messageEvent=new EventEmitter()
  sendMessage(){
    this.messageEvent.emit(this.parentMessage)
  }
}
