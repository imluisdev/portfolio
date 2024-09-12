import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public theme: string;

  public changeAppareanceMode(){ // save this to local storage
    const currentTheme = document.documentElement.getAttribute('data-theme');
    this.theme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  public redirectToSocialMedia(socialMedia: string){
    if(socialMedia == 'git'){
      window.open('https://github.com/imluisdev', 'blank');
    } else if(socialMedia == 'linkedin'){
      window.open('https://www.linkedin.com/in/luis-god%C3%ADnez/', 'blank');
    }
  }

}
