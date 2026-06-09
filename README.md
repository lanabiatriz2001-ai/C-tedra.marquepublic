# Cátedra — Versão de Produção

Gerada a partir do arquivo-mestre editável (`fonte-editavel/catedra-mestre-editavel.html`),
que continua sendo a **fonte da verdade** para futuras edições.

## Estrutura
```
index.html              → HTML da aplicação (estrutura + sprite de ícones)
assets/app.min.css      → todo o CSS, concatenado e minificado
assets/app.min.js       → todo o JavaScript, concatenado e minificado
.htaccess               → compressão (GZIP/Brotli) + cache (servidores Apache)
fonte-editavel/         → arquivo-mestre editável (não publicar; use para editar)
```

## Como hospedar
Suba o conteúdo da pasta (index.html, assets/, .htaccess) para a raiz pública do seu site.
- **Apache / cPanel (hospedagem comum no Brasil):** o `.htaccess` já ativa GZIP/Brotli e cache.
- **Nginx / Netlify / Vercel / Cloudflare Pages:** o `.htaccess` é ignorado; compressão e cache
  costumam vir ativados por padrão (ou se configuram no painel do serviço).

## Otimizações aplicadas
- CSS e JS externos (cacheáveis pelo navegador) e minificados.
- Sprite SVG: ícones repetidos definidos uma vez e reusados via `<use>`.
- Fontes com `preconnect` + `display=swap` (sem travar o texto no carregamento).
- Cache longo para assets; HTML sem cache (sempre pega a versão nova).

## IMPORTANTE antes de vender (não é otimização — é pré-requisito)
1. **Supabase RLS:** confirme Row Level Security ativo em todas as tabelas, cada linha amarrada
   ao `auth.uid()`. Sem isso, um usuário pode ver dados de outro.
2. **Controle de pagamento/acesso:** hoje não existe; é preciso travar o acesso a quem pagou.
3. **LGPD:** Política de Privacidade + Termos de Uso.

## Editar no futuro
Edite `fonte-editavel/catedra-mestre-editavel.html` e gere a produção de novo a partir dele.
