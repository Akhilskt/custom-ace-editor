import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';
const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2
};
// import 'brace';
// import 'brace/mode/text';
// import 'brace/mode/html';
// import 'brace/mode/javascript';
// import 'brace/mode/css';
// import 'brace/theme/monokai';
// import 'brace/theme/clouds';
// import 'ace-builds/src/snippets/javascript';

@NgModule({
  declarations: [
    AppComponent,
    CustomEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
