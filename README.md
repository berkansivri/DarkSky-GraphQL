<p align="center">
  <a href="https://darksky-graphql.berkansivri.now.sh/">
    <img src="https://graphql.org/img/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">DarkSky GraphQL Server</h3>

  <p align="center">
    The project is GraphQL implementation of <a href="https://darksky.net" target="_blank">DarkSky Weather API</a> on <a href="https://www.apollographql.com/" target="_blank"><img width="30" src="https://g00glen00b.be/wp-content/uploads/2018/02/apollo-logo.png" alt="Apollo logo"></a>.
    <br />
    <a target="_blank" href="https://darksky-graphql.berkansivri.now.sh">Live Server</a>
  </p>
</p>


## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm start
```

## For Push to Apollo Engine
* You need to create an <a href="https://engine.apollographql.com" target="_blank">apollo engine</a> account
* Create a new service and your service key to `.env` file `ENGINE_API_KEY`
* Start your server with `npm start` and open another terminal.
* Run the command for push to apollo engine for display your schema and monitor your graphql things.
```
npx apollo service:push --endpoint=http://localhost:4000
```

## For Push to Zeit.co/now
* Create a <a href="Zeit.co/now">zeit</a> account install <a href="https://github.com/zeit/now-clinow-cli" target="_blank">now cli</a>.
* With running `now` command login your credentials in your terminal.
* Just run `now` command again, it will deploy your app to your account and gives you aliased link. For configuration check `now.json`


## License

This project is licensed under the MIT License.
