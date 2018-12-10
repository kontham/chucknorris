import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent} from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryDetailComponent} from './category-detail/category-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'categories', component: CategoriesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:name', component: CategoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
