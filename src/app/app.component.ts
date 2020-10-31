import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'custom-ace-editor';
  editorConfig={
    styles:{
      width:'250px',
      height:'300px'
    },
    editorOptions:{
      mode:'javascript',
      theme:'monokai',
      readOnly:false,
      showLineNumbers: false,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      showGutter: false,
      fontSize:24
    },
    autoCompleteOptions:[
      {
        label:'abs',
        meta:'function(expr)'
      },
      {
        label:'coalesce',
        meta:'function(expr1,expr2...)'
      },
      {
        label:'col1',
        meta:'Column'
      },
      {
        label:'col2',
        meta:'Column'
      },
      {
        label:'var1',
        meta:'Variable'
      },
      {
        label:'var2',
        meta:'Variable'
      }
    ]
  }
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        childInput:['',Validators.required]
    });
    this.registerForm.valueChanges.subscribe(newVal => console.log(newVal))
}
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}
