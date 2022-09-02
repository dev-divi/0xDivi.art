import utilStyles from '/styles/utils.module.css';


const SiteResources = () => {
    return (
        <div className={utilStyles.resources}>
            <h3> - Resources - </h3>

            <p> 
                Feeling Stuck in Life <br /> 
                    <ul> 
                        <li> - The Happiness Project </li> 
                        <li>- What to do in Life  </li>
                        <ul>
                            <li>Jordan Peterson Speech  </li>
                        </ul> 
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
                    </ul>


                Skills <br /> 
                <ul> 
                    <li>     - How to Draw </li>
                    <li>     - How to Write </li>
                    <li>     - How to Code </li>
                    <li>     - How to Learn to Win - Pareto Principle </li>
                </ul>
                
            </p>
        </div> 
     );
}
 
export default SiteResources;
