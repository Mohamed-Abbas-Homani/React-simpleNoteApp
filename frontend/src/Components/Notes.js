import { useState, useCallback, useRef } from 'react';
import SingleNote from './SingleNote';
import { Box0, Box1, SmallText,  Text, TextArea} from '../StyledComponents/general';
import { PrimerayBtn ,EditNote} from '../StyledComponents/NotesStyle';
import useCRUD from '../Hooks/useCRUD';

const Notes = () => {
  const inputNote = useRef();
  const [info, setInfo] = useState({
    input:"",
    creation:true,
    id:""
  })

  const Reset = useCallback(() => {
    setInfo({input:"", creation:true, id:""})
    inputNote.current.focus()
  }, [])

  const SwitchToUpdate = useCallback(note => {
    setInfo({input:note.body, id:note.id, creation:false})
  }, [])

  const [notes, Create, Update, Delete] = useCRUD(
    {
      c:"/api/notes/create/",
      r:"/api/notes",
      u:"/api/notes/update/",
      d:"/api/notes/delete/"
    }, Reset)


  return (
    <Box1 width="377px" height="610px">
    
      <EditNote width="89%" height="25%" noflex>

        <TextArea
          ref={inputNote}
          rows={3} cols={31}
          placeholder='Write your note...'
          value={info.input}
          onChange={e => 
            setInfo({...info, input: e.target.value})
          }
        />
     
        <SmallText>
          {notes.length} notes created.
        </SmallText>
       
        {info.creation ?
        <PrimerayBtn 
          onClick={!!info.input && Create(info.input)}
        >Create</PrimerayBtn>
        :
        <PrimerayBtn 
          onClick={Update(info.id, info.input)}
        >Update</PrimerayBtn>}
      </EditNote>

      <Box0 width="89%" height="79%" >
        {notes.length === 0?
        <Text>Empty!</Text>:
        notes.map((note, i) => 
          <SingleNote
            key={i} note={note} 
            handleEdit={SwitchToUpdate}
            Delete={Delete}/>
        )}
        </Box0>
    </Box1>
  );
};

export default Notes;