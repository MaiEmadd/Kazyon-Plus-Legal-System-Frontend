import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './contracts/index/index.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { ShowContractComponent } from './contracts/show-contract/show-contract.component';
const routes: Routes = [
  // {path:'', component:IndexComponent},
  // {path: 'contractcomponent',
  // loadChildren: ()=> import("./contracts/contract-components/contract-components.module").then(m => m.ContractComponentsModule)}
  {path: '', component:ShowContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
