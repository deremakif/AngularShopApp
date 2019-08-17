import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()

export class CategoryRepository implements OnInit {
    private categories: Category[] = [];

    constructor(private restService: RestService){ 
        this.restService
        .getCategories()
        .subscribe(categories => this.categories = categories);
      }

    ngOnInit(){
      
    }

    getCategory(id:number): Category{
        return this.categories.find(i => i.id == id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    
    saveCategory(category: Category){
        if(category.id == null || category.id == 0){
            this.restService.addCategory(category)
                            .subscribe(c=> this.categories.push(c));
        }
        else {
            this.restService.updateCategory(category)
                            .subscribe(c=> {
                                this.categories.splice(this.categories.findIndex(c=> c.id == category.id), 1, category)
                            });
        }
    }

    deleteCategory(category: Category){
        this.restService.deleteCategory(category)
                        .subscribe(c => this.categories.splice(this.categories.findIndex(c=> c.id== category.id), 1));

    }

}