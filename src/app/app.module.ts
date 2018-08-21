import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RepositoryComponent } from './repository/repository.component';
import { FormsModule } from '@angular/forms';
import { LastNamePipe } from './last-name.pipe';
import { DirectDirective } from './direct.directive'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    RepositoryComponent,
    LastNamePipe,
    DirectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
