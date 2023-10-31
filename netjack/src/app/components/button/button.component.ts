import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() width:string = '';
  @Input() height:string = '';
  @Input() content = '';
  @Input() link:string = '';

  navigate(){
    if(this.link !== ''){
      window.open(this.link, '_blank');
    }

  }
}
