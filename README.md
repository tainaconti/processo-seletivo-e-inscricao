
# Processo seletivo - e-Inscrição

> Autora: *Tainá Wandermurem Conti*
> [Linkedln](https://www.linkedin.com/in/tainaconti/)
> 

# **Executando os testes localmente** 
- Inicie clonando o repositório e instalando as dependencias
```
npm install
```
Para executar no modo headless:
```
npm run client
```
Para executar com Cypress UI:
```
npm run dev-client
```

- [Documentação](./documentacao.pdf) do projeto no repositório
- Integração contínua 🔁
    - Acessar aba [Github Actions](https://github.com/tainaconti/processo-seletivo-e-inscricao/actions/workflows/cypress-test.yml) para executar as pipelines existentes
    - [Clique aqui](https://cloud.cypress.io/projects/tovh63/runs/2/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D&testingTypesEnum=%5B%5D) para visualizar os resultados, métricas e artifacts no Cypress Cloud ⬅️
 
![CatTypingGIF](https://github.com/tainaconti/processo-seletivo-e-inscricao/assets/87378037/782a0411-3ed0-40d5-954b-3df191a079c8)

# **Plano de Teste**

## Objetivo e escopo

Este plano de teste tem como objetivo garantir a qualidade e funcionalidade do produto, identificando possíveis bugs e problemas de usabilidade.

O escopo deste plano de teste é verificar e validar de forma abrangente as seguintes funcionalidades do produto:

- **Processo de checkout para inscrição em evento:** Verificar se os usuários conseguem concluir com sucesso o processo de compra de ingressos, tanto como usuários logados quanto como convidados.
- **Preenchimento do formulário de seguro:** Verificar se o formulário de seguro está funcionando corretamente.

## Tipos de Teste

- Testes automatizados (E2E)
    - Nível de teste: Teste de sistema
    - Tipo de teste: Teste funcional

## Casos de testes

✨ **Funcionalidade: Processo de checkout para inscrição em evento**

- **Cenário 01: Usuário cadastrado realiza o checkout com sucesso**
    
    <aside>
    💡 Como usuário cadastrado, eu quero realizar inscrição na plataforma para que eu possa participar do evento
    
    </aside>
    
    - **Pré-condição:**
        - Usuário deve possuir cadastro prévio na plataforma
        - Usuário deve acessar URL: [https://checkout.einscricao.app/tickets](https://checkout.einscricao.app/tickets)
    - Dados do teste:
        
        ```jsx
        e-Mail: 'automatedtesteseincricao@gmail.com’
        ```
        
        ```jsx
        password: '123456’
        ```
        
    - Resultado esperado:
        - Usuário consiga se inscrever com sucesso e visualize todas as informações referentes ao pedido
    - ****Passos para execução****
        
        Dado que o usuário está na página de checkout  
        Quando seleciona uma quantidade de ingressos maior que zero  
        E clica no botão "Continuar"  
        E realiza o login com credenciais válidas  
        E seleciona participante existente  
        E clica no botão "Finalizar"  
        Então é redirecionado para a página de checkout concluído  
        E visualiza a mensagem de pedido feito com sucesso  
        E visualiza o QR code e o código de inscrição  
        E tem a opção de salvar o comprovante  
        E tem a opção de visualizar suas inscrições  
        E consegue avaliar sua experiência  
        
- **Cenário 02: Usuário guest realiza o checkout com sucesso**
    
    💡 Como usuário visitante, eu quero realizar inscrição na plataforma para que eu possa participar do evento
      
    - Resultado esperado:
        - Usuário consiga se inscrever com sucesso e visualize todas as informações referentes ao pedido
        - Usuário deve acessar URL: [https://checkout.einscricao.app/tickets](https://checkout.einscricao.app/tickets)
        
    - ****Passos para execução****
        
        Dado que o usuário está na página de checkout  
        Quando seleciona uma quantidade de ingressos maior que zero  
        E clica no botão "Continuar sem conta"  
        E preenche os dados válidos do participante  
        E clica no botão "Finalizar"  
        Então é redirecionado para a página de checkout concluído  
        E visualiza a mensagem de pedido feito com sucesso  
        E visualiza o QR code e o código de inscrição  
        E tem a opção de salvar o comprovante  
        E tem a opção de visualizar suas inscrições  
        E consegue avaliar sua experiência    
    
✨ **Funcionalidade: Preenchimento do formulário de seguro**

- **Cenário 01: Preenchimento completo do formulário de seguro com dados válidos**
    
    💡 Como usuário, eu quero preencher o formulário de seguro para contratar serviços relacionados
        
    - Resultado esperado:
        - Usuário consegue preencher **todas as informações obrigatórias** do formulário e visualize mensagem de sucesso ao final
        - Usuário deve acessar URL: [https://checkout.einscricao.app/tickets](https://sampleapp.tricentis.com/101/app.php)
    - ****Passos para execução****
        
        **Dado** que o usuário está na aba inicial do formulário de seguros  
        
        **Quando** todas as abas existentes forem preenchidas com as informações obrigatórias e dados válidos  
        
        **Então** a mensagem de sucesso "Sending e-mail success!" deve ser visualizada.  
        

## Ambientes e Ferramentas

Os testes serão feitos do ambiente de homologação, e contém as mesmas
configurações do ambiente de produção, utilizando o ambiente:

- Sistema operacional: Windows 10
- Navegador: Chrome
- Dispositivo: Desktop

Ferramentas utilizadas: 

- Cypress
- Github
- Github Actions
- Cypress Cloud

## Entregáveis

- Plano de teste
- Casos de teste
- Relatório de resultados do teste 
- Relatório de bugs

## Classificação de bugs

- **Major:** Impacto na funcionalidade evidente, pode ou não bloquear o teste.
- **Minor:** Quase nenhum impacto na funcionalidade, mas ainda é um erro válido ou não atinge os critérios de aceite.
- **Minimal:** funciona perfeitamente como deveria, mas poderia ser melhor.

## Definition of done

- Todos os casos de testes devem ser executados e aprovados
- Todos os bugs major e minors devem ser corrigidos

## Sugestões de melhorias para implementação

- Refinar o código da automação incorporando boas práticas, como o uso de constantes, utilitários, variáveis de ambiente, uma URL base, entre outros, especialmente para a versão mobile
- Front-end deve adotar a convenção de nomeação **`data-test`** para identificar seletor de elementos destinados a testes, proporcionando uma estrutura mais robusta e fácil de manter.
- Aplicar interceptações para aprimorar as validações e gerenciar os tempos de espera de maneira eficiente. Isso não apenas otimizará o desempenho, mas também garantirá uma execução mais estável e confiável dos testes automatizados

## Problemas encontrados durante a execução

- ERRO  "e is not defined" é um erro que ocorreu no código da sua aplicação, não no código do Cypress. O Cypress detecta erros não capturados originados da sua aplicação e automaticamente encerra o teste quando isso acontece.
    
    O problema parece estar relacionado a uma variável ou objeto chamado **`e`** que não foi definido no escopo onde está sendo usado. 
    
    **Workaround**: adicionado arquivo em commands.js para habilitar a detecção de eventos não capturados. 
    
    ```jsx
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorne false para impedir que o erro encerre o teste
    return false;
    });
    ```

