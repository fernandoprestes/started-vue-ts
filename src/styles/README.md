# ITCSS: Arquitetura CSS escalável e sustentável

ITCSS significa CSS Triângulo Invertido. Ele ajuda você a organizar os arquivos CSS do projeto de forma que você possa lidar melhor com as especificidades do CSS, como namespace global, cascata e especificidade dos seletores.

![css-Triângulo](https://dkrn4sk0rn31v.cloudfront.net/2017/04/16204054/vg79g4.jpg)

## As camadas

- Settings – usadas com pré-processadores e contêm fontes, definições de cores, etc;
- Tools – mixins e funções usados globalmente;
- Generic – reset e/ou normalize style, definição de tamanho de caixa, etc. Esta é a primeira camada que gera CSS real;
- Elements – estilo para elementos HTML simples (como H1, DIV, A, etc.). Eles vêm com o estilo padrão do navegador para que possamos redefini-los aqui;
- Objects – seletores baseados em classe que definem padrões de design não decorados, por exemplo, o objeto de mídia conhecido do OOCSS;
- Components – componentes de interface do usuário específicos. É aqui que a maior parte do nosso trabalho acontece. Costumamos compor componentes de interface do usuário de objetos e componentes;
- Utilities – utilitários e classes auxiliares com capacidade de substituir qualquer coisa que venha antes no triângulo, por exemplo, ocultar classe auxiliar;

## Organizar camadas em subpastas

```css
@charset 'utf-8';

@forward 'settings';
@forward 'tools';
@forward 'generics';
@forward 'elements';
@forward 'objects';
@forward 'components';
@forward 'utilities';
```

[xfive](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
[csswizardry](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
