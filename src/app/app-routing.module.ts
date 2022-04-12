import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { EditorComponent } from './components/editor/editor.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch:'full' },
  { path:"accueil", component: AccueilComponent },
  { path:"game", component: GameComponent },
  { path:"developer", component: DeveloperComponent },
  { path: "editor", component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
