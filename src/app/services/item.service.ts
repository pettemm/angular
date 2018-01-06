import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';


@Injectable()
export class ItemService {
  
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  start2: string;

  startStart (start) {
    console.log(start);
  }

  constructor(public afs: AngularFirestore) { 

   this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title','desc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
    return changes.map(a =>{
      const data = a.payload.doc.data() as Item;
      data.id = a.payload.doc.id;
      return data;
      });
    });
  }

  getItems(){
    return this.items;    
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  deleteItem(item:Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }

}


