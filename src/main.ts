// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'core-js/es/array';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DemoModule } from './app/demo/demo.module';
import { DemoComponent } from './app/demo/demo.component'
import {AppComponent} from './app/app.component'
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule
  ],
 bootstrap: [DemoComponent]
})
export class BootstrapModule {}

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));