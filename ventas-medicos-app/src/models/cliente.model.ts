import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @belongsTo(() => Pedido)
  pedidoId: string;

  @hasMany(() => Pedido)
  pedidos: Pedido[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
