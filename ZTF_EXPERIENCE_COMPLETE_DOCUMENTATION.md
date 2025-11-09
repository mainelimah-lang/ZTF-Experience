# 📚 DOCUMENTAÇÃO COMPLETA DO ZTF-EXPERIENCE - Plataforma Web de Curso de Inglês

> **Versão**: 1.0  
> **Data**: Janeiro 2025  
> **Localização**: `/home/maine/ZTF-Experience`  
> **Propósito**: Este documento descreve completamente a plataforma web ZTF Experience English Course para fins de compreensão e uso por IA

---

## 🎯 VISÃO GERAL DO PROJETO

O **ZTF-Experience** é uma plataforma web estática que apresenta o curso de inglês "ZTF Experience English Course". É um website HTML/CSS/JavaScript simples que exibe lições de forma organizada em um grid de cards, permitindo navegação entre diferentes tópicos gramaticais.

### Características Principais:
- ✅ **Plataforma Web Estática** - HTML, CSS e JavaScript vanilla
- ✅ **Sem Dependências de Build** - Arquivos estáticos puros
- ✅ **Design Responsivo** - Grid adaptável para diferentes telas
- ✅ **Sistema de Temas** - Modo claro e escuro
- ✅ **Controle de Acesso** - Lições com status "available/unavailable"
- ✅ **Organização Por Ordem** - Lições ordenadas numéricamente
- ✅ **Audio Integrado** - Arquivos de áudio para pronúncia

---

## 📁 ESTRUTURA DE DIRETÓRIOS

```
/home/maine/ZTF-Experience/
├── index.html                 # Página principal
├── data.json                  # Catálogo de lições
├── script.js                  # Lógica principal (carrega lições)
├── style.css                  # Estilos principais
├── theme.css                  # Sistema de temas
├── lessons/                   # Diretório de lições
│   ├── the-alphabet/         # Lição 1
│   │   ├── the-alphabet.html
│   │   ├── cover.png
│   │   ├── cover2.png
│   │   └── audios/           # 26 arquivos A-Z.mp3
│   │
│   ├── your-first-words/     # Lição 2
│   │   ├── your-first-words.html
│   │   ├── cover.png
│   │   └── audios/           # Words: Brazil, business, etc.
│   │
│   ├── the-sounds-of-english/ # Lição 3
│   │   ├── the-sounds-of-english.html
│   │   ├── cover.png
│   │   ├── the_sounds_of_english.csv
│   │   ├── word_bank_the_sounds_of_english.txt
│   │   ├── fetch_uk_phonetics.py
│   │   ├── generate_audio.py
│   │   ├── audios/           # Sounds of English
│   │   └── audios-3x-repetition/
│   │
│   ├── your-first-phrases/    # Lição 4
│   │   ├── your-first-phrases.html
│   │   └── cover.png
│   │
│   ├── the-numbers/           # Lição 5
│   │   ├── the-numbers.html
│   │   ├── cover.png
│   │   └── audios/           # 0-9, 10-90, hundred, etc.
│   │
│   ├── your-first-verbs/      # Lição 6
│   │   ├── your-first-verbs.html
│   │   ├── cover.png
│   │   ├── your_first_verbs.csv
│   │   ├── LAYOUT_REFERENCE.md
│   │   └── audios/           # Verb pronunciations
│   │
│   ├── subject-pronouns/      # Lição 10
│   │   ├── subject-pronouns.html
│   │   ├── cover.png
│   │   └── _Livro_Impresso_(5).png
│   │
│   ├── present-simple/        # Lição 11
│   │   ├── present-simple.html
│   │   ├── cover.png
│   │   └── audios/           # do, does, don't, doesn't
│   │
│   ├── demonstrative-pronouns/ # Lição 16
│   │   ├── demonstrative-pronouns.html
│   │   ├── cover.png
│   │   └── audios/           # this, that, these, those
│   │
│   ├── past-simple/           # Lição 22
│   │   ├── past-simple.html
│   │   ├── cover.png
│   │   └── audios/           # Past simple examples
│   │
│   ├── past-perfect/          # Lição 23
│   │   ├── past-perfect.html
│   │   ├── cover.png
│   │   └── audios/           # had, hadn't
│   │
│   ├── possessives/           # Lição 17
│   │   ├── possessives.html
│   │   ├── cover.png
│   │   └── The_Grammar_Toolkit.png
│   │
│   ├── imperatives/           # Lição 7
│   │   ├── imperative-sentences.html
│   │   └── cover.png
│   │
│   ├── nouns/                 # Lição 9
│   │   ├── nouns.html
│   │   └── cover.png
│   │
│   ├── definite-article/      # Lição 12
│   │   ├── definite-article.html
│   │   ├── cover.png
│   │   └── _Livro_Impresso_(12).png
│   │
│   ├── indefinite-articles/   # Lição 13
│   │   ├── indefinite-articles.html
│   │   ├── cover.png
│   │   └── _Livro_Impresso_(11).png
│   │
│   ├── plural-nouns/          # Lição 14
│   │   ├── plural-nouns.html
│   │   └── cover.png
│   │
│   ├── quantifiers/           # Lição 15
│   │   ├── quantifiers.html
│   │   └── cover.png
│   │
│   ├── distributives/         # Lição 18
│   │   ├── distributives.html
│   │   └── cover.png
│   │
│   ├── tag-questions-present-simple/ # Lição 19
│   │   ├── tag-questions-present-simple.html
│   │   └── cover.png
│   │
│   ├── verb-to-be---present/  # Lição 20
│   │   ├── verb-to-be---present.html
│   │   └── cover.png
│   │
│   ├── verb-to-be---past/     # Lição 21
│   │   ├── verb-to-be---past.html
│   │   └── cover.png
│   │
│   ├── present-perfect/       # Lição 24
│   │   ├── present-perfect.html
│   │   └── cover.png
│   │
│   ├── if-clauses/            # Lição 25
│   │   ├── if-clauses.html
│   │   └── cover.png
│   │
│   └── wh-words/              # Lição 8
│       ├── wh-words.html
│       └── cover.png
│
├── media/                     # Arquivos de mídia compartilhados
│   ├── audio/
│   └── images/
│
└── notion-export-root.html    # Exportação do Notion (origem)

```

