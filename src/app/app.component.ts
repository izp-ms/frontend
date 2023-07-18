import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `

    <nav class="nav">
      <div class="nav_logo">
        <div class="nav_logo_image">
          <img src="">
        </div>
        <div class="nav_logo_text">
        <h1>postcardia</h1>
        </div>
      </div>
      <div class="nav_menu">
        <div class="nav_menu_sign">
          <button ></button>
        </div>
        <div class="nav_menu_color">
          
        </div>
        <div class="nav_menu_lang">
          
        </div>
      </div>
    </nav>

    <section class="header">
      <div class="header_intro">
          <h1 class="header_intro__h">Pocztówka</h1>
          <p class="header_intro__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue pulvinar libero, sed accumsan dolor volutpat at. Nam egestas gravida ullamcorper. Aliquam pellentesque fermentum nisl, id dictum dui imperdiet ut. Sed condimentum lobortis commodo. Donec iaculis neque id quam aliquet, non ultrices erat mattis.</p>
      </div>
      <div class="header_picture">
        <img class="header_picture__img"> 
      </div>
      <div class="header_mosaic">
          
      </div>
    </section>

    <section class="download">
      <h1 class="download_title"></h1>
      <p class="download_text"></p>
      <div class="download_links">
        <div class="download_links_button">
        
        </div>
        <div class="download_links_button">
        
        </div>
      </div>
      <div class="download_decoration"></div>
    </section>


    <section class="preview">
      <div class="preview_profile"></div>
      <div class="preview_profile"></div>
      <div class="preview_profile"></div>
    </section>

    <section class="banner">
      <div class="banner_decoration"></div>
    </section>

    <footer class="footer">
      <p>© 2023 POCZTOWA COMPANY                    Terms of Service |  authors</p>
    </footer>

    <!--The content below is only a placeholder and can be replaced.-->
    <!-- <div style="text-align:center" class="content">
      <h1>
        Welcome to meeeee {{title}} {{cos}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul> -->
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: [],
})
export class AppComponent implements OnInit{
  title = 'frontend';
  cos = "hahahahaha";
  constructor (){
    console.log('hello')
  }
  ngOnInit(): void {
    // new Error('Method not implemented.');
    console.log('init')
    this.zadzialaj()
  }
  zadzialaj(): void {
    console.log("func")
  }

}
