import { Produto } from "./Produto";

export class CamisaSocial extends Produto{
    
    private _material: string;

	constructor(id: number, nome: string, tipo: number, preco: number, material: string) {
        super(id, nome, tipo, preco) 
		this._material = material;
	}


    /**
     * Getter material
     * @return {string}
     */
	public get material(): string {
		return this._material;
	}

    /**
     * Setter material
     * @param {string} value
     */
	public set material(value: string) {
		this._material = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Material: ${this._material}`);
    }
}