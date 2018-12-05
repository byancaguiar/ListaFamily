import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  public id: string;
  public titulo: string;
  public descricao: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.router.snapshot.paramMap.get('id')
    this.titulo = this.router.snapshot.paramMap.get('titulo')
    this.descricao = this.router.snapshot.paramMap.get('descricao')

  }

}