---

## 🎨 ESTRUTURA DE ARQUIVOS PRINCIPAIS

### 1. **index.html** - Página Principal
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ZTF Experience English Course</title>
  <link rel="stylesheet" href="style.css?v=20251023-04" />
</head>
<body>
  <header class="main-header">
    <h1>ZTF Experience English Course</h1>
    <p>🌎 Live the language. ✨ Feel the transformation.</p>
    <button id="theme-toggle" class="theme-btn">🌙</button>
  </header>
  
  <main class="container">
    <div id="grid" class="grid"></div>
  </main>
  
  <footer>Part of the ZTF Universe ✦</footer>
  
  <script src="script.js"></script>
</body>
</html>
```

**Componentes:**
- Header com título e subtítulo
- Botão de alternância de tema
- Grid dinâmico onde as lições são inseridas via JavaScript
- Footer com branding

---

### 2. **data.json** - Catálogo de Lições

Estrutura do JSON:
```json
[
  {
    "title": "The Alphabet",
    "cover": "lessons/the-alphabet/cover.png",
    "link": "lessons/the-alphabet/the-alphabet.html",
    "order": 1,
    "available": true
  },
  {
    "title": "Your First Words",
    "cover": "lessons/your-first-words/cover.png",
    "link": "lessons/your-first-words/your-first-words.html",
    "order": 2,
    "available": true
  },
  ...
]
```

**Campos:**
- `title`: Nome da lição
- `cover`: Caminho da imagem de capa
- `link`: Caminho do arquivo HTML da lição
- `order`: Ordem de exibição
- `available`: Se a lição está disponível ou não

---

### 3. **script.js** - Lógica Principal

```javascript
// Tema
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Toggle de tema
themeToggle.addEventListener('click', () => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Carregamento das lições
async function boot() {
  const grid = document.getElementById("grid");
  const res = await fetch("data.json?v=" + Date.now());
  const items = await res.json();
  
  // Criação dinâmica dos cards de lição
  items.forEach((it, idx) => {
    const card = document.createElement("a");
    card.className = it.available === false ? "card unavailable" : "card";
    card.href = it.link;
    
    // Imagem da capa
    const img = document.createElement("img");
    img.src = it.cover;
    img.alt = it.title;
    
    // Título
    const title = document.createElement("div");
    title.textContent = it.title;
    
    // Montagem do card
    card.appendChild(img);
    card.appendChild(title);
    grid.appendChild(card);
  });
}

boot();
```

**Funcionalidades:**
1. **Sistema de Temas** - Alterna entre light/dark mode
2. **Cache Busting** - `?v=` para evitar cache
3. **Cards Dinâmicos** - Criação de elementos HTML via JavaScript
4. **Estado de Disponibilidade** - Visual diferente para lições indisponíveis
5. **Responsividade** - Grid adaptável

---

### 4. **style.css** - Estilos Principais

```css
:root {
  --bg: #0F1112;              /* Background principal (dark) */
  --paper: #E8DDC9;           /* Texto principal (dark) */
  --muted: #A89F92;           /* Texto secundário (dark) */
  --card: #15181A;            /* Background dos cards (dark) */
  --radius: 16px;             /* Border radius */
}

[data-theme="light"] {
  --bg: #FFFFFF;
  --paper: #0F1112;
  --muted: #6B7280;
  --card: #F9FAFB;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  background: var(--card);
  border: 1px solid #222;
  border-radius: var(--radius);
  transition: transform .12s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card.unavailable {
  opacity: 0.5;
  filter: grayscale(100%);
  cursor: not-allowed;
  pointer-events: none;
}
```

**Características:**
- CSS Variables para temas
- Grid responsivo com auto-fill
- Transições suaves
- Estados de hover e disabled
- Media queries para mobile

---

### 5. **theme.css** - Sistema de Temas Unificado

Arquivo compartilhado entre todas as lições para manter consistência visual.

---

## 📖 LIÇÕES DISPONÍVEIS

### Lições Completas (available: true)
1. **The Alphabet** - Alfabeto inglês com pronúncia
2. **Your First Words** - Primeiras 20 palavras essenciais
3. **The Sounds of English** - Sons do inglês com transcrição fonética
4. **Your First Verbs** - Primeiros 150 verbos em inglês

### Lições em Desenvolvimento (available: false)
5. **Your First Phrases**
6. **The Numbers**
7. **Imperative Sentences**
8. **WH-Words**
9. **Nouns**
10. **Subject Pronouns**
11. **Present Simple**
12. **Definite Article**
13. **Indefinite Articles**
14. **Plural Nouns**
15. **Quantifiers**
16. **Demonstrative Pronouns**
17. **Possessives**
18. **Distributives**
19. **Tag Questions Present Simple**
20. **Verb To Be - Present**
21. **Verb To Be - Past**
22. **Past Simple**
23. **Past Perfect**
24. **Present Perfect**
25. **IF-Clauses**

---

## 🎯 ESTRUTURA DE UMA LIÇÃO

### Template Básico de Lição

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Lição</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../theme.css">
</head>
<body>
  <div class="container">
    <header>
      <div style="display:flex; justify-content:space-between;">
        <h1>Título da Lição</h1>
        <button id="theme-toggle" class="theme-btn">
          <span id="theme-icon">🌙</span>
        </button>
      </div>
    </header>
    
    <main>
      <!-- Conteúdo da lição aqui -->
      <p>Content coming soon...</p>
    </main>
    
    <div class="table-separator"></div>
    
    <footer>
      Part of the ZTF Universe ✦
    </footer>
  </div>
  
  <script>
    // Theme toggle (mesmo código em todas as páginas)
  </script>
</body>
</html>
```

**Elementos Comuns:**
1. **Header** - Título + botão de tema
2. **Main** - Conteúdo educativo
3. **Footer** - Branding do ZTF Universe
4. **Theme Toggle** - Alternância de tema persistente

---

## 🎓 CONTEÚDO DAS LIÇÕES

### 1. The Alphabet (Alfabeto)

**Estrutura:**
- 26 letras do alfabeto
- Arquivos de áudio individuais para cada letra
- Pronúncia US e UK
- Exemplos visuais

**Audios:**
- `A.mp3` até `Z.mp3`
- Pronúncia fonética
- Repetição para aprendizado

---

### 2. Your First Words (Suas Primeiras Palavras)

**Palavras em Destaque:**
- Brazil, business, child, children, culture
- food, friend, knowledge, love
- man, men, money
- people, person, teacher, time
- water, woman, women, world

**Recursos:**
- 20 palavras essenciais
- Pronunciação com áudio
- Tradução contextual
- Exemplos de uso

---

### 3. The Sounds of English (Os Sons do Inglês)

**Estrutura Complexa:**
- CSV com sons e transcrições
- Script Python para buscar fonética UK
- Script para gerar áudio
- Banco de palavras
- Repetição 3x para cada som

**Arquivos:**
- `the_sounds_of_english.csv` - Dados estruturados
- `word_bank_the_sounds_of_english.txt` - Banco de palavras
- `fetch_uk_phonetics.py` - Script de busca
- `generate_audio.py` - Script de geração

**Processo:**
1. CSV contém: som, transcrição, exemplos
2. Python busca fonética UK automaticamente
3. Gera áudios usando Voicemaker.in
4. Organiza em `audios/` e `audios-3x-repetition/`

---

### 4. Your First Verbs (Seus Primeiros Verbos)

**Estrutura CSV:**
```csv
Emoji, infinitive_verb, infinitive_phonetic_us, infinitive_phonetic_uk, 
literal_translation, contextual_translation
```

**Exemplo de Entrada:**
```csv
🔓,To access,/tə ˈæk.ses/,acessar,Chegar ou usar algo que estava restrito
➕,To add,/tə æd/,adicionar,Incluir algo a outra coisa
💰,To afford,/tə əˈfɔːrd/,poder pagar,Ter recursos suficientes
```

**150 Verbos Listados:**
- Acess, add, afford, agree, allow
- analyze, approve, arrive, ask, attend
- avoid, be, become, believe, belong
- ... (continua até 150)

**Campos para Cada Verbo:**
- **Emoji**: Representação visual
- **Infinitive**: Forma do infinitivo (to do)
- **Phonetic US**: Pronúncia americana
- **Phonetic UK**: Pronúncia britânica
- **Literal Translation**: Tradução literal para português
- **Contextual Translation**: Significado contextualizado

---

### 5. The Numbers (Os Números)

**Estrutura:**
- 0-9 (números básicos)
- 10, 20, 30, 40, 50, 60, 70, 80, 90 (dezenas)
- Hundred (cem)
- Thousand (mil)
- Billion (bilhão)

**Audios Incluídos:**
- Números básicos: `0_-_9.mp3`
- Dezenas: `10.mp3`, `20.mp3`, etc.
- Conceitos: `hundred.mp3`, `thousand.mp3`, `billion.mp3`

---

## 🎨 SISTEMA DE TEMAS

### Modo Escuro (Default)
```css
:root {
  --bg: #0F1112;      /* Fundo escuro */
  --paper: #E8DDC9;   /* Texto claro/paper */
  --muted: #A89F92;   /* Secundário */
  --card: #15181A;    /* Card escuro */
}
```

### Modo Claro
```css
[data-theme="light"] {
  --bg: #FFFFFF;      /* Fundo branco */
  --paper: #0F1112;   /* Texto escuro */
  --muted: #6B7280;   /* Secundário */
  --card: #F9FAFB;    /* Card claro */
}
```

**Persistência:**
- Tema salvo em `localStorage`
- Preferência mantida entre sessões
- Alternância via botão 🌙/☀️

---

## 📊 COMO FUNCIONA

### 1. Carregamento da Página
```
index.html carrega
    ↓
script.js executa função boot()
    ↓
Fetch data.json
    ↓
Percorre array de lições
    ↓
Cria cards dinamicamente
    ↓
Insere no grid
```

### 2. Interação com Tema
```
Usuário clica no botão 🌙
    ↓
Alterna data-theme (light/dark)
    ↓
Salva no localStorage
    ↓
CSS variables são atualizadas
    ↓
Interface muda de cor
```

### 3. Navegação para Lição
```
Usuário clica em card
    ↓
href aponta para lesson/*.html
    ↓
Nova página carrega
    ↓
Conteúdo da lição exibido
```

---

## 🔧 TECNOLOGIAS UTILIZADAS

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e layouts
- **JavaScript ES6+** - Lógica e interatividade
- **CSS Variables** - Sistema de temas
- **LocalStorage** - Persistência de preferências

### Fontes
- **Google Fonts** - Inter (principal), Fira Code (code)

### Sem Dependências
- ✅ Sem framework JavaScript
- ✅ Sem bundler (webpack, vite, etc)
- ✅ Sem pré-processadores (Sass, Less)
- ✅ Sem TypeScript
- ✅ Zero build step

### Deployment
- Arquivos estáticos puros
- Servidor HTTP simples
- Sem necessidade de Node.js
- Funciona em qualquer hosting estático

---

## 🚀 COMO USAR

### Desenvolvimento Local

```bash
# Navegar até o diretório
cd /home/maine/ZTF-Experience

# Iniciar servidor local simples
python3 -m http.server 8000
# ou
npx serve
# ou
php -S localhost:8000
```

**Acessar:**
- http://localhost:8000

### Produção

```bash
# Copiar arquivos para servidor
scp -r * user@server:/var/www/ztf-experience/

# Ou usar Netlify Drop:
# Arrastar pasta para netlify.com/drop
```

---

## 📝 DESENVOLVIMENTO E MANUTENÇÃO

### Adicionar Nova Lição

1. **Criar estrutura de pastas:**
```bash
mkdir lessons/nova-licao
cd lessons/nova-licao
```

2. **Criar arquivos necessários:**
```bash
touch nova-licao.html
touch cover.png
mkdir audios  # se necessário
```

3. **Adicionar entrada em `data.json`:**
```json
{
  "title": "Nova Lição",
  "cover": "lessons/nova-licao/cover.png",
  "link": "lessons/nova-licao/nova-licao.html",
  "order": 26,
  "available": false
}
```

4. **Criar template baseado em outras lições**

---

### Atualizar Uma Lição Existente

```bash
cd lessons/nome-da-licao
# Editar o arquivo .html correspondente
# Adicionar conteúdo educacional
# Atualizar cover.png se necessário
```

```json
{
  "title": "Nome da Lição Atualizado",
  "available": true  # Mudar para true quando pronta
}
```

---

### Regenerar Áudio

**Para "The Sounds of English":**
```bash
cd lessons/the-sounds-of-english
python3 generate_audio.py
```

**Para outros áudios:**
- Usar Voicemaker.in ou similar
- Baixar arquivos .mp3
- Salvar em `audios/`

---

## 🎯 CASOS DE USO

### Para Estudantes
1. Acessar http://localhost:8000
2. Ver grade de lições disponíveis
3. Clicar em uma lição para abrir
4. Estudar conteúdo com áudio
5. Alternar entre tema claro/escuro

### Para Professores
1. Usar como material de apoio
2. Páginas podem ser impressas
3. Áudios podem ser baixados
4. Personalizar cores e textos

### Para Desenvolvedores
1. Fácil adicionar novas lições
2. Template simples
3. Zero configuração
4. Deploy em qualquer lugar

---

## 🔗 INTEGRAÇÃO COM ZTFBRAIN

O **ZTF-Experience** é alimentado pelo conteúdo gerado pelo **ZTFBrain**.

**Fluxo de Trabalho:**
```
ZTFBrain (Gestão)
    ↓
Gera conteúdo de lições
    ↓
Exporta HTML + assets
    ↓
ZTF-Experience (Visualização)
```

**Conexão:**
- ZTFBrain em `/home/maine/ZTFBrain`
- ZTF-Experience em `/home/maine/ZTF-Experience`
- Conteúdo do curso em `/home/maine/ZTF/ZTF Experience English Course/`

---

## 🎨 DESIGN SYSTEM

### Cores Principais
- **Dark Mode**: #0F1112, #E8DDC9, #A89F92, #15181A
- **Light Mode**: #FFFFFF, #0F1112, #6B7280, #F9FAFB

### Tipografia
- **Primary**: Inter (sans-serif)
- **Code**: Fira Code (monospace)
- **Sizes**: clamp() para responsividade

### Espaçamento
- Container: max-width 1200px
- Grid gap: 16px
- Card padding: 16px
- Header padding: 2rem

### Componentes
- Header, Footer, Grid, Cards
- Theme Toggle Button
- Table Separator
- Responsive design

---

## 📊 ESTATÍSTICAS DO PROJETO

- **Total de Lições**: 25
- **Lições Disponíveis**: 4
- **Lições em Desenvolvimento**: 21
- **Total de Arquivos de Áudio**: 200+
- **Arquivos HTML**: 26
- **Tamanho do Projeto**: ~50MB

---

## 🎓 CONCLUSÃO

O **ZTF-Experience** é uma plataforma web elegante e minimalista para apresentar o curso de inglês "ZTF Experience English Course". Com design responsivo, sistema de temas e estrutura modular, oferece:

- ✅ Simplicidade de uso
- ✅ Fácil manutenção
- ✅ Sem dependências complexas
- ✅ Performance rápida
- ✅ Experiência visual agradável
- ✅ Integração natural com ZTFBrain

**Status Atual**: Plataforma funcional com 4 lições completas  
**Próximos Passos**: Desenvolver as 21 lições restantes

---

## 📚 RECURSOS ADICIONAIS

- Fontes Google: https://fonts.google.com/
- Voicemaker.in: https://voicemaker.in/
- UK Phonetics: Base de dados UK para transcrições

---

**Documentação criada para facilitar compreensão por IA e desenvolvimento contínuo do projeto.** ✦


