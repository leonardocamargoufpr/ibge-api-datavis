import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectBoxComponent } from './select-box/select-box.component';

const routes: Routes = [
  { path: '', redirectTo: '/select', pathMatch: 'full' },
  { path: 'select', component: SelectBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
