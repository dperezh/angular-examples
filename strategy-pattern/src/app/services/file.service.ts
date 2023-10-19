import { Injectable } from '@angular/core';
import { IExportStrategy } from '../patterns/strategy/export-strategy';

@Injectable()
export class FileService {

  constructor() { }

  processFile() {
    console.log('Procesando archivo...');
  }

  exportFile<T extends IExportStrategy>(t: T) {
    t.export();
  }
}
