
import { Navigation } from './Navigation'
import{Carousel,Container,Row} from 'react-bootstrap';


export function Home()
{

    return(
      <div>

   
   <Navigation component = "Home"/>

   <br></br>
  

       
        <Container >
       
             <Row>
             <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./img/woman.jpg"
                      alt="First slide"
                     />
                   
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                      className="d-block w-100"
                      src="./img/waterfall.jpg"
                       alt="Second slide"
                    />

      
                    </Carousel.Item>
     
                  </Carousel>
   
              </Row>
              <Row>
               <h2>Home</h2>
              </Row>
     
    </Container>

        
      </div>
       
    )

}