import { CalculadoraSalarial } from "./calculadora-salarial";
import { Cargo, Funcionario } from "./funcionario";

describe('CalculadoraSalarial', () => {
  it('deve calcular o salario para desenvolvedores com salario abaixo do limite', () => {
    const calculadora = new CalculadoraSalarial();
    const desenvolvedor = new Funcionario('Carlos', 1500.00, Cargo.DESENVOLVEDOR);

    const salario = calculadora.calculaSalario(desenvolvedor);

    expect(salario).toEqual(1500.00 * 0.9);
  });

  it('deve calcular o salario para desenvolvedores com salario acima do limite', () => {
    const calculadora = new CalculadoraSalarial();
    const desenvolvedor = new Funcionario('Carlos', 4000.00, Cargo.DESENVOLVEDOR);

    const salario = calculadora.calculaSalario(desenvolvedor);

    expect(salario).toEqual(4000.00 * 0.8);
  });

  it('deve calcular o salario para DBAs com salario abaixo do limite', () => {
    const calculadora = new CalculadoraSalarial();
    const dba = new Funcionario('Paula', 500, Cargo.DBA);

    const salario = calculadora.calculaSalario(dba);

    expect(salario).toEqual(500 * 0.85);
  });

  it('deve calcular o salario para DBA com salario acima do limite', () => {
    const calculadora = new CalculadoraSalarial();
    const dba = new Funcionario('Paula', 3500.00, Cargo.DBA);

    const salario = calculadora.calculaSalario(dba);

    expect(salario).toEqual(3500.00 * 0.75);
  });
});
