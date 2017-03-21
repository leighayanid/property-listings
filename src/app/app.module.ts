import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ListingComponent } from './components/listing/listing.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBuEu56veWd9wGQ0kcIHIwI5Ru_uNVdNmU",
  authDomain: "fir-auth-demo-83503.firebaseapp.com",
  databaseURL: "https://fir-auth-demo-83503.firebaseio.com",
  storageBucket: "fir-auth-demo-83503.appspot.com",
  messagingSenderId: "821771124636"
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'add-listing', component: AddListingComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
