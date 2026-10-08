/**
 * Bütçe - Zen Minimalist ES6+ Core
 * Pure Vanilla JavaScript & Pure SVG Graphics (Zero AI Slop)
 */

const STORAGE_KEY = 'BUTCE_TAKIP_USER_DATA_V1';
const THEME_KEY = 'BUTCE_TAKIP_THEME';

const SVG_ICONS = {
  briefcase: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  laptop: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>`,
  trendingUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
  lineChart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>`,
  plusCircle: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
  cart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  home: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  car: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>`,
  utensils: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path><path d="M15 2v19"></path><path d="M6 2v19"></path><path d="M6 7h4a2 2 0 0 0 2-2V2"></path></svg>`,
  film: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line></svg>`,
  activity: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  tag: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`
};

const DEFAULT_CATEGORIES = [
  { id: 'cat_salary', name: 'Maaş', type: 'income', iconKey: 'briefcase', color: '#10B981' },
  { id: 'cat_side', name: 'Ek Gelir', type: 'income', iconKey: 'laptop', color: '#0EA5E9' },
  { id: 'cat_invest', name: 'Yatırım', type: 'income', iconKey: 'trendingUp', color: '#6366F1' },
  { id: 'cat_stocks', name: 'Borsa & Fon', type: 'income', iconKey: 'lineChart', color: '#8B5CF6' },
  { id: 'cat_inc_other', name: 'Diğer Gelir', type: 'income', iconKey: 'plusCircle', color: '#64748B' },

  { id: 'cat_market', name: 'Market & Gıda', type: 'expense', iconKey: 'cart', color: '#F59E0B' },
  { id: 'cat_bills', name: 'Kira & Fatura', type: 'expense', iconKey: 'home', color: '#EF4444' },
  { id: 'cat_transport', name: 'Ulaşım', type: 'expense', iconKey: 'car', color: '#3B82F6' },
  { id: 'cat_dining', name: 'Yeme & İçme', type: 'expense', iconKey: 'utensils', color: '#EC4899' },
  { id: 'cat_fun', name: 'Eğlence', type: 'expense', iconKey: 'film', color: '#A855F7' },
  { id: 'cat_health', name: 'Sağlık', type: 'expense', iconKey: 'activity', color: '#14B8A6' },
  { id: 'cat_exp_other', name: 'Diğer', type: 'expense', iconKey: 'tag', color: '#64748B' }
];

// Clean initial accounts: balance starts at 0 so user enters their real balances
const DEFAULT_ACCOUNTS = [
  { id: 'acc_bank', name: 'Banka', type: 'bank', balance: 0 },
  { id: 'acc_cash', name: 'Nakit', type: 'cash', balance: 0 },
  { id: 'acc_cc', name: 'Kart', type: 'credit_card', balance: 0 }
];

const DEFAULT_BUDGET_LIMITS = {};

const DEFAULT_SAVINGS_GOALS = [];

const DEFAULT_SETTINGS = {
  ibanCommissionType: 'fixed', // 'fixed' | 'percent'
  ibanCommissionAmount: 7.50
};

function generateDemoTransactions() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');

  return [
    { id: 'tx_demo_1', type: 'income', amount: 35000, categoryId: 'cat_salary', accountId: 'acc_bank', date: `${y}-${m}-01`, note: 'Maaş' },
    { id: 'tx_demo_2', type: 'expense', amount: 12000, categoryId: 'cat_bills', accountId: 'acc_bank', date: `${y}-${m}-02`, note: 'Kira' },
    { id: 'tx_demo_3', type: 'expense', amount: 3500, categoryId: 'cat_market', accountId: 'acc_cc', date: `${y}-${m}-04`, note: 'Market', hasIbanCommission: false, ibanCommission: 0 }
  ];
}

class AppState {
  constructor() {
    this.categories = DEFAULT_CATEGORIES;
    this.accounts = DEFAULT_ACCOUNTS.map(a => ({ ...a, balance: 0 }));
    this.budgetLimits = {};
    this.savingsGoals = [];
    this.transactions = [];
    this.settings = { ...DEFAULT_SETTINGS };

    const now = new Date();
    this.currentYear = now.getFullYear();
    this.currentMonth = now.getMonth();

    this.activeTxType = 'expense';
    this.activeLeftTab = 'donut';
    this.filterType = 'all';
    this.searchQuery = '';
    this.txViewMode = 'list'; // 'list' | 'category' | 'month'

    this.load();
  }

  load() {
    try {
      // Clear legacy dummy test storage keys so user starts completely clean
      const legacyKeys = [
        'BUTCE_TAKIP_DATA_V5',
        'BUTCE_TAKIP_DATA_V4',
        'BUTCE_TAKIP_DATA_V3',
        'BUTCE_TAKIP_DATA_V2',
        'BUTCE_TAKIP_DATA'
      ];
      legacyKeys.forEach(k => {
        try { localStorage.removeItem(k); } catch (_) {}
      });

      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.categories = Array.isArray(parsed.categories) && parsed.categories.length > 0 ? parsed.categories : DEFAULT_CATEGORIES;
        this.accounts = Array.isArray(parsed.accounts) && parsed.accounts.length > 0 ? parsed.accounts : DEFAULT_ACCOUNTS.map(a => ({ ...a, balance: 0 }));
        this.budgetLimits = (parsed.budgetLimits && typeof parsed.budgetLimits === 'object') ? parsed.budgetLimits : {};
        this.savingsGoals = Array.isArray(parsed.savingsGoals) ? parsed.savingsGoals : [];
        this.transactions = Array.isArray(parsed.transactions) ? parsed.transactions : [];
        this.txViewMode = parsed.txViewMode || 'list';
        this.settings = (parsed.settings && typeof parsed.settings === 'object') ? {
          ibanCommissionType: parsed.settings.ibanCommissionType || 'fixed',
          ibanCommissionAmount: typeof parsed.settings.ibanCommissionAmount === 'number' ? parsed.settings.ibanCommissionAmount : (parseFloat(parsed.settings.ibanCommissionAmount) || 7.50)
        } : { ...DEFAULT_SETTINGS };
      } else {
        // First run: completely pristine clean state with 0 TL for the user to start entering their data
        this.categories = DEFAULT_CATEGORIES;
        this.accounts = DEFAULT_ACCOUNTS.map(a => ({ ...a, balance: 0 }));
        this.budgetLimits = {};
        this.savingsGoals = [];
        this.transactions = [];
        this.settings = { ...DEFAULT_SETTINGS };
        this.txViewMode = 'list';
        this.save();
      }
    } catch (err) {
      console.warn('LocalStorage error, starting with clean state:', err);
      this.categories = DEFAULT_CATEGORIES;
      this.accounts = DEFAULT_ACCOUNTS.map(a => ({ ...a, balance: 0 }));
      this.budgetLimits = {};
      this.savingsGoals = [];
      this.transactions = [];
      this.settings = { ...DEFAULT_SETTINGS };
      this.save();
    }
  }

  save() {
    try {
      const payload = {
        categories: this.categories,
        accounts: this.accounts,
        budgetLimits: this.budgetLimits,
        savingsGoals: this.savingsGoals,
        transactions: this.transactions,
        settings: this.settings,
        txViewMode: this.txViewMode,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }
  }

  addTransaction(tx) {
    this.transactions.unshift(tx);
    const acc = this.accounts.find(a => a.id === tx.accountId);
    if (acc) {
      if (tx.type === 'income') {
        acc.balance += Number(tx.amount);
      } else {
        const comm = tx.hasIbanCommission ? Number(tx.ibanCommission || 0) : 0;
        acc.balance -= (Number(tx.amount) + comm);
      }
    }
    this.save();
  }

  updateTransaction(updated) {
    const idx = this.transactions.findIndex(t => t.id === updated.id);
    if (idx !== -1) {
      const old = this.transactions[idx];
      const oldAcc = this.accounts.find(a => a.id === old.accountId);
      if (oldAcc) {
        if (old.type === 'income') {
          oldAcc.balance -= Number(old.amount);
        } else {
          const oldComm = old.hasIbanCommission ? Number(old.ibanCommission || 0) : 0;
          oldAcc.balance += (Number(old.amount) + oldComm);
        }
      }
      const newAcc = this.accounts.find(a => a.id === updated.accountId);
      if (newAcc) {
        if (updated.type === 'income') {
          newAcc.balance += Number(updated.amount);
        } else {
          const newComm = updated.hasIbanCommission ? Number(updated.ibanCommission || 0) : 0;
          newAcc.balance -= (Number(updated.amount) + newComm);
        }
      }
      this.transactions[idx] = updated;
      this.save();
    }
  }

  deleteTransaction(id) {
    const tx = this.transactions.find(t => t.id === id);
    if (tx) {
      const acc = this.accounts.find(a => a.id === tx.accountId);
      if (acc) {
        if (tx.type === 'income') {
          acc.balance -= Number(tx.amount);
        } else {
          const comm = tx.hasIbanCommission ? Number(tx.ibanCommission || 0) : 0;
          acc.balance += (Number(tx.amount) + comm);
        }
      }
      this.transactions = this.transactions.filter(t => t.id !== id);
      this.save();
    }
  }

  addSavingsDeposit(goalId, amount, accountId = null) {
    const goal = this.savingsGoals.find(g => g.id === goalId);
    if (goal) {
      const numAmt = Number(amount);
      goal.current += numAmt;
      if (accountId) {
        const acc = this.accounts.find(a => a.id === accountId);
        if (acc) {
          acc.balance -= numAmt;
          this.transactions.unshift({
            id: 'tx_' + Date.now(),
            type: 'expense',
            amount: numAmt,
            categoryId: 'cat_invest',
            accountId: accountId,
            date: new Date().toISOString().split('T')[0],
            note: `Birikim: ${goal.title}`
          });
        }
      }
      this.save();
    }
  }

  withdrawSavings(goalId, amount, accountId = null) {
    const goal = this.savingsGoals.find(g => g.id === goalId);
    if (goal) {
      const numAmt = Math.min(goal.current, Number(amount));
      goal.current -= numAmt;
      if (accountId) {
        const acc = this.accounts.find(a => a.id === accountId);
        if (acc) {
          acc.balance += numAmt;
          this.transactions.unshift({
            id: 'tx_' + Date.now(),
            type: 'income',
            amount: numAmt,
            categoryId: 'cat_invest',
            accountId: accountId,
            date: new Date().toISOString().split('T')[0],
            note: `Birikimden Çekim: ${goal.title}`
          });
        }
      }
      this.save();
    }
  }

  createSavingsGoal(goal) {
    this.savingsGoals.push(goal);
    this.save();
  }

  deleteSavingsGoal(goalId) {
    this.savingsGoals = this.savingsGoals.filter(g => g.id !== goalId);
    this.save();
  }

  resetAll() {
    this.transactions = [];
    this.accounts = DEFAULT_ACCOUNTS.map(a => ({ ...a, balance: 0 }));
    this.budgetLimits = {};
    this.savingsGoals = [];
    this.save();
  }

  loadDemo() {
    this.categories = DEFAULT_CATEGORIES;
    this.accounts = [
      { id: 'acc_bank', name: 'Banka', type: 'bank', balance: 35000 },
      { id: 'acc_cash', name: 'Nakit', type: 'cash', balance: 3000 },
      { id: 'acc_cc', name: 'Kart', type: 'credit_card', balance: -2500 }
    ];
    this.budgetLimits = {
      cat_market: 6000,
      cat_bills: 12000,
      cat_dining: 3000
    };
    this.savingsGoals = [
      { id: 'goal_emergency', title: 'Acil Durum Fonu', target: 50000, current: 20000 }
    ];
    this.transactions = generateDemoTransactions();
    this.save();
  }
}

