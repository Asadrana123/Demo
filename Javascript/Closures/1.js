function secretHolder(secret) {
    return {
      getSecret: function () {
        return secret;
      },
      setSecret: function (newSecret) {
        secret = newSecret;
      },
    };
  }
  
  const holder = secretHolder("initial");
  
  console.log(holder.getSecret()); 
  holder.setSecret("updated");
  console.log(holder.getSecret()); 
  
