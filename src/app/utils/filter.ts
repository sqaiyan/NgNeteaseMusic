import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "Pplaycount" })
export class PplaycountPipe implements PipeTransform {
  transform(v: number, exponent: string) {
    if (!v) return "";
    return v < 1e5 ? v : (v / 1e4).toFixed(1) + "万";
  }
}
