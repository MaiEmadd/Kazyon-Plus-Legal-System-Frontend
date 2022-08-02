import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './contracts/index/index.component';
import { LawsuitComponent } from './lawsuit/lawsuit.component';
import { Case1Component } from './case1/case1.component';
import { ProcurationComponent } from './procuration/procuration.component';
import { Procuration1Component } from './procuration1/procuration1.component';
import { Procuration3Component } from './procuration3/procuration3.component';
import { Case2Component } from './case2/case2.component';
import { Case3Component } from './case3/case3.component';
import {SessionComponent} from "./session/session.component";


const routes: Routes = [
{path:'con', component:IndexComponent},
 {path:'', component:LawsuitComponent},
 {path:'case',component:Case1Component},
 {path:'procuration',component:ProcurationComponent },
{path:'procuration1',component:Procuration1Component },
 {path:'case2',component:Case2Component },
 {path:'case3/:id',component:Case3Component },
 {path:'procuration2/:id',component:Procuration3Component},
  {path:'session/:id',component:SessionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
