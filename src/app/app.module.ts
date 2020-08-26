import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from '../components/HelloWorld/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from '../components/Counter/counter.component';

@NgModule({
  declarations: [AppComponent, TestComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
