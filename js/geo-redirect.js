// Geo-based language redirect for Spanish-speaking countries
// Uses ipapi.co (free tier: 1,000 requests/day) to detect country
// Stores preference in localStorage to avoid repeat API calls
(function () {
  // Spanish-speaking country codes (ISO 3166-1 alpha-2)
  var ES_COUNTRIES = [
    'MX','AR','CO','PE','VE','CL','EC','GT','CU','BO',
    'DO','HN','PY','SV','NI','CR','PA','UY','PR','GQ','ES'
  ];

  // English-to-Spanish path mapping (URLs differ between languages)
  var PATH_MAP = {
    '/': '/es/',
    '/company/': '/es/nosotros/',
    '/case-studies/': '/es/proyectos/',
    '/contact/': '/es/contacto/'
  };

  // Don't run on /es/ pages (they handle their own nav)
  if (window.location.pathname.indexOf('/es/') === 0) return;

  // If user manually chose a language, respect that
  var manualChoice = localStorage.getItem('sa-lang-manual');
  if (manualChoice === 'en') return;
  if (manualChoice === 'es') {
    redirect();
    return;
  }

  // Check cached geo result
  var cached = localStorage.getItem('sa-geo-country');
  if (cached) {
    if (ES_COUNTRIES.indexOf(cached) !== -1) redirect();
    return;
  }

  // Fetch country from IP geolocation
  fetch('https://ipapi.co/country/')
    .then(function (r) { return r.text(); })
    .then(function (country) {
      country = country.trim().toUpperCase();
      if (country.length === 2) {
        localStorage.setItem('sa-geo-country', country);
        if (ES_COUNTRIES.indexOf(country) !== -1) redirect();
      }
    })
    .catch(function () { /* fail silently — default to English */ });

  function redirect() {
    var path = window.location.pathname;
    // Use mapped path if available, otherwise prefix with /es
    var esPath = PATH_MAP[path] || ('/es' + path);
    window.location.replace(esPath);
  }
})();
