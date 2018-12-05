import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    items: Array<any> = [
      {
        'id' : "1 - One",
        'titulo': 'Fulaninha',
        'descricao': 'Zombie Daughter'
      },
      {
        'id': "2 - Two",
        'titulo': "Fulano",
        'descricao': 'Wolf Dad'
      },
      {
        'id': "3 - Three",
        'titulo': "Fulana",
        'descricao': 'Orc Mom'
      },
    ]

  constructor() { }
  
  createItem(titulo, descricao){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'titulo':titulo,
      'descricao': descricao
    });
  }

  getItems(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id)
    this.items[itemIndex] = newValues;
  }
}