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
  
  console.log(holder.getSecret()); // Line A
  holder.setSecret("updated");
  console.log(holder.getSecret()); // Line B
  