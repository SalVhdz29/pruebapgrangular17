import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../primeng/primeng.module';
import { SharedModule } from '../../shared_components/shared.module';
import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './components/personas/personas.component';
import { UpdatePersonaComponent } from './components/update-persona/update-persona.component';
import { CreatePersonaComponent } from './components/create-persona/create-persona.component';


@NgModule({
  declarations: [
    PersonasComponent,
    UpdatePersonaComponent,
    CreatePersonaComponent,
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class PersonasModule { }
