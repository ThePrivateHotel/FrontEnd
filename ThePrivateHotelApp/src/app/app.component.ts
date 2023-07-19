import { Component } from '@angular/core';

interface SideNavToggle {
  screenwidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThePrivateHotelApp';

  isSideNavCollapsed = false;
  screenwidth=0;

  onToggleSideNav(data: SideNavToggle): void{
      this.screenwidth = data.screenwidth;
      this.isSideNavCollapsed = data.collapsed;
  }
}
