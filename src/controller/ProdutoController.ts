import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository{
    

    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;


    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if(buscaproduto !== null)
            buscaproduto.visualizar()
        else
            console.log("\nProduto não foi Encontrado!")
    }


    listarTodas(): void {
       for (let produto of this.listaProdutos){
            produto.visualizar();
       }
    }


    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi adicionado!")
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto número ${produto.id} foi atualizado com êxito!`)
        }else
            console.log("\nProduto não Encontrado!")
    }


    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(`O produto número ${id} foi Excluído com êxito!`)
        }else
            console.log("\nProduto não foi Encontrado!")
    }


    public gerarId(): number{
        return ++ this.id
    }
    
    public buscarNoArray(id: number): Produto | null{
        for (let produto of this.listaProdutos){
            if (produto.id === id)
                return produto;
       }

       return null;
    }
}