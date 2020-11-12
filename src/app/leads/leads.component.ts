import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  public data = [
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''},
    {name: 'John', title: 'Mr.', company:'ABC',phone:'99999999', mobile:'99999999', email:'abc@xyz.com', loadstatus:'Acquired', owner:''}
];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
  
      dom: 'rt'
    };
}

}
