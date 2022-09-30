import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
export default function List() {


    const list = useSelector((state) => state.item.items)

    return (
        <div className='wrapper'>
            {list.map(el => (<li key={nanoid()}>{el}</li>))}
        </div>
    )

}