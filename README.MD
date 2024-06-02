# HIDRATAPLUSS

Neste repositório está a principal atividade prática da disciplina de Tópicos em Dispositivos Móveis, na qual o objetivo era desenvolver um app com o maior uso possível das ferramentas de geração de código.

## O APP

O app é bastante simples e consiste em uma aplicação que monitora o consumo de água do usuário. Possui uma tela onde o usuário insere seu peso, e o sistema armazena localmente a quantidade mínima de água que ele deve consumir durante o dia.

Logo após, ele pode registrar seu consumo, onde um gráfico é gerado de acordo com o consumo e uma mensagem aparece se ele excede a meta (mínimo de água por dia).

Todo o app foi escrito utilizando o CHATGPT e correções pelo TABNINE.

### (Vídeo com o app funcionando)
📽️ [Assista ao vídeo](https://youtu.be/WdrI3bl5VxU)

## Recursos
- Calculadora de meta de consumo baseada no peso ✅
- Consumo de API do clima ❌

## Tecnologias
O app foi desenvolvido utilizando o EXPO - React Native.

## Como Executar
Certifique-se de ter o ambiente Expo preparado para executar o projeto. 
- Após configurar o ambiente, clone o projeto e instale as dependências.

- Execute o comando `npm run android` para executar o projeto.

## Vídeo da Execução
Caso queira conferir o projeto sem precisar instalar as dependências na máquina, segue o vídeo para verificar o código sugerido pelo CHATGPT através dos prompts passados.

📽️ [Assista ao vídeo](https://youtu.be/rQ6CtzwH7jg)

## Prompts (CHATGPT)
- [Prompt 1](https://chatgpt.com/c/b1522934-834c-403e-9b9c-e00472942fc1)
- [Prompt 2](https://chatgpt.com/c/c16b38e4-1bdd-4510-8cc6-2946961e0d5a)
- [Prompt 3](https://chatgpt.com/c/b655555d-2efb-4d72-9ff3-d2aa37b653e8)
- [Prompt 4](https://chatgpt.com/c/f8448697-d0ca-4b48-8b58-e76f65780e5b)

## Perguntas de Avaliação
1. Tempo: Quanto tempo cada fase tem levado? Esse tempo tem sido gasto com o quê?
    - Utilizei 16 minutos para levantar a ideia com o ChatGPT.
    - 16 minutos onde ele gerou os primeiros códigos e dei uma olhada no que ele criou.
    - 2 horas para pegar o código que ele gerava e ir corrigindo, já que realmente utilizei somente o código gerado por ele.

2. Quanto de código você teve de escrever e quanto a IA conseguiu criar?
    - Quis realmente fazer um teste para analisar o quanto poderia sair do app, então não escrevi nada de código, além dos prompts orientando nas correções e sugestões de outras libs do que ele sugeria e que não existia.

3. Quais os seus sentimentos enquanto usa a IA? Animação? Frustração? Medo?
    - Depender totalmente da IA realmente não é algo legal, já que ela não entende o contexto do seu código, mesmo tudo tendo partido de uma conversa. As libs estão em constantes mudanças e o contexto no qual ela pode ter pego suas bases de códigos são completamente diferentes, tanto que não foi possível criar os push notifications, já que ela sempre usava outros métodos do expo, utilizando a forma de API.
    - Fico animado em poder ter respostas para pequenas coisas, como criar um gráfico rápido, cálculos rápidos e ideias que ao longo do processo de desenvolvimento não conseguimos ter às vezes, mas não em criar algo do zero com ela.
    - Meu medo é que programadores utilizem uma grande parte de seus códigos, códigos gerados por ela. Nesse repositório mesmo, existem várias correções e validações que seriam necessárias, e vou utilizar um repo de atividade de refatoração utilizando as boas práticas para refazê-lo.
    - O tempo que gastei ajustando os prompts para chegar a essa versão seria um tempo melhor gasto desenvolvendo a minha própria versão.

4. Considerações Finais
    - Continuarei utilizando IA generativa como uma ferramenta, assim como existem tantas outras que nos auxiliam no processo de desenvolvimento de soluções e algumas correções.
