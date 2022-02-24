import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "DOcker Angular-app";
  bookList = [];
  display = true;

  constructor(private router: Router) {}

  navigateToUrl() {
    this.display = false;
    this.router.navigateByUrl("books");
  }
}
