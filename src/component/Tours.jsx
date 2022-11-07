
import {React} from 'react';
import { Link } from "react-router-dom";
  
function Tours (){
    
  const cities =[
    {
        id:1,
        name:"Petra",
        info:"The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba (see the Map), Petra the world wonder, is undoubtedly Jordan's most valuable treasure and greatest tourist attraction, and it is visited by tourists from all over the world.",
        image:"https://cdn.theculturetrip.com/wp-content/uploads/2021/06/petra.jpg",
        price:10
    },
    {
        id:2,
        name:"Wadi Rum",
        info:"Wadi Rum is one of Jordan's most popular tourist sites and attracts a large number[quantify] of tourists from around the world. Wadi Rum is home to the Zalabieh tribe, who developed eco-adventure tourism and services throughout the protected area. They provide tours, guides, accommodation and facilities. They also run restaurants and small shops in the villages that provide meals and basic supplies for visitors. Their guide services include highly experienced mountain and trekking guides who have an unmatched knowledge of the local area and often speak fluently in two languages or more.[citation needed] Using local guides and services brings many benefits to the protected area. In particular, it enables people to continue earning a living from the land and helps to ensure that the protected area remains protected.",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/1a/7e/4c/1c/wadi-rum-bedouin-camp.jpg",
        price:20
    },
    {
        id:3,
        name:"Dead sea",
        info:"A spectacular natural wonder the Dead Sea that is located 427 meters below sea level is perfect for wellness and religious tourism, fun in the sun with the family. With its mix of beach living and religious history you can soak up the sun while Biblical scholars can get their daily dose of religious history. The leading attraction at the Dead Sea is the warm, soothing, super salty water itself – some ten times saltier than sea water, and rich in chloride salts of magnesium, sodium, potassium, bromine and several others. The unusually warm, incredibly buoyant and mineral-rich waters have attracted visitors since ancient times, including King Herod the Great and the beautiful Egyptian Queen, Cleopatra. All of whom have luxuriated in the Dead Sea's rich, black, stimulating mud and floated effortlessly on their backs while soaking up the water's healthy minerals along with the gently diffused rays of the Jordanian sun.",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/5e/e0/ed/caption.jpg?w=700&h=500&s=1&cx=654&cy=434&chk=v1_4d49a498021cb829843c",
        price:20
    },
    {
        id:4,
        name:"Roman Theater",
        info:"The Roman Theatre is the most impressive monument of old Philadelphia, as Amman was known when it was part the Roman Decapolis, the cities network on the frontier of the Roman Empire in the southeastern Levant. According to an inscription, it was built during the era of the Antonine emperors, at the end of the 2nd century AD.",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b7/2a/96/romisches-theater-amman.jpg?w=1200&h=1200&s=1",
        price:20
    },
    {
        id:5,
        name:"Aqaba",
        info:"Red Sea beaches and snorkeling put Aqaba on the travel map, but Jordan's only coastal city is an enticing destination in its own right. Along with a well-earned reputation for friendly locals, Aqaba boasts seafood cafés, a waterfront promenade, and gorgeous desert scenery.",
        image:"https://www.mensjournal.com/wp-content/uploads/2019/05/AqabaBeach.jpg?w=1200&quality=86&strip=all",
        price:20
    },
    
];

    return (
        <>
        
        <h3 className='m-5'> Tourism In Jordan</h3>
        <div className=" d-flex flex-wrap text-center justify-content-center Tour" >
           
  {cities.map((city,i) => (
   
         
   <Link 
   to={"/Tour-details/"+city.id} 
   state={{city }}
   hash="search" 
   key={i}>
  
    </Link>
  )
  
  )}
</div>
</>

    );
 


}
  
export default Tours;