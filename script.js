// Dados Iniciais do Planejamento
const dadosIniciais = [
    { ano: 2026, idade: 18, salario: 1500.00, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2027, idade: 19, salario: 1650.00, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2028, idade: 20, salario: 1815.00, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2029, idade: 21, salario: 1996.50, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2030, idade: 22, salario: 2196.15, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2031, idade: 23, salario: 2415.77, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2032, idade: 24, salario: 2657.34, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2033, idade: 25, salario: 2923.08, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2034, idade: 26, salario: 3215.38, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2035, idade: 27, salario: 3536.92, taxaReserva: 0.12, taxaRendimento: 0.05 },
    { ano: 2036, idade: 28, salario: 3890.61, taxaReserva: 0.12, taxaRendimento: 0.05 }
];

// Função para formatar números como moeda (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Renderização e Cálculo dos Dados
function gerarTabela() {
    const tableBody = document.getElementById('tableBody');
    let valorInicial = 0;

    dadosIniciais.forEach((row) => {
        const reservaAnual = row.salario * row.taxaReserva;
        const rendimento = (valorInicial + reservaAnual) * row.taxaRendimento;
        const valorFinal = valorInicial + reservaAnual + rendimento;

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${row.ano}</td>
            <td>${row.idade}</td>
            <td class="col-salario">${formatarMoeda(row.salario)}</td>
            <td class="col-reserva">${formatarMoeda(reservaAnual)}</td>
            <td>${formatarMoeda(valorInicial)}</td>
            <td class="col-rendimento">${formatarMoeda(rendimento)}</td>
            <td class="col-valor-final">${formatarMoeda(valorFinal)}</td>
        `;

        tableBody.appendChild(tr);

        // O valor final do ano atual vira o valor inicial do próximo ano
        valorInicial = valorFinal;
    });
}

// Executa após o carregamento da página
document.addEventListener('DOMContentLoaded', gerarTabela);
