// ============================================
// 线条小狗IP主题网站 - 交互逻辑 (app.js)
// 功能：音频控制、表单验证、倒计时、工具函数
// ============================================

// ============================================
// 1. 音频控制模块
// ============================================
const AudioController = {
  bgm: null,
  speaker: null,
  isPlaying: false,

  init() {
    this.bgm = document.getElementById("bgm");
    this.speaker = document.querySelector(".audio-box img");

    // 只在首页初始化音频（login/register页面没有bgm元素）
    if (!this.bgm || !this.speaker) return;

    // 绑定点击事件
    const audioBox = document.querySelector(".audio-box");
    if (audioBox) {
      audioBox.addEventListener("click", () => this.toggle());
    }

    // 尝试自动播放（可能被浏览器阻止）
    this.tryAutoPlay();
  },

  toggle() {
    if (!this.bgm) return;

    if (this.isPlaying) {
      this.bgm.pause();
      this.speaker.src = "images/speaker-off.png";
      this.speaker.alt = "喇叭-静音";
      this.isPlaying = false;
      console.log("[音频] 已暂停");
    } else {
      this.bgm.play().then(() => {
        this.speaker.src = "images/speaker-on.png";
        this.speaker.alt = "喇叭-播放中";
        this.isPlaying = true;
        console.log("[音频] 开始播放");
      }).catch(err => {
        console.warn("[音频] 自动播放被浏览器阻止，请手动点击播放");
        alert("请点击页面任意位置后再点击喇叭图标播放背景音乐");
      });
    }
  },

  tryAutoPlay() {
    // 某些浏览器允许静音自动播放
    if (this.bgm) {
      this.bgm.volume = 0.5;
      this.bgm.play().then(() => {
        this.isPlaying = true;
        if (this.speaker) this.speaker.src = "images/speaker-on.png";
      }).catch(() => {
        // 自动播放失败，保持静音状态
        console.log("[音频] 自动播放被阻止，等待用户交互");
      });
    }
  }
};

// ============================================
// 2. 表单验证模块
// ============================================
const FormValidator = {
  // 验证规则
  rules: {
    account: {
      required: true,
      minLength: 6,
      maxLength: 16,
      pattern: /^[a-zA-Z0-9_]+$/,
      messages: {
        required: "账号不能为空",
        minLength: "账号长度不能少于6位",
        maxLength: "账号长度不能超过16位",
        pattern: "账号只能包含字母、数字和下划线"
      }
    },
    password: {
      required: true,
      minLength: 6,
      maxLength: 20,
      messages: {
        required: "密码不能为空",
        minLength: "密码长度不能少于6位",
        maxLength: "密码长度不能超过20位"
      }
    },
    password2: {
      required: true,
      match: "reg-pwd",
      messages: {
        required: "请再次输入密码",
        match: "两次输入的密码不一致"
      }
    }
  },

  // 验证单个字段
  validateField(fieldId, ruleName) {
    const field = document.getElementById(fieldId);
    if (!field) return { valid: true };

    const value = field.value.trim();
    const rule = this.rules[ruleName];
    const hint = field.parentElement.querySelector('.input-hint') || 
                 field.nextElementSibling;

    // 必填验证
    if (rule.required && value === "") {
      this.showError(field, hint, rule.messages.required);
      return { valid: false, message: rule.messages.required };
    }

    // 最小长度
    if (rule.minLength && value.length < rule.minLength) {
      this.showError(field, hint, rule.messages.minLength);
      return { valid: false, message: rule.messages.minLength };
    }

    // 最大长度
    if (rule.maxLength && value.length > rule.maxLength) {
      this.showError(field, hint, rule.messages.maxLength);
      return { valid: false, message: rule.messages.maxLength };
    }

    // 格式验证
    if (rule.pattern && !rule.pattern.test(value)) {
      this.showError(field, hint, rule.messages.pattern);
      return { valid: false, message: rule.messages.pattern };
    }

    // 密码匹配验证
    if (rule.match) {
      const matchField = document.getElementById(rule.match);
      if (matchField && value !== matchField.value.trim()) {
        this.showError(field, hint, rule.messages.match);
        return { valid: false, message: rule.messages.match };
      }
    }

    // 验证通过
    this.showSuccess(field, hint);
    return { valid: true };
  },

  showError(field, hint, message) {
    field.classList.remove('success');
    field.classList.add('error');
    if (hint) {
      hint.textContent = message;
      hint.classList.add('show');
    }
  },

  showSuccess(field, hint) {
    field.classList.remove('error');
    field.classList.add('success');
    if (hint) {
      hint.classList.remove('show');
    }
  },

  // 密码强度检测
  checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
  },

  updateStrengthBar(password) {
    const bar = document.querySelector('.strength-bar-fill');
    if (!bar) return;

    const strength = this.checkPasswordStrength(password);
    bar.className = 'strength-bar-fill ' + strength;
  }
};

