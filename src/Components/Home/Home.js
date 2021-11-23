import './Home.css'
import slidesImage from './slidesimage.jpeg'
const Home = () =>{
    return(
        <>
        <div className="Home">
            <div className="home-info">
                <h3 >How we can Help</h3>
                <p>Condimentum vel vestibulum, facilisi euismod id ornare fermentum ac. Bibendum turpis faucibus faucibus lectus cursus elementum. Suscipit mauris viverra pellentesque nisi,diam rhoncus vitae purus.Sed purus sed lectus.</p>

                <li>STEP 1<span className='span-item-home'> SELF ANALYSIS</span></li>
                <li>STEP 2<span className='span-item-home'> SELF ANALYSIS</span></li>
                <li>STEP 3<span className='span-item-home'> SELF ANALYSIS</span></li>
                <li>STEP 4<span className='span-item-home'> SELF ANALYSIS</span></li>
            </div>
            <div className="home-page-images">
                <img src={slidesImage} alt="slides" draggable='false'/>
            </div>
        </div>
        </>
    )
}

export default Home;