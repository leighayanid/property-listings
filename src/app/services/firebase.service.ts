import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = "listingimages";
  }
  
  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getListingDetails(id){
  	this.listing = this.af.database.object('/listings/'+ id) as FirebaseObjectObservable<Listing>;
  	return this.listing;
  }

  addListing(listing){
    //create a root ref
   let storageRef = firebase.storage().ref();
   //loop through html element to find image id
   for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
     let path = `/${this.folder}/${selectedFile.name}`;
     let iRef = storageRef.child(path);
     iRef.put(selectedFile).then((snapshot)=>{
       listing.image = selectedFile.name;
       listing.path = path;
       return this.listings.push(listing);
     });
    }
  }

  updateListing(id,listing){
    return this.listings.update(id, listing);
  }
  
}

interface Listing{
	$key?:string;
	title?:string;
	type?:string;
	image?:string;
	city?:string;
	owner?:string;
	bedrooms?:string;
}
