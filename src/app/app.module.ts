// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule, TooltipModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StyleGeneratorComponent } from './style-generator/style-generator.component';
import { CopyToClipboardDirective } from './core/copy-to-clipboard.directive';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'app', component: StyleGeneratorComponent,
    data: {
      animation: {
        value: '3',
      }
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      animation: {
        value: '1',
      }
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StyleGeneratorComponent,
    CopyToClipboardDirective,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularDraggableModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
