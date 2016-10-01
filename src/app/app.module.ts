import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAKGXjz7Cevz39loOdUnqANIzm3fptwJbs',
  authDomain: 'entrenador-eede0.firebaseapp.com',
  databaseURL: "https://entrenador-eede0.firebaseio.com",
  storageBucket: "entrenador-eede0.appspot.com",
  messagingSenderId: "659864842774"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
