function btnCodificar() {
    const encryptedText = codificar(entrada.value)
    saida.value = encryptedText
}

function btnDecodificar() {
const decryptedText = decodificar(entrada.value)
saida.value = decryptedText
}

function btnCopiar() {
	let textoCopiado = document.getElementById('saida')
	textoCopiado.select()
	textoCopiado.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(textoCopiado.value)
}

function codificar(entradaDeValor) {
	let txtCod = entradaDeValor.split('');
	for (let i = 0; i <= txtCod.length; i++) {
		if (txtCod[i] === 'a') {
			txtCod[i] = txtCod[i] + 'i';
		}
		if (txtCod[i] === 'e') {
			txtCod[i] = txtCod[i] + 'nter';
		}
		if (txtCod[i] === 'i') {
			txtCod[i] = txtCod[i] + 'mes';
		}
		if (txtCod[i] === 'o') {
			txtCod[i] = txtCod[i] + 'ber';
		}
		if (txtCod[i] === 'u') {
			txtCod[i] = txtCod[i] + 'fat';
		}
	}

	return txtCod.join('');
}

function decodificar(entradaDeValor) {
    let txtDecod = entradaDeValor
    
    txtDecod = txtDecod.replace(/ai/gi, "a");
    txtDecod = txtDecod.replace(/enter/gi, "e");
    txtDecod = txtDecod.replace(/imes/gi, "i");
    txtDecod = txtDecod.replace(/ober/gi, "o");
    txtDecod = txtDecod.replace(/ufat/gi, "u");
  
    return txtDecod
  }

  