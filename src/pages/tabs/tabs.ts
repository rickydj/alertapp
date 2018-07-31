import { Component } from '@angular/core';

import { DenunciasPage } from '../denuncias/denuncias';
import { MapaPage } from '../mapa/mapa';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  acceso = false;

  tab1Root = MapaPage;
  tab2Root = DenunciasPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
