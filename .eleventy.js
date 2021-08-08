module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addShortcode(
        "emailSpacer",
        (size = "") =>
          `<tr><td class="spacer${size ? `-${size}` : ""}">&#32;</td></tr>`
      );
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}