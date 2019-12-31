import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostsComponent } from './posts/posts.component';
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        DashboardComponent,
        CategoriesComponent,
        TagsComponent,
        PostsComponent,
        PagesComponent

    ],
    exports:[
        DashboardComponent,
        CategoriesComponent,
        TagsComponent,
        PostsComponent,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        CommonModule
    ]
})
export class PagesModule{}