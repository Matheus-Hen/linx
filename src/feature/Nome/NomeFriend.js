import  {createSlice} from '@reduxjs/toolkit'

export const NomeSlice = createSlice({
    name: 'nomeFriend',
    initialState:{
        value: ''
    },
    reducers:{
        updateNameFriend: (state, valueNew) =>{
            state.value = valueNew.payload
        }
    }
})

export const {updateNameFriend} = NomeSlice.actions
export default NomeSlice.reducer