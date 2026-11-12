const { createApp } = Vue;

createApp({
    data() {
        return {
            contador: 0,
            menuAberto: false,
            produtos: [
                { id: 1, nome: "Fone Bluetooth", preco: 89.90},
                { id: 2, nome: "SSD 1TB", preco: 349.90},
                { id: 3, nome: "Teclado Mecânico", preco: 199.90},
                { id: 4, nome: "Mouse Gamer", preco: 79.90},
                { id: 5, nome: "Carregador Rápido 65W", preco: 59.90},
                { id: 6, nome: "Monitor 24'", preco: 699.90},
                { id: 7, nome: "RTX 360 TI", preco: 2999.90},
                { id: 8, nome: "Cadeira Gamer", preco: 1699.90},
                { id: 9, nome: "Mouse Pad Fiberglass", preco: 289.90},
                { id: 10, nome: "Meta Glasses", preco: 2459.90},
                { id: 11, nome: "HD 500GB", preco: 99.90},
                { id: 12, nome: "2x16 Memória Ram 2666hz", preco: 760.90},
                { id: 13, nome: "Processador Ryzen 3 3600", preco: 456.90},
                { id: 14, nome: "Water Cooler FreshFree", preco: 129.90}
            ],
            carrinho: []
        };
    },
    methods: {
        adicionarCarrinho(p) { this.carrinho.push(p); },
        removerCarrinho(idx) { this.carrinho.splice(idx, 1);}
    }
}).mount('#conteudo-principal');
