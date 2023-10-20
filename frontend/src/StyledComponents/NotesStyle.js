import { styled } from "styled-components"
import { Btn, Box2 } from "./general"

export const PrimerayBtn = styled(Btn)`
position: absolute;
padding: 13px 13px;
background: #e99090;
border-radius: 13px;
right: 3%;
bottom: 5%;
`

export const FontBtn = styled(Btn)`
position: absolute;
padding: 5px 8px;
background: #e9e9e9;
border-radius: 8px;
font-weight: 500;
right: 31%;
bottom: 10%;
`

export const EditNote = styled(Box2)`
position: relative;
padding: 13px;
`

export const FontList = styled.ul`
padding:0;
margin:0;
margin-top: 8px;
position: absolute;
display: flex;
align-items: center:
flex-direction: row;
width: 34px;
left: 3%;
bottom: 34%;
`

export const Fontitem = styled.li`
border-radius: 8px;
list-style: none;
background: #e9e9e9;
dispaly: inline-block;
color: #0d1522;

font-size: small;
padding: 2px;
margin: 3px;
cursor: pointer;
transition: all .21s;
&:hover {
    transform: scale(1.05);
}
`