const state = new AppState();

// Ensure data is saved whenever page is hidden or closed (tab switch, close, refresh)
window.addEventListener('beforeunload', () => {
  if (state) state.save();
});
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && state) {
    state.save();
  }
});

const TURKISH_MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

function calculateIbanCommission(amount) {
  const num = Number(amount) || 0;
  const type = state.settings?.ibanCommissionType || 'fixed';
  const rate = Number(state.settings?.ibanCommissionAmount) || 0;
  if (type === 'percent') {
    return Math.round((num * (rate / 100)) * 100) / 100;
  }
  return Math.max(0, rate);
}

function getTxTotalDeduction(tx) {
  if (!tx) return 0;
  const base = Number(tx.amount || 0);
  if (tx.type === 'expense' && tx.hasIbanCommission) {
    return base + Number(tx.ibanCommission || 0);
  }
  return base;
}

function formatCurrency(val) {
  const num = Number(val) || 0;
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(num);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const now = new Date();
  if (now.getFullYear() === y && now.getMonth() === (m - 1) && now.getDate() === d) {
    return 'Bugün';
  }
  return `${d} ${TURKISH_MONTHS[m - 1].slice(0, 3)}`;
}

function showToast(msg) {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'quiet-toast';
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.2s ease';
    setTimeout(() => t.remove(), 200);
  }, 2200);
}

function getMonthPrefix(year, month) {
  return `${year}-${String(month + 1).padStart(2, '0')}`;
}

function getTransactionsForMonth(year, month) {
  const prefix = getMonthPrefix(year, month);
  return state.transactions.filter(t => t.date && t.date.startsWith(prefix));
}

// ============================================================================
// CALM OVERVIEW
// ============================================================================

function renderOverview() {
  const monthTxs = getTransactionsForMonth(state.currentYear, state.currentMonth);

  const totalBal = state.accounts.reduce((sum, a) => sum + Number(a.balance || 0), 0);
  const totalBalEl = document.getElementById('statTotalBalance');
  if (totalBalEl) totalBalEl.textContent = formatCurrency(totalBal);

  const inc = monthTxs.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount || 0), 0);
  const exp = monthTxs.filter(t => t.type === 'expense').reduce((s, t) => s + getTxTotalDeduction(t), 0);

  const statInc = document.getElementById('statMonthlyIncome');
  const statExp = document.getElementById('statMonthlyExpense');
  if (statInc) statInc.textContent = `+${formatCurrency(inc)}`;
  if (statExp) statExp.textContent = `-${formatCurrency(exp)}`;

  const accsEl = document.getElementById('accountsBreakdown');
  if (accsEl) {
    accsEl.innerHTML = state.accounts.map((a, i) => `
      <span class="zen-account-tag" data-acc-id="${a.id}">
        ${a.name} <strong>${formatCurrency(a.balance)}</strong>
      </span>
      ${i < state.accounts.length - 1 ? '<span style="color: var(--text-dim);">·</span>' : ''}
    `).join('');

    accsEl.querySelectorAll('.zen-account-tag').forEach(el => {
      el.onclick = () => window.openAccountsModal();
    });
  }

  const totalSavings = state.savingsGoals.reduce((sum, g) => sum + Number(g.current || 0), 0);
  const totalSavEl = document.getElementById('statTotalSavings');
  if (totalSavEl) totalSavEl.textContent = formatCurrency(totalSavings);

  const heroSavStat = document.getElementById('heroSavingsStat');
  if (heroSavStat) {
    heroSavStat.onclick = () => {
      const tabS = document.getElementById('tabSavings');
      if (tabS) tabS.click();
    };
  }

  const savPct = document.getElementById('savingsPercentage');
  if (savPct) {
    if (inc <= 0) savPct.textContent = '%0';
    else {
      const rate = Math.round(((inc - exp) / inc) * 100);
      savPct.textContent = `%${rate}`;
      savPct.style.color = rate >= 20 ? 'var(--income)' : (rate >= 0 ? 'var(--text-main)' : 'var(--expense)');
    }
  }

  const label = document.getElementById('currentMonthLabel');
  if (label) label.textContent = `${TURKISH_MONTHS[state.currentMonth]} ${state.currentYear}`;
}

// ============================================================================
// VISUAL ANALYTICS (DONUT, TREND, LIMITS, SAVINGS)
// ============================================================================

function renderDonut() {
  const svg = document.getElementById('donutSvg');
  const legend = document.getElementById('donutLegend');
  const centerTitle = document.getElementById('donutCenterTitle');
  const centerAmount = document.getElementById('donutCenterAmount');
  if (!svg || !legend) return;

  const monthTxs = getTransactionsForMonth(state.currentYear, state.currentMonth);
  const expenseTxs = monthTxs.filter(t => t.type === 'expense');
  const totalExp = expenseTxs.reduce((s, t) => s + getTxTotalDeduction(t), 0);

  const resetCenter = () => {
    if (centerTitle) centerTitle.textContent = 'Gider';
    if (centerAmount) centerAmount.textContent = formatCurrency(totalExp);
  };
  resetCenter();

  if (totalExp <= 0) {
    svg.innerHTML = `<circle cx="50" cy="50" r="38" fill="none" stroke="var(--border-subtle)" stroke-width="7" opacity="0.3" />`;
    legend.innerHTML = `<div style="padding: 1.25rem 0.5rem; font-size: 0.775rem; color: var(--text-dim); text-align: center;">Bu ay için henüz harcama kaydı yok.</div>`;
    return;
  }

  const catMap = {};
  expenseTxs.forEach(t => {
    catMap[t.categoryId] = (catMap[t.categoryId] || 0) + getTxTotalDeduction(t);
  });

  const items = Object.entries(catMap)
    .map(([catId, amount]) => {
      const cat = state.categories.find(c => c.id === catId) || { name: 'Diğer', color: '#64748B' };
      return { catId, name: cat.name, color: cat.color, amount, pct: (amount / totalExp) * 100 };
    })
    .sort((a, b) => b.amount - a.amount);

  const radius = 38;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  let svgHtml = `<circle cx="50" cy="50" r="${radius}" fill="none" stroke="var(--border-subtle)" stroke-width="7" opacity="0.3" />`;

  items.forEach(it => {
    const dash = `${(it.pct / 100) * circ} ${circ}`;
    const off = -((offset / 100) * circ);
    svgHtml += `
      <circle
        class="donut-segment"
        data-cat-id="${it.catId}"
        cx="50" cy="50" r="${radius}"
        fill="none" stroke="${it.color}" stroke-width="7"
        stroke-dasharray="${dash}" stroke-dashoffset="${off}"
      />
    `;
    offset += it.pct;
  });

  svg.innerHTML = svgHtml;

  legend.innerHTML = items.map(it => `
    <div class="donut-item-row" data-cat-id="${it.catId}">
      <span>
        <span class="donut-dot" style="background: ${it.color};"></span>
        ${it.name}
      </span>
      <span class="tabular">${formatCurrency(it.amount)}</span>
    </div>
  `).join('');

  const segs = svg.querySelectorAll('.donut-segment');
  const rows = legend.querySelectorAll('.donut-item-row');

  function hoverCat(catId) {
    const it = items.find(c => c.catId === catId);
    if (!it) return;
    if (centerTitle) centerTitle.textContent = it.name;
    if (centerAmount) centerAmount.textContent = formatCurrency(it.amount);
    segs.forEach(s => {
      if (s.getAttribute('data-cat-id') === catId) s.style.strokeWidth = '10';
      else s.style.opacity = '0.25';
    });
  }

  function unhover() {
    resetCenter();
    segs.forEach(s => {
      s.style.strokeWidth = '7';
      s.style.opacity = '1';
    });
  }

  segs.forEach(s => {
    s.onmouseenter = () => hoverCat(s.getAttribute('data-cat-id'));
    s.onmouseleave = unhover;
  });
  rows.forEach(r => {
    r.onmouseenter = () => hoverCat(r.getAttribute('data-cat-id'));
    r.onmouseleave = unhover;
  });
}

