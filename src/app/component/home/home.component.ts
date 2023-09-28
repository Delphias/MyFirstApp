import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/service/testing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
products: any;

constructor(private testService: TestingService){
}

ngOnInit() {

}

getProducts(){
this.testService.getProduct().subscribe((res:any) =>{
  this.products=res;
  console.table(this.products);
  });
}
}