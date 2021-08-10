import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { PagoComponent } from './paginas/pago/pago.component';
import { DetallePagoComponent } from './paginas/detalle-pago/detalle-pago.component';
//import { PrincipalComponent } from './app/paginas/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DetalleComponent,
    PagoComponent,
    DetallePagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
