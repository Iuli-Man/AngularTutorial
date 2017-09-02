import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  authors = [];
  isActive = true;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onDivClick() {
    console.log("Div clicked");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }

  course = {
    title: "The Complete Angular Course",
    rating: 4.9765,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2017, 8, 23),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut iaculis orci, ac iaculis felis. Mauris et risus tempor, interdum sapien vitae, vulputate nibh. Sed commodo, sem et elementum rutrum."
  };

}
