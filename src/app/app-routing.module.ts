import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddDeveloperComponent } from './components/add/add-developer/add-developer.component';
import { AddEditorComponent } from './components/add/add-editor/add-editor.component';
import { AddGameComponent } from './components/add/add-game/add-game.component';
import { AddComponent } from './components/add/add.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { UpdateDeveloperComponent } from './components/developer/update-developer/update-developer.component';
import { EditorUpdateComponent } from './components/editor/editor-update/editor-update.component';
import { EditorComponent } from './components/editor/editor.component';
import { GameComponent } from './components/game/game.component';
import { UpdateGameComponent } from './components/game/update-game/update-game.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "accueil", pathMatch:'full' },
  { path: "accueil", component: AccueilComponent },
  { path: "game", component: GameComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "editor", component: EditorComponent },
  { path: "add", component: AddComponent },
  { path: "addGame", component: AddGameComponent },
  { path: "addEditor", component: AddEditorComponent },
  { path: "addDeveloper", component: AddDeveloperComponent },
  { path: "updateGame/:id", component: UpdateGameComponent },
  { path: "updateEditor/:id", component: EditorUpdateComponent },
  { path: "updateDeveloper/:id", component: UpdateDeveloperComponent },
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
