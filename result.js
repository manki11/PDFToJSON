let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./pdf2json/json/result.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./pdf2json/pdf/result.pdf");