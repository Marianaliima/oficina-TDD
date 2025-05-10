const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  let calculadora

  beforeEach(() => {
    calculadora = new Calculadora()
  })
  it('Deverá retornar a soma de dois números', () => {

   expect(calculadora.soma(9,5)).toBe(14)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    // const calculadora = new Calculadora()
    expect(calculadora.subtracao(2,1)).toBe(1)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    // const calculadora = new Calculadora()

  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
    expect(calculadora.divisao(10,2)).toBe(5)

  })

})