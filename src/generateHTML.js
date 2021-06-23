// TODO: Create a function to generate markdown for README
function HTML(data) {
  console.log("HTML function is running.");
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

  <section class="hero">
    <div class="hero-body">
       <h1 class="title">Bluth Bananas Team Members</h1>
    </div>
  </section>
  <main class="container">
      
${data}
      
  </main>
</body>
</html>`;
}

module.exports = {
  HTML,
};
