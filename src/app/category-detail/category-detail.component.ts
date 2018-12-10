import {Component, OnInit, Input} from '@angular/core';
import {Category} from '../Category';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location) {}

  ngOnInit() {
      this.getCategory();
  }

  getCategory(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.categoryService.getCategory(name)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

}
