
import { Button, Card, CardImg } from 'react-bootstrap';

type SideCardProps={

    banner:string
}

export function SideCard(props: SideCardProps)
{


    return(
       
      <div>
        <Card>
         
         <Card.Img variant="top" width="100%" src={props.banner} alt="banner" />
            <Card.Body>
            <Card.Title className="h3 mb-2 pt-2 font-weight-bold text-secondary">Card Title</Card.Title>
        
        <Card.Subtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          Web Developer, Brazil
        </Card.Subtitle>
        <Card.Text
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          Full-stack web developer
        </Card.Text>
       
      </Card.Body>
    </Card>

      </div>
    )
}