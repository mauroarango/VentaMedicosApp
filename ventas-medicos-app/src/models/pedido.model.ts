import {Entity, model, property, hasMany} from '@loopback/repository';
import {Producto} from './producto.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
    required: true,
  })
  Producto: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'string',
    required: true,
  })
  NumeroPedido: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @hasMany(() => Producto)
  productos: Producto[];

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  vendedorId?: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
