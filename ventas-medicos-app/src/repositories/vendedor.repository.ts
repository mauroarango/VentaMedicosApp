import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {VentaMedicosDbDataSource} from '../datasources';
import {Vendedor, VendedorRelations, Pedido} from '../models';
import {PedidoRepository} from './pedido.repository';

export class VendedorRepository extends DefaultCrudRepository<
  Vendedor,
  typeof Vendedor.prototype.ID,
  VendedorRelations
> {

  public readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Vendedor.prototype.ID>;

  constructor(
    @inject('datasources.VentaMedicosDB') dataSource: VentaMedicosDbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>,
  ) {
    super(Vendedor, dataSource);
    this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
  }
}
