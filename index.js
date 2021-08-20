const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will find the one very soon in your life!",
					 "Look for a good friend around those who are already around you!",
					 "Those at work or family need you. Work hard for them!",
           "Follow your heart and you will see rewards",
           "Prosperity shall soon enter your life"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.get("/api/misfortune", (req, res) => {
  const fortunes = ["Help! I'm locked up in a fortune cookie factory!",
					 "If you're not careful, you will find yourself in an isekai",
					 "May you  live a life with curses with blessings",
           "So what if you're dirt poor, your're having fun, right?",
           "Toxic people will crowd your life. meh. There's not much to do about it"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

const animeURLS = {
  "To Your Eternity": "A mysterious orb takes the form of  a boy and his dog as learns how to be human. Prepare to cry",
  "Tokyo Revengers":"Gangsters and Time Travel",
  "Fullmetal Alchemist: Brotherhood": "Two alchemist brothers serve the military to learn more about how to get their bodies back, meanwhile their home country a conspirasy is brewing",
  "Made in Abyss":"An eleven year old girl and her friends go down an endless death hole to find her mom. Prepare to be scarred.",
  "Re:Zero" : "Classic nobody is mysteriously summoned into a fantasy world. Excited, Natsuki Subaru embraces his new life. He discovers he has a single power: time travel. However, death is the trigger to use it and he cannot control when goes to."

}
app.get("/api/anime/",(req,res)=>{
  console.log("is working?")
  
  let sending =animeURLS
  res.status(200).send(sending)
});


app.post("/api/anime/",(req,res)=>{
  let {name, description} = req.body;
  animeURLS[name] = description;
  res.status(200).send("done");
})
app.listen(4000, () => console.log("Server running on 4000"));
