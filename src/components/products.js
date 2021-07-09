import React, { useState, useEffect } from 'react'
import { Section, Grid, Col, Inner, Image, Flex, ItemsName, Details, Description, FlexBox, Rate, Icons, Button } from './productStyling'
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'


const Products = () => { 

    const [items, setItems] = useState([ ])

    const loadData = () => {
        axios.get('https://asm-dev-api.herokuapp.com/api/v1/food').then(data => {
            const response = data.data.data.meals
            const arrayOfSix = response.slice(0,6)
            console.log(arrayOfSix)
            setItems(arrayOfSix)
        })
    };

    useEffect(() => {
        loadData()
    }, [])

    return (

        <Section>
            <Grid>
                {items.map((product ) => (
                    <Col size={3} key={product.id}>
                        <Inner >
                            <Image src={product.strMealThumb} />
                            <Flex>
                                <ItemsName>{product.title}</ItemsName>
                                {product.price}
                            </Flex>
                            <Details>{product.strMeal}</Details>
                            <Description>{product.description}</Description>
                            <FlexBox>
                                <Rate>
                                    <ReactStars />
                                </Rate>
                                <Icons></Icons>
                            </FlexBox>
                        </Inner>
                    </Col>
                ))}
                <Button>Learn More</Button>
            </Grid>
        </Section>

    )
}
export default Products
