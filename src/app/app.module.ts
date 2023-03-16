import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './view/front-page/front-page.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {RouterLinkActive} from "@angular/router";


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(
    http , '/assets/i18n/' , '.json'
  );
}

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en-US",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterLinkActive

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
