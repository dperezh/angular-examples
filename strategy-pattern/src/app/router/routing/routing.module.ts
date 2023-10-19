import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from 'src/app/components/presentation/presentation.component';
import { SignalsComponent } from 'src/app/components/signals/signals.component';
import { StrategyComponent } from 'src/app/components/strategy/strategy.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'signals', component: SignalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
