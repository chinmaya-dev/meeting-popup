import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = [
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', phone:'ABC', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''}
];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
  
      dom: 'rt'
    };
}
}

