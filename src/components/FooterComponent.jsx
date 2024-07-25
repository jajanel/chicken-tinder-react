 import { Container, Button } from 'react-bootstrap';

 export default function FooterComponent() {
     return (
         <>
         <div className='text-center text-white bg-secondary'>
             <Container className='p-4 pb-0'>
                 <section className=''>
                     <p className='d-flex justify-content-center align-items-center'>
                         <span className='me-3'>Register for free</span>
                         <Button type='button' className="btn-light" rounded>
                             Sign up!
                         </Button>
                     </p>
                 </section>
             </Container>

             <div className='text-center p-3'>
                 © 2024 Copyright:
                 <a className='text-white' href='#'>
                     Chicken Tender
                 </a>
             </div>
         </div>
         </>
     );
 }