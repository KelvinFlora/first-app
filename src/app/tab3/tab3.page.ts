import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private toastController: ToastController) {}

  message: string = '';
  messages: string[] = [];

  sendMessage() {
    if (this.message.trim() !== '') {
      this.messages.push(this.message);
      this.message = '';
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async abrirTecladoEmoji() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('style', 'position: absolute; top: -100px;');
    document.body.appendChild(input);

    input.focus();
    input.setAttribute('type', 'emoji');

    input.addEventListener('blur', () => {
      document.body.removeChild(input);
      this.showToast('Teclado de emoji fechado!');
    });
  }
}
