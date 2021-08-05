import React from 'react'
import Section from './Section'
import './Home.css'


function Home() {
    return (
        <div className="home">
          <Section 
          title="Model S"
          bg="http://localhost:3000/static/media/model-s.b65171b9.jpg"
          description="Order Online for Touch Delivery"
          lb="Custom Order"
          rb="Exesting Inventory"
          />
          <Section
          title="Model Y"
          bg="http://localhost:3000/static/media/model-y.30acb76a.jpg" 
          description="Order Online for Touch Delivery"
          lb="Custom Order"
          rb="Exesting Inventory"/>
          <Section 
          title="Model 3"
          bg="http://localhost:3000/static/media/model-3.30651f79.jpg"
          description="Order Online for Touch Delivery"
          lb="Custom Order"
          rb="Exesting Inventory"/>
          <Section 
          title="Model X"
          bg="http://localhost:3000/static/media//model-x.25937b94.jpg"
          description="Order Online for Touch Delivery"
          lb="Custom Order"
          rb="Exesting Inventory"
          /> 
          <Section
          title="Lowest Cost Solar PAnels in America"
          bg="http://localhost:3000/static/media/solar-panel.d7d441d7.jpg"
          description="Money back guarantee"
          lb="Order now"
          rb="Learn more"
          />
          <Section 
           title="Solar for New Roofs"
           bg="	http://localhost:3000/static/media/solar-roof.acfd9045.jpg"
           description="Solar Roof Costs than a new Roof"
           lb="Order now"
           rb="Learn more"
          />
           <Section 
           title="Accessories"
           bg="http://localhost:3000/static/media/accessories.027ada94.jpg"
           
           description=""
           lb="Order now"
          
          />

        </div>
    )
}

export default Home