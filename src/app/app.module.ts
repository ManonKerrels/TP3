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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GameComponent,
    DeveloperComponent,
    EditorComponent,
    GameListComponent,
    EditorListComponent,
    DeveloperListComponent
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
