import codPic from "./assets/cod.jpg";
import nfsPic from "./assets/nfs.jpg";
import rdrPic from "./assets/rdr.jpg";
import acPic from "./assets/ac.jpg";

function Card(){
   const games = [
      { id: 1, title: "Call of Duty", desc: "Call of Duty is a popular first-person shooter game. It is made by Activision.", image: codPic },
      { id: 2, title: "NFS Most Wanted", desc: "NFS Most Wanted is a racing game. It is made by EA.", image: nfsPic },
      { id: 3, title: "Red Dead Redemption", desc: "Red Dead Redemption is an action-adventure game. It is made by Rockstar Games.", image: rdrPic },
      { id: 4, title: "Assassin's Creed", desc: "Assassin's Creed is an action-adventure game. It is made by Ubisoft.", image: acPic },
   ];

   return (
        <div className="cards-container">
            {games.map(game => (
               <div key={game.id} className="card">
                   <img src={game.image} alt={game.title}></img>
                   <h2>{game.title}</h2>
                   <p className="card-text">{game.desc}</p>
               </div>
            ))}
        </div>
   )
}

export default Card;