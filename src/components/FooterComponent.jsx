 import { Container, Button } from 'react-bootstrap';
 import {Link} from "react-router-dom";

 export default function FooterComponent() {
     return (
         <>
         <div className="text-center text-white bg-secondary">
             <Container className="p-4 pb-0">
                 <section>
                     <p className="d-flex justify-content-center align-items-center">
                         <span className="me-3">Register for free</span>
                         <Button type="button" className="btn-light link-dark" as={Link} to="/login" rounded>
                             Sign up!
                         </Button>
                     </p>
                 </section>
             </Container>

             <div className='text-center p-3'>

                 <Link as={Link} className="link-light" to="/">
                      Chicken Tender - match with the hottest cocks and chicks
                 </Link>
             </div>
         </div>
         </>
     );
 }