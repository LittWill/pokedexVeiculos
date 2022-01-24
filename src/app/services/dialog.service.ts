import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../components/dialog/dialog.component';
import { IDialogData } from "../interfaces/IDialogData";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(dataDialog: IDialogData) {
    this.dialog.open(DialogComponent, {data: dataDialog});
  }
}
