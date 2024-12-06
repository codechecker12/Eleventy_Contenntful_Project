  require('dotenv').config();
  const contentful = require('contentful');
 
  const markdownIt = require('markdown-it');
  const md = new markdownIt();



module.exports = function (eleventyConfig) {  



  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  client.getEntries({ content_type: 'blogPage' }).then((response) => {
    console.log(response.items);
  });

  eleventyConfig.addCollection("posts", async function() {
    try {
      const response = await client.getEntries({ content_type: 'blogPage', order: 'sys.createdAt' });
      return response.items.map(item => ({
        title: item.fields.title,
        content: documentToHtmlString(item.fields.content), // Ensure to import this at the top
        slug: item.fields.slug,
        image: item.fields.image ? item.fields.image.fields.file.url : null,
        date: new Date(item.sys.createdAt),
      }));
    } catch (error) {
      console.error('Error fetching data from Contentful:', error);
      return [];
    }
  });

  



  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  
  eleventyConfig.addWatchTarget("src/css");

  
  eleventyConfig.on("eleventy.before", () => {
    const fs = require("fs");
    const path = "dist";
    if (fs.existsSync(path)) {
      fs.rmSync(path, { recursive: true });
    }
  });

  
  module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("truncate", function(content, length) {
      if (content.length > length) {
        return content.substring(0, length) + "...";
      }
      return content;
    });
  };



  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
  };
};


