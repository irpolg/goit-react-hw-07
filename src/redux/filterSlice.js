//ТЗ
// Слайс фільтра
// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().

// Екшени слайса для використання в dispatch:
//      changeFilter - зміна значення фільтра в властивості name

// Оголоси функції-селектори для використання в useSelector:
//      selectNameFilter - повертає значення фільтра з властивості name.

// З файла слайса експортуй редюсер, а також його екшени і селектори.

import { createSlice } from '@reduxjs/toolkit'

const initialFilterState = { name: "" };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        changeFilter(state, {payload}) {
            state.name = payload
        }
    }
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectNameFilter = state => state.filter.name;