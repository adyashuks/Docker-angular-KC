import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { KeycloakService } from 'keycloak-angular';
import { Observable } from "rxjs";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  books: any[];
  // @Output() hideButton = new EventEmitter<any>();
  name : string;

  constructor(private http: HttpClient, private keyCloakService : KeycloakService) {

  }

  ngOnInit(): void {
    // this.displayBooks();
    this.name = this.keyCloakService.getUsername();
  }

  logout() {
    this.keyCloakService.logout('http://localhost:4200/home');
  }

  getAllBooks(): Observable<any> {
    return this.http.get<any[]>("http://localhost:8080/api/books");
  }

  displayBooks() {
    this.getAllBooks().subscribe((book) => {
      this.books = book;
      console.table(book);
    });
  }
}
