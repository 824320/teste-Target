const fs = require('fs');

const jsonContent = fs.readFileSync('faturamento_mensal.json', 'utf8');
const faturamento = JSON.parse(jsonContent);

const valores = faturamento.faturamento.map(item => item.valor);

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

const media = valores.reduce((acc, current) => acc + current, 0) / valores.length;

let diasAcimaDaMedia = 0;
valores.forEach(valor => {
  if (valor > media) {
    diasAcimaDaMedia++;
  }
});

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);