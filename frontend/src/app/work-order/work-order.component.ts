import { Component, ElementRef, ViewChild  } from '@angular/core';
import * as jspdf from "jspdf";
import jsPDF from "jspdf";

//import * as pdfMake from "pdfmake/build/pdfmake";
//import * as pdfFonts from "pdfmake/build/vfs_fonts";
//const htmlToPdfmake = require("html-to-pdfmake");
//(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent {

  @ViewChild('pdfTable', {static: false}) public pdfTable!: ElementRef;


  titleWorkOrderCustom : String = "Bienvenido a la creacion de orden de servicio"
  nameSourceUser : String = ""
  namePlace : String = ""
  nameDateCreation : String = ""
  nameDateRequest : String = ""
  nameTargetUser : String = ""
  conceptName : String = ""
  conceptValue : String = ""

  /*public exportPDF() {
    console.log("Hola")
    const pdfTable = this.pdfTable.nativeElement;
    console.log(pdfTable)
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }*/

  ngAfterViewInit(){
  }


  exportPDF() {
    console.log("Hola")
    const container = this.pdfTable.nativeElement;

    let pdf = new jsPDF()

    pdf.html(container, {
      callback: (pdf) => {
        pdf.save("sample.pdf")
      }
    }
    )

  }

}
