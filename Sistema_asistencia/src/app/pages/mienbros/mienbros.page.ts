import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-mienbros',
  templateUrl: './mienbros.page.html',
  styleUrls: ['./mienbros.page.scss'],
})
export class MienbrosPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal
  items: string[] = [];

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  public name!: String;
  public sec_name!: String;
  public cel!: number;
  public mail!: String;
  public cump!: Date;

  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  /* Boton de modal para ingresar nuevo integrante */

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  /* Desde acá se inicia el listado de Integrantes >>> */

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 12; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
