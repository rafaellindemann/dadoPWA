Vite é uma ferramenta de construção rápida e moderna que pode ser usada para criar projetos React, e configurá-lo como uma PWA envolve algumas etapas adicionais, mas é bastante direto. Aqui está um guia passo a passo:

### Passo a Passo para Criar uma PWA com Vite

#### 1. Configurar o Projeto React com Vite

Primeiro, crie um novo projeto React usando Vite:

```bash
npm create vite@latest random-number-generator -- --template react
cd random-number-generator
npm install
```

#### 2. Implementar o Gerador de Números Aleatórios

Abra o arquivo `src/App.jsx` e substitua o conteúdo pelo seguinte:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Gera um número entre 1 e 6
    setNumber(randomNumber);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerador de Número Aleatório</h1>
        <button onClick={generateRandomNumber}>Gerar Número</button>
        {number && <p>Número Gerado: {number}</p>}
      </header>
    </div>
  );
}

export default App;
```

#### 3. Instalar o Plugin PWA do Vite

Vite possui um plugin oficial para configurar PWA. Instale-o:

```bash
npm install vite-plugin-pwa
```

#### 4. Configurar o Plugin PWA

Abra o arquivo `vite.config.js` e configure o plugin PWA:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gerador de Número Aleatório',
        short_name: 'RNG',
        description: 'Um simples gerador de número aleatório',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
```

#### 5. Adicionar Ícones e Manifesto

Adicione os ícones `logo192.png` e `logo512.png` na pasta `public`. O `manifest.json` será gerado automaticamente com base na configuração do plugin.

#### 6. Modificar o Index.html

Certifique-se de que seu `public/index.html` inclua a referência ao manifest e ao service worker:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <title>Gerador de Número Aleatório</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 7. Build e Deploy

Construa a aplicação para produção:

```bash
npm run build
```

Depois, você pode hospedar a pasta `dist` resultante em qualquer servidor web ou serviço de hospedagem como Vercel, Netlify, GitHub Pages, etc.

### Testar a PWA

- Acesse a aplicação no navegador.
- No Chrome, abra as DevTools (F12) e vá para a aba "Application".
- No menu lateral, clique em "Manifest" e verifique se todas as informações estão corretas.
- Clique no botão "Add to homescreen" para instalar a PWA no seu dispositivo.

Seguindo esses passos, você terá uma PWA funcional de um gerador de número aleatório utilizando Vite.