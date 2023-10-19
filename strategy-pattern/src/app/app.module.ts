import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { RoutingModule } from './router/routing/routing.module';
import { FileService } from './services/file.service';
import { SignalsComponent } from './components/signals/signals.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    StrategyComponent,
    SignalsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
