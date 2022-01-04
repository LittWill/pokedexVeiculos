import { IVeiculo } from "./IVeiculo";

export interface IAnuncio {
  id: number,
  veiculo: IVeiculo,
  descricao: string,
  valor: number,
  perguntas: {
    data: Date,
    id: number,
    resposta: {
      data: Date,
      texto: string
    },
    texto: string
  },
  status: string,
  data: Date
}