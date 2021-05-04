import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StockService} from '../controller/service/stock-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import {Stock} from '../controller/model/Stock.model';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  constructor(private stockService: StockService) { }
  public panelExpanded = false;
  public panelExpande = false;
  referenceMagasin: string;
  referenceMaterial: string;
  fileName = 'Stock.xlsx';

  @ViewChild('htmlData') htmlData: ElementRef;

  // data: Array<Stock> = this.stockService.stocks;
  ngOnInit(): void {
    this.stockService.findAll();
  }

  search(referenceMagasin: string, referenceMaterial: string) {

  }

  public openPDF(): void {
    const DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('stock.pdf');
    });
  }
  exportexcel() {

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('ProductData');
    // workbook.csv.writeBuffer().then((data) => {
    //   let blob = new Blob([data], { type: 'text/csv' });
    //   fs.saveAs(blob, 'ProductData.csv');
    // });
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'material', key: 'material', width: 32 },
      { header: 'magasin', key: 'magasin', width: 10 },
      { header: 'qte', key: 'qte', width: 10 },
      // { header: 'Price', key: 'price', width: 10, style: { font: { name: 'Arial Black', size: 10} } },
    ];
    this.stockService.stocks.forEach(e => {
      worksheet.addRow({id: e.id, material: e.material.reference, magasin: e.magasin.reference, qte: e.qte}, 'n');
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Stocks.xlsx');
    });
  }

}
