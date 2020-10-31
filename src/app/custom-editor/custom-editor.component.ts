import { AfterViewInit, Component, OnInit,Input, ViewChild,ContentChild } from '@angular/core';
import * as acorn  from 'acorn'
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
// import 'brace/ext/searchbox';
// import 'brace/mode/javascript';
// import 'brace/theme/eclipse';/ace-builds/src/snippets/javascript.js

// import 'brace/ext/snippets'
import { AceDirective } from 'ngx-ace-wrapper';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent implements OnInit,AfterViewInit {
  @Input() config:any;
  @Input() parentForm:FormGroup;
  @ViewChild(AceDirective) directive;
  content:'lalalalal';
  validationError:boolean = false;
  ast;
  // @ContentChild(AceDirective) ref: AceDirective;

  // config:{}
  constructor() { }

  ngOnInit(): void {
    console.log('CONFIG::',this.config);
  }
  ngAfterViewInit(){
    this.directive.ace().completers = [
      this.staticWordCompleter
    ];


    // this.directive.ace().bl
  }

  onEditorBlur(event: any): void {
    // console.log('Editor blur:', this.directive.ace().setValue('aa'));
    try{
      let temp = acorn.parse(this.directive.ace().getValue(),{ecmaVersion: 2020});
      this.ast = temp['body'][0];
      console.log(this.ast);
      this.parentForm.controls.childInput.setValue(this.directive.ace().getValue());
      this.validationError = false;
    } catch(e){
      this.parentForm.controls.childInput.setErrors({'incorrect': true});
      this.validationError = true;
      this.ast = e
      console.log(e)
    }
  }

  staticWordCompleter = {
    getCompletions: ( editor, session, pos, prefix, callback ) => {
      callback( null, this.config.autoCompleteOptions.map( option => {
        return {
          caption: option.label,
          value: option.meta.indexOf('function') != -1 ? option.label+'()' : option.label,
          meta: option.meta
        };
      }));
  
    }
  }

  // staticWordCompleter = {
  //   getCompletions: ( editor, session, pos, prefix, callback ) => {
  //     var wordList = [
  //       'foo','bar','abcd'
  //     ];
  
  //     callback( null, wordList.map( word => {
  //       return {
  //         caption: word,
  //         value: word+'()',
  //         meta: "method(string,int)"
  //       };
  //     }));
  
  //   }
  // }

}
