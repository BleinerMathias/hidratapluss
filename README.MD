# HIDRATAPLUSS
Nesse repositório contem a principal atividade prática da disciplina de Tópicos em Dispositivos Móveis, na qual o objeito era desenvolver um app usando o maior uso possível das ferramentas de geração de código.

# O APP
O app é bem simples, e consiste em uma aplicação em que é monitorado o consumo de água do usuário, onde possui uma tela onde é inserido o peso do usuário, e o sistema armazena localmente  a quantidade mínima de água que ele deve beber durante o dia.

Logo após ele pode registrar o consumo, onde um gráfico é gerado, de acordo com o consumo e uma mensagem aparece se ele excede a meta (minímo de água por dia).

Todo o app foi escrito utilizando do CHATGPT e correções pelo TABNINE

### (Video com o app funcionando)
📽️ https://youtu.be/rQ6CtzwH7jg

# Recursos
- Calculadora de meta de consumo baseado no peso ✅
- Consumo de api do clima ❌

# Tecnologias
O app foi desenvolvido utilizando o EXPO - React Native

## Como executar
Tenha o ambiente expo preparado para executar o projeto. 
- Após o ambiente configurado, clone o projeto e instale as dependencias

- Execute o comando ```npm run android``` para executar o projeto

## Video da execução
Caso queira conferir o projeto sem ter que instalar as dependências na máquina e afins, segue o vídeo para verificar o código sugerido pelo CHATGPT através dos prompts passados

📽️ https://youtu.be/rQ6CtzwH7jg

## Propts (CHATGPT)
- https://chatgpt.com/c/b1522934-834c-403e-9b9c-e00472942fc1
- https://chatgpt.com/c/c16b38e4-1bdd-4510-8cc6-2946961e0d5a
- https://chatgpt.com/c/b655555d-2efb-4d72-9ff3-d2aa37b653e8
- https://chatgpt.com/c/f8448697-d0ca-4b48-8b58-e76f65780e5b

## Perguntas de avaliação
1. Tempo: Quanto tempo cada fase tem levado? Esse tempo tem sido gasto com o quê?
    - Utilizei 16 minutos para levantar a ideia com o chat gpt
    - 16 minutos onde ele gerou os primeiros código e dei uma olhada no que ele criou
    - 2h para pegar o código que ele gerava e indo corrigindo, já que realmente utilizei somente o código gerado por ele

2. Quanto de código você teve de escrever e quanto a IA conseguiu criar?
    - Quis realmente fazer um teste para analisar o quanto poderia sair do app, então não escrevi nada de código, além dos prompts orientando nas correções e sugestões de outras libs do que ele sugeria e que não existia

3. Quais os seus sentimentos enquanto usa da IA? Animação? Frustração? Medo?
- Depender totalmente da IA, realmente não é algo legal, já que ela não entendo o contexto do seu código, mesmo tudo tendo partido de uma conversa. As libs estão em constantes mudanças e o contexto nas quais ela pode ter pego suas bases de códigos, são completamente diferentes, tanto que nao foi possível criar os push notifications, já que ela sempre usava de outros métodos do expo, utilizando da forma de API.
- Fico animado em poder ter respostas para pequenas coisas, como criar um gráfico rápido, calculos rápidos e ideias que ao longo do processo de denvolvimento não conseguimos ter as vezes, mas não em criar algo do total zero com ela.
- Meu medo é das programadores utilizarem uma grande parte de seus códigos, códigos gerados por ela, nesse repo mesmo, existem várias correções e validações que seriam necessárias, e vou utilizar com um repo de atividade de refatoração utilizando as boas práticas para refazê-lo.
- O tempo que gastei ajustando os prompts para chegar nessa versão, seria um tempo melhor gasto desenvolvendo a minha própria versão

4. Considerações finais
- Continuarei utilizando IA generativa como uma ferramenta, assim como existem tantas outras que nos auxiliam no processo de desenvolvimento de soluções e algumas correções.