function renderTrend() {
  const svg = document.getElementById('trendSvg');
  if (!svg) return;

  const list = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(state.currentYear, state.currentMonth - i, 1);
    const y = d.getFullYear();
    const m = d.getMonth();
    const prefix = getMonthPrefix(y, m);
    const txs = state.transactions.filter(t => t.date && t.date.startsWith(prefix));
    const inc = txs.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount || 0), 0);
    const exp = txs.filter(t => t.type === 'expense').reduce((s, t) => s + getTxTotalDeduction(t), 0);
    list.push({ label: TURKISH_MONTHS[m].slice(0, 3), inc, exp, isCur: i === 0 });
  }

  const max = Math.max(...list.map(d => Math.max(d.inc, d.exp)), 6000);
  const w = 420;
  const h = 160;
  const padL = 30;
  const padR = 10;
  const padT = 10;
  const padB = 24;

  const chartW = w - padL - padR;
  const chartH = h - padT - padB;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  let grid = '';
  for (let s = 0; s <= 2; s++) {
    const y = padT + (chartH / 2) * s;
    const v = Math.round(max * (1 - s / 2));
    grid += `
      <line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" class="trend-grid-line" />
      <text x="${padL - 4}" y="${y + 3}" text-anchor="end" class="trend-axis-text">${v >= 1000 ? Math.round(v / 1000) + 'k' : v}</text>
    `;
  }

  const colW = chartW / list.length;
  const barW = Math.max(7, colW * 0.22);
  let bars = '';

  list.forEach((d, i) => {
    const cx = padL + i * colW + colW / 2;
    const hInc = Math.max(2, (d.inc / max) * chartH);
    const hExp = Math.max(2, (d.exp / max) * chartH);
    bars += `
      <rect x="${cx - barW - 1}" y="${padT + chartH - hInc}" width="${barW}" height="${hInc}" rx="1" fill="var(--income)" opacity="${d.isCur ? '1' : '0.6'}" />
      <rect x="${cx + 1}" y="${padT + chartH - hExp}" width="${barW}" height="${hExp}" rx="1" fill="var(--expense)" opacity="${d.isCur ? '1' : '0.6'}" />
      <text x="${cx}" y="${h - 6}" text-anchor="middle" class="trend-axis-text" style="font-weight: ${d.isCur ? '600' : '400'}; fill: ${d.isCur ? 'var(--text-main)' : 'var(--text-dim)'};">${d.label}</text>
    `;
  });

  svg.innerHTML = grid + bars;
}

function renderLimits() {
  const container = document.getElementById('budgetItemsList');
  if (!container) return;

  const monthTxs = getTransactionsForMonth(state.currentYear, state.currentMonth);
  const spentMap = {};
  monthTxs.filter(t => t.type === 'expense').forEach(t => {
    spentMap[t.categoryId] = (spentMap[t.categoryId] || 0) + getTxTotalDeduction(t);
  });

  const list = state.categories.filter(c => c.type === 'expense');
  const activeLimits = list.filter(cat => (state.budgetLimits[cat.id] || 0) > 0);

  if (activeLimits.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.75rem 0.5rem; text-align: center; color: var(--text-dim); font-size: 0.8rem; display: flex; flex-direction: column; align-items: center; gap: 0.45rem;">
        <span style="font-weight: 500; color: var(--text-muted);">Henüz bütçe limiti belirlenmedi</span>
        <span style="font-size: 0.725rem; color: var(--text-dim); max-width: 260px; line-height: 1.4;">Harcama kategorilerinize aylık limit belirlemek için "Limitleri Düzenle" butonunu kullanabilirsiniz.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(cat => {
    const limit = state.budgetLimits[cat.id] || 0;
    const spent = spentMap[cat.id] || 0;
    if (limit <= 0) return '';

    const pct = Math.round((spent / limit) * 100);
    const clamped = Math.min(100, pct);
    const rem = limit - spent;

    return `
      <div class="limit-zen-row">
        <div class="limit-zen-top">
          <span>${cat.name}</span>
          <span class="tabular"><strong>${formatCurrency(spent)}</strong> / ${formatCurrency(limit)}</span>
        </div>
        <div class="limit-zen-bar">
          <div class="limit-zen-fill ${pct >= 90 ? 'warning' : ''}" style="width: ${clamped}%;"></div>
        </div>
        <div class="limit-zen-meta">
          <span>${rem >= 0 ? `${formatCurrency(rem)} kaldı` : `${formatCurrency(Math.abs(rem))} aşıldı`}</span>
          <span class="tabular">%${pct}</span>
        </div>
      </div>
    `;
  }).filter(Boolean).join('');
}

function renderSavings() {
  const container = document.getElementById('savingsGoalsList');
  if (!container) return;

  const totalCurrent = state.savingsGoals.reduce((s, g) => s + Number(g.current || 0), 0);
  const totalTarget = state.savingsGoals.reduce((s, g) => s + Number(g.target || 0), 0);
  const overallPct = totalTarget > 0 ? Math.round((totalCurrent / totalTarget) * 100) : 0;

  if (state.savingsGoals.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.75rem 0.5rem; text-align: center; color: var(--text-dim); font-size: 0.8rem; display: flex; flex-direction: column; align-items: center; gap: 0.45rem;">
        <span style="font-weight: 500; color: var(--text-muted);">Henüz birikim hedefi eklenmedi</span>
        <span style="font-size: 0.725rem; color: var(--text-dim); max-width: 260px; line-height: 1.4;">Tasarruf hedeflerinizi belirleyip ilerlemenizi takip etmek için "+ Yeni Birikim Hedefi" butonuna tıklayın.</span>
      </div>
    `;
    return;
  }

  const bannerHtml = `
    <div class="savings-summary-banner">
      <div>
        <span class="savings-summary-label">Toplam Birikim</span>
        <div class="savings-summary-value tabular">${formatCurrency(totalCurrent)}</div>
      </div>
      <div style="text-align: right;">
        <span class="savings-summary-label">Toplam Hedef</span>
        <div class="savings-summary-sub tabular">${formatCurrency(totalTarget)} <span style="color: var(--income); font-size: 0.75rem;">(%${overallPct})</span></div>
      </div>
    </div>
  `;

  const itemsHtml = state.savingsGoals.map(goal => {
    const pct = goal.target > 0 ? Math.round((goal.current / goal.target) * 100) : 0;
    const clamped = Math.min(100, pct);
    const rem = goal.target - goal.current;

    return `
      <div class="saving-item-row" data-goal-id="${goal.id}">
        <div class="saving-item-top">
          <div class="saving-title-wrap">
            <span>${goal.title}</span>
          </div>
          <div class="saving-amounts tabular">
            <strong>${formatCurrency(goal.current)}</strong> / ${formatCurrency(goal.target)}
          </div>
        </div>
        <div class="saving-bar-track">
          <div class="saving-bar-fill" style="width: ${clamped}%;"></div>
        </div>
        <div class="saving-item-bottom">
          <span>${rem > 0 ? `${formatCurrency(rem)} kaldı (%${pct})` : 'Hedefe ulaşıldı! 🎉'}</span>
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <button class="btn-deposit-micro btn-open-deposit" data-goal-id="${goal.id}" data-goal-title="${goal.title}" data-mode="deposit">
              + Yatır
            </button>
            <button class="btn-deposit-micro btn-open-deposit" data-goal-id="${goal.id}" data-goal-title="${goal.title}" data-mode="withdraw" style="color: var(--text-muted);">
              - Çek
            </button>
            <button class="btn-deposit-micro btn-del-goal" data-goal-id="${goal.id}" title="Hedefi Sil" style="color: var(--expense);">
              &times;
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = bannerHtml + itemsHtml;

  container.querySelectorAll('.btn-open-deposit').forEach(btn => {
    btn.onclick = () => {
      const gid = btn.getAttribute('data-goal-id');
      const title = btn.getAttribute('data-goal-title');
      const mode = btn.getAttribute('data-mode') || 'deposit';
      openDepositModal(gid, title, mode);
    };
  });

  container.querySelectorAll('.btn-del-goal').forEach(btn => {
    btn.onclick = () => {
      if (confirm('Hedef silinsin mi?')) {
        state.deleteSavingsGoal(btn.getAttribute('data-goal-id'));
        renderAll();
        showToast('Hedef silindi.');
      }
    };
  });
}

// ============================================================================
// TRANSACTIONS LIST & GROUPED VIEWS
// ============================================================================

const SVG_CHEVRON_DOWN = `<svg class="grouped-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const expandedCategoryGroups = new Set();
const expandedMonthGroups = new Set();

function bindTxActions(container) {
  container.querySelectorAll('.btn-delete').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      if (confirm('İşlem silinsin mi?')) {
        state.deleteTransaction(btn.getAttribute('data-id'));
        renderAll();
        showToast('Silindi.');
      }
    };
  });

  container.querySelectorAll('.btn-edit').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      openEditModal(btn.getAttribute('data-id'));
    };
  });
}

function getEmptyTxStateHtml(msg = 'Henüz bir işlem kaydedilmedi', sub = 'Yukarıdaki Hızlı Ekle satırından veya "+ İşlem" butonundan ilk gelirinizi ya da giderinizi ekleyin.') {
  return `
    <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-dim); display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.45;">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">${msg}</span>
      <span style="font-size: 0.75rem; color: var(--text-dim); max-width: 280px; line-height: 1.4;">${sub}</span>
    </div>
  `;
}

function renderFlatTransactions(container, countBadge) {
  const prefix = getMonthPrefix(state.currentYear, state.currentMonth);
  let list = state.transactions.filter(t => t.date && t.date.startsWith(prefix));

  if (state.filterType !== 'all') {
    list = list.filter(t => t.type === state.filterType);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(t => {
      const note = (t.note || '').toLowerCase();
      const cat = state.categories.find(c => c.id === t.categoryId);
      const catName = cat ? cat.name.toLowerCase() : '';
      return note.includes(q) || catName.includes(q) || String(t.amount).includes(q);
    });
  }

  list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  if (countBadge) {
    countBadge.textContent = list.length > 0 ? `(${list.length})` : '';
  }

  if (list.length === 0) {
    if (state.transactions.length === 0) {
      container.innerHTML = getEmptyTxStateHtml();
    } else {
      container.innerHTML = getEmptyTxStateHtml('İşlem bulunamadı', 'Arama veya seçili filtreye uygun kayıt yok.');
    }
    return;
  }

  container.innerHTML = list.map(tx => {
    const isInc = tx.type === 'income';
    const cat = state.categories.find(c => c.id === tx.categoryId) || { name: 'Diğer', iconKey: 'tag' };
    const icon = SVG_ICONS[cat.iconKey] || SVG_ICONS.tag;
    const acc = state.accounts.find(a => a.id === tx.accountId);
    const hasIban = !isInc && tx.hasIbanCommission && Number(tx.ibanCommission || 0) > 0;
    const totalDeduction = getTxTotalDeduction(tx);

    return `
      <div class="tx-zen-row" data-id="${tx.id}">
        <div class="tx-zen-left">
          <div class="tx-zen-icon">${icon}</div>
          <div>
            <div class="tx-zen-title">
              <span>${tx.note || cat.name}</span>
              ${hasIban ? `<span class="badge-iban-fee tabular">+₺${Number(tx.ibanCommission).toFixed(2)} Kom.</span>` : ''}
            </div>
            <div class="tx-zen-date">${cat.name}${acc ? ` · ${acc.name}` : ''} · ${formatDate(tx.date)}</div>
          </div>
        </div>

        <div class="tx-zen-right">
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem;">
            <span class="tx-zen-amt ${isInc ? 'income' : 'expense'} tabular">
              ${isInc ? '+' : '-'}${formatCurrency(totalDeduction)}
            </span>
            ${hasIban ? `<span style="font-size: 0.65rem; color: var(--text-dim);" class="tabular">(Tutar: ${formatCurrency(tx.amount)})</span>` : ''}
          </div>
          <div class="tx-zen-actions">
            <button class="btn-zen-action btn-edit" data-id="${tx.id}" title="Düzenle">✎</button>
            <button class="btn-zen-action delete btn-delete" data-id="${tx.id}" title="Sil">&times;</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  bindTxActions(container);
}

