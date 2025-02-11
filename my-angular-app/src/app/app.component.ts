import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  onCaptchaSuccess(event: any) {
    console.log('Captcha Success:', event);
  }

  onCaptchaRendered() {
    console.log('Captcha rendered!');
  }

  onCaptchaError() {
    console.log('Captcha error!');
  }

  onCaptchaReset() {
    console.log('Captcha reset!');
  }

  onCaptchaExpired() {
    console.log('Captcha expired!');
  }

  onChallengeExpired() {
    console.log('Challenge expired!');
  }
}
