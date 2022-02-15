export interface IVeiculo {
  ano: number,
  cor: string,
  id: number,
  imagem: string,
  marca: {
    id: number,
    imagemLogo: string,
    nome: string
  },
  modelo: string,
  km: number,
}