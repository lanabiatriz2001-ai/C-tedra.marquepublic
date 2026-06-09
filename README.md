# Cátedra - Plataforma de Estudos Jurídicos

## 🚀 Otimizações Implementadas

Este projeto foi refatorado para melhor performance e manutenibilidade:

### Performance
- ✅ **Separação de CSS**: Cada arquivo CSS pode ser minificado e cacheado independentemente
- ✅ **Fontes Otimizadas**: `font-display: swap` previne font-loading jank
- ✅ **Compressão GZIP**: Configurado via `.htaccess` para reduzir tamanho de transferência
- ✅ **Cache de Browser**: Assets estáticos cacheados por 1 ano
- ✅ **Preload Crítico**: CSS e fontes com `rel="preload"` para melhor priorização

### Arquitetura
```
.
├── css/
│   ├── fonts.css          # Importação de fontes
│   ├── theme.css          # Variáveis CSS e tema
│   ├── main.css           # Estilos base da aplicação
│   ├── layout.css         # Layouts (sidebar, topbar, grids)
│   ├── components.css     # Componentes (cards, buttons, forms)
│   └── accessibility.css  # Estilos de acessibilidade
├── js/
│   └── app.js             # JavaScript principal
├── index-optimized.html   # HTML novo e otimizado
├── .htaccess              # Compressão e cache de browser
└── README.md              # Este arquivo
```

## 📋 Próximas Etapas

1. **Criar SVG Sprite** para ícones (em vez de inline)
2. **Minificar CSS e JS** em produção
3. **Criar mais arquivos CSS** conforme necessário:
   - `css/animations.css` - Animações específicas
   - `css/modals.css` - Estilos de modals
   - `css/responsive.css` - Media queries adicionais

4. **Implementar JavaScript Modular:**
   - `js/navigation.js` - Lógica de navegação
   - `js/theme.js` - Gerenciamento de tema
   - `js/data.js` - Gerenciamento de dados

5. **Build Script** para produção:
   - Minificação de CSS/JS
   - Otimização de imagens
   - Versionamento de assets

## 🔍 Métricas de Performance

**Antes:**
- Arquivo HTML único: 657 KB
- CSS inline, impossível de cachear
- Sem compressão GZIP configurada

**Depois (esperado):**
- HTML otimizado: ~15-20 KB
- CSS separado e minificado: ~30-40 KB total
- Compressão GZIP: ~70% de redução de tamanho
- Cache de browser: Assets estáticos não precisam ser baixados novamente

## 🛠️ Como Usar

1. Substitua o `index.html` antigo pelo `index-optimized.html`
2. Certifique-se de que `.htaccess` está no diretório raiz
3. Minifique CSS e JS em produção
4. Execute um teste de performance (Google PageSpeed Insights, Lighthouse)

## 📚 Referências

- [Google Fonts Best Practices](https://fonts.google.com/metadata/fonts)
- [Web Vitals](https://web.dev/vitals/)
- [CSS-in-JS vs. CSS Files](https://cssinjs.org/)
- [HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
