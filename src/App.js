import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { companyList } from './companies';
import CompanyCard from './CompanyCard';
import AppJumboTron from './AppJumboTron';

function App() {
  return (
    <>
      <AppJumboTron />
      <Container style={{textAlign: 'center', marginLeft: '30%', marginBottom: '4em'}}>
        {companyList.map((company) => {
          const { name, address, contact, image, products, website, description } = company;
          return (
            <Row style={{marginBottom: '2em'}}>
              <CompanyCard 
                name={name}
                address={address}
                contact={contact}
                image={image}
                products={products}
                website={website}
                description={description}
              />
            </Row>
          )
          
        })}
      </Container>
    </>
  );
}

export default App;
