import unirest from 'unirest';
import cheerio from 'cheerio';

async function parsePost(url, elems) {
 await unirest.get(url).end(function (response) {
    const body = response.body;

    const $ = cheerio.load(body);

    const domain = url.match(/\/\/(.*?)\//)[1];
    const title = $(elems.title).text().trim();
    let image = $(elems.image).attr("src");
    image = image.indexOf("http") >= 0 ? image : `http://${domain}${image}`;
    const text = $(elems.text).text().trim();
    const views = $(elems.views).text().trim();

    const post = {
      title: title,
      image: image,
      text: text,
      views: views,
    };

    console.log(post);
  });
}

export {parsePost};