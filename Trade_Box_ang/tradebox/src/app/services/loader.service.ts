import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemModel } from '../models/item-model';



const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
}) export class LoaderService {
  constructor(private httpClient: HttpClient) {

  }

  postItem(item) {
    return this.httpClient.post("animals", item, httpOptions);
  }

  getItem(item) {
    return this.httpClient.get("animals", item);
  }

  getItemDetails(id) {
    return this.httpClient.get<ItemModel>(`animals/${id}`);
  }
}
