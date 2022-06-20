import { Component, OnInit, ViewChild } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';
import { ModalAddProductComponent } from '../../modal/modal-add-product/modal-add-product.component';
import { ProductAddComponent } from '../../modal/product-add/product-add.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild("quickView") QuickView: ModalAddProductComponent;
  @ViewChild("productAdd") ProductAdd: ProductAddComponent;

  

  
  public product_list = []
  public displayMode: number = 1;

    constructor() {
    this.product_list = productDB.product;
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
  ngOnInit() {}


  // public settings = {4
  //   actions: {
  //     position: 'right'
  //   },
  //   columns: {
  //     img: {
  //       title: 'Image',
  //       type: 'html',
  //     },
  //     product_title: {
  //       title: 'Name'
  //     },
  //     price: {
  //       title: 'Price'
  //     },
  //     discount: {
  //       title: 'Discount Price',
  //     },
  //     category: {
  //       title: 'Category',
  //     }
  //   },
  // };




  // openModalAddProduct()
  // {
  //       alert('hi');
  // }


}


