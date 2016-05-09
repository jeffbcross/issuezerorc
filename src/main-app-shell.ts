import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {IssuesRcAppComponent} from './app/issues-rc.component';
import {REQUEST_URL, NODE_LOCATION_PROVIDERS, NODE_HTTP_PROVIDERS} from 'angular2-universal';


export const options = {
  directives: [
    // The component that will become the main App Shell
    IssuesRcAppComponent
  ],
  providers: [
    // What URL should Angular be treating the app as if navigating
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(REQUEST_URL, {useValue: '/'}),
    ROUTER_PROVIDERS,
    // Providers from universal to make routing and http work in node
    NODE_LOCATION_PROVIDERS,
    NODE_HTTP_PROVIDERS
  ],
  preboot: false
};