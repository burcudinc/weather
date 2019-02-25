import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: '[app-main-nav]',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @ViewChild('mySideNav') mySideNav: ElementRef;


  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNav();
      }
    });
  }

  ngOnInit() {
    var dropdown = document.getElementsByClassName('dropdown-btn');
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  openNav() {
    this.mySideNav.nativeElement.style.width = '250px';
    (document.getElementsByTagName('main')[0] as HTMLDivElement).style.marginLeft = '250px';
  }

  closeNav() {
    this.mySideNav.nativeElement.style.width = '0px';
    (document.getElementsByTagName('main')[0] as HTMLDivElement).style.marginLeft = '0';

  }
}
