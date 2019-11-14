import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from './home.component';
import {AppComponent} from '../app.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Task} from '../classes/Task';



describe('HomeComponent', () => {

  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
 // let el: HTMLElement;

  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        NgbModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);

      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('table'));
    });
  }));

  it(`should put one user in array'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.allTasks.length).toEqual(1);
  }));

});
