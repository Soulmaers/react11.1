import { createSlice } from '@reduxjs/toolkit';

const data = [
    'Прообразом Чубакки стал пес режиссера',
    'Актерам разрешили подобрать любимый цвет для своих световых мечей',
    'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
    'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок'
]

const initialState = {

    items: []
}
const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = data.slice(0, action.payload);
        }
    }



})


export const { setItems } = itemsSlice.actions
export default itemsSlice.reducer