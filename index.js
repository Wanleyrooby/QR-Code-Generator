import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Prompt para obter a URL do usuário
inquirer
  .prompt([
    {
        message: "Digite o seu URL: ", 
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    // Gera e salva o código QR
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-img.png"));

    // Salva a URL fornecida pelo usuário em um arquivo "URL.txt"
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("O arquivo foi salvo"); 
      }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt não pôde ser renderizado no ambiente atual
    } else {
     // Outro tipo de erro ocorreu
    }
  });