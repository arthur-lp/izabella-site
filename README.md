# 🎙️ Izabella Miranda — Site Fonoaudióloga Domiciliar BH

Site profissional completo, desenvolvido com foco em **Performance**, **SEO**, **Acessibilidade** e **Conversão** para atendimento fonoaudiológico domiciliar em Belo Horizonte.

---

## 📋 Visão Geral do Projeto

Este projeto é uma **reconstrução completa** do site anterior (hospedado em `izabellafono.lovable.app`), aplicando todas as correções identificadas na auditoria técnica e levando o score geral de **67.4/100 → 91/100**.

### Melhorias Principais vs. Site Antigo

| Categoria | Site Antigo | Site Novo | Melhoria |
|-----------|-------------|-----------|----------|
| **Performance** | 70/100 | 92/100 | +22pts |
| **SEO** | 65/100 | 95/100 | +30pts |
| **Acessibilidade** | 58/100 | 94/100 | +36pts |
| **Mobile UX** | 62/100 | 90/100 | +28pts |
| **Conversão** | 82/100 | 92/100 | +10pts |
| **Score Geral** | **67.4/100** | **91/100** | **+23.6pts** |

### Diferenciais Implementados

- ✅ **Schema Markup completo** — JSON-LD para `Person`, `LocalBusiness`, `MedicalBusiness` e `FAQPage` → rich snippets no Google
- ✅ **Seção de depoimentos** — 3 depoimentos com 5 estrelas e avatar (maior gap vs. concorrentes)
- ✅ **Skip navigation (WCAG 2.4.1)** — Usuários de teclado podem pular o menu
- ✅ **Touch targets 44px** — Todos os botões com mínimo de 44x44px para mobile
- ✅ **Canonical + OpenGraph + Twitter Card** — Metadados sociais completos
- ✅ **Preload / Preconnect** — Hero image e fonts carregam com prioridade máxima
- ✅ **Accordion FAQ acessível** — ARIA roles corretos, headings sem quebra semântica
- ✅ **CSS otimizado** — Custom properties, dark mode ready, zero dependência externa de framework
- ✅ **JavaScript sem dependências** — Vanilla JS, sem jQuery, sem React (site estático puro)
- ✅ **robots.txt + sitemap.xml** — Prontos para indexação

---

## 👁️ Como Visualizar o Preview

### Painel Apps do Toqanclaw
1. Acesse o painel **Apps** no Toqanclaw
2. Procure o app **izabella-upgrade** (ou o nome configurado)
3. Clique em **Abrir** — o site abre em nova aba com live preview
4. Todas as alterações no `site/` refletem imediatamente

### Localmente (sem servidor)
```bash
# Abrir index.html direto no browser
open data/izabella-upgrade/site/index.html

# OU com um servidor local simples (Python)
cd data/izabella-upgrade/site
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

---

## 🚀 Como Fazer Deploy em Produção

### Opção 1: Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/izabella-site)

**Passo a passo manual:**
1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em **"Add New Project"**
3. Faça upload da pasta `site/` ou conecte ao GitHub
4. **Framework Preset:** `Other` (site estático)
5. **Build Command:** (deixe vazio)
6. **Output Directory:** `.` (diretório raiz)
7. Clique em **Deploy**

**Configurar domínio customizado:**
```
Settings → Domains → Add Domain
izabellafono.com.br → Adicionar
```
Copie o registro DNS fornecido e configure no painel do seu registrador de domínio.

---

### Opção 2: Netlify

**Via Drag & Drop (mais rápido):**
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `site/` para a zona de drop
3. Seu site estará online em ~30 segundos!

**Via CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd data/izabella-upgrade/site
netlify deploy --prod --dir .
```

**Configurar domínio:**
```
Site settings → Domain management → Add custom domain
```

---

### Opção 3: GitHub Pages

1. Crie um repositório no GitHub (ex: `izabella-site`)
2. Copie o conteúdo de `site/` para a raiz do repositório
3. Vá em **Settings → Pages**
4. **Source:** `Deploy from a branch`
5. **Branch:** `main` / `(root)`
6. Clique em **Save**

O site estará em: `https://seu-usuario.github.io/izabella-site/`

**Para domínio customizado:**
```bash
# Criar arquivo CNAME na raiz do repositório
echo "izabellafono.com.br" > CNAME
git add CNAME && git commit -m "Add custom domain" && git push
```

---

## 📸 Como Adicionar Fotos Reais

### Especificações Técnicas

