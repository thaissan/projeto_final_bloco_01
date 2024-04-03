import { Produto } from "./Produto";

export class Medicamento extends Produto{
    
    private _estampa: string;

	constructor(id: number, nome: string, tipo: number, preco: number, estampa: string) {
        super(id, nome, tipo, preco)
		this._estampa = estampa;
	}


    /**
     * Getter estampa
     * @return {string}
     */
	public get estampa(): string {
		return this._estampa;
	}

    /**
     * Setter estampa
     * @param {string} value
     */
	public set estampa(value: string) {
		this._estampa = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Estampa: ${this._estampa}`);
    }
}