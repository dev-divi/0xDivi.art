import utilStyles from '/styles/utils.module.css';


const SiteResources = () => {
    return (
        <div className={utilStyles.resources}>
            <h3> - Resources - </h3>

            <p> 
                Feeling Stuck in Life <br /> 
                    <ul> 
                        <li> - The Happiness Project </li>
                        <li> - The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</li>
                        <li>- What to do in Life  </li>
                        <ul>
                            <li>Jordan Peterson Speech  </li>
                        </ul> 

                        <li> - Searching for Meaning</li> 
                            <ul> <li>Man&apos;s Search for Meaning</li></ul>
                    </ul>

                Searching for Truth <br />
                    <ul> 
                        <li> - The Word </li>  
                            <ul> 
                                <li> Proverbs </li>
                                <li> Psalms </li>
                            </ul>
                        <li> - The Way  </li> 
                            <ul> 
                                <li> Narrated </li>
                                <li> Translation 1 </li>
                                <li> Translation 2</li> 
                                <li> Bhagwan teachings </li> 
                                <li> Ram Dass teaching </li> 
                                <li> Other teachings </li> 
                            </ul> 
                        <li> - Zen </li> 
                            <ul> 
                                <li>The Way of Zen</li>
                            </ul>
                        <li> - You</li>
                            <ul> 
                                <li> Archetypal Psychology</li>
                                <ul> 
                                    <li>King, Warrior, Magician, Lover </li>
                                    <li> The Song of Eve</li>
                                    
                                </ul>
                            </ul>
                    </ul>


                Skills <br /> 
                <ul> 
                    <li>     - How to Draw </li>
                    <li>     - How to Write </li>
                    <li>     - How to Code </li>
                    <li>     - How to Animation </li> {/* Scratch */}
                    <li>     - How to Game Design </li>
                    <li>     - How to Graphic Design </li> {/* GIMP */}
                    <li>     - How to Nerd </li> {/* Linux */}
                    <li>     - How to Learn to Win - Pareto Principle </li>
                </ul>
                
            </p>
        </div> 
     );
}
 
export default SiteResources;
