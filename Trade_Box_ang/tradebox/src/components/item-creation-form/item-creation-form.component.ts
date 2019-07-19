import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ItemModel } from 'src/app/models/item-model';
/* import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { post } from 'selenium-webdriver/http'; */

@Component({
  selector: 'app-item-creation-form',
  templateUrl: './item-creation-form.component.html',
  styleUrls: ['./item-creation-form.component.css']
})
export class ItemCreationFormComponent implements OnInit {

  /* public uploader: FileUploader = new FileUploader({ 
    url: "animals",
    

  }); */

  constructor(private loader: LoaderService) { }

  itemModel: ItemModel = new ItemModel();

  ngOnInit() {
  }

  submit() {
    this.loader.postItem(this.itemModel).subscribe(s => s);
    alert('Created');
  }


}
