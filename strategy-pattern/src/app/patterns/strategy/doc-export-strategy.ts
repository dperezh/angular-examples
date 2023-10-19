import { IExportStrategy } from "./export-strategy";

export class DOCExportStrategy implements IExportStrategy {
  public export(): void {
    console.log('Exportar como doc con patrón estrategia');
  }
}