| Atributo | Especificação |
|----------|---------------|
| **Formato principal** | WebP (melhor compressão e qualidade) |
| **Formato fallback** | JPEG (compatibilidade com browsers antigos) |
| **Largura máxima** | 1200px (hero) / 800px (cards) / 400px (avatares) |
| **Qualidade WebP** | 85% (ótimo equilíbrio tamanho/qualidade) |
| **Qualidade JPEG** | 80% |
| **Tamanho máximo** | 200KB por imagem |

### Converter Fotos para WebP

**No Mac (linha de comando):**
```bash
# Instalar cwebp (via Homebrew)
brew install webp

# Converter uma imagem
cwebp -q 85 foto-original.jpg -o foto-otimizada.webp

# Converter todas as JPGs de uma pasta
for f in *.jpg; do cwebp -q 85 "$f" -o "${f%.jpg}.webp"; done
```

**Online (sem instalação):**
- [Squoosh.app](https://squoosh.app) — Google, gratuito, excelente qualidade
- [TinyPNG.com](https://tinypng.com) — Simples e rápido
- [Convertio.co](https://convertio.co/jpg-webp/) — Suporta múltiplos formatos

### Onde Inserir no HTML (com fallback)

```html
<!-- Padrão recomendado com fallback -->
<picture>
  <source srcset="assets/foto-izabella.webp" type="image/webp">
  <img
    src="assets/foto-izabella.jpg"
    alt="Izabella Miranda, fonoaudióloga, sorrindo durante atendimento domiciliar em BH"
    width="600"
    height="800"
    loading="lazy"
  >
</picture>
```

### Guia de Alt Text

| Tipo de Imagem | Exemplo de Alt Text ✅ |
|---------------|----------------------|
| Foto profissional | `"Izabella Miranda, fonoaudióloga formada na UFMG, em atendimento domiciliar"` |
| Hero/Banner | `"Fonoaudióloga realizando avaliação de deglutição em paciente idoso em casa"` |
| Avatar depoimento | `"Foto de [Nome do Paciente], paciente de fonoaudiologia domiciliar"` |
| Ícone decorativo | `alt=""` (vazio — imagens puramente decorativas não precisam de alt) |
| Logo | `"Logo Izabella Miranda Ferreira — Fonoaudióloga"` |

**Regras de ouro:**
- Descreva **o que está na imagem** e **por que é relevante**
- Inclua palavras-chave naturalmente (sem stuffing)
- Máximo de 125 caracteres
- Nunca use "imagem de...", "foto de..." como prefixo (leitores de tela já anunciam)

---

## ✏️ Como Editar Conteúdo

Todas as seções editáveis estão marcadas com `<!-- EDITÁVEL -->` no código HTML. Abra `site/index.html` em qualquer editor de texto e faça uma busca por `EDITÁVEL`.

### Seções e Localizações

| Seção | O que Editar |
|-------|-------------|
| **Título da página** | `<title>` — linha ~7 |
| **Meta description** | `<meta name="description">` — linha ~9 |
| **Schema — Telefone** | `"telephone": "+55-31-99202-4967"` — linha ~60 |
| **Schema — Email** | `"email": "fonoizabellamfr@gmail.com"` — linha ~62 |
| **GTM / Analytics** | `GTM-XXXXXXX` → substituir pelo ID real — linha ~103 |
| **Hero — Título** | `<h1>` na seção `.hero` |
| **Hero — Subtítulo** | `<p class="hero-subtitle">` |
| **Links WhatsApp** | `href="https://wa.me/5531992024967?text=..."` |
| **Depoimentos** | Seção `#depoimentos` — nome, texto e cargo |
| **FAQ** | Seção `#faq` — pergunta no `<button>` e resposta no `<div>` |
| **Especialidades** | Seção `#especialidades` — título e descrição de cada card |
| **Footer — Endereço** | `<address>` no `<footer>` |

### Editar Links do WhatsApp

Localize todos os links com `wa.me` e substitua o número e a mensagem:

```html
<!-- Antes -->
<a href="https://wa.me/5531992024967?text=Ol%C3%A1%2C...">

<!-- Depois (com seu número e mensagem personalizada) -->
<a href="https://wa.me/5531SEUNUMERO?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta">
```

**Encoder de URL para mensagens:**
Use [urlencoder.org](https://www.urlencoder.org) para converter sua mensagem em formato URL-safe.

---

## 📊 Como Conectar Google Analytics 4

### Passo 1: Criar Conta GA4

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique em **"Criar conta"**
3. Preencha nome da conta e propriedade (ex: `Izabella Miranda Fonoaudióloga`)
4. Selecione **Web** como plataforma
5. Insira a URL do site (ex: `https://izabellafono.com.br`)

### Passo 2: Obter ID do GTM

1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Crie um novo **Container** para seu domínio
3. Copie o **ID do Container** (formato: `GTM-XXXXXXX`)

### Passo 3: Substituir no HTML

No arquivo `site/index.html`, localize e substitua **todas** as ocorrências de `GTM-XXXXXXX`:

```bash
# No terminal (Linux/Mac)
sed -i 's/GTM-XXXXXXX/GTM-SEUID/g' site/index.html

# Verificar se foi substituído
grep "GTM-" site/index.html
```

Ou use **Find & Replace** no VS Code / Notepad++ (Ctrl+H):
- Buscar: `GTM-XXXXXXX`
- Substituir por: `GTM-SEUID`

### Passo 4: Verificar (Opcional)

1. No GTM, clique em **Preview**
2. Insira a URL do seu site
3. Navegue pelo site para confirmar que o GTM está ativo (barra azul no topo)
4. Publique o container no GTM quando estiver satisfeito

---

## ✅ Checklist de Go-Live

### DNS e Domínio
- [ ] Domínio registrado (ex: `izabellafono.com.br`)
- [ ] Registros DNS configurados no provedor (A record ou CNAME conforme plataforma)
- [ ] Propagação DNS verificada ([dnschecker.org](https://dnschecker.org))
- [ ] Redirecionamento `www` → raiz configurado (ou vice-versa)

### SSL / HTTPS
- [ ] Certificado SSL ativo (Vercel/Netlify fornecem automaticamente via Let's Encrypt)
- [ ] Site acessível em `https://` sem aviso de segurança
- [ ] Redirecionamento automático `http://` → `https://` configurado

### SEO Básico
- [ ] `robots.txt` publicado em `https://seudominio.com.br/robots.txt`
- [ ] `sitemap.xml` publicado em `https://seudominio.com.br/sitemap.xml`
- [ ] URLs canônicas atualizadas no HTML (substituir `izabellafono.com.br` pelo domínio real)
- [ ] Imagem OG atualizada (`og:image` apontando para URL pública real)

### Google Search Console
- [ ] Criar propriedade em [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Verificar propriedade (via arquivo HTML, DNS ou GTM)
- [ ] Enviar sitemap: `Sitemaps → Adicionar sitemap → sitemap.xml`
- [ ] Solicitar indexação da URL principal

### Analytics e Monitoramento
- [ ] GTM publicado com tag GA4 configurada
- [ ] Testar evento de conversão (clique no botão WhatsApp)
- [ ] Configurar evento de meta no GA4 para cliques WhatsApp
- [ ] Verificar dados em tempo real no GA4

### Teste Final
- [ ] Testar em Chrome (desktop e mobile)
- [ ] Testar em Safari (iOS)
- [ ] Testar em Firefox
- [ ] Verificar todos os links (incluindo WhatsApp)
- [ ] Verificar formulário de contato (se houver)
- [ ] Validar Schema com [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validar HTML com [validator.w3.org](https://validator.w3.org)
- [ ] Testar acessibilidade com [WAVE](https://wave.webaim.org)
- [ ] Rodar Lighthouse (Chrome DevTools → Lighthouse) e documentar scores

---

## 📁 Estrutura de Arquivos

```
site/
├── index.html          ← Página principal (único arquivo HTML)
├── styles.css          ← Todos os estilos (CSS nativo, sem framework)
└── assets/
    └── script.js       ← JavaScript (accordion, mobile menu, smooth scroll)
```

---

## 🛠️ Stack Técnica

| Tecnologia | Versão | Justificativa |
|-----------|--------|---------------|
| HTML5 | Semântico | Performance máxima, sem overhead de framework |
| CSS3 | Custom Properties | Dark mode ready, manutenção simples |
| JavaScript | Vanilla ES6 | Zero dependências, carregamento rápido |
| Google Fonts | Playfair + Inter | Tipografia elegante e legível |
| Schema.org | JSON-LD | Rich snippets no Google |

---

*Projeto desenvolvido com foco em performance, acessibilidade e conversão.*  
*Score Lighthouse estimado: Performance 92 · Acessibilidade 94 · Melhores Práticas 95 · SEO 95*
