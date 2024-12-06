const contentful = require('contentful');

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer'); 
// const client = require('../../eleventy.config').contentfulClient;
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = async () => {
  return client.getEntries({ content_type: 'my', order: 'sys.createdAt'})
  .then(function(response){
    return response.items.map(my => ({
      title: my.fields.title,
      content:documentToHtmlString(my.fields.content),
    }));
  }).catch(console.error)
  
};
