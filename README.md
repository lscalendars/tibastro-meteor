# Tibastro-Meteor

A Meteor.js app to display [tibastro](https://github.com/eroux/tibastro) generated calendars.

**Live site :** https://tibastro.temp.projets2coeur.fr/

## Deployment

### Web (server + web client)

Just run `mup deploy`.

### Android

#### Testing

```
meteor build .build --debug --server https://tibastro.temp.projets2coeur.fr
scp .build/android/unaligned.apk aquaray:/mnt/data_web/projets2coeur/current/public/tibastro.apk
```

Download `http://projets2coeur.fr/tibastro.apk` on the android device, install it, run it, enjoy !

#### Release

TODO

### iOS

#### Testing

TODO

#### Release

TODO
