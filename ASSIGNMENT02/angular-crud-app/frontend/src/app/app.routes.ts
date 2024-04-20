import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: '', redirectTo: '/student', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'student', component: StudentsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }
@NgModule({
    declarations: [
        // Components
    ],
    imports: [
        // Other modules
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
