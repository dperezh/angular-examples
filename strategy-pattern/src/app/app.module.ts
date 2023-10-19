import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SignalsComponent } from './components/signals/signals.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { RoutingModule } from './router/routing/routing.module';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent,
    StrategyComponent,
    SignalsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
