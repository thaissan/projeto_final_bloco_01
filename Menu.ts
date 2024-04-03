import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors';
import { CamisaSocial } from "./src/model/CamisaSocial";
import { CamisetaCasual } from "./src/model/CamisetaCasual";
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, estampa, material: string;
    let tipoProduto = ['Camisa Social', 'Camiseta Casual'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new CamisaSocial(produtoController.gerarId(),
    "Camisa", 1, 50.00, "Algodão"));

    produtoController.cadastrar(new CamisetaCasual(produtoController.gerarId(),
    "Camiseta", 2, 50.00, "Listrada"));

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("   C&C - Camisetas e Camisas para o seu dia a dia!   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todas as Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados da Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,
                "\nC&C - Do Casual ao Chique!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        material = readlinesync.question("Digite o Material da Camisa: ");
                        produtoController.cadastrar(new CamisaSocial(produtoController.gerarId(),
                            nome, tipo, preco, material));
                        break;
                    case 2:
                        estampa = readlinesync.question("Digite a Estampa da Camiseta: ");
                        produtoController.cadastrar(new CamisetaCasual(produtoController.gerarId(),
                            nome, tipo, preco, estampa));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");

                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                        material = readlinesync.question("Digite o Material da Camisa: ");
                        produtoController.cadastrar(new CamisaSocial(produtoController.gerarId(),
                            nome, tipo, preco, material));
                        break;
                            case 2:
                        estampa = readlinesync.question("Digite a Estampa da Camiseta: ");
                        produtoController.cadastrar(new CamisetaCasual(produtoController.gerarId(),
                            nome, tipo, preco, estampa));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")
                    
                  keyPress()
                  break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Thais Santos");
    console.log("github.com/thaissan");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();