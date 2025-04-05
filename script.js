
        // Função para realizar a conversão
        function converter() {
            let valor = parseFloat(document.getElementById('valor').value);
            let moedaOrigem = document.getElementById('moedaOrigem').value;
            let moedaDestino = document.getElementById('moedaDestino').value;
            
            // Taxas de câmbio fictícias para demonstração
            const taxasDeCambio = {
                'BRL': { 'USD': 0.19, 'EUR': 0.17, 'CNY':  1.28384 },
                'USD': { 'BRL': 5.24, 'EUR': 0.88, 'USD': 1 },
                'EUR': { 'BRL': 5.88, 'USD': 1.14, 'EUR': 1 },
                'CNY': { 'BRL': 0.77, 'USD': 0.13, 'EUR': 0.12 },
            };

            if (!valor || isNaN(valor)) {
                alert('Por favor, insira um valor válido.');
                return;
            }

            if (moedaOrigem === moedaDestino) {
                document.getElementById('resultado').innerText = `O valor de ${valor} ${moedaOrigem} é igual em ${moedaDestino}.`;
                return;
            }

            // Calcula o valor convertido
            let taxa = taxasDeCambio[moedaOrigem][moedaDestino];
            let valorConvertido = valor * taxa;

            document.getElementById('resultado').innerText = `${valor} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
        }