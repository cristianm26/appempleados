import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 593960834246,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2019-05-25'), sexo: 'Masculino', telefono: 593960834241
    },
    {
      nombreCompleto: 'Maria Funes', correo: 'mfunes@gmail.com',
      estadoCivil: 'Casado', fechaIngreso: new Date('2020-04-27'), sexo: 'Femenino', telefono: 593960834242
    },
    {
      nombreCompleto: 'Lucrecia Juarez', correo: 'maria@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-07-25'), sexo: 'Femenino', telefono: 593960834243
    },
    {
      nombreCompleto: 'Federico Gonzalez', correo: 'fgonzalez@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-02-31'), sexo: 'Femenino', telefono: 593960834245
    },
    {
      nombreCompleto: 'Estefania Schutz', correo: 'eschutz@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 593960834247
    },
    {
      nombreCompleto: 'Maria Belen Arzu', correo: 'mbarzu@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 593960834248
    }
  ];
  constructor() { }
  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1)
  }
  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }
  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
  }
}