function renderCategoryGroupedTransactions(container, countBadge) {
  const prefix = getMonthPrefix(state.currentYear, state.currentMonth);
  let list = state.transactions.filter(t => t.date && t.date.startsWith(prefix));

  if (state.filterType !== 'all') {
    list = list.filter(t => t.type === state.filterType);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(t => {
      const note = (t.note || '').toLowerCase();
      const cat = state.categories.find(c => c.id === t.categoryId);
      const catName = cat ? cat.name.toLowerCase() : '';
      return note.includes(q) || catName.includes(q) || String(t.amount).includes(q);
    });
  }

  if (list.length === 0) {
    if (countBadge) countBadge.textContent = '';
    if (state.transactions.length === 0) {
      container.innerHTML = getEmptyTxStateHtml();
    } else {
      container.innerHTML = getEmptyTxStateHtml('İşlem bulunamadı', 'Arama veya seçili filtreye uygun kayıt yok.');
    }
    return;
  }

  const groupMap = {};
  list.forEach(tx => {
    if (!groupMap[tx.categoryId]) {
      groupMap[tx.categoryId] = {
        catId: tx.categoryId,
        totalAmount: 0,
        txs: []
      };
    }
    groupMap[tx.categoryId].totalAmount += (tx.type === 'expense' ? getTxTotalDeduction(tx) : Number(tx.amount || 0));
    groupMap[tx.categoryId].txs.push(tx);
  });

  const groups = Object.values(groupMap);
  groups.sort((a, b) => b.totalAmount - a.totalAmount);
  groups.forEach(g => g.txs.sort((a, b) => (b.date || '').localeCompare(a.date || '')));

  if (countBadge) {
    countBadge.textContent = `(${groups.length} kat.)`;
  }

  const grandTotal = list.reduce((sum, t) => sum + (t.type === 'expense' ? getTxTotalDeduction(t) : Number(t.amount || 0)), 0);
  const allOpen = groups.length > 0 && groups.every(g => expandedCategoryGroups.has(g.catId));

  const summaryBar = `
    <div class="grouped-summary-bar">
      <span>${groups.length} Kategori · Toplam: ${formatCurrency(grandTotal)}</span>
      <button type="button" class="btn-group-toggle-all" id="btnToggleAllCategories">
        ${allOpen ? 'Tümünü Daralt' : 'Tümünü Genişlet'}
      </button>
    </div>
  `;

  const cardsHtml = groups.map(g => {
    const cat = state.categories.find(c => c.id === g.catId) || { name: 'Diğer', color: '#64748B', iconKey: 'tag', type: 'expense' };
    const icon = SVG_ICONS[cat.iconKey] || SVG_ICONS.tag;
    const pct = grandTotal > 0 ? Math.round((g.totalAmount / grandTotal) * 100) : 0;
    const isOpen = expandedCategoryGroups.has(g.catId);
    const isInc = cat.type === 'income';

    return `
      <div class="grouped-card ${isOpen ? 'open' : ''}" data-cat-id="${g.catId}">
        <div class="grouped-head" data-toggle-cat="${g.catId}">
          <div class="grouped-head-left">
            <div class="grouped-icon" style="background: ${cat.color}18; color: ${cat.color};">
              ${icon}
            </div>
            <div class="grouped-info">
              <div class="grouped-title">
                <span>${cat.name}</span>
                <span class="grouped-badge">${g.txs.length} işlem</span>
              </div>
              <div class="grouped-sub">
                <span class="grouped-bar-mini">
                  <span class="grouped-bar-fill" style="width: ${Math.min(100, pct)}%; background: ${cat.color};"></span>
                </span>
                <span class="tabular">%${pct} pay</span>
              </div>
            </div>
          </div>
          <div class="grouped-head-right">
            <span class="grouped-amt ${isInc ? 'income' : 'expense'} tabular">
              ${isInc ? '+' : '-'}${formatCurrency(g.totalAmount)}
            </span>
            ${SVG_CHEVRON_DOWN}
          </div>
        </div>
        <div class="grouped-body">
          ${g.txs.map(tx => {
            const acc = state.accounts.find(a => a.id === tx.accountId);
            const hasIban = tx.type === 'expense' && tx.hasIbanCommission && Number(tx.ibanCommission || 0) > 0;
            const totalDeduction = getTxTotalDeduction(tx);
            return `
              <div class="grouped-sub-row" data-id="${tx.id}">
                <div class="grouped-sub-left">
                  <span class="grouped-sub-note" title="${tx.note || cat.name}">
                    ${tx.note || cat.name}
                    ${hasIban ? `<span class="badge-iban-fee tabular">+₺${Number(tx.ibanCommission).toFixed(2)} Kom.</span>` : ''}
                  </span>
                  ${acc ? `<span class="grouped-sub-acc">${acc.name}</span>` : ''}
                  <span class="grouped-sub-date">${formatDate(tx.date)}</span>
                </div>
                <div class="grouped-sub-right">
                  <span class="grouped-sub-amt ${tx.type === 'income' ? 'income' : 'expense'} tabular">
                    ${tx.type === 'income' ? '+' : '-'}${formatCurrency(totalDeduction)}
                  </span>
                  <div class="tx-zen-actions" style="opacity: 1;">
                    <button class="btn-zen-action btn-edit" data-id="${tx.id}" title="Düzenle">✎</button>
                    <button class="btn-zen-action delete btn-delete" data-id="${tx.id}" title="Sil">&times;</button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = summaryBar + cardsHtml;

  container.querySelectorAll('.grouped-head[data-toggle-cat]').forEach(head => {
    head.onclick = (e) => {
      if (e.target.closest('button')) return;
      const catId = head.getAttribute('data-toggle-cat');
      if (expandedCategoryGroups.has(catId)) {
        expandedCategoryGroups.delete(catId);
      } else {
        expandedCategoryGroups.add(catId);
      }
      renderCategoryGroupedTransactions(container, countBadge);
    };
  });

  const toggleAllBtn = container.querySelector('#btnToggleAllCategories');
  if (toggleAllBtn) {
    toggleAllBtn.onclick = () => {
      if (allOpen) {
        expandedCategoryGroups.clear();
      } else {
        groups.forEach(g => expandedCategoryGroups.add(g.catId));
      }
      renderCategoryGroupedTransactions(container, countBadge);
    };
  }

  bindTxActions(container);
}

function renderMonthGroupedTransactions(container, countBadge) {
  let list = [...state.transactions];

  if (state.filterType !== 'all') {
    list = list.filter(t => t.type === state.filterType);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(t => {
      const note = (t.note || '').toLowerCase();
      const cat = state.categories.find(c => c.id === t.categoryId);
      const catName = cat ? cat.name.toLowerCase() : '';
      return note.includes(q) || catName.includes(q) || String(t.amount).includes(q);
    });
  }

  if (list.length === 0) {
    if (countBadge) countBadge.textContent = '';
    if (state.transactions.length === 0) {
      container.innerHTML = getEmptyTxStateHtml();
    } else {
      container.innerHTML = getEmptyTxStateHtml('İşlem bulunamadı', 'Arama veya seçili filtreye uygun kayıt yok.');
    }
    return;
  }

  const monthMap = {};
  list.forEach(tx => {
    const monthKey = (tx.date || '').slice(0, 7);
    if (!monthKey || monthKey.length < 7) return;

    if (!monthMap[monthKey]) {
      monthMap[monthKey] = {
        key: monthKey,
        income: 0,
        expense: 0,
        txs: []
      };
    }

    if (tx.type === 'income') {
      monthMap[monthKey].income += Number(tx.amount || 0);
    } else {
      monthMap[monthKey].expense += getTxTotalDeduction(tx);
    }
    monthMap[monthKey].txs.push(tx);
  });

  const monthKeys = Object.keys(monthMap).sort((a, b) => b.localeCompare(a));
  monthKeys.forEach(k => {
    monthMap[k].net = monthMap[k].income - monthMap[k].expense;
    monthMap[k].txs.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  });

  if (countBadge) {
    countBadge.textContent = `(${monthKeys.length} ay)`;
  }

  const allOpen = monthKeys.length > 0 && monthKeys.every(k => expandedMonthGroups.has(k));

  const summaryBar = `
    <div class="grouped-summary-bar">
      <span>${monthKeys.length} Ay · Toplam ${list.length} İşlem</span>
      <button type="button" class="btn-group-toggle-all" id="btnToggleAllMonths">
        ${allOpen ? 'Tümünü Daralt' : 'Tümünü Genişlet'}
      </button>
    </div>
  `;

  const cardsHtml = monthKeys.map(k => {
    const mData = monthMap[k];
    const [yStr, mStr] = k.split('-');
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10) - 1;
    const monthName = `${TURKISH_MONTHS[m]} ${y}`;
    const isActive = (y === state.currentYear && m === state.currentMonth);
    const isOpen = expandedMonthGroups.has(k);

    return `
      <div class="grouped-card ${isActive ? 'is-active-month' : ''} ${isOpen ? 'open' : ''}" data-month-key="${k}">
        <div class="grouped-head" data-toggle-month="${k}">
          <div class="grouped-head-left">
            <div class="grouped-icon" style="background: var(--bg-subtle); color: var(--text-main); font-weight: 700; font-size: 0.675rem;">
              ${TURKISH_MONTHS[m].slice(0, 3)}
            </div>
            <div class="grouped-info">
              <div class="grouped-title">
                <span>${monthName}</span>
                ${isActive ? '<span class="grouped-badge" style="color: var(--income); border: 1px solid var(--income);">Seçili Ay</span>' : ''}
                <span class="grouped-badge">${mData.txs.length} işlem</span>
              </div>
              <div class="grouped-sub">
                <span style="color: var(--income);">+${formatCurrency(mData.income)}</span>
                <span style="color: var(--text-muted);">&middot;</span>
                <span style="color: var(--expense);">-${formatCurrency(mData.expense)}</span>
              </div>
            </div>
          </div>
          <div class="grouped-head-right">
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem;">
              <span class="grouped-amt ${mData.net >= 0 ? 'income' : 'expense'} tabular">
                ${mData.net >= 0 ? '+' : ''}${formatCurrency(mData.net)}
              </span>
              ${!isActive ? `<button type="button" class="btn-jump-month btn-select-month" data-y="${y}" data-m="${m}" title="Bu ayı aktif ay olarak seç">Bu Aya Git</button>` : ''}
            </div>
            ${SVG_CHEVRON_DOWN}
          </div>
        </div>
        <div class="grouped-body">
          ${mData.txs.map(tx => {
            const isInc = tx.type === 'income';
            const cat = state.categories.find(c => c.id === tx.categoryId) || { name: 'Diğer', color: '#64748B' };
            const acc = state.accounts.find(a => a.id === tx.accountId);
            const hasIban = !isInc && tx.hasIbanCommission && Number(tx.ibanCommission || 0) > 0;
            const totalDeduction = getTxTotalDeduction(tx);
            return `
              <div class="grouped-sub-row" data-id="${tx.id}">
                <div class="grouped-sub-left">
                  <span class="grouped-sub-note" title="${tx.note || cat.name}">
                    ${tx.note || cat.name}
                    ${hasIban ? `<span class="badge-iban-fee tabular">+₺${Number(tx.ibanCommission).toFixed(2)} Kom.</span>` : ''}
                  </span>
                  <span class="grouped-sub-acc" style="color: ${cat.color};">${cat.name}</span>
                  ${acc ? `<span class="grouped-sub-acc">${acc.name}</span>` : ''}
                  <span class="grouped-sub-date">${formatDate(tx.date)}</span>
                </div>
                <div class="grouped-sub-right">
                  <span class="grouped-sub-amt ${isInc ? 'income' : 'expense'} tabular">
                    ${isInc ? '+' : '-'}${formatCurrency(totalDeduction)}
                  </span>
                  <div class="tx-zen-actions" style="opacity: 1;">
                    <button class="btn-zen-action btn-edit" data-id="${tx.id}" title="Düzenle">✎</button>
                    <button class="btn-zen-action delete btn-delete" data-id="${tx.id}" title="Sil">&times;</button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = summaryBar + cardsHtml;

  container.querySelectorAll('.grouped-head[data-toggle-month]').forEach(head => {
    head.onclick = (e) => {
      if (e.target.closest('button')) return;
      const mKey = head.getAttribute('data-toggle-month');
      if (expandedMonthGroups.has(mKey)) {
        expandedMonthGroups.delete(mKey);
      } else {
        expandedMonthGroups.add(mKey);
      }
      renderMonthGroupedTransactions(container, countBadge);
    };
  });

  container.querySelectorAll('.btn-select-month').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const targetY = parseInt(btn.getAttribute('data-y'), 10);
      const targetM = parseInt(btn.getAttribute('data-m'), 10);
      state.currentYear = targetY;
      state.currentMonth = targetM;
      renderAll();
      showToast(`${TURKISH_MONTHS[targetM]} ${targetY} seçildi.`);
    };
  });

  const toggleAllBtn = container.querySelector('#btnToggleAllMonths');
  if (toggleAllBtn) {
    toggleAllBtn.onclick = () => {
      if (allOpen) {
        expandedMonthGroups.clear();
      } else {
        monthKeys.forEach(k => expandedMonthGroups.add(k));
      }
      renderMonthGroupedTransactions(container, countBadge);
    };
  }

  bindTxActions(container);
}

