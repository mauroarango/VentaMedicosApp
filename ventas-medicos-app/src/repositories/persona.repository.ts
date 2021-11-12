import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VentaMedicosDbDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.ID,
  PersonaRelations
> {
  constructor(
    @inject('datasources.VentaMedicosDB') dataSource: VentaMedicosDbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
