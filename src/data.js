import { v4 as uuidv4 } from "uuid";
import Don from './vids/Don.gif';
import DonGhost from './vids/DonGhost.gif';
import Buddy from './vids/Buddy.gif';
import BuddyGhost from './vids/BuddyGhost.gif';
import Chet from './vids/Chet.gif';
import ChetGhost from './vids/ChetGhost.gif';
import Clifford from './vids/Clifford.gif';
import CliffordGhost from './vids/CliffordGhost.gif';
import Jack from './vids/Jack.gif';
import JackGhost from './vids/JackGhost.gif';
import Stu from './vids/Stu.gif';
import StuGhost from './vids/StuGhost.gif';
import RunBuddy from './vids/RunBuddy.gif';
import RunBuddyGhost from './vids/RunBuddyGhost.gif';
import Conte from './vids/Conte.gif';
import ConteGhost from './vids/ConteGhost.gif';
import Rugolo from './vids/Rugolo.gif';
import RugoloGhost from './vids/RugoloGhost.gif';
import WhatIsThereToSay from './tunes/WhatIsThereToSay.mp3';
import CarnivalOfVenice from './tunes/CarnivalOfVenice.mp3';
import Daahoud from './tunes/Daahoud.mp3';
import JazzCityBlues from './tunes/JazzCityBlues.mp3';
import TheLadyIsATramp from './tunes/TheLadyIsATramp.mp3';
import TheSongIsYou from './tunes/TheSongIsYou.mp3';
import BerniesTune from './tunes/BerniesTune.mp3';
import ALittleDuetForZootAndChet from './tunes/ALittleDuetForZootAndChet.mp3';
import YouFascinateMeSo from './tunes/YouFascinateMeSo.mp3';
import SentimentalSam from './tunes/SentimentalSam.mp3';