function renderTransactions() {
  const container = document.getElementById('txList');
  if (!container) return;

  document.querySelectorAll('.tx-view-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === state.txViewMode);
  });

  const countBadge = document.getElementById('txCountBadge');

  if (state.txViewMode === 'category') {
    renderCategoryGroupedTransactions(container, countBadge);
  } else if (state.txViewMode === 'month') {
    renderMonthGroupedTransactions(container, countBadge);
  } else {
    renderFlatTransactions(container, countBadge);
  }
}

// ============================================================================
// INLINE QUICK ADD EXPENSE (TEK TIKLA DOĞRUDAN GİDER EKLE)
// ============================================================================

function populateQuickAddSelectors() {
  const catSel = document.getElementById('quickAddCategory');
  const accSel = document.getElementById('quickAddAccount');

  if (catSel) {
    const prevCat = catSel.value;
    catSel.innerHTML = state.categories.filter(c => c.type === 'expense').map(c => `
      <option value="${c.id}" ${c.id === prevCat ? 'selected' : ''}>${c.name}</option>
    `).join('');
  }

  if (accSel) {
    const prevAcc = accSel.value;
    accSel.innerHTML = state.accounts.map(a => `
      <option value="${a.id}" ${c_selected(a.id, prevAcc)}>${a.name}</option>
    `).join('');
  }

  function c_selected(id, prev) {
    if (prev) return id === prev ? 'selected' : '';
    return id === 'acc_bank' ? 'selected' : '';
  }
}

