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
    this.generarGraficoOne();
    this.generarGraficoTwo();
  }


  /* Sección de Graficos para el dashBoard */
  generarGraficoOne(){
    const canva = document.getElementById('myChartOne');
    const ctx: any = (canva as HTMLCanvasElement).getContext('2d');

    const data = {
      labels: [
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciemnbre'
      ],
      datasets: [{
        label: 'Deshabilitar',
        data: [300, 50, 100, 45, 23, 60, 23, 87, 123, 234, 56, 24],
        backgroundColor: [
          'rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)',
          'rgb(70, 193, 48)','rgb(136, 58, 193)','rgb(207, 211, 66)',
          'rgb(100, 123, 88)','rgb(66, 218, 193)','rgb(218, 66, 102)'
        ],
        hoverOffset: 4
      }]
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generarGraficoTwo(){
    const canva = document.getElementById('myChartTwo');
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
