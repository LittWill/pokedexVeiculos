import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../components/dialog/dialog.component';
import { IDialogData } from "../interfaces/IDialogData";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(dataDialog: IDialogData): void {
    this.dialog.open(DialogComponent, {data: dataDialog});
  }
}
