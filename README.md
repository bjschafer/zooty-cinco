# zooty-cinco

Tracker and randomizer for OoT Randomizer.

Heavily inspired by, and based off code from, [ootbingo](https://github.com/ootbingo/bingo/).

## Development

To start a dev server, clone this repo and run the following:

```bash
npm install
npm run dev
```

### Notes

Parcel, which is used to build/bundle the site, has a [known issue](https://github.com/parcel-bundler/parcel/issues/7643) affecting its ability to pull in images when referenced via a variable. I worked around this by referencing images through static paths, and copying them in manually to the built directory. ¯\\\_(ツ)\_/¯
