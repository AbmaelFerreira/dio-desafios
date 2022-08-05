// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Funcionario {
    codigo: number;
    nome: string;
}

let funcionario: Funcionario = {
   codigo: 4,
   nome: 'Abmael'
    

};

funcionario.codigo = 10;
funcionario.nome = "John";