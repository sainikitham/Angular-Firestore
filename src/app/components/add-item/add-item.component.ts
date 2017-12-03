import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  };
  constructor(private _ItemService: ItemService) { }
  onsubmit()
  // tslint:disable-next-line:one-line
  {
    this._ItemService.additem(this.item);
    this.item.title = '';
    this.item.description = '';
  }
  ngOnInit() {
  }

}
