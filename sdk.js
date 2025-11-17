// Yandex Games SDK Stub for Local Development
// This file replaces the real SDK when running locally to prevent "No parent to post message" errors

(function() {
  'use strict';

  // Detect if running locally
  function isLocalhost() {
    return true; // force stub mode
}

  // If not localhost, load the real SDK
  if (!isLocalhost()) {
    console.log('[SDK] Loading production Yandex SDK...');
    const script = document.createElement('script');
    script.src = 'sdk.prod.js';
    script.async = false;
    document.head.appendChild(script);
    return;
  }

  // Local mode: Create comprehensive SDK stub
  console.log('%c[SDK Stub] Running in local mode - Yandex SDK mocked', 'color: #4CAF50; font-weight: bold; background: #1a1a1a; padding: 4px 8px;');

  // Stub implementation with all methods Unity might call
  window.YaGames = {
    init: function(options) {
      console.log('[SDK Stub] YaGames.init() called');
      return Promise.resolve({
        // Environment
        environment: {
          i18n: { lang: 'en', tld: 'com' },
          app: { id: 'local-dev' },
          browser: { lang: 'en' },
          payload: ''
        },

        // Features
        features: {
          LoadingAPI: {
            ready: function() {
              console.log('[SDK Stub] LoadingAPI.ready() called');
            }
          },
          GamesAPI: {
            getAllGames: function() {
              return Promise.resolve({ games: [], developerURL: '' });
            }
          }
        },

        // Player
        getPlayer: function(options) {
          console.log('[SDK Stub] getPlayer() called');
          return Promise.resolve({
            getMode: function() { return 'lite'; },
            getName: function() { return 'LocalPlayer'; },
            getPhoto: function(size) { return ''; },
            getUniqueID: function() { return 'local_' + Date.now(); },
            setData: function(data, flush) { return Promise.resolve(); },
            getData: function(keys) { return Promise.resolve({}); },
            setStats: function(stats) { return Promise.resolve(); },
            getStats: function(keys) { return Promise.resolve({}); },
            incrementStats: function(increments) { return Promise.resolve({}); }
          });
        },

        // Payments
        getPayments: function(options) {
          console.log('[SDK Stub] getPayments() called');
          return Promise.resolve({
            getCatalog: function() { return Promise.resolve([]); },
            getPurchases: function() { return Promise.resolve([]); },
            purchase: function(options) { return Promise.resolve({ purchaseToken: 'stub_token' }); },
            consumePurchase: function(purchaseToken) { return Promise.resolve(); }
          });
        },

        // Ads
        adv: {
          showFullscreenAdv: function(options) {
            console.log('[SDK Stub] showFullscreenAdv() called');
            if (options && options.callbacks) {
              setTimeout(() => {
                if (options.callbacks.onClose) options.callbacks.onClose(false);
              }, 100);
            }
          },
          showRewardedVideo: function(options) {
            console.log('[SDK Stub] showRewardedVideo() called');
            if (options && options.callbacks) {
              setTimeout(() => {
                if (options.callbacks.onRewarded) options.callbacks.onRewarded();
                if (options.callbacks.onClose) options.callbacks.onClose(true);
              }, 100);
            }
          }
        },

        // Auth
        auth: {
          openAuthDialog: function() {
            console.log('[SDK Stub] openAuthDialog() called');
            return Promise.resolve();
          }
        },

        // Leaderboards
        leaderboards: {
          getDescription: function(leaderboardName) {
            return Promise.resolve({
              appID: 'local-dev',
              default: true,
              description: { invert_sort_order: false, score_format: { options: { decimal_offset: 0 } }, type: 'numeric' },
              name: leaderboardName,
              title: { en: leaderboardName }
            });
          },
          setScore: function(leaderboardName, score, extraData) {
            console.log('[SDK Stub] setScore() called:', leaderboardName, score);
            return Promise.resolve();
          },
          getEntries: function(leaderboardName, options) {
            console.log('[SDK Stub] getEntries() called:', leaderboardName);
            return Promise.resolve({
              leaderboard: { name: leaderboardName },
              ranges: [],
              userRank: 0,
              entries: []
            });
          }
        },

        // Feedback
        feedback: {
          canReview: function() {
            return Promise.resolve({ value: false, reason: 'NO_AUTH' });
          },
          requestReview: function() {
            return Promise.resolve({ feedbackSent: false });
          }
        },

        // Shortcut
        shortcut: {
          canShowPrompt: function() {
            return Promise.resolve({ canShow: false });
          },
          showPrompt: function() {
            return Promise.resolve({ outcome: 'rejected' });
          }
        },

        // Device Info
        deviceInfo: {
          type: 'desktop',
          isDesktop: function() { return true; },
          isMobile: function() { return false; },
          isTablet: function() { return false; },
          isTV: function() { return false; }
        },

        // Clipboard (stub)
        clipboard: {
          writeText: function(text) {
            console.log('[SDK Stub] clipboard.writeText() called');
            return Promise.resolve();
          }
        },

        // Server Time
        serverTime: function() {
          return Date.now();
        },

        // Event handlers
        on: function(event, callback) {
          console.log('[SDK Stub] on() event registered:', event);
        },

        off: function(event, callback) {
          console.log('[SDK Stub] off() event unregistered:', event);
        },

        // Screen (fullscreen control)
        screen: {
          fullscreen: {
            request: function() {
              console.log('[SDK Stub] screen.fullscreen.request() called');
              return Promise.resolve();
            },
            exit: function() {
              console.log('[SDK Stub] screen.fullscreen.exit() called');
              return Promise.resolve();
            }
          }
        },

        // Safe Storage
        safeStorage: {
          getItem: function(key) {
            console.log('[SDK Stub] safeStorage.getItem() called:', key);
            try {
              const value = localStorage.getItem('yg_safeStorage_' + key);
              return Promise.resolve(value);
            } catch (e) {
              console.error('[SDK Stub] safeStorage.getItem error:', e);
              return Promise.resolve(null);
            }
          },
          setItem: function(key, value) {
            console.log('[SDK Stub] safeStorage.setItem() called:', key, 'value length:', value ? value.length : 0);
            try {
              localStorage.setItem('yg_safeStorage_' + key, value);
              return Promise.resolve();
            } catch (e) {
              console.error('[SDK Stub] safeStorage.setItem error:', e);
              return Promise.resolve();
            }
          },
          removeItem: function(key) {
            console.log('[SDK Stub] safeStorage.removeItem() called:', key);
            try {
              localStorage.removeItem('yg_safeStorage_' + key);
              return Promise.resolve();
            } catch (e) {
              console.error('[SDK Stub] safeStorage.removeItem error:', e);
              return Promise.resolve();
            }
          }
        },

        // Player Account (cloud save)
        playerAccount: {
          getCloudSaveData: function() {
            console.log('[SDK Stub] playerAccount.getCloudSaveData() called');
            try {
              const savedData = localStorage.getItem('yg_cloudSaveData');
              if (savedData) {
                const parsed = JSON.parse(savedData);
                console.log('[SDK Stub] Loaded cloud save data:', parsed);
                return Promise.resolve({ data: parsed });
              }
            } catch (e) {
              console.error('[SDK Stub] Error loading cloud save:', e);
            }
            return Promise.resolve({ data: {} });
          },
          setCloudSaveData: function(data) {
            console.log('[SDK Stub] playerAccount.setCloudSaveData() called with data:', data);
            try {
              localStorage.setItem('yg_cloudSaveData', JSON.stringify(data));
              console.log('[SDK Stub] Cloud save data saved successfully');
              return Promise.resolve();
            } catch (e) {
              console.error('[SDK Stub] Error saving cloud save:', e);
              return Promise.resolve();
            }
          }
        },

        // Remote Config
        getFlags: function(params) {
          console.log('[SDK Stub] getFlags() called');
          return Promise.resolve({});
        }
      });
    }
  };

  // Prevent console.error interception by overriding after a delay
  setTimeout(function() {
    // Ensure console methods aren't hijacked
    if (window.console && window.console.error) {
      const originalError = Function.prototype.bind.call(console.error, console);
      const originalWarn = Function.prototype.bind.call(console.warn, console);

      // Keep originals available
      window._originalConsole = {
        error: originalError,
        warn: originalWarn
      };
    }
  }, 0);

  console.log('[SDK Stub] Initialization complete');
})();