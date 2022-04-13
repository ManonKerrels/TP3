import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddDeveloperComponent } from './components/add/add-developer/add-developer.component';
import { AddEditorComponent } from './components/add/add-editor/add-editor.component';
import { AddGameComponent } from './components/add/add-game/add-game.component';
import { AddComponent } from './components/add/add.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { EditorComponent } from './components/editor/editor.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch:'full' },
  { path:"accueil", component: AccueilComponent },
  { path:"game", component: GameComponent },
  { path:"developer", component: DeveloperComponent },
  { path: "editor", component: EditorComponent },
  { path: "add", component: AddComponent },
  { path:"addGame", component: AddGameComponent },
  { path:"addEditor", component: AddEditorComponent },
  { path: "addDeveloper", component: AddDeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
