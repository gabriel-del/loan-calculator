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


Plotly.plot( 
  document.querySelector('#chart'), 
  [{ x: I, y: divida }], 
  { margin: { t: 0 }}
)
