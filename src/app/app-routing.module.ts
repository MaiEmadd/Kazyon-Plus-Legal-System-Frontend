import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './contracts/index/index.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { ShowContractComponent } from './contracts/show-contract/show-contract.component';
import { ErrorPageComponent } from './error-page/error-page.component';
const routes: Routes = [
  {path: 'contracts', component:IndexComponent},
  {path: 'contracts/:id', component: ShowContractComponent},
  {path: 'add-contract', component:AddContractComponent},
  {path: '**', component:ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
