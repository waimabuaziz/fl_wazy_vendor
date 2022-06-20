import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { ToastrService } from 'ngx-toastr';

 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public error ; 
  public counter: number = 1;
  public url = [{
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  }
  ]


  public productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private API: ApiService,
    private toast : ToastrService,
   
  ){}

  ngOnInit() {
      this.productForm = this.fb.group({
        productName:[null,Validators.compose([Validators.required,])] ,
        productPrice:[null,Validators.compose([Validators.required,])] ,
        productCode:[null,Validators.compose([Validators.required,])] ,
        productCategory:[null,Validators.compose([Validators.required,])] ,
        productDescription:[null,Validators.compose([Validators.required,])] ,
        productQty:[null,Validators.compose([Validators.required,])] ,
      })
  }


productSubmit(){
    var productFormData : any = new FormData();

    productFormData.append("productName",this.productForm.controls['productName'].value) ; 
    productFormData.append("productPrice",this.productForm.controls['productPrice'].value) ; 
    productFormData.append("productCode",this.productForm.controls['productCode'].value) ; 
    productFormData.append("productCategory",this.productForm.controls['productCategory'].value) ; 
    productFormData.append("productDescription",this.productForm.controls['productDescription'].value) ; 
    productFormData.append("productQty",this.productForm.controls['productQty'].value) ; 
    

    this.API.productSubmit(productFormData).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );

}

productRetrive(){
  var productFormData : any = new FormData();
  productFormData.append("id",this.productForm.controls['productPrice'].value) ; 

  this.API.productRetrive(productFormData).subscribe(
    (data) => this.handleResponse_productRetrive(data),
    (error) => this.handleError(error)
  );
}

productDelete(){
  var productFormData : any = new FormData();
  productFormData.append("id",this.productForm.controls['productPrice'].value) ; 

  this.API.productDelete(productFormData).subscribe(
    (data) => this.handleResponse_productDelete(data),
    (error) => this.handleError(error)
  );
}


handleResponse_productDelete(data){
  console.log("---done--- =>" + JSON.stringify(data));
}


handleResponse_productRetrive(data){
  console.log("---done--- =>" + JSON.stringify(data));
  this.toast.success('product retrived successfully!') ; 


  this.productForm = this.fb.group({
    productName:[data[0].id,Validators.compose([Validators.required,])] ,
    productPrice:[null,Validators.compose([Validators.required,])] ,
    productCode:[data[0].name,Validators.compose([Validators.required,])] ,
    productCategory:[null,Validators.compose([Validators.required,])] ,
    productDescription:[data[0].email,Validators.compose([Validators.required,])] ,
    productQty:[null,Validators.compose([Validators.required,])] ,
  })

}

handleResponse(data){
  console.log("---done--- =>" + JSON.stringify(data));
}

handleError(error: { error: { error: null } }) {
  this.error = error.error.error;
    console.log("---handle error--- =>" + JSON.stringify(error));
    console.log("---the error is:--- =>" + this.error);

    this.toast.error(JSON.stringify(error)) ; 

}
























//************************************************************ */
  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    }
  }


}




    // this.productForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   price: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   code: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   size: ['', Validators.required],
    // })
