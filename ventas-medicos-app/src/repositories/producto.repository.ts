import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VentaMedicosDbDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.ID,
  ProductoRelations
> {
  constructor(
    @inject('datasources.VentaMedicosDB') dataSource: VentaMedicosDbDataSource,
  ) {
    super(Producto, dataSource);
  }
}
