import { Component } from "@angular/core";
import { products } from "./products";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { Observable } from "rxjs";
import { CategoriesService } from "./northwind.service";
import { State } from "@progress/kendo-data-query";

@Component({
  selector: "my-app",
  template: `
    <p>
      <app-lookup></app-lookup>
    </p>
  `
})
export class AppComponent {}
