import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  totalIntegrantes: number = 20;
  totalAsistencias: number = 15;
  totalFaltas: number = 5;
  totalGeneral: number = 20;

  constructor() { }

  ngOnInit() {
    this.generarGrafico();
  }

  generarGrafico(){
    const canva = document.getElementById('myChart');
    const ctx: any = (canva as HTMLCanvasElement).getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
