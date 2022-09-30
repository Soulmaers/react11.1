
import { useDispatch } from 'react-redux'
import { setItems } from '../features/itemSlice'


export default function Input() {

    const dispatch = useDispatch();


    return (
        <div>
            <input className='input'
                type='number'
                min='0' max='5'
                onChange={(e) => { dispatch(setItems(e.target.value)) }}
            />

        </div>
    )

}