const AUTH_SESSION_KEY = 'furni_session';
const USERS_DB_KEY = 'furni_users';

const auth = {
  // Get all registered users (simulated DB)
  getUsers() {
    const json = localStorage.getItem(USERS_DB_KEY);
    return json ? JSON.parse(json) : [];
  },

  // Get current logged-in user
  getCurrentUser() {
    const json = localStorage.getItem(AUTH_SESSION_KEY);
    return json ? JSON.parse(json) : null;
  },

  // Register a new user
  register(name, email, password) {
    const users = this.getUsers();

    // Check if email already exists
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In a real app, hash this!
      orders: []
    };

    users.push(newUser);
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

    // Auto-login after register
    this.login(email, password);

    return { success: true, message: 'Registration successful' };
  },

  // Login user
  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Store session (exclude password)
      const sessionUser = { ...user };
      delete sessionUser.password;
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionUser));
      this.updateUI();
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid email or password' };
  },

  // Logout user
  logout() {
    localStorage.removeItem(AUTH_SESSION_KEY);
    this.updateUI();
    // Redirect to login or home
    window.location.href = 'login.html';
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  // Protect routes
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
    }
  },

  // Update Header UI (User Icon)
  updateUI() {
    const user = this.getCurrentUser();
    const accountLinks = document.querySelectorAll('a[aria-label="Account"]');

    accountLinks.forEach(link => {
      if (user) {
        link.href = 'account.html';
        link.title = `Account (${user.name})`;
        // Optional: Add a logged-in indicator/dot
        link.classList.add('text-primary');
      } else {
        link.href = 'login.html';
        link.title = 'Login / Register';
        link.classList.remove('text-primary');
      }
    });
  },

  init() {
    this.updateUI();
  }
};

// Initialize auth when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  auth.init();
});
