import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `
    <header>
      <section class="header-wrapper">
        <div>
          <img class="logo" src="https://deplomatic-ui.s3.amazonaws.com/assets/logo/dmapim.png" placeholder="Logo" height="30px" >
        </div>
        <nav class="nav-links">
          <a href="#Home">Home</a>
          <a href="#Contact Us">Contact Us</a>
          <a href="#About">Logout</a>
        </nav>
      </section>
    </header>
    `
})
export class HeaderComponent {  }