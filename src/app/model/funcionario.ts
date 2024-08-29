export enum Cargo {
  DESENVOLVEDOR,
  DBA,
  TESTADOR
}

export class Funcionario {
  private _nome: string;
  private _salario: number;
  private _cargo: Cargo;

  constructor(nome: string, salario: number, cargo: Cargo) {
    this._nome = nome;
    this._salario = salario;
    this._cargo = cargo;
  }

  public get nome(): string {
    return this._nome;
  }

  public get salario(): number {
    return this._salario;
  }

  public get cargo(): Cargo {
    return this._cargo;
  }
}
