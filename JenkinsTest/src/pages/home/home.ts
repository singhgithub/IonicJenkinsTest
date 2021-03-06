import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  selector: 'page-home',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Home</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <h2>Welcome to Ionic!</h2>
      <p>
        This starter project comes with simple tabs-based layout for apps
        that are going to primarily use a Tabbed UI.
      </p>
      <p>
        Take a look at the <code>src/pages/</code> directory to add or change tabs,
        update any existing page or create new pages.
      </p>
    </ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController, private ga: GoogleAnalytics) {
    console.log('HomePage Constructor is Called')

    this.ga.startTrackerWithId('UA-99449396-1')
   .then(() => {
     console.log('Google analytics is ready now');
        this.ga.trackView('test');
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));

  }
}

// export function sum(a, b) {
//   return a + b;
// }