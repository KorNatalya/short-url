import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {ShortcutComponent} from './shortcut/shortcut.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [{path: 'system', component: SystemComponent, children: [
    {path: 'shortcut', component: ShortcutComponent},
    {path: 'result', component: ResultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
