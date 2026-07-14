# SX ImobiVision — site estático

Site responsivo em HTML, CSS e JavaScript, pronto para GitHub e Netlify.

## Arquivos principais

- `index.html`: textos, seções, contatos e planos.
- `styles.css`: visual, cores e versão mobile.
- `script.js`: menu, animações, comparadores, modal e simulador.
- `obrigado.html`: página exibida após o formulário.
- `politica-de-privacidade.html`: política básica de privacidade.
- `netlify.toml`: configuração da publicação e cabeçalhos de segurança.
- `assets/images/`: pasta para suas próprias fotos.

## Atenção sobre as imagens

O modelo usa imagens demonstrativas externas do Unsplash. Antes de iniciar a prospecção, substitua pelos seus próprios projetos ou por fotos autorizadas.

Para usar arquivos locais, coloque as imagens em `assets/images/` e altere no `styles.css` as linhas que possuem `images.unsplash.com`.

Sugestões de nomes:

- `hero-house.jpg`
- `living-room.jpg`
- `interior.jpg`
- `modern-house.jpg`

Exemplo:

```css
.image-house {
  background-image: url('assets/images/hero-house.jpg');
}
```

## Formulário Netlify

O formulário já possui `data-netlify="true"` e será identificado após a primeira publicação. As respostas aparecerão na área **Forms** do projeto no Netlify.

## Contato configurado

- WhatsApp: 11 97124-9331
- E-mail: samuel.sxestg@gmail.com

Procure esses dados nos arquivos caso queira alterá-los.
