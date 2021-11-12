import {Entity, model, property, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Vendedor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @hasMany(() => Pedido)
  pedidos: Pedido[];

  constructor(data?: Partial<Vendedor>) {
    super(data);
  }
}

export interface VendedorRelations {
  // describe navigational properties here
}

export type VendedorWithRelations = Vendedor & VendedorRelations;
