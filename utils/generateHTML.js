// TODO: Create a function to generate markdown for README
function generateHTML(data) {

  let license = data.license;
  let licenseLink = license;
  let licenseBadge;

  switch (licenseLink) {
    case 'Apache License 2.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/apache-2.0/">Read about the Apache License 2.0</a>`;
      licenseBadge = ``
      break;

    case 'GNU General Public License v3.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/gpl-3.0/">Read about the GNU General Public License v3.0 license</a>`;
      licenseBadge = `Apache%202.0`
      break;

    case 'MIT License':
      licenseLink = `<a href="https://opensource.org/licenses/MIT">Read about the MIT License</a>`;
      licenseBadge = `MIT`
      break; 
      }


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