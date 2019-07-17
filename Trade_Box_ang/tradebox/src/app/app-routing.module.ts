import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreationFormComponent } from 'src/components/item-creation-form/item-creation-form.component';
import { CatalogueComponent } from 'src/components/catalogue/catalogue.component';
import { HomeComponent } from 'src/components/home/home.component';

const appRoutes: Routes = [
    { path: 'creation', component: ItemCreationFormComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/