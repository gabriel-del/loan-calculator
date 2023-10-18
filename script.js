let montante = Number(Montante.value)
let taxa = Number(Taxa.value) / 100
// let meses = Number(Meses.value)
let parcela = Number(Parcela.value)

let divida = [montante]
let juros = [0]
let I = []
for(let i = 0;  divida[0] > 0  ; i ++) {
  juros.unshift(divida[0] * taxa)
  divida.unshift(divida[0] + juros[0] - parcela)
  I.push(i)
}
divida.reverse()
juros.reverse()


// Plotly.plot( 
//   document.querySelector('#chart'), 
//   [{ x: I, y: divida }], 
//   { margin: { t: 0 }}
// )


let trace1 = {
  x: I,
  y: divida,
  name: 'Dívida',
  type: 'scatter'
};

let trace2 = {
  x: I,
  y: juros,
  name: 'Juros',
  yaxis: 'y2',
  type: 'scatter'
};

let data = [trace1, trace2];

let layout = {
  title: 'multiple y-axes example',
  width: 800,
  xaxis: {domain: [0.3, 0.7]},
  yaxis: {
    title: 'yaxis title',
    titlefont: {color: '#1f77b4'},
    tickfont: {color: '#1f77b4'}
  },
  yaxis2: {
    title: 'yaxis2 title',
    titlefont: {color: '#ff7f0e'},
    tickfont: {color: '#ff7f0e'},
    anchor: 'free',
    overlaying: 'y',
    side: 'left',
    position: 0.15
  }
};

Plotly.newPlot(document.querySelector('#chart'), data, layout);