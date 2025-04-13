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
  
//Closures aren’t formed when you just write nested functions.
//They're formed when you call the outer function, and it defines the inner one — that’s
// when the closure is “born” and locks onto the variables in that specific call.