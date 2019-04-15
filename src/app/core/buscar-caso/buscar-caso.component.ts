import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, Inject} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface caso {
  name: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-buscar-caso',
  templateUrl: './buscar-caso.component.html',
  styleUrls: ['./buscar-caso.component.css']
})
export class BuscarCasoComponent implements OnInit {
  
  animal: string;
  name: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  caso: caso[] = [
    
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    
    if ((value || '').trim()) {
      this.caso.push({name: value.trim()});
    }
    
    if (input) {
      input.value = '';
    }
  }

  remove(caso: caso): void {
    const index = this.caso.indexOf(caso);

    if (index >= 0) {
      this.caso.splice(index, 1);
    }
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BuscarCasoDialog, {
      width: '75%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }
}
@Component({
  selector: 'buscar-caso-dialog',
  templateUrl: 'buscar-caso-dialog.html',
})
export class BuscarCasoDialog {

  constructor(
    public dialogRef: MatDialogRef<BuscarCasoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
