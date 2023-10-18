let montante, taxa, parcela, divida, juros, I

function load() {
  Plotly.purge(document.querySelector('#chart'))
  // Plotly.deleteTraces(document.querySelector('#chart'), 0)
  getValues()
  plotCharts()
}
load()

document.addEventListener("DOMContentLoaded", () => {
  Montante.addEventListener('input', load)
  Taxa.addEventListener('input', load)
  Parcela.addEventListener('input', load)
})

function getValues() {
  montante = Number(Montante.value)
  taxa = Number(Taxa.value) / 100
  // meses = Number(Meses.value)
  parcela = Number(Parcela.value)
  
  divida = [montante]
  juros = [0]
  I = []
  for(let i = 0;  divida[0] > 0  ; i ++) {
    juros.unshift(divida[0] * taxa)
    divida.unshift(divida[0] + juros[0] - parcela)
    I.push(i)
  }
  divida.reverse()
  juros.reverse()
}


function plotCharts() {
  Plotly.newPlot(document.querySelector('#chart'), 
  [{
    x: I,
    y: divida,
    name: 'Dívida'
  }, {
    x: I,
    y: juros,
    name: 'Juros',
    yaxis: 'y2'
  }], 
  {
    title: 'Variação da dívida e do juros',
    yaxis: {
      title: 'Dívida',
      titlefont: {color: '#1f77b4'},
      tickfont: {color: '#1f77b4'}
    },
    yaxis2: {
      title: 'Juros',
      titlefont: {color: '#ff7f0e'},
      tickfont: {color: '#ff7f0e'},
      anchor: 'x',
      overlaying: 'y',
      side: 'right',
      position: 0.45
    }
  })
}

