import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  starAt: number = 0;
  endAt: 2;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.startStart('item 4');
    this.itemService.getItems().subscribe(items => {     
      this.items = items;
      console.log(this.items[this.starAt]);
    });
  }

  deleteItem(event, item: Item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem($event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

  onNext(){
    this.starAt = this.starAt + 2;
    console.log(this.items[this.starAt]);
    console.log("hej");
  }

}
