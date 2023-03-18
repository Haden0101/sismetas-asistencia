import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, AlertController, IonicSafeString, IonInfiniteScroll, LoadingController} from '@ionic/angular';
import { IonModal, AnimationController   } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-mienbros',
  templateUrl: './mienbros.page.html',
  styleUrls: ['./mienbros.page.scss'],
})
export class MienbrosPage implements OnInit {

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

  /* Boton de modal para ingresar nuevo integrante */

  /* Boton de confirmación del modal de agregar miembro */
  async confirm() {
    if(this.name != null && this.sec_name != null && this.cel != null && this.mail != null && this.cump != null){
      this.modal.dismiss(this.name, 'confirm');
    }
    else {
      const alertRequire = await this.alertController.create({
        header: 'ERROR',
        message: 'Datos incompletos',
        buttons: ['OK']
      })

      await alertRequire.present();
    }
  }

  /* Alerta de bienvenida al precionar confirmar del modal de agregar miembro */
  async onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      const alert = await this.alertController.create({
        header: 'Integrante añadido',
        subHeader: 'Demos la Bienvenida a:',
        message: this.name,
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  /* Modal de Editar integrante - MODAL*/

  enterAnimation = (baseEl: HTMLElement) => {
    const root:any = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  async Editar(){
    if(this.name != null && this.sec_name != null && this.cel != null && this.mail != null && this.cump != null) {
      const alertRequire = await this.alertController.create({
        header: 'AVISO',
        message: 'Datos modificados correctamente',
        buttons: ['OK']
      })

      await alertRequire.present();
    }
    else {
      const alertRequire = await this.alertController.create({
        header: 'ERROR',
        message: 'Datos incompletos',
        buttons: ['OK']
      })

      await alertRequire.present();
    }
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

  async alertDelete(){
      const alert = await this.alertController.create({
        header: '¿Estas segudo que deseas Eliminar?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'Si, Eliminar',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });

      await alert.present();
    }

/* FIN DE CODIGO */
}
