const { Client, RichEmbed } = require("discord.js");

const Discord = require("discord.js");

const sqarlex1 = new Discord.Client();

// Aktif edilecek token sayısına göre arttırabilirsiniz. Eğer yukarıyı arttırırsanız aynı şekilde aşşağıyıda arttırmanız gerekir.
// Tokenleri tırnakların -> "" arasına yaz.

sqarlex1.login("MTM4NTkwMDIzOTIwNTk1NzcxNzcxeMg.GGNF6F.Pj3p-Ms72PQ4evW9JRpKkfWKa8EkTlSuHiZbXw
");
/* 
setActivity kısmı size kalmış silebilirsiniz veya istediğiniz gibi değişebilirsiniz baştaki kısma ne yaptığının ismini (ör: Spotify) type kısmına aşağıda bıraktığım dördünden biri;

LISTENING = DİNLİYOR
PLAYING = OYNUYOR
WATCHING = İZLİYOR
STREAMING = YAYINDA*/
  
sqarlex1.on('ready', ()=>{
  sqarlex1.channels.get('1459734608928313374').join()
  console.log(`[Aktif] - ${sqarlex1.user.tag} 1 numaralı hesap aktif.`) 
  sqarlex1.user.setActivity('Spotify', {"type": "LISTENING"});
});
