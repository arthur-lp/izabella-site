# 🔧 Guia de Manutenção — Site Izabella Miranda Fonoaudióloga

Guia prático para manter e atualizar o site sem necessitar de desenvolvedor para tarefas do dia a dia.

---

## 📌 Antes de Editar

1. **Faça backup:** Copie `site/index.html` antes de qualquer alteração
2. **Use um editor de código:** [VS Code](https://code.visualstudio.com) (gratuito) ou [Notepad++](https://notepad-plus-plus.org) (Windows)
3. **Teste localmente:** Após editar, abra o `index.html` no browser antes de publicar
4. **Publique:** Faça upload dos arquivos alterados na plataforma de hospedagem

---

## 💬 Como Adicionar / Editar Depoimentos

### Estrutura HTML de um Depoimento

Localize a seção `<!-- SEÇÃO: DEPOIMENTOS -->` no `index.html`. Cada depoimento segue esta estrutura:

```html
<!-- Copie e cole este bloco para adicionar um novo depoimento -->
<article class="testimonial-card" aria-label="Depoimento de [Nome do Paciente]">
  <!-- Estrelas de avaliação -->
  <div class="testimonial-stars" aria-label="5 estrelas">
    <span aria-hidden="true">★★★★★</span>
  </div>

  <!-- Texto do depoimento -->
  <blockquote class="testimonial-text">
    "Escreva aqui o texto do depoimento. Use as palavras reais da pessoa,
    entre 2 e 5 linhas é o ideal para leitura mobile."
  </blockquote>

  <!-- Autor -->
  <footer class="testimonial-author">
    <!-- Avatar (opcional — use iniciais se não tiver foto) -->
    <div class="testimonial-avatar" aria-hidden="true">
      IS <!-- Iniciais do nome -->
    </div>
    <div class="testimonial-info">
      <cite class="testimonial-name">Nome do Paciente ou Familiar</cite>
      <span class="testimonial-role">Familiar de Paciente com Disfagia</span>
    </div>
  </footer>
</article>
```

### Adicionar Foto no Avatar

Substitua o `<div class="testimonial-avatar">` por:

```html
<picture>
  <source srcset="assets/depoimento-nome.webp" type="image/webp">
  <img
    src="assets/depoimento-nome.jpg"
    alt="Foto de [Nome], paciente de fonoaudiologia"
    class="testimonial-avatar-img"
    width="56"
    height="56"
    loading="lazy"
  >
</picture>
```

### CSS para Foto de Avatar

Se usar foto, adicione ao `styles.css`:

```css
.testimonial-avatar-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-primary-tint);
}
```

### Boas Práticas para Depoimentos

- ✅ Sempre use depoimentos reais com consentimento da pessoa
- ✅ Inclua o contexto (tipo de problema tratado, tempo de acompanhamento)
- ✅ Mantenha no máximo 6 depoimentos (credibilidade sem sobrecarga)
- ✅ Priorize depoimentos de familiares de pacientes (seu público principal)
- ❌ Nunca invente ou exagere depoimentos — além de antiético, pode gerar processos

---

## ❓ Como Atualizar o FAQ (Accordion)

### Estrutura HTML de uma Pergunta

Localize a seção `<!-- SEÇÃO: FAQ -->` no `index.html`. Cada pergunta segue esta estrutura:

```html
<!-- Copie e cole este bloco para adicionar nova pergunta -->
<div class="faq-item">
  <!-- Botão que abre/fecha a resposta -->
  <button
    class="faq-question"
    aria-expanded="false"
    aria-controls="faq-NUMERO"
  >
    <span>Qual é a sua pergunta aqui?</span>
    <svg class="faq-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>
  </button>

  <!-- Conteúdo da resposta (oculto por padrão) -->
  <div
    class="faq-answer"
    id="faq-NUMERO"
    role="region"
    aria-labelledby="faq-question-NUMERO"
  >
    <div class="faq-answer-inner">
      <p>
        Escreva aqui a resposta completa. Pode usar parágrafos, listas,
        e outros elementos HTML básicos. Seja claro e direto, como se
        estivesse respondendo pessoalmente a um familiar preocupado.
      </p>
    </div>
  </div>
</div>
```

**Importante:** Substitua `NUMERO` por um número sequencial (ex: se o último FAQ é `faq-6`, use `faq-7`).

### Editar Pergunta Existente

1. Localize o texto entre as tags `<span>` dentro do `<button class="faq-question">`
2. Edite o texto da pergunta
3. Localize o `<div class="faq-answer-inner">` abaixo
4. Edite o texto da resposta no `<p>`

### Dicas de Conteúdo para FAQ

- Perguntas devem refletir dúvidas reais dos pacientes/familiares
- Respostas de 2 a 5 linhas — suficiente para esclarecer sem cansar
- Inclua naturalmente termos de busca (ex: "atendimento domiciliar BH", "disfagia em casa")
- Mantenha entre 6 e 10 perguntas

---

## 🏥 Como Adicionar Novas Especialidades

### Estrutura HTML de um Card de Especialidade

Localize a seção `<!-- SEÇÃO: ESPECIALIDADES -->` no `index.html`. Cada especialidade segue esta estrutura:

```html
<!-- Copie e cole este bloco para adicionar nova especialidade -->
<article class="specialty-card">
  <!-- Ícone (emoji ou SVG) -->
  <div class="specialty-icon" aria-hidden="true">
    🧠
    <!-- Use um emoji relevante OU um SVG personalizado -->
  </div>

  <!-- Conteúdo -->
  <div class="specialty-content">
    <h3 class="specialty-title">Nome da Especialidade</h3>
    <p class="specialty-description">
      Breve descrição de 2-3 linhas sobre o que é essa especialidade,
      quem se beneficia e como o atendimento domiciliar ajuda.
    </p>

    <!-- Lista de condições tratadas (opcional) -->
    <ul class="specialty-conditions" aria-label="Condições tratadas">
      <li>Condição 1</li>
      <li>Condição 2</li>
      <li>Condição 3</li>
    </ul>

    <!-- CTA individual (opcional) -->
    <a
      href="https://wa.me/5531992024967?text=Ol%C3%A1%2C+tenho+interesse+em+atendimento+de+Nome+da+Especialidade"
      class="btn btn-outline btn-sm"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta de Nome da Especialidade via WhatsApp"
    >
      Saber mais
    </a>
  </div>
</article>
```

### Ícones Recomendados por Área

| Especialidade | Emoji | Alternativa |
|--------------|-------|-------------|
| Disfagia | 🍽️ | 💧 |
| Neurologia / AVC | 🧠 | ⚡ |
| Voz | 🎙️ | 🔊 |
| Linguagem | 💬 | 📢 |
| Oncologia | 🎗️ | 🏥 |
| Cuidados Paliativos | 🤝 | ❤️ |
| Respiração | 🫁 | 💨 |

### Manter Consistência Visual

- Use sempre o mesmo padrão de `h3` para o título
- Não ultrapasse 3 condições listadas por card (fica carregado no mobile)
- Máximo recomendado: **8 especialidades** na grade

---

## 🖼️ Como Otimizar Imagens Antes de Subir

### Ferramentas Recomendadas

#### Online (sem instalação)
| Ferramenta | Uso | Link |
|-----------|-----|------|
| **Squoosh** | Conversão WebP + ajuste de qualidade | [squoosh.app](https://squoosh.app) |
| **TinyPNG** | Compressão PNG/JPG em lote | [tinypng.com](https://tinypng.com) |
| **Convertio** | Converte entre formatos | [convertio.co](https://convertio.co) |
| **Birme** | Redimensionamento em lote | [birme.net](https://www.birme.net) |

#### Desktop (Mac)
```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar ferramentas de imagem
brew install webp imagemagick

# Converter JPG para WebP (qualidade 85%)
cwebp -q 85 foto.jpg -o foto.webp

# Redimensionar para máximo 1200px de largura (mantendo proporção)
convert foto.jpg -resize 1200x\> foto-1200.jpg

# Otimizar JPG sem perda visual perceptível
jpegoptim --max=80 foto.jpg
```

#### Desktop (Windows)
- **IrfanView** — Gratuito, lote processing, suporte WebP
- **XnConvert** — Conversão e redimensionamento em lote
- **GIMP** — Editor completo, exportação WebP nativa

### Fluxo Recomendado para Novas Fotos

```
Foto original (DSLR/iPhone)
         ↓
Edição básica (brilho, contraste, enquadramento)
         ↓
Redimensionar: máx 1200px largura (desktop) / 800px (mobile)
         ↓
Exportar WebP 85% + JPEG 80% (como fallback)
         ↓
Nomear com palavras-chave: "fonoaudiologa-domiciliar-bh.webp"
         ↓
Copiar para site/assets/
         ↓
Inserir no HTML com <picture> + alt text descritivo
```

### Limites de Tamanho por Tipo

| Tipo de Imagem | Tamanho Máximo | Resolução |
|---------------|----------------|-----------|
| Hero / Banner | 150KB | 1920×1080px |
| Card de especialidade | 80KB | 800×600px |
| Avatar depoimento | 30KB | 200×200px |
| Foto da profissional | 120KB | 800×1000px |
| OG Image (redes sociais) | 100KB | 1200×630px |

---

## 📈 Boas Práticas de SEO Ongoing

### Atualização de Meta Description

A meta description deve ser revisada **a cada 3-6 meses** ou quando houver mudança de serviços. Localize no `index.html`:

```html
<!-- EDITÁVEL: Meta description — máx 160 caracteres -->
<meta name="description" content="Fonoaudióloga especializada em atendimento domiciliar para adultos e idosos em Belo Horizonte...">
```

**Checklist de boa meta description:**
- [ ] Entre 140 e 160 caracteres (use [charactercounttool.com](https://charactercounttool.com))
- [ ] Inclui palavra-chave principal: "fonoaudióloga domiciliar BH"
- [ ] Menciona diferencial: "formação UFMG", "Residência HC"
- [ ] Tem call-to-action implícito: "Agende pelo WhatsApp"
- [ ] Não é duplicada de nenhuma outra página

### Alt Text — Auditoria Periódica

**A cada vez que adicionar uma imagem, verifique:**
- [ ] `alt` presente e descritivo (não vazio, exceto para decorativas)
- [ ] Inclui palavras-chave naturalmente (sem forçar)
- [ ] Menos de 125 caracteres
- [ ] Não começa com "imagem de" ou "foto de"

**Ferramenta:** [WAVE Accessibility Checker](https://wave.webaim.org) — insira a URL e veja imagens sem alt em vermelho.

### Atualização de Títulos (H1, H2, H3)

O título H1 deve ser único e conter a palavra-chave principal:

```html
<!-- ✅ Bom H1 -->
<h1>Fonoaudióloga Domiciliar em BH<br>
  <span>Cuidado especializado no conforto do seu lar</span>
</h1>

<!-- ❌ H1 genérico demais -->
<h1>Bem-vindo ao meu site</h1>
```

**Regras:**
- Uma única `<h1>` por página
- `<h2>` para seções principais (Sobre, Especialidades, FAQ, etc.)
- `<h3>` para sub-itens (nome de especialidade, pergunta do FAQ)
- Nunca pule níveis (h1 → h3, sem h2)

### Monitoramento no Google Search Console

**Acesse mensalmente:**
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Verifique: **Desempenho → Consultas**
3. Identifique palavras-chave com impressões mas baixo CTR (oportunidade!)
4. Ajuste o título da página ou meta description para essas queries

**Métricas-chave a acompanhar:**
| Métrica | Meta |
|---------|------|
| Posição média | ≤ 10 (1ª página) |
| CTR orgânico | ≥ 3% |
| Impressões mensais | Crescimento mês a mês |
| Erros de indexação | 0 |

### Velocidade da Página

Execute [PageSpeed Insights](https://pagespeed.web.dev) **mensalmente**:
1. Cole a URL do site
2. Documente os scores
3. Corrija qualquer item "Oportunidades" marcado em vermelho
4. Meta: **Score ≥ 90** em Performance, Acessibilidade e SEO

### Checklist SEO Mensal

- [ ] Verificar Search Console por erros (404, robots, cobertura)
- [ ] Conferir velocidade no PageSpeed Insights
- [ ] Revisar novas perguntas dos pacientes → adicionar ao FAQ
- [ ] Atualizar depoimentos (trocar os mais antigos por recentes)
- [ ] Verificar se os links de WhatsApp ainda funcionam
- [ ] Conferir se o Schema Markup ainda é válido ([Rich Results Test](https://search.google.com/test/rich-results))

---

## 🆘 Problemas Comuns e Soluções

| Problema | Causa Provável | Solução |
|---------|---------------|---------|
| Site não abre após upload | Arquivo HTML não está na raiz | Verificar que `index.html` está na pasta raiz, não em subpasta |
| Imagem não aparece | Caminho errado ou arquivo faltando | Verificar que a imagem está em `assets/` e o caminho no HTML está correto |
| Accordion não abre | JavaScript bloqueado | Verificar console do browser (F12 → Console) por erros |
| WhatsApp não abre | Número formatado errado | Usar formato `5531992024967` (sem +, -, espaços ou parênteses) |
| Site lento | Imagens pesadas | Otimizar com Squoosh antes de fazer upload |
| Fonte não carrega | Bloqueio de Content Security Policy | Verificar cabeçalhos HTTP da hospedagem |

---

*Última atualização: Janeiro 2026*  
*Para suporte técnico avançado, contactar o desenvolvedor que criou este site.*
