Package.describe({
  name: 'delgermurun:mediaelementjs',
  summary: 'HTML5 <audio> or <video> player with Flash and Silverlight shims that mimics the HTML5 MediaElement API, enabling a consistent UI in all browsers.',
  version: '2.16.1',
  git: 'git@github.com:delgermurun/meteor-mediaelement.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles('files/background.png', 'client');

  api.addFiles('files/bigplay.fw.png', 'client');
  api.addFiles('files/bigplay.png', 'client');
  api.addFiles('files/bigplay.svg', 'client');

  api.addFiles('files/controls.fw.png', 'client');
  api.addFiles('files/controls.png', 'client');
  api.addFiles('files/controls.svg', 'client');
  api.addFiles('files/controls-ted.png', 'client');
  api.addFiles('files/controls-wmp.png', 'client');
  api.addFiles('files/controls-wmp-bg.png', 'client');

  api.addFiles('files/flashmediaelement.swf', 'client');
  api.addFiles('files/flashmediaelement-cdn.swf', 'client');

  api.addFiles('files/loading.gif', 'client');

  api.addFiles('files/silverlightmediaelement.xap', 'client');
  api.addFiles('files/skipback.png', 'client');

  api.addFiles('files/mediaelement-and-player.js', 'client');
  api.addFiles('files/mediaelementplayer.css', 'client');
  api.addFiles('files/mejs-skins.css', 'client');
});
