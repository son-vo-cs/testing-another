

function convertSeoHTML(body)
{
    body = {title:"title testing thou", intro: "hom nay la testing", thumburl: "https://images.ctfassets.net/hqh7xsjn49zt/2zZreV59wG8mndcWb5hKKU/25bb2e1a781115355b53f6c1fef3bc57/twitter_cards.jpg?w=602", url:"https://google.com"};
    var tempLink = body.url;
    // console.log(body)
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta http-equiv="refresh" content="0;${tempLink}" />
      <meta property="og:title" content=${body.title}>
      <meta property="og:description" content="${body.intro}">
      <meta property="og:image" content="${body.thumburl}">
      <meta property="og:url" content="${tempLink}">
      </head>
      <body>
        <div id="root">
          
        </div>
        
      </body>
    </html>
  `
}


function processSeo(body, response)
{
    var temp = convertSeoHTML({})
    response.send(temp);
}

const AmazonSeo = (request,response) =>
{
    var url = request.originalUrl;
    var position = url.indexOf("/getseo/");
    url = url.substring(position+7,url.length);
    processSeo("ha",response);
    
}


module.exports = {
    
    AmazonSeo
    
    // edit,
    // delete
}