function updateQuickAddIbanBadge() {
  const badge = document.getElementById('quickIbanAmtBadge');
  if (badge) {
    const type = state.settings?.ibanCommissionType || 'fixed';
    const rate = Number(state.settings?.ibanCommissionAmount) || 0;
    badge.textContent = type === 'percent' ? `%${rate}` : `+₺${rate.toFixed(2)}`;
  }
}

function initInlineQuickAdd() {
  const form = document.getElementById('quickAddExpenseForm');
  const catSel = document.getElementById('quickAddCategory');
  const accSel = document.getElementById('quickAddAccount');
  const amtInp = document.getElementById('quickAddAmount');
  const noteInp = document.getElementById('quickAddNote');
  const ibanCheck = document.getElementById('quickAddIbanCommission');

  populateQuickAddSelectors();
  updateQuickAddIbanBadge();

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const amt = parseFloat(amtInp.value);
      if (!amt || amt <= 0) return;

      const today = new Date().toISOString().split('T')[0];
      const categoryId = catSel ? catSel.value : 'cat_market';
      const accountId = accSel ? accSel.value : (state.accounts[0]?.id || 'acc_bank');
      const note = noteInp ? noteInp.value.trim() : '';

      const category = state.categories.find(c => c.id === categoryId);
      const catName = category ? category.name : 'Gider';

      const isIban = Boolean(ibanCheck && ibanCheck.checked);
      const comm = isIban ? calculateIbanCommission(amt) : 0;

      state.addTransaction({
        id: 'tx_' + Date.now(),
        type: 'expense',
        amount: amt,
        hasIbanCommission: isIban,
        ibanCommission: comm,
        categoryId,
        accountId,
        date: today,
        note
      });

      amtInp.value = '';
      if (noteInp) noteInp.value = '';
      if (ibanCheck) ibanCheck.checked = false;
      renderAll();
      showToast(`${catName} eklendi: -${formatCurrency(amt + comm)}${isIban ? ` (₺${comm.toFixed(2)} IBAN komisyonu dahil)` : ''}`);
    };
  }
}

// ============================================================================
// MODALS & INPUTS
// ============================================================================

window.openModal = function(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
};

window.closeModal = function(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
};

