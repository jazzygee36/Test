import styled from 'styled-components'
import {Container,Row,Card} from "react-bootstrap"
import {GoPlusSmall} from 'react-icons/go'


export const Section = styled(Container)`     
`
export const Grid = styled(Row)`
   width:67%;
   margin:auto;
   align-items: flex-start;
`
export const Col = styled.div`
    flex: ${props => props.size};
    margin-bottom: 2rem;   
`
export const Inner = styled(Card)`
    width: 224px;
    height: 329px;
    filter: drop-shadow(5px 1px 3px rgba(0, 0, 0, 0.1));
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: auto;
`
export const Image = styled.img`
    width: 100%;   
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 45%;
`
export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0.4rem;
    padding-right: 0.9rem;
    margin-top: 0.8rem;
    font-weight: 700;
    margin-bottom: 0;
    font-size: 13px;
`
export const ItemsName = styled.h6`
    font-size: 13px;
    font-weight: 700;
`
export const Details = styled.div`
    font-size: 10px;
    padding-left: 0.4rem;
    margin-top: -0.4rem;
`
export const Description = styled.h6`
    font-size: 6.6px;
    padding-left: 0.4rem;
    margin-top: 0.4rem;
    padding-right: 0.4rem;
`
export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const Rate = styled.div`
    margin-left: 0.7rem;
`

export const Icons = styled(GoPlusSmall)`
    background-color: #ffa500;
    width: 52px;
    height: 80%;
    color: #fff;
    border-top-left-radius: 10px;
`
export const Button = styled.button`
    border-radius: 17px;
    background-color: #ffa500;
    border: none;
    color: #ffffff;
    padding: 10px 25px 10px 25px;
    font-size: 11px;
    margin: auto;
`