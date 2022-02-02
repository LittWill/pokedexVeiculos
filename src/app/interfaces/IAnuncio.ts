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

export interface INovoAnuncio {
  descricao: string,
  valor: number,
  veiculo: {
    ano: number,
    cor: string,
    km: number,
    marcaId: number,
    modelo: string,
  }
}