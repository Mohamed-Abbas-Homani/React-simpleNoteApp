import styled from "styled-components"

export const Global = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e9e9e9;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

export const Box = styled.div`
  ${props => props.noflex? "" : `
  display: flex;
  justify-content: ${props => props.jc};
  align-items: center;
  flex-direction: ${props.row? "row":"column"};
  `}
  
  padding: 8px;
  margin: 13px;
  width: ${props => props.width};
  height: ${props => props.height};
 
`
export const Box0 = styled(Box)`
padding:0;
margin:0;
border-radius: 13px;
  overflow-y: scroll;
  overflow-x: hidden;
&::-webkit-scrollbar {
  display: none;
}
`

export const Box1 = styled(Box)`
  position: relative;
  border-radius: 21px;
  background: #e9e9e9;
  box-shadow:  8px 8px 21px #c6c6c6,
             -8px -8px 21px #ffffff,
             inset -3px  -3px 3px rgba(0, 0, 0, .13),
             inset 3px 3px 3px rgba(255, 255, 255, .13);

`

export const Box2 = styled(Box)`
padding: 8px;
position: relative;
border-radius: 13px;
background: #599090;

`

export const Text = styled.p`
letter-spacing: 1px;
color: #0d1522;
word-wrap: break-word;
` 

export const Btn = styled.button`
border: none;
outline: none;
cursor: pointer;
letter-spacing: 1px;
color: #0d1522;
transition: all 0.34s;

&:hover {
  transform: scale(1.05);
}
`

export const SmallText = styled.p`
position: absolute;
letter-spacing: 1px;
color: #e9e990;
display: inline-block;
font-size: small;
left: 5%;
bottom: 5%;
`



export const TextArea = styled.textarea`
position: absolute;
border: none;
outline: none;
background: transparent;
letter-spacing: 1px;
color: #0d1522;
font-size: 1.13em;
resize: none;
font-family: ${props => props.font}
overflow-y: scroll;
&::-webkit-scrollbar {
  display: none;
}
&::placeholder {
  color:  #505966;

}
`
