import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-creation-form',
  templateUrl: './item-creation-form.component.html',
  styleUrls: ['./item-creation-form.component.css']
})
export class ItemCreationFormComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  itemModel: ItemModel = new ItemModel();

  ngOnInit() {
  }

  submit()
  {
    this.loader.postItem(this.itemModel).subscribe( s => s);
    alert('Created');
  }


}
