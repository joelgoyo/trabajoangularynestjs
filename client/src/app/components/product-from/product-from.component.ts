import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit {
  
  @HostBinding('class') class = 'row';
  
  product: Product = {
    name: '',
    description: '',
    imageURL: '',
    price: 0
  };
edit:boolean=false;
  constructor(
    private productService:ProductService,
    private router:Router,
    private activatedRouter:ActivatedRoute
    ) { }

  ngOnInit() {
  const params = this.activatedRouter.snapshot.params;
  if (params){
    this.productService.getProduct(params.id)
    .subscribe(
      res => {
        console.log(res);
        this.product = res;
        this.edit = true;
      }
    )
  }

  }
  submitProduct(){
   this.productService.createProduct(this.product)
   .subscribe(
     res => {
       console.log(res);
       this.router.navigate(['/']);
     },
     err => console.log(err)
   )
  }
  updateProduct(){
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
    .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
    );
  }

}
