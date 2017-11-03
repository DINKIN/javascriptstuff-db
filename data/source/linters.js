module.exports = {
  key: "email-tools",
  name: "Email Tools",
  description:
    "Linters find potential errors and/or formatting inconsistencies in your code. Some will automatically fix your code for you.",
  aka: ["code formatters", "beautifiers", "prettifiers"],

  tags: [
    {
      name: "html",
      description: "Formats/beautifies HTML."
    }
  ],

  projects: [
    { url: "https://github.com/beautify-web/js-beautify", tags: ["html"] },
    { url: "https://github.com/prettier/prettier" },
    { url: "https://github.com/CSSLint/csslint" },
    { url: "https://github.com/csscomb/csscomb.js" },
    { url: "https://github.com/standard/standard" },
    { url: "https://github.com/douglascrockford/JSLint" }
  ]
};
