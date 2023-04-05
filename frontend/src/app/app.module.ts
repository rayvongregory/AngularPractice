import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FormComponent } from './form/form.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GenerateBookmarkBtnComponent } from './generate-bookmark-btn/generate-bookmark-btn.component';
import { BookmarkSectionComponent } from './bookmark-section/bookmark-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    FormComponent,
    CustomInputComponent,
    ColorPickerComponent,
    GenerateBookmarkBtnComponent,
    BookmarkSectionComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
