import { Cargo, Funcionario } from "./funcionario";

export class CalculadoraSalarial {

  // public calculaSalario(funcionario: Funcionario): number {
  //   return 1350.00;
  // }

  // Primeira refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   if (funcionario.salario > 3000.00) {
  //     return 3200.00
  //   }
  //   return 1350.00;
  // }

  // Segunda refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   if (funcionario.cargo === Cargo.DESENVOLVEDOR) {
  //     if (funcionario.salario > 3000.00) {
  //       return 3200.00
  //     }
  //     return 1350.00;
  //   }

  //   return 425.00;
  // }

  // Terceira refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   return 1500.00 * 0.9;
  // }

  // Quarta refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   if (funcionario.salario > 3000.00) {
  //     return funcionario.salario * 0.8;

  //   }
  //   return funcionario.salario * 0.9;
  // }

  // Quinta refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   switch (funcionario.cargo) {
  //     case Cargo.DESENVOLVEDOR:
  //       if (funcionario.salario > 3000.00) {
  //         return funcionario.salario * 0.8;

  //       }
  //       return funcionario.salario * 0.9;

  //     default:
  //       return funcionario.salario * 0.85;
  //   }
  // }

  // Sexta refatoração
  // public calculaSalario(funcionario: Funcionario): number {
  //   switch (funcionario.cargo) {
  //     case Cargo.DESENVOLVEDOR:
  //       if (funcionario.salario > 3000.00) {
  //         return funcionario.salario * 0.8;

  //       }
  //       return funcionario.salario * 0.9;

  //     default:
  //       return funcionario.salario * 0.85;
  //   }
  // }

  // Sétima refatoração
  public calculaSalario(funcionario: Funcionario): number {
    switch (funcionario.cargo) {
      case Cargo.DESENVOLVEDOR:
        if (funcionario.salario > 3000.00) {
          return funcionario.salario * 0.8;

        }
        return funcionario.salario * 0.9;

      default:
        if (funcionario.salario > 2000.00) {
          return funcionario.salario * 0.75;
        }
        return funcionario.salario * 0.85;
    }
  }

}
