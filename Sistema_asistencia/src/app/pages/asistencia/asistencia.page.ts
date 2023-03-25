import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, AlertController, IonicSafeString, IonInfiniteScroll, LoadingController} from '@ionic/angular';
import { IonModal, AnimationController   } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild(IonModal) modalEdit!: IonModal;
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  items: string[] = [];

  public name!: IonicSafeString;
  public sec_name!: IonicSafeString;
  public cel!: number;
  public mail!: String;
  public cump!: Date;
  public message!: IonicSafeString;

  handlerMessage = '';
  roleMessage = '';

  public ok: any = this.showLoading();


  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private animationCtrl: AnimationController)
    { }

  ngOnInit() {
    this.generateItems();
    this.showLoading();
  }

  /* Función para recargar la pagina */
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  /* Desde acá se inicia el listado de Integrantes >>> */

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

/* FIN DE CODIGO */

}