function populateSelects() {
  const catSel = document.getElementById('txCategory');
  const accSel = document.getElementById('txAccount');
  if (catSel) {
    catSel.innerHTML = state.categories.filter(c => c.type === state.activeTxType).map(c => `
      <option value="${c.id}">${c.name}</option>
    `).join('');
  }
  if (accSel) {
    accSel.innerHTML = state.accounts.map(a => `
      <option value="${a.id}">${a.name}</option>
    `).join('');
  }
}

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.onclick = () => closeModal(btn.getAttribute('data-close-modal'));
  });

  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.onclick = (e) => { if (e.target === ov) ov.classList.remove('open'); };
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  });

  function updateNewTxIbanPreview() {
    const box = document.getElementById('txIbanCommissionBox');
    if (!box) return;
    if (state.activeTxType !== 'expense') {
      box.style.display = 'none';
      return;
    }
    box.style.display = 'block';

    const amtInp = document.getElementById('txAmount');
    const check = document.getElementById('txIbanCommissionCheck');
    const badge = document.getElementById('txIbanBadge');
    const preview = document.getElementById('txIbanTotalPreview');
    const hint = document.getElementById('txIbanHint');

    const amt = parseFloat(amtInp?.value) || 0;
    const type = state.settings?.ibanCommissionType || 'fixed';
    const rate = Number(state.settings?.ibanCommissionAmount) || 0;
    const comm = calculateIbanCommission(amt);

    if (badge) {
      badge.textContent = type === 'percent' ? `%${rate} (+₺${comm.toFixed(2)})` : `+₺${comm.toFixed(2)}`;
    }
    const isChecked = Boolean(check && check.checked);
    if (preview) {
      preview.textContent = formatCurrency(isChecked ? amt + comm : amt);
    }
    if (hint) {
      if (isChecked) {
        hint.innerHTML = `Hesaptan düşülecek toplam: <strong class="tabular" style="color: var(--expense);">${formatCurrency(amt + comm)}</strong> (${formatCurrency(amt)} + ${formatCurrency(comm)} komisyon)`;
      } else {
        hint.innerHTML = `İşaretlenirse komisyon eklenecektir (${type === 'percent' ? `%${rate}` : `+₺${comm.toFixed(2)}`})`;
      }
    }
  }

  // New Transaction
  const openNewBtn = document.getElementById('openNewTxModalBtn');
  if (openNewBtn) {
    openNewBtn.onclick = () => {
      document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
      populateSelects();
      const check = document.getElementById('txIbanCommissionCheck');
      if (check) check.checked = false;
      updateNewTxIbanPreview();
      openModal('newTxModal');
      setTimeout(() => document.getElementById('txAmount')?.focus(), 100);
    };
  }

  const amtInput = document.getElementById('txAmount');
  if (amtInput) amtInput.addEventListener('input', updateNewTxIbanPreview);

  const ibanCheckInput = document.getElementById('txIbanCommissionCheck');
  if (ibanCheckInput) ibanCheckInput.addEventListener('change', updateNewTxIbanPreview);

  const tabExp = document.getElementById('tabExpense');
  const tabInc = document.getElementById('tabIncome');
  if (tabExp) {
    tabExp.onclick = () => {
      state.activeTxType = 'expense';
      tabExp.className = 'zen-seg-btn active expense';
      tabInc.className = 'zen-seg-btn income';
      populateSelects();
      updateNewTxIbanPreview();
    };
  }
  if (tabInc) {
    tabInc.onclick = () => {
      state.activeTxType = 'income';
      tabInc.className = 'zen-seg-btn active income';
      tabExp.className = 'zen-seg-btn expense';
      populateSelects();
      updateNewTxIbanPreview();
    };
  }

  const addForm = document.getElementById('addTransactionForm');
  if (addForm) {
    addForm.onsubmit = (e) => {
      e.preventDefault();
      const amt = parseFloat(document.getElementById('txAmount').value);
      if (!amt || amt <= 0) return;

      const isIbanChecked = state.activeTxType === 'expense' && Boolean(document.getElementById('txIbanCommissionCheck')?.checked);
      const comm = isIbanChecked ? calculateIbanCommission(amt) : 0;

      state.addTransaction({
        id: 'tx_' + Date.now(),
        type: state.activeTxType,
        amount: amt,
        hasIbanCommission: isIbanChecked,
        ibanCommission: comm,
        categoryId: document.getElementById('txCategory').value,
        accountId: document.getElementById('txAccount').value,
        date: document.getElementById('txDate').value,
        note: document.getElementById('txNote').value.trim()
      });

      document.getElementById('txAmount').value = '';
      document.getElementById('txNote').value = '';
      const check = document.getElementById('txIbanCommissionCheck');
      if (check) check.checked = false;
      closeModal('newTxModal');
      renderAll();
      showToast(`Kaydedildi${isIbanChecked ? ` (₺${comm.toFixed(2)} komisyon dahil)` : ''}.`);
    };
  }

  // Budget Limits Modal
  const openBudgetBtn = document.getElementById('openBudgetLimitsModalBtn');
  if (openBudgetBtn) {
    openBudgetBtn.onclick = () => {
      const container = document.getElementById('budgetModalRows');
      if (container) {
        container.innerHTML = state.categories.filter(c => c.type === 'expense').map(cat => `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
            <span style="font-size: 0.8rem;">${cat.name}</span>
            <input
              type="number"
              class="zen-input tabular budget-inp"
              style="width: 110px; text-align: right; padding: 0.35rem 0.5rem;"
              data-cat-id="${cat.id}"
              value="${state.budgetLimits[cat.id] || 0}"
              step="100"
            />
          </div>
        `).join('');
      }
      openModal('budgetModal');
    };
  }

  const saveBudgetBtn = document.getElementById('saveBudgetLimitsBtn');
  if (saveBudgetBtn) {
    saveBudgetBtn.onclick = () => {
      document.querySelectorAll('.budget-inp').forEach(inp => {
        state.budgetLimits[inp.getAttribute('data-cat-id')] = parseFloat(inp.value) || 0;
      });
      state.save();
      closeModal('budgetModal');
      renderLimits();
      showToast('Limitler kaydedildi.');
    };
  }

  // Accounts Modal
  window.openAccountsModal = function() {
    const c = document.getElementById('accountsModalRows');
    if (c) {
      c.innerHTML = state.accounts.map(a => `
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
          <span style="font-size: 0.8rem;">${a.name}</span>
          <input
            type="number"
            class="zen-input tabular acc-inp"
            style="width: 120px; text-align: right; padding: 0.35rem 0.5rem;"
            data-acc-id="${a.id}"
            value="${a.balance}"
            step="any"
          />
        </div>
      `).join('');
    }
    openModal('accountsModal');
  };

  const saveAccBtn = document.getElementById('saveAccountsBtn');
  if (saveAccBtn) {
    saveAccBtn.onclick = () => {
      document.querySelectorAll('.acc-inp').forEach(inp => {
        const acc = state.accounts.find(a => a.id === inp.getAttribute('data-acc-id'));
        if (acc) acc.balance = parseFloat(inp.value) || 0;
      });
      state.save();
      closeModal('accountsModal');
      renderAll();
      showToast('Güncellendi.');
    };
  }

  // Birikim Modals
  const openGoalBtn = document.getElementById('openNewGoalModalBtn');
  if (openGoalBtn) {
    openGoalBtn.onclick = () => {
      document.getElementById('goalTitle').value = '';
      document.getElementById('goalTarget').value = '';
      document.getElementById('goalCurrent').value = '';
      openModal('newGoalModal');
      setTimeout(() => document.getElementById('goalTitle')?.focus(), 80);
    };
  }

  const newGoalForm = document.getElementById('newGoalForm');
  if (newGoalForm) {
    newGoalForm.onsubmit = (e) => {
      e.preventDefault();
      const title = document.getElementById('goalTitle').value.trim();
      const target = parseFloat(document.getElementById('goalTarget').value);
      const current = parseFloat(document.getElementById('goalCurrent').value) || 0;
      if (!title || !target) return;

      state.createSavingsGoal({
        id: 'goal_' + Date.now(),
        title,
        target,
        current
      });

      closeModal('newGoalModal');
      renderAll();
      showToast('Hedef oluşturuldu.');
    };
  }

  // Deposit / Withdraw Modal Logic
  let currentDepositMode = 'deposit';

  window.openDepositModal = function(goalId, title, initialMode = 'deposit') {
    currentDepositMode = initialMode;
    document.getElementById('depositGoalId').value = goalId;
    document.getElementById('depositModalTitle').textContent = initialMode === 'deposit' ? `Birikim Ekle: ${title}` : `Birikimden Çek: ${title}`;
    document.getElementById('depositAmount').value = '';

    const depBtn = document.getElementById('depTypeDeposit');
    const wthBtn = document.getElementById('depTypeWithdraw');
    const label = document.getElementById('depositLinkAccountLabel');
    const submitBtn = document.getElementById('depositSubmitBtn');
    const accSel = document.getElementById('depositAccountSelect');

    const updateModeUI = () => {
      if (currentDepositMode === 'deposit') {
        if (depBtn) depBtn.className = 'zen-seg-btn active income';
        if (wthBtn) wthBtn.className = 'zen-seg-btn expense';
        if (label) label.textContent = 'Hesap bakiyesinden düş';
        if (submitBtn) submitBtn.textContent = 'Yatır (+)';
      } else {
        if (wthBtn) wthBtn.className = 'zen-seg-btn active expense';
        if (depBtn) depBtn.className = 'zen-seg-btn income';
        if (label) label.textContent = 'Hesap bakiyesine aktar';
        if (submitBtn) submitBtn.textContent = 'Çek (-)';
      }
    };

    if (depBtn) depBtn.onclick = () => { currentDepositMode = 'deposit'; updateModeUI(); };
    if (wthBtn) wthBtn.onclick = () => { currentDepositMode = 'withdraw'; updateModeUI(); };
    updateModeUI();

    if (accSel) {
      accSel.innerHTML = state.accounts.map(a => `
        <option value="${a.id}">${a.name} (${formatCurrency(a.balance)})</option>
      `).join('');
    }

    openModal('depositModal');
    setTimeout(() => document.getElementById('depositAmount')?.focus(), 80);
  };

  const depositForm = document.getElementById('depositForm');
  if (depositForm) {
    depositForm.onsubmit = (e) => {
      e.preventDefault();
      const gid = document.getElementById('depositGoalId').value;
      const amt = parseFloat(document.getElementById('depositAmount').value);
      if (!gid || !amt || amt <= 0) return;

      const linkCheck = document.getElementById('depositLinkAccountCheck');
      const accSel = document.getElementById('depositAccountSelect');
      const selectedAccId = (linkCheck && linkCheck.checked && accSel) ? accSel.value : null;

      if (currentDepositMode === 'deposit') {
        state.addSavingsDeposit(gid, amt, selectedAccId);
        showToast(`Birikime eklendi: +${formatCurrency(amt)}`);
      } else {
        state.withdrawSavings(gid, amt, selectedAccId);
        showToast(`Birikimden çekildi: -${formatCurrency(amt)}`);
      }

      closeModal('depositModal');
      renderAll();
    };
  }

  // Data & Settings Modal
  function populateIbanSettingsUI() {
    const typeSel = document.getElementById('settingsIbanType');
    const amtInp = document.getElementById('settingsIbanAmount');
    const label = document.getElementById('settingsIbanAmountLabel');
    const currentBadge = document.getElementById('settingsIbanCurrentBadge');

    const type = state.settings?.ibanCommissionType || 'fixed';
    const amt = Number(state.settings?.ibanCommissionAmount) || 0;

    if (typeSel) typeSel.value = type;
    if (amtInp) amtInp.value = amt;
    if (label) {
      label.textContent = type === 'percent' ? 'Komisyon Oranı (%)' : 'Komisyon Tutarı (₺)';
    }
    if (currentBadge) {
      currentBadge.textContent = type === 'percent' ? `Oran: %${amt}` : `Sabit: ₺${amt.toFixed(2)}`;
    }
    updateQuickAddIbanBadge();
  }

  const typeSel = document.getElementById('settingsIbanType');
  if (typeSel) {
    typeSel.onchange = () => {
      const label = document.getElementById('settingsIbanAmountLabel');
      if (label) {
        label.textContent = typeSel.value === 'percent' ? 'Komisyon Oranı (%)' : 'Komisyon Tutarı (₺)';
      }
    };
  }

  const saveIbanBtn = document.getElementById('saveIbanSettingsBtn');
  if (saveIbanBtn) {
    saveIbanBtn.onclick = () => {
      const type = document.getElementById('settingsIbanType')?.value || 'fixed';
      const rawAmt = parseFloat(document.getElementById('settingsIbanAmount')?.value);
      const amt = isNaN(rawAmt) || rawAmt < 0 ? 0 : rawAmt;

      state.settings.ibanCommissionType = type;
      state.settings.ibanCommissionAmount = amt;
      state.save();

      populateIbanSettingsUI();
      updateQuickAddIbanBadge();
      showToast(`IBAN komisyon ayarı kaydedildi: ${type === 'percent' ? `%${amt}` : `₺${amt.toFixed(2)}`}`);
    };
  }

  const dataBtn = document.getElementById('dataManageBtn');
  if (dataBtn) {
    dataBtn.onclick = () => {
      populateIbanSettingsUI();
      openModal('dataManageModal');
    };
  }

  const exportBtn = document.getElementById('exportJsonBtn');
  if (exportBtn) {
    exportBtn.onclick = () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({
        categories: state.categories,
        accounts: state.accounts,
        budgetLimits: state.budgetLimits,
        savingsGoals: state.savingsGoals,
        transactions: state.transactions,
        settings: state.settings,
        txViewMode: state.txViewMode,
        exportedAt: new Date().toISOString()
      }));
      const a = document.createElement('a');
      a.href = dataStr;
      const todayStr = new Date().toISOString().split('T')[0];
      a.download = `butce_yedek_${todayStr}.json`;
      a.click();
      showToast('Yedek indirildi.');
    };
  }

  const importInp = document.getElementById('importJsonFileInput');
  if (importInp) {
    importInp.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target.result);
          if (Array.isArray(parsed.transactions) || Array.isArray(parsed.accounts)) {
            if (Array.isArray(parsed.transactions)) state.transactions = parsed.transactions;
            if (Array.isArray(parsed.accounts)) state.accounts = parsed.accounts;
            if (Array.isArray(parsed.categories)) state.categories = parsed.categories;
            if (parsed.budgetLimits) state.budgetLimits = parsed.budgetLimits;
            if (Array.isArray(parsed.savingsGoals)) state.savingsGoals = parsed.savingsGoals;
            if (parsed.settings && typeof parsed.settings === 'object') state.settings = parsed.settings;
            if (parsed.txViewMode) state.txViewMode = parsed.txViewMode;
            state.save();
            renderAll();
            closeModal('dataManageModal');
            showToast('Yedek başarıyla yüklendi.');
          } else {
            showToast('Geçersiz yedek formatı.');
          }
        } catch {
          showToast('Dosya okunamadı.');
        }
        e.target.value = '';
      };
      reader.readAsText(file);
    };
  }

  const demoBtn = document.getElementById('loadDemoDataBtn');
  if (demoBtn) {
    demoBtn.onclick = () => {
      state.loadDemo();
      renderAll();
      closeModal('dataManageModal');
      showToast('Yüklendi.');
    };
  }

  const resetBtn = document.getElementById('resetAllDataBtn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Tüm veriler silinsin mi?')) {
        state.resetAll();
        renderAll();
        closeModal('dataManageModal');
        showToast('Sıfırlandı.');
      }
    };
  }
}

