# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Local test server (static file server)
- `npm install -g serve`
- `cd out`
- `serve -p 8080`
- If you are using Vue Router in history mode, a simple static file server will fail.

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deployment
- `npm run build`
- `scp -r .\dist\ <user>@<domain>:/home/<user>`
- `ssh <user>@<domain>`
- `mv dist /var/www/<folder-domain>/vue-project`
- `cd /var/www`
- `sudo chown -R www-data:www-data <folder-domain>/`
