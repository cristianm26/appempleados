import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  listEmpleado!: Empleado[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _empleadoService: EmpleadoService, public dialog: MatDialog, public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cargarEmpleados() {
    this.listEmpleado = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: '¿Estas Seguro que deseas eliminar el Empleado?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Aceptar') {
        this._empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this._snackBar.open('El Empleado fue eliminado con éxito', '', { duration: 3000 })
      }


    });

  }
}
