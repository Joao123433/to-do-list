# To-Do List App
Este simples aplicativo web de Lista de Tarefas permite aos usuários adicionar e remover tarefas. O aplicativo utiliza HTML, CSS e TypeScript para a lógica front-end. Ele também integra o localStorage do navegador para recuperar as tarefas mesmo após a atualização da página.

## Link para o projeto
- https://joao123433.github.io/to-do-list/

## Recurso
1. `Adicionar Tarefa:`
- Os usuários podem inserir uma tarefa no campo de entrada fornecido e pressionar Enter ou clicar no botão "Adicionar" para adicioná-la à lista.
- Um alerta é exibido se o campo de entrada estiver vazio.

2. `Remover Tarefa:`
- Cada tarefa na lista possui um botão "Excluir".
- Clicar no botão remove a tarefa correspondente da lista e do localStorage.
- A remoção é acompanhada por uma animação de desaparecimento e afastamento.

3. `Concluir Tarefa:`
- Clicar em uma tarefa alterna seu status de conclusão, marcando visualmente como concluída.
- Tarefas concluídas têm um estilo distinto.

4. `Recuperação:`
- O aplicativo utiliza o localStorage para recuperar as tarefas mesmo após a atualização da página.
- No carregamento da página, as tarefas armazenadas no localStorage são recuperadas e exibidas.

## Estrutura do Código
O código está organizado em funções para melhor legibilidade e manutenção. Aqui está uma breve visão geral das principais funções:

`createP(text: string): HTMLElement`
- Cria e retorna um elemento de parágrafo com o texto fornecido.

`createBtnRemove(): HTMLButtonElement`
- Cria e retorna um elemento de botão "Excluir" com um ouvinte de evento de clique para acionar a remoção da tarefa.

`createLi(): HTMLLIElement`
- Cria e retorna um elemento de item de lista com um ouvinte de evento de clique para alternar a conclusão da tarefa.
- Aplica classes de animação para um efeito fadeInUpBig.

`removeLi(ev: Event): void`
- Remove uma tarefa da lista e do localStorage com uma animação zoomOut.

`complete(ev: { target: any }): void`
- Alterna o status de conclusão de uma tarefa adicionando/removendo a classe "complete".

`getData(ev: { preventDefault: () => void }): void`
- Manipula a submissão do formulário, prevenindo o comportamento padrão.
- Verifica se o campo de entrada não está vazio antes de adicionar uma tarefa.

`renderElement(text: string): void`
- Renderiza um novo elemento de tarefa com um parágrafo e botão de remoção.

`setup(text: string): void`
- Configura a tarefa renderizando-a, limpando o campo de entrada e salvando-a no localStorage.

`dataLocalStorage(): void`
- Recupera as tarefas do localStorage no carregamento da página e as renderiza.

## Ouvintes de Evento
`form.addEventListener("submit", getData)`
- Ouve as submissões do formulário para adicionar novas tarefas.

`document.addEventListener("DOMContentLoaded", dataLocalStorage)`
- Ouve o evento DOMContentLoaded para recuperar e renderizar tarefas do localStorage.