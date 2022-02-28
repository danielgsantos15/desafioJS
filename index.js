let frase = "$$$Jack. [be] nimble..., (jack) be ~quick~/\/\/\Jack% jumped &&¨%right %%over the ({})candle..,,,.., ,stick***";
document.write("Frase sem tratamento: ", frase);

let fraseCorreta = frase.replace(/[^A-Za-z0-9 ]/g, '');
document.write("<br>Frase tratada: ", fraseCorreta);