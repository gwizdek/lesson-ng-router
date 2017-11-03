import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId = 'dasda';


  onActivate($event) {
    // console.log('ID: ', $event.route.snapshot.params.id);
    if ($event.route)
      this.selectedUserId = $event.route.snapshot.params.id;
  }
}
