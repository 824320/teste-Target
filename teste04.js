const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const valorTotal = Object.values(faturamento).reduce((acc, current) => acc + current, 0);
  
  for (const estado in faturamento) {
    const valorEstado = faturamento[estado];
    const percentual = (valorEstado / valorTotal) * 100;
    console.log(`O estado ${estado} representa ${percentual.toFixed(2)}% do valor total mensal.`);
  }