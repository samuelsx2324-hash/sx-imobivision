# Guia fácil: publicar no GitHub e Netlify

## Parte 1 — Preparar o projeto

1. Baixe o arquivo ZIP do site.
2. Clique com o botão direito e escolha **Extrair tudo**.
3. Abra a pasta extraída.
4. Confirme que o arquivo `index.html` está diretamente dentro da pasta principal.
5. Não envie o arquivo ZIP para dentro do repositório. Envie os arquivos extraídos.

## Parte 2 — Criar o repositório no GitHub

1. Entre em `github.com` e faça login.
2. Clique no botão **+** no canto superior direito.
3. Escolha **New repository**.
4. Em **Repository name**, use `sx-imobivision`.
5. Escolha **Public**. Isso não expõe senhas, porque o projeto não contém nenhuma.
6. Não marque a criação automática de README, pois o projeto já possui um.
7. Clique em **Create repository**.

## Parte 3 — Enviar os arquivos pelo navegador

1. Dentro do repositório vazio, clique em **uploading an existing file**. Se não aparecer, use **Add file > Upload files**.
2. Abra a pasta extraída no computador.
3. Selecione todos os arquivos e a pasta `assets`.
4. Arraste tudo para a janela do GitHub.
5. Espere o carregamento terminar.
6. No campo de mensagem, escreva `Publicação inicial do site`.
7. Clique em **Commit changes**.

A raiz do repositório deve ficar assim:

```text
assets/
index.html
styles.css
script.js
obrigado.html
politica-de-privacidade.html
netlify.toml
README.md
```

## Parte 4 — Conectar o GitHub ao Netlify

1. Entre em `app.netlify.com`.
2. Clique em **Add new project**.
3. Escolha **Import an existing project**.
4. Selecione **GitHub**.
5. Autorize o Netlify a acessar seu GitHub.
6. Localize e selecione o repositório `sx-imobivision`.
7. Em configurações de publicação:
   - **Branch to deploy:** `main`
   - **Build command:** deixe vazio
   - **Publish directory:** `.`
8. Clique em **Publish** ou **Deploy site**.
9. Aguarde alguns segundos. O Netlify mostrará um endereço terminado em `.netlify.app`.

## Parte 5 — Trocar o endereço gratuito

1. Abra o projeto no Netlify.
2. Entre em **Domain management**.
3. Procure a opção para alterar o nome do projeto ou domínio Netlify.
4. Tente algo como `sx-imobivision.netlify.app`.
5. Caso o nome esteja ocupado, use uma variação curta e profissional.

## Parte 6 — Conferir o formulário

1. Abra o site publicado.
2. Preencha o formulário no final da página e envie.
3. Volte ao painel do Netlify.
4. Abra a área **Forms**.
5. Verifique se aparece o formulário `diagnostico-imobiliario`.
6. Configure as notificações por e-mail nas opções do formulário, caso estejam disponíveis para sua conta.

## Parte 7 — Alterar o site depois

### Alterar pelo próprio GitHub

1. Abra o repositório.
2. Clique no arquivo que deseja editar.
3. Clique no ícone de lápis.
4. Faça a alteração.
5. Clique em **Commit changes**.
6. O Netlify publicará a nova versão automaticamente.

### Para alterar textos e planos

Edite o arquivo `index.html`.

### Para alterar cores, tamanhos e aparência

Edite o arquivo `styles.css`.

### Para alterar simulador, menu e interações

Edite o arquivo `script.js`.

## Parte 8 — Colocar suas fotos reais

1. Abra a pasta `assets/images`.
2. Adicione suas fotos autorizadas.
3. Use nomes simples, sem espaço e sem acento, por exemplo:
   - `casa-hero.jpg`
   - `sala-antes.jpg`
   - `sala-depois.jpg`
4. No `styles.css`, procure por `images.unsplash.com`.
5. Troque a URL externa pelo caminho local, por exemplo:

```css
.image-house {
  background-image: url('assets/images/casa-hero.jpg');
}
```

Para o antes e depois, use exatamente o mesmo imóvel e aplique somente os ajustes permitidos. Não use imagens que mostrem casas diferentes como se fossem uma transformação.

## Parte 9 — Colocar um vídeo real

O modelo atual abre uma demonstração animada. Para usar um vídeo MP4 real:

1. Coloque o arquivo em `assets/videos/video-imovel.mp4`.
2. No `index.html`, localize `id="video-modal"`.
3. Substitua o bloco de demonstração por:

```html
<video controls playsinline style="width:100%;display:block;border-radius:18px">
  <source src="assets/videos/video-imovel.mp4" type="video/mp4">
</video>
```

Evite arquivos muito pesados. Para um vídeo curto, tente manter abaixo de 15 MB.

## Checklist antes de prospectar

- WhatsApp e e-mail testados.
- Formulário aparecendo no Netlify Forms.
- Fotos próprias ou autorizadas.
- Nenhum depoimento inventado.
- Planos e prazos revisados.
- Site conferido no celular.
- Política de privacidade disponível.
- Antes/depois usando o mesmo imóvel.
