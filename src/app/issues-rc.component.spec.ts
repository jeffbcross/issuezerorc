import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { IssuesRcAppComponent } from '../app/issues-rc.component';

beforeEachProviders(() => [IssuesRcAppComponent]);

describe('App: IssuesRc', () => {
  it('should create the app',
      inject([IssuesRcAppComponent], (app: IssuesRcAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'issues-rc works!\'',
      inject([IssuesRcAppComponent], (app: IssuesRcAppComponent) => {
    expect(app.title).toEqual('issues-rc works!');
  }));
});
