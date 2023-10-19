import { IExportStrategy } from "../export-strategy";

export class StrategyFactory {
  static createStrategy<T extends IExportStrategy>(c: new () => T): T {
    return new c();
  }
}