function musicSource() {
    return [
        {
        name: "Conte Candoli",
        vid: Conte, 
        ghostVid: ConteGhost,   
        title: "Jazz City Blues",   
        id: uuidv4(),
        active: true,
        tune: JazzCityBlues,
        bio: <ul><li>Born in 1927 Mishawaka, IN</li><br/><li>Younger brother to trumpet legend, Pete Candoli</li><br/>
            <li>Played in the bands of Woody Herman, Stan Kenton, Benny Goodman, and Dizzy Gillespie</li><br/>
            <li>Moved to LA in 1954</li><br/><li>Led and played in small groups with Shelly Manne, Lou Levy, Gerry Mulligan, and many more</li><br/>
            <li>Recorded with SuperSax</li><br/><li>Played the trumpet solo on The Jetsons cartoon theme</li><br/>
            <li>Joined the NBC Tonight Show Orchestra in 1972</li><br/>
            <li>Born in 1927 Mishawaka, IN</li><br/><li>Younger brother to trumpet legend, Pete Candoli</li><br/>
            <li>Played in the bands of Woody Herman, Stan Kenton, Benny Goodman, and Dizzy Gillespie</li><br/>
            <li>Moved to LA in 1954</li><br/><li>Led and played in small groups with Shelly Manne, Lou Levy, Gerry Mulligan, and many more</li><br/>
            <li>Recorded with SuperSax</li><br/><li>Played the trumpet solo on The Jetsons cartoon theme</li><br/>
            <li>Joined the NBC Tonight Show Orchestra in 1972</li><br/>
            </ul>
        },
        {
        name: "Don Fagerquist",    
        vid: Don,
        ghostVid: DonGhost,
        title: "The Song is You",
        id: uuidv4(),
        active: false,
        tune: TheSongIsYou,
        bio: <ul><li>Born in 1927 Worcester, MA</li><br/>
            <li>Began playing professionally at 13 with Bob Pooley Orchestra and the Bob Boyce Big Band</li><br/>
            <li>At 14 years old, he took to the road and became featured soloist with Mal Hallet</li><br/>
            <li>Played in the bands of Gene Krupa, Woody Herman, Artie Shaw, and Les Brown</li><br/>
            <li>Became staff musician with Paramount Films in 1956</li><br/><li>Recorded extensively with Dave Pell Octet</li><br/>
            <li>Played on 'Ella Fitzgerald Sings the Jerome Kern Songbook'</li><br/>
            <li>Died at home at the age of 46</li><br/>
            <li>Born in 1927 Worcester, MA</li><br/>
            <li>Began playing professionally at 13 with Bob Pooley Orchestra and the Bob Boyce Big Band</li><br/>
            <li>At 14 years old, he took to the road and became featured soloist with Mal Hallet</li><br/>
            <li>Played in the bands of Gene Krupa, Woody Herman, Artie Shaw, and Les Brown</li><br/>
            <li>Became staff musician with Paramount Films in 1956</li><br/><li>Recorded extensively with Dave Pell Octet</li><br/>
            <li>Played on 'Ella Fitzgerald Sings the Jerome Kern Songbook'</li><br/>
            <li>Died at home at the age of 46</li><br/>
            </ul>
        },
        {
        name: "Chet Baker",    
        vid: Chet,
        ghostVid: ChetGhost,
        title: "A Little Duet for Zoot and Chet",
        id: uuidv4(),
        active: false,
        tune: ALittleDuetForZootAndChet,
        bio: <ul><li>Born in 1929 Yale, OK</li><br/>
            <li>Despite stories that he couldn't read music, he studied music theory and harmony at El Camino College in LA</li><br/>
            <li>Served two stints in the Army as a musician</li><br/><li>Was a side man for Charlie Parker</li><br/>
            <li>With Hollywood looks and a smooth crooning style, the young Baker became as popular for his vocals as his trumpet</li><br/>
            <li>Recorded extensively with Gerry Mulligan</li><br/>
            <li>Had life-long drug addictions which eventually led to a walk/fall out of a 2nd floor holtel room window causing his death</li><br/>
            <li>Born in 1929 Yale, OK</li><br/>
            <li>Despite stories that he couldn't read music, he studied music theory and harmony at El Camino College in LA</li><br/>
            <li>Served two stints in the Army as a musician</li><br/><li>Was a side man for Charlie Parker</li><br/>
            <li>With Hollywood looks and a smooth crooning style, the young Baker became as popular for his vocals as his trumpet</li><br/>
            <li>Recorded extensively with Gerry Mulligan</li><br/>
            <li>Had life-long drug addictions which eventually led to a walk/fall out of a 2nd floor holtel room window causing his death</li><br/>
            </ul>
        },
        {
        name: "Jack Sheldon",    
        vid: Jack,
        ghostVid: JackGhost,
        title: "What Is There To Say",
        id: uuidv4(),
        active: false,
        tune: WhatIsThereToSay,
        bio : <ul>
            <li>Born in 1931 Jacksonville, FL</li><br/>
            <li>Settled in LA in 1952 after two years in the Air Force band</li><br/>
            <li>Played in the bands of Benny Goodman and Stan Kenton</li><br/>
            <li>Featured him on “The Shadow of Your Smile,” from the 1965 movie “The Sandpiper”</li><br/>
            <li>Played in and led small groups with Shelly Manne, Art Pepper, Dexter Gordon, Gerry Mulligan, Curtis Counce, and many others</li><br/>
            <li>Long time band leader for The Merv Griffin Show</li><br/>
            <li>Featured vocalist on School House Rock's Conjunction Junction, I'm Just a Bill, and Mr. Morton</li><br/>
            <li>Starred in the sitcom “Run, Buddy, Run,” in the 1966-67 television season</li><br/>
            <li>Also known for his comedy and many movie appearances</li><br/>
            <li>Made cameo tv appearances in 'Gilligan's Island,' 'I Spy,' 'Marcus Welby, M.D.,' 'Petticoat Junction,' 'Adam-12,' 'The Simpsons,' 'Family Guy,' and 'Star Trek: The Next Generation'</li><br/>
            <li>‘If I’ve got a couple making passionate love on screen and I’m writing the score, it’s Jack Sheldon’s trumpet I want.’ - Henry Mancini</li><br/>
            <li>Born in 1931 Jacksonville, FL</li><br/>
            <li>Settled in LA in 1952 after two years in the Air Force band</li><br/>
            <li>Played in the bands of Benny Goodman and Stan Kenton</li><br/>
            <li>Featured him on “The Shadow of Your Smile,” from the 1965 movie “The Sandpiper”</li><br/>
            <li>Played in and led small groups with Shelly Manne, Art Pepper, Dexter Gordon, Gerry Mulligan, Curtis Counce, and many others</li><br/>
            <li>Long time band leader for The Merv Griffin Show</li><br/>
            <li>Featured vocalist on School House Rock's Conjunction Junction, I'm Just a Bill, and Mr. Morton</li><br/>
            <li>Starred in the sitcom “Run, Buddy, Run,” in the 1966-67 television season</li><br/>
            <li>Also known for his comedy and many movie appearances</li><br/>
            <li>Made cameo tv appearances in 'Gilligan's Island,' 'I Spy,' 'Marcus Welby, M.D.,' 'Petticoat Junction,' 'Adam-12,' 'The Simpsons,' 'Family Guy,' and 'Star Trek: The Next Generation'</li><br/>
            <li>‘If I’ve got a couple making passionate love on screen and I’m writing the score, it’s Jack Sheldon’s trumpet I want.’ - Henry Mancini</li>
        </ul>
        },
        {
        name: "Clifford Brown",    
        vid: Clifford,
        ghostVid: CliffordGhost,
        title: "Daahoud",
        id: uuidv4(),
        active: false,
        tune: Daahoud,
        bio : <ul>
            <li>Born in 1930 Wilmington, DE</li><br/>
            <li>Studied music with Philadelphia musician, Robert Boysie Lowery</li><br/>
            <li>Played with the bands of Art Blakey, Tadd Dameron, Lionel Hampton, and JJ Johnson</li><br/>
            <li>Formed a long-time grooup with drummer, Max Roach</li><br/>
            <li>Stayed away from drugs</li><br/>
            <li>Composer of jazz standards, 'Jordu,' 'Daahoud,' 'Joy Spring,' and 'Sandu'</li><br/>
            <li>Died in a car crash at the age of 25</li><br/>
            <li>Suddenly stopped recording after that</li><br/>
            <li>Born in 1930 Wilmington, DE</li><br/>
            <li>Studied music with Philadelphia musician, Robert Boysie Lowery</li><br/>
            <li>Played with the bands of Art Blakey, Tadd Dameron, Lionel Hampton, and JJ Johnson</li><br/>
            <li>Formed a long-time grooup with drummer, Max Roach</li><br/>
            <li>Stayed away from drugs</li><br/>
            <li>Composer of jazz standards, 'Jordu,' 'Daahoud,' 'Joy Spring,' and 'Sandu'</li><br/>
            <li>Died in a car crash at the age of 25</li><br/>
            <li>Suddenly stopped recording after that</li><br/>
        </ul>
        },
        {
        name: "Buddy Childers",    
        vid: Buddy,
        ghostVid: BuddyGhost,
        title: "Bernie's Tune",
        id: uuidv4(),
        active: false,
        tune: BerniesTune,
        bio: <ul><li>Born in 1926 Saint Louis, MO</li><br/>
            <li>Joined Stan Kenton's band at 16 and rose to the lead chair after a few months</li><br/>
            <li>Left Kenton's band eight times often to return only weeks later</li><br/>
            <li>In between Kenton stints, he worked for Benny Carter, Tommy Dorsey, Andre Previn, Les Brown, and others</li><br/>
            <li>Settled in Vegas in 1959, LA in 1966</li><br/>
            <li>Later worked with Toshiko Akiyoshi Big Band and was musical director for Frank Sinatra, Jr.</li><br/>
            <li>Born in 1926 Saint Louis, MO</li><br/>
            <li>Joined Stan Kenton's band at 16 and rose to the lead chair after a few months</li><br/>
            <li>Left Kenton's band eight times often to return only weeks later</li><br/>
            <li>In between Kenton stints, he worked for Benny Carter, Tommy Dorsey, Andre Previd, Les Brown, and others</li><br/>
            <li>Settled in Vegas in 1959, LA in 1966</li><br/>
            <li>Later worked with Toshiko Akiyoshi Big Band and was musical director for Frank Sinatra, Jr.</li><br/>
            </ul>
         },
        {
        name: "Stu Williamson",    
        vid: Stu,
        ghostVid: StuGhost,
        title: "The Lady is a Tramp",
        id: uuidv4(),
        active: false,
        tune: TheLadyIsATramp,
        bio : <ul>
            <li>Born in 1933 Brattleboro, VT</li><br/>
            <li>Moved to LA in 1949</li><br/>
            <li>Played in the bands of Stan Kenton, Woody Herman, Billy May, Charlie Barnet, and Shelly Manne</li><br/>
            <li>Also recorded with the Mel Lewis-Pepper Adams Quintet, Lennie Niehaus, and Elmo Hope’s quintet</li><br/>
            <li>Doubled on valve trombone</li><br/>
            <li>Gravitated to the studios in the 1960s</li><br/>
            <li>Ultimately dropped out of music by 1968</li><br/>
            <li>Very underrated</li><br/>
            <li>Born in 1933 Brattleboro, VT</li><br/>
            <li>Moved to LA in 1949</li><br/>
            <li>Played in the bands of Stan Kenton, Woody Herman, Billy May, Charlie Barnet, and Shelly Manne</li><br/>
            <li>Also recorded with the Mel Lewis-Pepper Adams Quintet, Lennie Niehaus, and Elmo Hope’s quintet</li><br/>
            <li>Doubled on valve trombone</li><br/>
            <li>Gravitated to the studios in the 1960s</li><br/>
            <li>Ultimately dropped out of music by 1968</li><br/>
            <li>Very underrated</li><br/>
        </ul>
        },
        {
        name: "Jack Sheldon",    
        vid: RunBuddy,
        ghostVid: RunBuddyGhost,
        title: "You Fascinate Me So",
        id: uuidv4(),
        active: false,
        tune: YouFascinateMeSo,
        bio : <ul>
            <li>Born in 1931 Jacksonville, FL</li><br/>
            <li>Settled in LA in 1952 after two years in the Air Force band</li><br/>
            <li>Played in the bands of Benny Goodman and Stan Kenton</li><br/>
            <li>Featured him on “The Shadow of Your Smile,” from the 1965 movie “The Sandpiper”</li><br/>
            <li>Played in and led small groups with Shelly Manne, Art Pepper, Dexter Gordon, Gerry Mulligan, Curtis Counce, and many others</li><br/>
            <li>Long time band leader for The Merv Griffin Show</li><br/>
            <li>Featured vocalist on School House Rock's Conjunction Junction, I'm Just a Bill, and Mr. Morton</li><br/>
            <li>Starred in the sitcom “Run, Buddy, Run,” in the 1966-67 television season</li><br/>
            <li>Also known for his comedy and many movie appearances</li><br/>
            <li>Made cameo appearances in 'Gilligan's Island,' 'I Spy,' 'Marcus Welby, M.D.,' 'Petticoat Junction,' 'Adam-12,' 'The Simpsons,' 'Family Guy,' and 'Star Trek: The Next Generation'</li><br/>
            <li>‘If I’ve got a couple making passionate love on screen and I’m writing the score, it’s Jack Sheldon’s trumpet I want.’ - Henry Mancini</li><br/>
            <li>Born in 1931 Jacksonville, FL</li><br/>
            <li>Settled in LA in 1952 after two years in the Air Force band</li><br/>
            <li>Played in the bands of Benny Goodman and Stan Kenton</li><br/>
            <li>Featured him on “The Shadow of Your Smile,” from the 1965 movie “The Sandpiper”</li><br/>
            <li>Played in and led small groups with Shelly Manne, Art Pepper, Dexter Gordon, Gerry Mulligan, Curtis Counce, and many others</li><br/>
            <li>Long time band leader for The Merv Griffin Show</li><br/>
            <li>Featured vocalist on School House Rock's Conjunction Junction, I'm Just a Bill, and Mr. Morton</li><br/>
            <li>Starred in the sitcom “Run, Buddy, Run,” in the 1966-67 television season</li><br/>
            <li>Also known for his comedy and many movie appearances</li><br/>
            <li>Made cameo appearances in 'Gilligan's Island,' 'I Spy,' 'Marcus Welby, M.D.,' 'Petticoat Junction,' 'Adam-12,' 'The Simpsons,' 'Family Guy,' and 'Star Trek: The Next Generation'</li><br/>
            <li>‘If I’ve got a couple making passionate love on screen and I’m writing the score, it’s Jack Sheldon’s trumpet I want.’ - Henry Mancini</li>
        </ul>
        },   
        {
        name: "Buddy Childers",    
        vid: Buddy,
        ghostVid: BuddyGhost,
        title: "Sentimental Sam",
        id: uuidv4(),
        active: false,
        tune: SentimentalSam,
        bio: <ul><li>Born in 1926 Saint Louis, MO</li><br/>
            <li>Joined Stan Kenton's band at 16 and rose to the lead chair after a few months</li><br/>
            <li>Left Kenton's band eight times often to return only weeks later</li><br/>
            <li>In between Kenton stints, he worked for Benny Carter, Tommy Dorsey, Andre Previn, Les Brown, and others</li><br/>
            <li>Settled in Vegas in 1959, LA in 1966</li><br/>
            <li>Later worked with Toshiko Akiyoshi Big Band and was musical director for Frank Sinatra, Jr.</li><br/>
            <li>Born in 1926 Saint Louis, MO</li><br/>
            <li>Joined Stan Kenton's band at 16 and rose to the lead chair after a few months</li><br/>
            <li>Left Kenton's band eight times often to return only weeks later</li><br/>
            <li>In between Kenton stints, he worked for Benny Carter, Tommy Dorsey, Andre Previn, Les Brown, and others</li><br/>
            <li>Settled in Vegas in 1959, LA in 1966</li><br/>
            <li>Later worked with Toshiko Akiyoshi Big Band and was musical director for Frank Sinatra, Jr.</li><br/>
            </ul>
        },
        {
        name: "Who's Who of LA Studio Trumpets",    
        vid: Rugolo,
        ghostVid: RugoloGhost,
        title: "Carnival of Venice",
        id: uuidv4(),
        active: false,
        tune: CarnivalOfVenice,
        bio: <ul>
            <li>**BONUS**</li><br/>
            <li>From the album, Ten Trumpets and Two Guitars</li><br/>
            <li>Arranger: Pete Rugolo</li><br/>
            <li>Trumpet Section:</li><br/>
            <li>Frank Beach</li><br/>
            <li>Conte Candoli</li><br/>
            <li>Pete Candoli</li><br/>
            <li>Don Fagerquist</li><br/>
            <li>Mannie Klein</li><br/>
            <li>Cappy Lewis</li><br/>
            <li>Ollie Mitchell</li><br/>
            <li>Uan Rasey</li><br/>
            <li>Joe Triscari</li><br/>
            <li>Ray Triscari</li><br/>
            <li>appearing elsewhere on the album: Bud Brisbois</li><br/>
            <li>**BONUS**</li><br/>
            <li>From the album, Ten Trumpets and Two Guitars</li><br/>
            <li>Arranger: Pete Rugolo</li><br/>
            <li>Trumpet Section:</li><br/>
            <li>Frank Beach</li><br/>
            <li>Conte Candoli</li><br/>
            <li>Pete Candoli</li><br/>
            <li>Don Fagerquist</li><br/>
            <li>Mannie Klein</li><br/>
            <li>Cappy Lewis</li><br/>
            <li>Ollie Mitchell</li><br/>
            <li>Uan Rasey</li><br/>
            <li>Joe Triscari</li><br/>
            <li>Ray Triscari</li><br/>
            <li>appearing elsewhere on the album: Bud Brisbois</li><br/>
            </ul>
        },    
    ]
}

export default musicSource;