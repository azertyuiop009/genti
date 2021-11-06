const Axios = require('axios').default;
var fetch  = require('node-fetch');

yahead = {
    "port": process.env.PORT || 8080,
    'Content-Type': 'application/json',
    'Authorization': "ODg1NzIxNTA1MDYzOTAzMjcy.YUD5hA.5RDCXV4U-o1I_ghKlQGamidyEtE"
}
async function gen(){
  for(var ie = 0; ie < 999999999999999999999999999; ie++){
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
      try {
        const statut = (await Axios.get(`https://discord.com/api/v9/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true` , {
          headers: yahead
        })).status;
        if(statut == 200){
          text = "  [✅Valid✅] Nitro : http://discord.gift/"+code
          console.log(text)
            function hexToDecimal(hex) {
              return parseInt(hex.replace("#",""), 16)
            }
            var emb = {
              author: {
                name: "Peanut Nitro Gen"
              },
              title: "A Nitro Got Generated",
              description: `Nitro Link : http://discord.gift/${code}`,
              color: hexToDecimal("#00ff00")
              
            }
            var params = {
              username: "Peanut Nitro Gen",
              embeds: [emb]
            }
            fetch(`https://discordapp.com/api/webhooks/906482107570868235/EqWWGUU2Gd71OisachfctzVIa5KW5uWYba9_cMUfRyZVXvSSwNE_NF6C4IY1mAy_rpie`, {
            "method":"POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(params)})
        }else{
        }
      } catch (err) {
      } finally {
        console.log("Invalid http://discord.gift/"+code)
        console.clear()
      }
  }
}
gen()
