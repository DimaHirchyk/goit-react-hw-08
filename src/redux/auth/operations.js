import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async () => {});

export const logIn = createAsyncThunk("auth/login", async () => {});

export const logOut = createAsyncThunk("auth/logout", async () => {});
