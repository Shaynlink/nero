import { Component } from '@angular/core';

if (typeof Worker != 'undefined') { 
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };

  worker.postMessage('hello');
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Nero';
}
