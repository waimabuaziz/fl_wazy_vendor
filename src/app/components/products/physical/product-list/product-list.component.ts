import { Component, OnInit, ViewChild } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';
import Swal from 'sweetalert2'

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
  public displayMode: number = 2;

    constructor() {
    this.product_list = productDB.product;
  }

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      id: {
        title: 'Id'
      },
      name: {
        title: 'Name'
      },
      code: {
        title: 'Code'
      },
      category: {
        title: 'Category'
      },
      price: {
        title: 'Price'
      },
      description: {
        title: 'Description'
      },
      manufacturer: {
        title: 'Manufacturer'
      }
    },
    mode: 'external'
  };

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
  ngOnInit() {}

  onDelete(product) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }

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