// ============================================
// 3. 登录验证函数
// ============================================
function loginCheck() {
  const accValid = FormValidator.validateField('login-acc', 'account');
  const pwdValid = FormValidator.validateField('login-pwd', 'password');

  if (!accValid.valid || !pwdValid.valid) {
    return false;
  }

  const acc = document.getElementById("login-acc").value.trim();
  const pwd = document.getElementById("login-pwd").value.trim();

  // 从localStorage读取已注册用户
  const users = JSON.parse(localStorage.getItem('ipUsers') || '[]');

  // 内置管理员账号（演示用）
  const adminUser = { account: 'admin123', password: '123456' };

  // 验证账号密码
  let loginSuccess = false;
  
  // 先检查管理员
  if (acc === adminUser.account && pwd === adminUser.password) {
    loginSuccess = true;
  }
  
  // 再检查已注册用户
  const foundUser = users.find(u => u.account === acc && u.password === pwd);
  if (foundUser) {
    loginSuccess = true;
  }

  if (loginSuccess) {
    // 保存登录状态
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', acc);
    sessionStorage.setItem('loginTime', new Date().toISOString());

    alert("🎉 登录成功！欢迎回来，" + acc);
    location.href = "index.html";
    return true;
  } else {
    alert("❌ 账号或密码错误！\n演示账号：admin / 123456\n或先注册一个新账号~");
    return false;
  }
}

// ============================================
// 4. 注册验证函数
// ============================================
function regCheck() {
  const accValid = FormValidator.validateField('reg-acc', 'account');
  const pwdValid = FormValidator.validateField('reg-pwd', 'password');
  const pwd2Valid = FormValidator.validateField('reg-pwd2', 'password2');

  if (!accValid.valid || !pwdValid.valid || !pwd2Valid.valid) {
    return false;
  }

  const acc = document.getElementById("reg-acc").value.trim();
  const pwd = document.getElementById("reg-pwd").value.trim();

  // 模拟注册成功（实际应提交到后端）
  // 保存到localStorage模拟数据库
  const users = JSON.parse(localStorage.getItem('ipUsers') || '[]');

  // 检查账号是否已存在
  if (users.find(u => u.account === acc)) {
    alert("❌ 该账号已被注册！");
    return false;
  }

  users.push({
    account: acc,
    password: pwd,  // 实际应加密存储
    registerTime: new Date().toISOString()
  });
  localStorage.setItem('ipUsers', JSON.stringify(users));

  alert("🎉 注册成功！请使用新账号登录");
  location.href = "login.html";
  return true;
}

// ============================================
// 5. 活动倒计时模块
// ============================================
const CountdownTimer = {
  timer: null,
  targetDate: null,

  init(eventDateStr) {
    if (!eventDateStr) {
      // 默认3天后
      this.targetDate = new Date();
      this.targetDate.setDate(this.targetDate.getDate() + 3);
    } else {
      this.targetDate = new Date(eventDateStr);
    }

    this.update();
    this.timer = setInterval(() => this.update(), 1000);
  },

  update() {
    const now = new Date();
    const diff = this.targetDate - now;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');
    const statusEl = document.getElementById('cd-status');

    if (!daysEl) return; // 元素不存在则退出

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      if (statusEl) statusEl.textContent = "🎉 活动正在进行中！";
      clearInterval(this.timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');

    if (statusEl) {
      statusEl.textContent = `距离活动开始还有 ${days} 天`;
    }
  },

  destroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};

// ============================================
// 6. 移动端菜单控制
// ============================================
const MobileMenu = {
  init() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // 切换汉堡图标动画
      toggle.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('.nav-a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggle.classList.remove('open');
      });
    });
  }
};

