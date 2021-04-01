module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  // Webpack 5 breaks `npm run dev` via unresolved:
  //    TypeError [ERR_INVALID_ARG_VALUE]: The argument 'path' must be a string
  //    or Uint8Array without null bytes.
  // Does not appear to affect production, however.
  // future: {
  //   webpack5: true,
  // },
};
