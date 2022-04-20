import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { GameComponent } from './components/game/game.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { EditorComponent } from './components/editor/editor.component';
import { GameListComponent } from './components/game/game-list/game-list.component';
import { EditorListComponent } from './components/editor/editor-list/editor-list.component';
import { DeveloperListComponent } from './components/developer/developer-list/developer-list.component';
import { AddComponent } from './components/add/add.component';
import { AddGameComponent } from './components/add/add-game/add-game.component';
import { AddEditorComponent } from './components/add/add-editor/add-editor.component';
import { AddDeveloperComponent } from './components/add/add-developer/add-developer.component';
import { UpdateGameComponent } from './components/game/update-game/update-game.component';
import { EditorUpdateComponent } from './components/editor/editor-update/editor-update.component';
import { UpdateDeveloperComponent } from './components/developer/update-developer/update-developer.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ConnectionComponent } from './components/user/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GameComponent,
    DeveloperComponent,
    EditorComponent,
    GameListComponent,
    EditorListComponent,
    DeveloperListComponent,
    AddComponent,
    AddGameComponent,
    AddEditorComponent,
    AddDeveloperComponent,
    UpdateGameComponent,
    EditorUpdateComponent,
    UpdateDeveloperComponent,
    UserComponent,
    RegistrationComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
