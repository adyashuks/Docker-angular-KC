import { HomeComponent } from './home/home.component';
import { BooksComponent } from "./books/books.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path : 'home' , component: HomeComponent},
{path: 'books', component: BooksComponent, canActivate: [AuthGuard]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
