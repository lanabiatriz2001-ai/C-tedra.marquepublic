// Aplicação principal
(function() {
  'use strict';
  
  const app = {
    currentView: 'inicio',
    
    init() {
      this.setupEventListeners();
      this.updateGreeting();
    },
    
    setupEventListeners() {
      // Navegação
      const navItems = document.querySelectorAll('[data-view]');
      navItems.forEach(item => {
        item.addEventListener('click', (e) => this.switchView(e.target.closest('[data-view]').dataset.view));
      });
      
      // Menu mobile
      const menuBtn = document.getElementById('menu-btn');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => this.toggleMobileMenu());
      }
      
      // Tema
      const themeBtn = document.getElementById('theme-btn');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => this.toggleTheme());
      }
    },
    
    switchView(viewName) {
      const currentView = document.querySelector('.view.active');
      const newView = document.getElementById(`view-${viewName}`);
      
      if (currentView && newView) {
        currentView.classList.remove('active');
        newView.classList.add('active');
        this.currentView = viewName;
      }
    },
    
    toggleMobileMenu() {
      const nav = document.getElementById('nav');
      if (nav) {
        nav.classList.toggle('open');
      }
    },
    
    toggleTheme() {
      const root = document.documentElement;
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    },
    
    updateGreeting() {
      const hour = new Date().getHours();
      const greetEl = document.getElementById('greet');
      const dateEl = document.getElementById('datep');
      
      if (greetEl) {
        if (hour < 12) greetEl.textContent = 'Bom dia';
        else if (hour < 18) greetEl.textContent = 'Boa tarde';
        else greetEl.textContent = 'Boa noite';
      }
      
      if (dateEl) {
        const today = new Date().toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        dateEl.textContent = today;
      }
    },
    
    showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = message;
        toast.className = `toast show ${type}`;
        setTimeout(() => toast.classList.remove('show'), 3000);
      }
    }
  };
  
  // Inicializar quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
  } else {
    app.init();
  }
  
  // Exportar para global
  window.app = app;
})();
