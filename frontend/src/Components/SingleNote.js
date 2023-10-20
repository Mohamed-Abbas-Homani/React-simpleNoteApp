import {  Btn, SmallText } from '../StyledComponents/general';
import { styled } from 'styled-components';
import { BiTrashAlt } from "react-icons/bi"

const SingleNote = ({note, handleEdit, Delete}) => {
  const {body, id, updated} = note || {}

  return (
    <Note  width="100%" height="25%" minHeight="21%"> 
        <TextPart >
          {body}
        </TextPart>
        <Part>
          <EditBtn onClick={() => handleEdit(note)}>Edit</EditBtn>
          <DeleteBtn onClick={Delete(id)}/>
          <SmallText>
            {new Date(updated).toLocaleTimeString([],{ hour: 'numeric', minute: 'numeric'})}
          </SmallText>
        </Part>
    </Note>
  );
}

const DeleteBtn = styled(BiTrashAlt)`
position: absolute;
color: #e9e990;
font-size: large;
right: 5%;
top: 8%;
cursor: pointer;
`

const EditBtn = styled(Btn)`
margin-left: 95%;
padding: 8px 13px;
background: #e9e990;
border-radius: 8px;
`

const Note = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
margin: 13px;
width: ${props => props.width};
padding: 13px;
position: relative;
border-radius: 13px;
background: #599090;
`

const Part = styled.div`
postion: relative;
width: 89%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
padding: 8px;
`

const TextPart = styled.div`
postion: relative;
width: 89%;
padding: 8px;
`

export default SingleNote;