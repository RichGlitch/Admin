import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title:'Home',
      icon: 'mdi mdi-gauge',
      submenu:[
        {title: 'Dashboard', url:'/dashboard'},
        {title: 'Posts', url:'/posts'},
        {title: 'Categories', url:'/categories'},
        {title: 'Tags', url:'/tags'},
      ]
    }
  ];
  
  constructor() { }
}
