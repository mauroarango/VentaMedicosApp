import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {VentaMedicosDbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Producto} from '../models';
import {ProductoRepository} from './producto.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.ID,
  PedidoRelations
> {

  public readonly productos: HasManyRepositoryFactory<Producto, typeof Pedido.prototype.ID>;

  constructor(
    @inject('datasources.VentaMedicosDB') dataSource: VentaMedicosDbDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(Pedido, dataSource);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
}