// ============================================
// 7. 登录状态管理
// ============================================
const AuthManager = {
  checkLogin() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const username = sessionStorage.getItem('username');

    if (isLoggedIn && username) {
      // 更新导航栏显示用户名
      const loginLink = document.querySelector('a[href="login.html"]');
      if (loginLink) {
        loginLink.textContent = `👤 ${username}`;
        loginLink.href = '#';
        loginLink.onclick = (e) => {
          e.preventDefault();
          if (confirm('确定要退出登录吗？')) {
            this.logout();
          }
        };
      }
    }
  },

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('loginTime');
    alert('已退出登录');
    location.reload();
  }
};

// ============================================
// 8. 图片错误处理
// ============================================
function handleImageError(img) {
  img.onerror = function() {
    // 使用渐变背景代替失败的图片
    this.style.display = 'none';
    const parent = this.parentElement;
    if (parent) {
      parent.style.background = 'linear-gradient(135deg, var(--primary-light), var(--primary))';
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      parent.innerHTML = '<span style="font-size:40px;opacity:0.5">🖼️</span>';
    }
  };
}

// ============================================
// 9. 鼠标爪印特效
// ============================================
const PawPrintEffect = {
  lastTime: 0,
  interval: 120, // 每120ms产生一个爪印

  init() {
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - this.lastTime < this.interval) return;
      this.lastTime = now;

      const paw = document.createElement('div');
      paw.className = 'paw-print';
      paw.textContent = '🐾';
      paw.style.left = (e.clientX - 10) + 'px';
      paw.style.top = (e.clientY - 10) + 'px';
      paw.style.setProperty('--paw-rotate', (Math.random() * 60 - 30) + 'deg');
      document.body.appendChild(paw);

      // 动画结束后自动移除
      setTimeout(() => {
        if (paw.parentNode) paw.parentNode.removeChild(paw);
      }, 1000);
    });
  }
};

// ============================================
// 10. 页面加载完成后初始化
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  console.log("🐕 线条小狗IP乐园 已加载");

  // 初始化音频控制
  AudioController.init();

  // 初始化移动端菜单
  MobileMenu.init();

  // 检查登录状态
  AuthManager.checkLogin();

  // 初始化爪印特效
  PawPrintEffect.init();

  // 为所有图片绑定错误处理
  document.querySelectorAll('img').forEach(handleImageError);

  // 绑定实时输入验证（登录页）
  const loginAcc = document.getElementById('login-acc');
  const loginPwd = document.getElementById('login-pwd');

  if (loginAcc) {
    loginAcc.addEventListener('blur', () => {
      FormValidator.validateField('login-acc', 'account');
    });
  }
  if (loginPwd) {
    loginPwd.addEventListener('blur', () => {
      FormValidator.validateField('login-pwd', 'password');
    });
  }

  // 绑定实时输入验证（注册页）
  const regAcc = document.getElementById('reg-acc');
  const regPwd = document.getElementById('reg-pwd');
  const regPwd2 = document.getElementById('reg-pwd2');

  if (regAcc) {
    regAcc.addEventListener('blur', () => {
      FormValidator.validateField('reg-acc', 'account');
    });
  }
  if (regPwd) {
    regPwd.addEventListener('input', () => {
      FormValidator.updateStrengthBar(regPwd.value);
      FormValidator.validateField('reg-pwd', 'password');
    });
  }
  if (regPwd2) {
    regPwd2.addEventListener('blur', () => {
      FormValidator.validateField('reg-pwd2', 'password2');
    });
  }

  // 回车键提交表单
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const form = input.closest('.login-card');
        if (form) {
          const btn = form.querySelector('.btn');
          if (btn) btn.click();
        }
      }
    });
  });
});

// 页面卸载时清理定时器
window.addEventListener('beforeunload', () => {
  CountdownTimer.destroy();
});