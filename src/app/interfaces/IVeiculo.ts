export interface IVeiculo {
  ano: number,
  cor: string,
  id: number,
  imagem: string,
  marca: {
    imagemLogo: string,
    nome: string
  },
  modelo: string,
  km: number,
}