import { Component } from '@angular/core';
import { DOCExportStrategy } from 'src/app/patterns/strategy/doc-export-strategy';
import { IExportStrategy } from 'src/app/patterns/strategy/export-strategy';
import { StrategyFactory } from 'src/app/patterns/strategy/factory/strategy-factory';
import { PDFExportStrategy } from 'src/app/patterns/strategy/pdf-export-strategy';
import { XMLExportStrategy } from 'src/app/patterns/strategy/xml-export-strategy';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

  constructor(private fileService: FileService) { }

  exportData(format: String) {
    switch (format) {
      case 'pdf':
        console.log('Exportar como pdf');
        break;
      case 'doc':
        console.log('Exportar como doc');
        break;
      case 'xml':
        console.log('Exportar como xml');
        break;
      default:
        break;
    }
  }

  exportDataInPDF() {
    let exportStrategy: IExportStrategy = new PDFExportStrategy();
    exportStrategy.export();
  }
  exportDataInDOC() {
    let exportStrategy: IExportStrategy = new DOCExportStrategy();
    exportStrategy.export();
  }
  exportDataInXML() {
    let exportStrategy: IExportStrategy = new XMLExportStrategy();
    exportStrategy.export();
  }

  exportDataInPDFWithService() {
    this.fileService.processFile();
    this.fileService.exportFile(new PDFExportStrategy());
  }

  exportDataInDOCWithService() {
    this.fileService.processFile();
    this.fileService.exportFile(new DOCExportStrategy());
  }

  exportDataInXMLWithService() {
    this.fileService.processFile();
    this.fileService.exportFile(new XMLExportStrategy());
  }

  exportDataInPDFWithServiceAndFactory() {
    this.fileService.processFile();
    this.fileService.exportFile(StrategyFactory.createStrategy(PDFExportStrategy));
  }

  exportDataInDOCWithServiceAndFactory() {
    this.fileService.processFile();
    this.fileService.exportFile(StrategyFactory.createStrategy(DOCExportStrategy));
  }

  exportDataInXMLWithServiceAndFactory() {
    this.fileService.processFile();
    this.fileService.exportFile(StrategyFactory.createStrategy(XMLExportStrategy));
  }
}
