var myArray = ["Lipton Limão", "Guaraná Antarctica", "Budweiser", "Skol Beats", "Chopp Brahma Black", "Do bem Água de coco", "Gatorade Tangerina", "Fusion", "Ama sem gás"]

var bebidaAleatoria = myArray[Math.floor(Math.random() * myArray.length)]

var tentativas = 3

while (tentativas > 0) {
  var chute = prompt("Adivinhe a bebida da Ambev que está na minha cabeça. O que tem na geladeira: "Lipton Limão", "Guaraná Antarctica", "Budweiser", "Skol Beats", "Chopp Brahma Black", "Do bem Água de coco", "Gatorade Tangerina", "Fusion", "Ama sem gás"])

    if(bebidaAleatoria == chute) {
    alert("Acertou. Agora fica o incentivo para ler!")    
    break
    } 
    
    else if (bebidaAleatoria != chute) {
    alert("Boa tentativa, mas não é essa.")
    tentativas = tentativas - 1
    }
} 

if (bebidaAleatoria != chute) {
    alert("Suas chances acabaram. A bebida era " + bebidaAleatoria);
}