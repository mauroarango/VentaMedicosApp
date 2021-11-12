import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VentaMedicosDbDataSource} from '../datasources';
import {Contacto, ContactoRelations} from '../models';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.ID,
  ContactoRelations
> {
  constructor(
    @inject('datasources.VentaMedicosDB') dataSource: VentaMedicosDbDataSource,
  ) {
    super(Contacto, dataSource);
  }
}
