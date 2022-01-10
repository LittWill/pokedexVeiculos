import { IPergunta } from "./IPergunta";
import { IUsuario } from "./IUsuario";
import { IVeiculo } from "./IVeiculo";

export interface IAnuncio {
  veiculo: IVeiculo,
  descricao: string,
  valor: number,
  perguntas: IPergunta[],
  usuario: IUsuario,
  status: string,
  data: Date
}