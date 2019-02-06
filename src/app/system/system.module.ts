import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {ShortcutComponent} from './shortcut/shortcut.component';
import {SystemComponent} from './system.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ResultComponent } from './result/result.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
  ],
  declarations: [
    SystemComponent,
    ShortcutComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent
  ],
  providers: []
})
export class SystemModule {
  constructor() {
    library.add(fas, far, fab);
  }
}
