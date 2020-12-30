import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IsepCursoComponent } from './pages/education/isep-curso/isep-curso.component';
import { IsepMestradoComponent } from './pages/education/isep-mestrado/isep-mestrado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'Isep-curso', component: IsepCursoComponent },
  { path: 'Isep-mestrado', component: IsepMestradoComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
