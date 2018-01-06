import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatComponent } from './mat/mat.component';
import { TraningComponent } from './traning/traning.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'mat', component: MatComponent},
  {path: 'traning', component: TraningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [HomeComponent, MatComponent, TraningComponent];
