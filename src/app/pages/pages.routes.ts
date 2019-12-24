import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CategoriesComponent } from "./categories/categories.component";
import { PostsComponent } from "./posts/posts.component";
import { TagsComponent } from "./tags/tags.component";

const pagesRoutes : Routes = [
    {path:'',
    component: PagesComponent,
    children:[
      {path:'dashboard',component: DashboardComponent},
      {path:'categories',component: CategoriesComponent},
      {path:'posts',component: PostsComponent},
      {path:'tags',component: TagsComponent},
      {path:'', redirectTo: '/dashboard', pathMatch:'full'}
    ]
  },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);