//Reasons to Avoid Using __proto__
//1.Changes the prototype after the object is created, which breaks engine optimizations.
//2.Leads to slower performance, especially in large-scale apps.