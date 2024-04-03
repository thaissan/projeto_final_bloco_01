import { Produto } from "./Produto";

export class Calca extends Produto{
    
    private _tipoDeCorte: string;

	constructor(id: number, nome: string, tamanho: string, tipo: number, preco: number, tipoDeCorte: string) {
        super(id, nome, tipo, preco, tamanho)
		this._tipoDeCorte = tipoDeCorte;
	}


    /**
     * Getter tipoDeCorte
     * @return {string}
     */
	public get tipoDeCorte(): string {
		return this._tipoDeCorte;
	}

    /**
     * Setter tipoDeCorte
     * @param {string} value
     */
	public set tipoDeCorte(value: string) {
		this._tipoDeCorte = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Tipo De Corte: ${this._tipoDeCorte}`);
    }
}