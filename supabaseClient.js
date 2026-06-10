import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://glzgqlxfvsfivyydfsbz.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsemdxbHhmdnNmaXZ5eWRmc2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTU0OTMsImV4cCI6MjA5NjA3MTQ5M30.BZx5_kjbDZfNSccZOmkr46UwuRjyYpj_8OpUGmP43Yg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========= SISTEMA DE TEXTOS EDITÁVEIS =========
window.TEXTOS = {};

async function carregarTextos() {
  try {
    const { data, error } = await window.sb.from('site_textos').select('chave,valor');
    if (error) throw error;
    (data || []).forEach(r => { window.TEXTOS[r.chave] = r.valor; });
  } catch (e) { console.warn('Falha ao carregar textos, usando padrão:', e); }
  aplicarTextos();
}

// t('menu.inicio', 'Início') -> retorna o texto do banco OU o padrão
function t(chave, padrao) {
  return (window.TEXTOS[chave] != null && window.TEXTOS[chave] !== '')
    ? window.TEXTOS[chave] : padrao;
}

// substitui qualquer elemento marcado com data-txt="chave"
function aplicarTextos() {
  document.querySelectorAll('[data-txt]').forEach(el => {
    const chave = el.getAttribute('data-txt');
    if (window.TEXTOS[chave] != null) el.textContent = window.TEXTOS[chave];
  });
  document.dispatchEvent(new CustomEvent('textos-prontos'));
}

carregarTextos();
