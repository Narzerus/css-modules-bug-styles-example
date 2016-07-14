(function() {
  Package.info = {
    name: 'css-modules-repro-styles',
    version: '0.0.1',
    summary: 'Test styles repo.',
    git: '',
    documentation: 'Readme.md'
  };

  Package.describe(Package.info);

  Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use('francocatena:compass@0.6.0');
    api.use('nathantreid:css-modules@2.1.0');
    api.use('ecmascript');
    api.mainModule('styles.js', 'client');
  });
})();
