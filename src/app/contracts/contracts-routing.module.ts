import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowContractComponent } from './show-contract/show-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'view/:id', component: ShowContractComponent},
  {path: 'add', component:AddContractComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
