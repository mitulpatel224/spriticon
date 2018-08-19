import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StyleGeneratorComponent } from './style-generator/style-generator.component';
import { TabsModule } from 'ngx-bootstrap';
import { CopyToClipboardDirective } from './core/copy-to-clipboard.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StyleGeneratorComponent,
    CopyToClipboardDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularDraggableModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
