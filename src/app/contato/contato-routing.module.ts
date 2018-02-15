import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        { path: 'contato', component: ContatoComponent }
      ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [ContatoComponent]
})
  
export class ContatoRoutingModule{

}
