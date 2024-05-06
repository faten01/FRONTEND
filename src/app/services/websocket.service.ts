import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private echo: Echo;

  constructor() {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'local', // Same as your .env APP_KEY or another appropriate key
      wsHost: 'localhost',
      wsPort: 6001,
      disableStats: true,
      forceTLS: false // Set to true if you're using https
    });

    this.echo.channel('events')
      .listen('EventTriggered', (data: any) => {
        console.log(data);
      });
  }
}
