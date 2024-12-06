const contentful = require('contentful');

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer'); 

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = async () => {
  return client.getEntries({ content_type: 'blogPage', order: 'sys.createdAt'})
  .then(function(response){
    return response.items.map(blogPage => ({
      title: blogPage.fields.title,
      slug: blogPage.fields.slug,
      image: blogPage.fields.image?.fields?.file?.url,
      content:documentToHtmlString(blogPage.fields.content),
    }));
  }).catch(console.error)
  
};