const discord = require("discord.js");

module.exports = {
	name: "neave",
	category: "Custom",
	description: "Be linked to a random, curated YouTube video. To see the number of videos curated, add 'count'.",
	usage: "neave {count}",
	run: async (client, message, args) => {
		let videos = [
			'https://www.youtube.com/watch?v=XDWz4Y3ThRI', // FerBro - Engie's Escape Adventures, but it's lego city commercial
			'https://www.youtube.com/watch?v=jXDV1eo7CO8', // ChickenPika - YTP: Of Raps and Rosens
			'https://www.youtube.com/watch?v=xZEPgLkzhwE', // iteachvader - Win the Race
			'https://www.youtube.com/watch?v=F7QjdmNoEbM', // Jimmy Davis - Mini YTP - Qwerty Says a Funny Joke
			'https://www.youtube.com/watch?v=M72S_EUdRF8', // Jack6 - JACK5 DANCING
			'https://www.youtube.com/watch?v=PrSX7mqHhm8', // Jerry BladeZ - Spy and Heavy (Poorly) Sing "Bad Guy"
			'https://www.youtube.com/watch?v=8t-iFr9q1I8', // Neil Cicierega - Lenny Kravitz - Fly Away (lyrics)
			'https://www.youtube.com/watch?v=VVdEAw52kgc', // ceno0 - Scout Coalition™ [Gmod animation]
			'https://www.youtube.com/watch?v=ZVI3HkGpGSE', // Eltorro64Rus - Meet The Pyro
			'https://www.youtube.com/watch?v=r-u4rA_yZTA', // STBlackST - Soldier's_monkey_and_his_team.adventure
			'https://www.youtube.com/watch?v=AjfjNPRBk4w', // MB16 - What is Safari
			'https://www.youtube.com/watch?v=2qZCV_7ojeM', // Raxxo - Sniper Tube
			'https://www.youtube.com/watch?v=mjHyIttjpKc', // ANDREW HUANG - CLUB DRUNK PARTY HANDS
			'https://www.youtube.com/watch?v=qX_rhq4WAt8', // FishTitan64 - AHM TAKIN MAH TAHM ON MAH RAAAAAAAAAAAAAAAAAAA
			'https://www.youtube.com/watch?v=dmbCQwoZOa4', // DaThings - {YTP} ~ Crepes - Twitpost Edition
			'https://www.youtube.com/watch?v=ArwaJCoTeNY', // YOYLECAKE Michael - - MUSIC OF FOUR'S 3D HAND -
			'https://www.youtube.com/watch?v=h_Z_k50ltkY', // ubercream - Bill Cosby Pokemon Rap
			'https://www.youtube.com/watch?v=0IaoZKoC0Ic', // Stepmates TV - Jims
			'https://www.youtube.com/watch?v=EH7lMMTJ1Wo', // Jerma985 - Patch Notes
			'https://www.youtube.com/watch?v=R-_8B_diHuo', // chemistryguy - Trump Promo Video 420
			'https://www.youtube.com/watch?v=2u0BWr4FQWI', // Boundless - [ytp] a jarmx of charmx
			'https://www.youtube.com/watch?v=cGyTDA_K6Ac', // Archive Anon - SHOPPLE BLAG
			'https://www.youtube.com/watch?v=VAT8MTxhkWs', // cs188creations - At The Gym
			'https://www.youtube.com/watch?v=GRAPjVnxzZM', // SCAT/RAT - 🔞 YTP- Diners, Drive In and Die -YTP 🔞
			'https://www.youtube.com/watch?v=1tFk9z6-pjI', // cs188 - P!nk - Get The Party Started except "in my ass" is inserted after most verbs
			'https://www.youtube.com/watch?v=FR0W8V8pfDM', // RootNegativeSixteen - YTP: Michael Competes for Screen Time Again (2K Sub Special)
			'https://www.youtube.com/watch?v=hA7lv1SDzno', // Sesame Street - Sesame Street: Patrick Stewart Soliloquy on B
			'https://www.youtube.com/watch?v=e1bEWoblGZA', // bill wurtz - unboxing video
			'https://www.youtube.com/watch?v=BSuAgw8Lc1Y', // Internet Historian - Greentext Short: OP is the world's greatest hacker.
			'https://www.youtube.com/watch?v=UJUHHA8SFuw', // YourMovieSucksDOTorg - Amusement Top 5 SCARY scenes
			'https://www.youtube.com/watch?v=Aw51YmIiqiA', // ManManBoyBoyMan - Minion Supreme - UP DOWN ALBUM
			'https://www.youtube.com/watch?v=akzH55LciQM', // Akriloth2160 - Map Men, but the words "Map" and "Sea" are replaced with Jay and Mark yelling "BLANK!"
			'https://www.youtube.com/watch?v=khoeWqXwHd8', // Kaze Emanuar - Doki Doki Mario 64 Release & Download
			'https://www.youtube.com/watch?v=DYFHeab053w', // hotdiggedydemon - SANS.MP4
			'https://www.youtube.com/watch?v=CNpNTuyZzSE', // LazyPurple - HMM THIS GUY LOOKS DANGEROUS
			'https://www.youtube.com/watch?v=KPchfdrDo-s', // Dr. Face - Dinner Time
			'https://www.youtube.com/watch?v=kWNqr9VMAzQ', // MegaGFilms - Here Comes Soldier!
			'https://www.youtube.com/watch?v=Jrru9SHCPqc', // Jar - Rick Astley - Bro you just posted cringe!
			'https://www.youtube.com/watch?v=rEwR_PSBDek', // FlyingKitty - PufferFish Rave
			'https://www.youtube.com/watch?v=KH0fVLcjlDY', // Antoine Delak - The World's Smallest Coffee Cup
			'https://www.youtube.com/watch?v=AS_itPvz1tY', // A Dummie - [SFM] Medic's School For Medics
			'https://www.youtube.com/watch?v=Ltx3bdKCI2E', // magmablock - [SFM] Dismantling Detriment
			'https://www.youtube.com/watch?v=sVE028LOUL8', // Delta135Z - ^^
			'https://www.youtube.com/watch?v=T7G4NcEaXck', // Phirenor - HALF - FIVE
			'https://www.youtube.com/watch?v=C5e6eG6bXAQ', // Biggerboot - StarCraft: Pylon Mix
			'https://www.youtube.com/watch?v=qPq-dHGKcG4', // MediExcalibur2012 - You KayeK'd in the Wrong Neighbourhood
			'https://www.youtube.com/watch?v=usMohEQ1dBQ', // BahnDaten - parappa the __________
			'https://www.youtube.com/watch?v=Xy2jZABDB40', // _ - Morshu as Scatman
			'https://www.youtube.com/watch?v=ynV2EZakHek', // MetalKingBoo - 1 2 TIE MY SHOE
			'https://www.youtube.com/watch?v=TTSer9C5SrY', // Magik Mike - Don't Stop Me Now but PLEASE STOP HIM NOW | Queen
			'https://www.youtube.com/watch?v=A6ZBT4Rdly4', // Dueling Gentleman - SOS (S.O.S Family International - 1994)
			'https://www.youtube.com/watch?v=qsE_cq6c1X8', // theneedledrop - Machine Gun Kelly's Tickets to My Downfall: NOT GOOD
			'https://www.youtube.com/watch?v=bSiEB64FyF8', // Producer Ocean - Potion Seller Soundtrack
			'https://www.youtube.com/watch?v=BvBvVN-UPQE', // seibmoz - Tasty Cools
			'https://www.youtube.com/watch?v=3ouHCbOhF80', // Star Dash - Meet the Scout in 2021
			'https://www.youtube.com/watch?v=9VYbt4iavG8', // Maxkleer - [HOI4] Every Time You Play Poland
			'https://www.youtube.com/watch?v=7qfYTJ5TPYo', // Nightowl - Discord sings Around The World
			'https://www.youtube.com/watch?v=iIKRnF43pbI', // videogamedunkey - Top 10 Hottest Female Mario Characters
			'https://www.youtube.com/watch?v=_tU93mWvR6I', // DeSinc - Glitches and Tricks in Real Life
			'https://www.youtube.com/watch?v=AaVfOsBYp4k', // CrazyScoutFIN - Special Workout
			'https://www.youtube.com/watch?v=sp1baJvTkZ0', // Dollar Sign Slate - Morshu Battle - Richer Than You
			'https://www.youtube.com/watch?v=3sVF_W_gph8', // wavetro - google images
			'https://www.youtube.com/watch?v=li1pBqfGmrE' // The Average F2P - ay yo red spy is in the base
		];
		if (input == 'count') {
			let embed = new discord.MessageEmbed()
				.setTitle('I currently have ' + videos.length +	' videos available for random selection.');
			message.reply(embed);
		} else {
			message.reply(videos[Math.floor(Math.random() * videos.length)]);
		}
	}
}
