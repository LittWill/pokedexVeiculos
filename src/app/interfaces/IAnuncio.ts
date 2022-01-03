import { IVeiculo } from "./IVeiculo";

export interface IAnuncio {
  id: number,
  veiculo: IVeiculo,
  descricao: string,
  valor: number,
  perguntas: string[],
  status: string,
  data: Date
}