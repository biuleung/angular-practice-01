import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './test-one/test-one.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'text1',
        pathMatch: 'full'
      },
      {
        path: 'test1',
        component: TestOneComponent
      },
      {
        path: 'test2',
        component: TestTwoComponent
      },
      {
        path: 'test3',
        component: TestThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
