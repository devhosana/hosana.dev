/// SCRIPT /// {

  - Adicionar cookies (virá somente depois que blog estiver pronto)

  - Não esquecer babel, polyfilling, parcel

  - Adicionar efeito para que branco do link dropdown em deslize para links (ao sairmos de contacts com mouse, contacts também fique com main__color--tint)

  - Change função changeTranslateIconTo tem muito o que melhorar...

  - Adicionar informações das tecnologias usadas ao fazer hover sobre o ícone info na classe 'work__info'
  
  - Melhorar efeito hover nos skill__container porque tá bugando bastante (não desfazendo efeito as vezes)


    > Anotação: um último evento é disparado, antes do real último evento, logo depois que saimos com o mouse de skill__container, fazendo condicionais que indiquem que que mouse saiu de skill__logo e skill__title falharem

    > Objetivo disso é um pequeno detalhe de prevenir bug de que se sairmos do skill__logo ou skill__title, para o menu iniciar, ou pela parte de cima do navegador, efeito no skill__container não é desfeito

    > Também usar evento drag leave () e por último calcular velocidade do mouse ao sair de skill__container para (tentar, rs) anular todos os bugs que fazem com que efeito não seja desfeito 

    > Dica: encontrar condição no event, que se mouse não estiver nem em logo, nem em title, nem em skill__container desfazer efeito independente de onde esteja

}


/// HTML /// {

  - Refatorar HTML

  - Adicionar favicon

  - Adicionar imagens como as do sample com work__info vísivel dentro de uma tag <noscript>

}


/// CSS /// {

  - As vezes linha 150 do media query nao funciona (efeito link na cor verde ao tocar no mobile)

  - Melhorar primeiro media query (portateis 13" e 14")

  - Em telas de 5.5" (como j7 prime) tudo fica muito grande

  - Depois de tocar no upwards__button no mobile ele não desfaz opacity

}


/// OTHER /// {

  

  - Melhorar SEO e testes do lighthouse

  - Não esquecer do blog, rs

  - Futuramente se página precisar que se traduza via JS é muito mais fácil colocar uma classe "text__translate", para depois armazenar tudo em um querySelectorAll e então fazer o forEach, por sorte meu site é pequeno...se fosse maior ficaria muito tempo selecionando elementos e colocando nas variáveis para tradução

  - Sincronizar hostinger com repositorio hosana.dev

}





