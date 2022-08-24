import { configureStore } from "@reduxjs/toolkit";
import NomeUserSlice from "../feature/Nome/NomeSlice";
import NomeFriend from "../feature/Nome/NomeFriend"

export default configureStore({
    reducer: {
        nomeUser : NomeUserSlice,
        nomeFriend: NomeFriend,
    },
})