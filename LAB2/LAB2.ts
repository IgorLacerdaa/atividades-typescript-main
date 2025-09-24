/**
 * ts/ex2_veiculos.ts
 * Conceitos: literais, união, enum, objetos, arrays, Map, funções utilitárias
 */

// 1) Literais + união
// Define tipos personalizados usando literais e uniões
type Tipo = 'carro' | 'moto' | 'caminhao'; // Tipo que só aceita estes três valores literais
type Placa = string; // Alias de tipo para clareza semântica

// Define interface para representar um veículo
interface Veiculo {
  placa: Placa;       // Usa o tipo Placa definido acima
  tipo: Tipo;         // Usa o tipo Tipo (união de literais) definido acima
  ano: number;        // Ano de fabricação
  fabricante: string; // Fabricante do veículo
  cor: string;        // Cor do veículo
}

// Cria um veículo usando a interface
const v1: Veiculo = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
console.log('1) Veículo:', v1);

// 2) Lista + filtros + mapeamentos
// Array de veículos com operações de filtro e mapeamento
const frota: Veiculo[] = [
  v1, // Reutiliza veículo criado anteriormente
  { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
  { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];

const soCarros = frota.filter(v => v.tipo === 'carro'); // Filtra apenas carros
const anos = frota.map(v => v.ano); // Extrai array com os anos
console.log('2) Filtros/Map:', { soCarros, anos });

// 3) Enum + helpers
// Enum para cores padronizadas
enum CorPadrao { Preto = 'preto', Branco = 'branco', Vermelho = 'vermelho' }
// Função que cria cópia de um veículo com nova cor
function pintar(v: Veiculo, cor: CorPadrao): Veiculo {
  return { ...v, cor }; // Spread operator cria cópia com nova cor
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));

// 4) Função utilitária: normalizar placa
// Função para padronizar formato da placa
function normalizarPlaca(p: string): Placa {
  return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase(); // Remove caracteres especiais e converte para maiúsculas
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23'));

// 5) Map por tipo (agrupamento)
// Agrupa veículos por tipo usando Map
const porTipo = new Map<Tipo, Veiculo[]>(); // Map associando tipo a array de veículos
for (const v of frota) {
  const arr = porTipo.get(v.tipo) ?? []; // Obtém array existente ou cria vazio
  arr.push(v); // Adiciona veículo ao array
  porTipo.set(v.tipo, arr); // Atualiza o Map
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));

export {}; // Marca o arquivo como um módulo para evitar conflitos de variáveis