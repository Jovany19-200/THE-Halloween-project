let adjective1 = prompt("Enter an adjective. only matters for part 1,3, and 4");
let adjective2 = prompt("Enter an adjective. only matter part 1 and 4");
let adjective3 = prompt("Enter an adjective. only matters for part 1");
let adjective4 = prompt("Enter an adjective. only matters for part 1");
let creature = prompt("Enter the name of a spooky creature, keep it consistent for the rest of the story. only matters for part 1 and 2");
let creature2= prompt("Enter the name of a spooky creature, only matters for part 1 and 3");
let insult = prompt("Enter an insult, only matters for part 1, 2, and 5");
let insult2 = prompt("Enter an insult, only for part 2");
let weapon = prompt("Enter the name of a weapon, don't go crazy on me, it's only mentioned in part 3, implied to be used, not going into details");
let celebrity = prompt("Enter the name of a celebrity, keep it consistent for the rest of the story. for parts 1-3");
let friend = prompt("Enter the name of a friend, keep it consistent for the rest of the story. only parts 1,2,4, and 5");
let monster = prompt("Enter the name of a monster, keep it consistent for the rest of the story. Don't make it weird, only matters for part 3, 4, and 5");



let story = 
`You were really quite a ${adjective1} on this Halloween night, dressed as a ${creature}.
 You wanted to go to a party, but then you saw ${friend}.
  Your ${adjective2} ${creature2} of a friend, and he really wanted to go see the GREAT PUMPKIN. 
  you told him that was an ${adjective3} idea and decided to check it out.
  Mostly for a moment to see him stand alone in a pumpkin field like a ${adjective4} ${insult}.`;
  
let story2 = 
`You finally made it to the pumpkin patch, your ${creature} costume was still looking good as ever. 
However, this ${insult} keeps going on about the great pumpkin, it was quaint at first but as time goes on you realize something.
This ${insult2} is just full of it! 
You've been standing here for almost an hour and the great pumpkin has yet to show up.
You were about to lash out ${friend} when you heard some rustling in the bushes, you turn around and see a...`;

let story3 =
`You see ${celebrity} dressed as a ${creature2}.
 You were obvsiouly shocked, I mean why is ${celebrity} approuching 2 kids, alone, at a pumpkin patch?
  you were about to ask ${celebrity} why are they here when suddenly a really ${adjective1} ${monster} came out of nowhere and ${celebrity} puulled out an ${weapon} and begin rushing towards you! 
  ${celebrity} tells you to duck as she the towards ${monster}`;

let story4 =
`${celebrity} explained how she was part of a secret society that defends humanity from the ${adjective1}${monster} army. 
And how you were the choson one ${celebrity} bring down this evil, and they've been searching for you.
You were surprised, the person you mostly know for their ${adjective2} behavior is actually a war hero.
  Your ${friend} didn't care, they only cared about the GREAT PUMPKIN. 
 ${celebrity} really couldn't care less, and was about to go back until battle until you heard a rumbling and see crack in the ground.
 Vines shot up from the ground and dragged ${celebrity} into depths of the earth.`;

 let story5 =
`You were getting scared, the fricking great pumpkin was real??? and it killed ${celebrity}???
 You were about to run away when you heard a voice, it was ${friend} and they were screaming "I TOLD YOU SO!".
 As it turns out, that ${insult} was actually a spy for the great pumpkin? He brought you here to lure in ${celebrity}.
 Now the great pumpkin and his ${monster} army are going to rule over the world.
But the great pumpkin seems chill, so you just went home, got some candy, and watched some scary movies with ${friend}.`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
madLibOutputDiv.innerHTML = `<p>${story2}</p>`;
madLibOutputDiv.innerHTML = `<p>${story3}</p>`;
madLibOutputDiv.innerHTML = `<p>${story4}</p>`;
madLibOutputDiv.innerHTML = `<p>${story5}</p>`;