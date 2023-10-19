import { IExportStrategy } from "./export-strategy";

export class XMLExportStrategy implements IExportStrategy {
  public export(): void {
    console.log('Exportar como xml con patrón estrategia');
  }
}