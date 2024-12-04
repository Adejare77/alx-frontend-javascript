import { RowID, RowElement } from "./interface"

declare function insertRow(RowElement:any): number;
declare function deleteRow(rowID: number): void;
declare function updateRow(rowId: number, RowElement:any): number;
