import  {createSlice} from '@reduxjs/toolkit'

export const NomeSlice = createSlice({
    name: 'nomeUser',
    initialState:{
        value: ''
    },
    reducers:{
        updateName: (state, valueNew) =>{
            state.value = valueNew.payload
        }
    }
})

export const {updateName} = NomeSlice.actions
export default NomeSlice.reducer