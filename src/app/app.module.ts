import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';

import { CustomerModule } from './customer/customer.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ResourceNotFoundComponent } from './notfound.component';
import { BookService } from './book/book.service';

@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
  ],
  providers:[BookService],
  bootstrap:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    BookModule,
    CustomerModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule{

}