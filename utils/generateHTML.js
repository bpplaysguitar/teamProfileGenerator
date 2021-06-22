// TODO: Create a function to generate markdown for README
function generateHTML(data) {

  let whatNext = data.whatNext;

  switch (whatNext) {
    case 'Add an engineer':
      whatNext = `engineer`;
      break;

    case 'Add an intern':
      whatNext = `intern`;
      break;

    case 'Finish building team':
      whatNext = `finish`;
      break; 
      }


    console.log(whatNext);

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
</head>
<body>
<h1>My Team</h1>
  
</body>
</html>
`;
}
module.exports = generateHTML;