function openEditModal(txId) {
  const tx = state.transactions.find(t => t.id === txId);
  if (!tx) return;

  const idInp = document.getElementById('editTxId');
  const amtInp = document.getElementById('editTxAmount');
  const catSel = document.getElementById('editTxCategory');
  const accSel = document.getElementById('editTxAccount');
  const dateInp = document.getElementById('editTxDate');
  const noteInp = document.getElementById('editTxNote');
  const tabExp = document.getElementById('editTabExpense');
  const tabInc = document.getElementById('editTabIncome');

  const editBox = document.getElementById('editTxIbanCommissionBox');
  const editCheck = document.getElementById('editTxIbanCommissionCheck');
  const editBadge = document.getElementById('editTxIbanBadge');
  const editHint = document.getElementById('editTxIbanHint');
  const editPreview = document.getElementById('editTxIbanTotalPreview');

  idInp.value = tx.id;
  amtInp.value = tx.amount;
  dateInp.value = tx.date;
  noteInp.value = tx.note || '';

  if (editCheck) {
    editCheck.checked = Boolean(tx.hasIbanCommission);
  }

  let curType = tx.type;

  const updateEditIbanPreview = () => {
    if (!editBox) return;
    if (curType !== 'expense') {
      editBox.style.display = 'none';
      return;
    }
    editBox.style.display = 'block';

    const amt = parseFloat(amtInp?.value) || 0;
    const type = state.settings?.ibanCommissionType || 'fixed';
    const rate = Number(state.settings?.ibanCommissionAmount) || 0;
    const comm = calculateIbanCommission(amt);

    if (editBadge) {
      editBadge.textContent = type === 'percent' ? `%${rate} (+₺${comm.toFixed(2)})` : `+₺${comm.toFixed(2)}`;
    }
    const isChecked = Boolean(editCheck && editCheck.checked);
    if (editPreview) {
      editPreview.textContent = formatCurrency(isChecked ? amt + comm : amt);
    }
    if (editHint) {
      if (isChecked) {
        editHint.innerHTML = `Hesaptan düşülecek toplam: <strong class="tabular" style="color: var(--expense);">${formatCurrency(amt + comm)}</strong> (${formatCurrency(amt)} + ${formatCurrency(comm)} komisyon)`;
      } else {
        editHint.innerHTML = `İşaretlenirse komisyon eklenecektir (${type === 'percent' ? `%${rate}` : `+₺${comm.toFixed(2)}`})`;
      }
    }
  };

  const update = (t) => {
    curType = t;
    if (t === 'expense') {
      tabExp.className = 'zen-seg-btn active expense';
      tabInc.className = 'zen-seg-btn income';
    } else {
      tabInc.className = 'zen-seg-btn active income';
      tabExp.className = 'zen-seg-btn expense';
    }
    catSel.innerHTML = state.categories.filter(c => c.type === t).map(c => `
      <option value="${c.id}" ${c.id === tx.categoryId ? 'selected' : ''}>${c.name}</option>
    `).join('');
    updateEditIbanPreview();
  };

  tabExp.onclick = () => update('expense');
  tabInc.onclick = () => update('income');

  amtInp.oninput = updateEditIbanPreview;
  if (editCheck) editCheck.onchange = updateEditIbanPreview;

  update(tx.type);

  accSel.innerHTML = state.accounts.map(a => `
    <option value="${a.id}" ${a.id === tx.accountId ? 'selected' : ''}>${a.name}</option>
  `).join('');

  document.getElementById('editTxForm').onsubmit = (e) => {
    e.preventDefault();
    const isIbanChecked = curType === 'expense' && Boolean(editCheck && editCheck.checked);
    const amt = parseFloat(amtInp.value);
    const comm = isIbanChecked ? calculateIbanCommission(amt) : 0;

    state.updateTransaction({
      id: tx.id,
      type: curType,
      amount: amt,
      hasIbanCommission: isIbanChecked,
      ibanCommission: comm,
      categoryId: catSel.value,
      accountId: accSel.value,
      date: dateInp.value,
      note: noteInp.value.trim()
    });
    closeModal('editTxModal');
    renderAll();
    showToast('Güncellendi.');
  };

  openModal('editTxModal');
}

function initNavigationAndTabs() {
  const tabD = document.getElementById('tabDonut');
  const tabT = document.getElementById('tabTrend');
  const tabL = document.getElementById('tabLimits');
  const tabS = document.getElementById('tabSavings');
  const vD = document.getElementById('viewDonut');
  const vT = document.getElementById('viewTrend');
  const vL = document.getElementById('viewLimits');
  const vS = document.getElementById('viewSavings');

  // Mobile Bottom Navigation Bar wiring
  const mobOverview = document.getElementById('mobileNavOverviewBtn');
  const mobQuickAdd = document.getElementById('mobileNavQuickAddBtn');
  const mobNewTx = document.getElementById('mobileNavNewTxBtn');
  const mobAccounts = document.getElementById('mobileNavAccountsBtn');
  const mobSettings = document.getElementById('mobileNavSettingsBtn');

  if (mobOverview) {
    mobOverview.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  if (mobQuickAdd) {
    mobQuickAdd.onclick = () => {
      const form = document.getElementById('quickAddExpenseForm');
      const amtInp = document.getElementById('quickAddAmount');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => amtInp?.focus(), 250);
    };
  }

  if (mobNewTx) {
    mobNewTx.onclick = () => {
      const openNewBtn = document.getElementById('openNewTxModalBtn');
      if (openNewBtn) openNewBtn.click();
    };
  }

  if (mobAccounts) {
    mobAccounts.onclick = () => {
      if (window.openAccountsModal) window.openAccountsModal();
    };
  }

  if (mobSettings) {
    mobSettings.onclick = () => {
      const dataBtn = document.getElementById('dataManageBtn');
      if (dataBtn) dataBtn.click();
    };
  }

  const tabs = [
    { btn: tabD, view: vD, render: renderDonut },
    { btn: tabT, view: vT, render: renderTrend },
    { btn: tabL, view: vL, render: renderLimits },
    { btn: tabS, view: vS, render: renderSavings }
  ];

  tabs.forEach(item => {
    if (item.btn) {
      item.btn.onclick = () => {
        tabs.forEach(t => {
          if (t.btn) t.btn.className = 'zen-tab-btn';
          if (t.view) t.view.style.display = 'none';
        });
        item.btn.className = 'zen-tab-btn active';
        if (item.view) {
          item.view.style.display = item.view === vD ? 'grid' : 'block';
        }
        item.render();
      };
    }
  });

  document.querySelectorAll('.filter-type-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.filter-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterType = btn.getAttribute('data-type');
      renderTransactions();
    };
  });

  document.querySelectorAll('.tx-view-mode-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tx-view-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.txViewMode = btn.getAttribute('data-mode') || 'list';
      state.save();
      renderTransactions();
    };
  });

  const search = document.getElementById('txSearchInput');
  if (search) {
    search.oninput = (e) => {
      state.searchQuery = e.target.value;
      renderTransactions();
    };
  }

  const prev = document.getElementById('prevMonthBtn');
  const next = document.getElementById('nextMonthBtn');
  if (prev) {
    prev.onclick = () => {
      state.currentMonth--;
      if (state.currentMonth < 0) {
        state.currentMonth = 11;
        state.currentYear--;
      }
      renderAll();
    };
  }
  if (next) {
    next.onclick = () => {
      state.currentMonth++;
      if (state.currentMonth > 11) {
        state.currentMonth = 0;
        state.currentYear++;
      }
      renderAll();
    };
  }
}

function initTheme() {
  const btn = document.getElementById('themeToggleBtn');
  const sun = document.getElementById('themeIconSun');
  const moon = document.getElementById('themeIconMoon');

  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  apply(saved);

  if (btn) {
    btn.onclick = () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      apply(next);
      localStorage.setItem(THEME_KEY, next);
    };
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      if (sun) sun.style.display = 'block';
      if (moon) moon.style.display = 'none';
    } else {
      if (sun) sun.style.display = 'none';
      if (moon) moon.style.display = 'block';
    }
  }
}

function initPWAInstall() {
  let deferredPrompt = null;
  const headerBtn = document.getElementById('pwaInstallHeaderBtn');
  const banner = document.getElementById('pwaInstallBanner');
  const bannerInstallBtn = document.getElementById('bannerInstallBtn');
  const bannerCloseBtn = document.getElementById('bannerCloseBtn');

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       (window.navigator.standalone === true);

  if (isStandalone) {
    if (headerBtn) headerBtn.style.display = 'none';
    if (banner) banner.style.display = 'none';
    return;
  }

  const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (headerBtn) headerBtn.style.display = 'inline-flex';
    if (banner && !sessionStorage.getItem('pwa_banner_dismissed')) {
      banner.style.display = 'flex';
    }
  });

  if (isIOS) {
    if (headerBtn) headerBtn.style.display = 'inline-flex';
    if (banner && !sessionStorage.getItem('pwa_banner_dismissed')) {
      banner.style.display = 'flex';
    }
  }

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          if (headerBtn) headerBtn.style.display = 'none';
          if (banner) banner.style.display = 'none';
        }
        deferredPrompt = null;
      });
    } else {
      openModal('iosInstallModal');
    }
  };

  if (headerBtn) headerBtn.onclick = handleInstallClick;
  if (bannerInstallBtn) bannerInstallBtn.onclick = handleInstallClick;

  if (bannerCloseBtn) {
    bannerCloseBtn.onclick = () => {
      if (banner) banner.style.display = 'none';
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    };
  }

  window.addEventListener('appinstalled', () => {
    if (headerBtn) headerBtn.style.display = 'none';
    if (banner) banner.style.display = 'none';
    deferredPrompt = null;
    showToast('Uygulama ana ekrana eklendi! 🎉');
  });
}

function renderAll() {
  populateQuickAddSelectors();
  updateQuickAddIbanBadge();
  renderOverview();
  renderDonut();
  renderTrend();
  renderLimits();
  renderSavings();
  renderTransactions();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigationAndTabs();
  initInlineQuickAdd();
  initModals();
  initPWAInstall();
  renderAll();
});
