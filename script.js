  <script>
  window['_clientcues_host'] = 'https://www.clientcues.com';
  window['_clientcues_script'] = "/extensions/clientcues-sr.js";
  window['_clientcues_namespace'] = 'Cue';
  window['_clientcues_org'] = 'o01-00000C19';
  (function(w, d, ns, s, src, orgId) {
      if (!w[ns]) {
          var _c = w[ns] = function() {
              _c.q ? _c.q.push(arguments) : _c.q = [arguments];
          };
          _c.q = [];
          _c.orgId = orgId; // Save organization ID within the namespace
          var el = d.createElement(s),
          m = d.getElementsByTagName(s)[0];
          el.async = 1;
          el.src = w['_clientcues_host'] + src;
          m.parentNode.insertBefore(el, m);
      }
  })(window, document, window._clientcues_namespace, 'script', window['_clientcues_script'], window['_clientcues_org']);
  </script>
