import utilStyles from '/styles/utils.module.css';


const SiteResources = () => {
    return (
        <div className={utilStyles.resources}>
            <h3> - Life Resources - </h3>

            <p>  [To be updated with links] <br /> <br /> 
                Feeling Stuck in Life <br /> 
                    <ul> 
                        <li><a  className={utilStyles.woodlink} 
                        href="https://gretchenrubin.com/books/the-happiness-project/about-the-book/">- The Happiness Project  </a> </li>
                        <li> - What to do in Life  </li>
                        <ul>
                            <li>
                            <a  className={utilStyles.woodlink} href="https://youtu.be/wqEsTPaUZF0">- Jordan Peterson Speech - YouTube</a>   </li>
                        </ul> 

                        <li> - Searching for Meaning</li>  
                            <ul> <li><a  className={utilStyles.woodlink} href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning">- Man&apos;s Search for Meaning  </a></li></ul>
                    </ul>

                Searching for Truth <br />
                    <ul> 
                        <li> - The Word </li> 
                            <ul> 
                                <li> <a className={utilStyles.woodlink} href="https://www.bible.com/bible/116/PRO.1.NLT">- Solomon's Proverbs </a>  </li>
                                <li> <a className={utilStyles.woodlink} href="https://www.bible.com/bible/206/PSA.1.WEBUS">- David's Psalms </a>  </li>
                                <li> <a className={utilStyles.woodlink} href="https://www.biblegateway.com/passage/?search=Matthew%205-7&version=NIV"> - Jesus's Sermon on the Mount </a>  </li>
                            </ul>
                        <li> - The Way  </li> 
                            <ul> 
                                <li> <a className={utilStyles.woodlink} href="https://www.youtube.com/watch?v=73_Voet2fnc&ab_channel=TheCrucible">- Narrated - YouTube</a> </li> 
                                <li><a className={utilStyles.woodlink} href="https://www.unl.edu/prodmgr/NRT/Tao%20Te%20Ching%20-%20trans.%20by%20J.H..%20McDonald.pdf">- Translation 1 - PDF</a></li> 
                                <li> Translation 2</li> 
                                <li> Bhagwan teachings </li> 
                                <li> Ram Dass teaching </li> 
                                <li> Other teachings </li> 
                            </ul> 
                        <li> - Zen </li> 
                            <ul> 
                                <li><a className={utilStyles.woodlink} href="https://www.goodreads.com/en/book/show/514210.The_Way_of_Zen">- The Way of Zen</a> </li>
                            </ul>
                        <li> - You</li>
                            <ul> 
                                <li> Archetypal Psychology</li>
                                <ul> 
                                    <li> <a className={utilStyles.woodlink} href="https://www.amazon.com/King-Warrior-Magician-Lover-Rediscovering/dp/0062506064">- King, Warrior, Magician, Lover  </a>  </li>
                                    <li> The Song of Eve</li>
                                    
                                </ul>
                            </ul>
                    </ul>
            </p>
        </div> 
     );
}
 
export default SiteResources;
