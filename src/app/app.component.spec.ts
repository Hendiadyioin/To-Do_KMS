import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



describe('AppComponent', () => {
  const routes: Routes = [
    {path: 'home', component: AppComponent},
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
    }).compileComponents();
  }));

  it(`should have as title 'ToDo-Liste'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ToDo-Liste');
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
