export interface IPergunta {
  data: Date,
  id: number,
  texto: string,
  resposta: {
    data: Date,
    texto: string
  },
}