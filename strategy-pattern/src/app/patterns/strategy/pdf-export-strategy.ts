import { IExportStrategy } from "./export-strategy";

export class PDFExportStrategy implements IExportStrategy {
  public export(): void {
    console.log('Exportar como pdf con patrón estrategia');
  }
}