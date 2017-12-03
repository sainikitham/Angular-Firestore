import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });
  }
  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
 }
 editItem(item: Item) {
   this.editState = true;
   this.itemToEdit = item;
 }
 clearstate() {
  this.editState = false;
  this.itemToEdit = null;
 }
 updateitem(item: Item) {
  this.itemService.updateitem(item);
  this.clearstate();
 }
}
