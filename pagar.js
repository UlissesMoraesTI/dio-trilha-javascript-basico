/**
 * Forma de Pagamento
 * 
 * - DEBITO       - 10% Desconto
 * - DINHEIRO/PIX - 15% Desconto
 * - CREDITO   2X - Sem Juros
 * - CREDITO > 2X - Com Juros 10% 
 */

var valorEtiqueta = 100.00;
var valorTotal = 0;

var pccDesconto = 0;
var comDesconto = 0;

var pccJuros = 0;
var qtdParcelas = 12;
var vlrParcelas = 0;
var totParcelas = 0;
var formaDePagamento = 'DEBITO';

formaDePagamento = 'DINHEIRO';
formaDePagamento = 'PIX';
formaDePagamento = 'CREDITO';

if (formaDePagamento === 'DEBITO') {
    pccDesconto = 10;
    comDesconto = (valorEtiqueta * pccDesconto) / 100;
    valorTotal = (valorEtiqueta - comDesconto);
    console.log('Produto  r$ ' + valorEtiqueta.toFixed(2));
    console.log('Desconto r$ ' + comDesconto.toFixed(2));
    console.log('--------------------------');
    console.log('Total    r$ ' + valorTotal.toFixed(2) + ' - ' + formaDePagamento);
}

if (formaDePagamento === 'DINHEIRO' || formaDePagamento === 'PIX') {
    pccDesconto = 15;
    comDesconto = (valorEtiqueta * pccDesconto) / 100;
    valorTotal = (valorEtiqueta - comDesconto);
    console.log('Produto  r$ ' + valorEtiqueta.toFixed(2));
    console.log('Desconto r$ ' + comDesconto.toFixed(2));
    console.log('----------------------------');
    console.log('Total    r$ ' + valorTotal.toFixed(2) + ' - ' + formaDePagamento);
}

if (formaDePagamento === 'CREDITO') {
    if (qtdParcelas <= 2) {
        console.log('Produto  r$ ' + valorEtiqueta.toFixed(2));
        console.log('-------------------------------');
        console.log('Total    r$ ' + valorEtiqueta.toFixed(2) + ' - ' + formaDePagamento + ' ' + qtdParcelas + 'X');
        console.log(' ');
        console.log('-------- PARCELAMENTO ---------');
        console.log('-------------------------------');
        vlrParcelas = (valorEtiqueta / qtdParcelas);

        for (var i = 0; i < qtdParcelas; i++) {
            console.log(' ', i + 1 + ' X R$ ' + vlrParcelas.toFixed(2));
            totParcelas = (totParcelas + vlrParcelas);
        }
        console.log('-------------------------------');
        console.log('Total R$ ' + totParcelas.toFixed(2));

    } else {
        pccJuros = 10;
        comJuros = (valorEtiqueta * pccJuros) / 100;
        valorTotal = (valorEtiqueta + comJuros);
        console.log('Produto   r$ ' + valorEtiqueta.toFixed(2));
        console.log('Acrescimo r$ ' + comJuros.toFixed(2));
        console.log('-------------------------------');
        console.log('Total    r$ ' + valorTotal.toFixed(2) + ' - ' + formaDePagamento + ' ' + qtdParcelas + 'X');
        console.log(' ');
        console.log('-------- PARCELAMENTO ---------');
        console.log('-------------------------------');
        vlrParcelas = (valorTotal / qtdParcelas);

        for (var i = 0; i < qtdParcelas; i++) {
            console.log(' ', i + 1 + ' X R$ ' + vlrParcelas.toFixed(2));
            totParcelas = (totParcelas + vlrParcelas);
        }
        console.log('-------------------------------');
        console.log('Total R$ ' + totParcelas.toFixed(2));
    }
}
