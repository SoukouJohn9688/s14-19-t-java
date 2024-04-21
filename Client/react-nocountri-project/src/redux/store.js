import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
import authReducer from './Auth/auth'
import notificationsReducer from "./Notifications/notifications";
import gradesReducer from "./Grades/grades"
import attendanceReducer from "./Attendance/attendance"
import calendarReducer from "./Calendar/calendar"
 
const reducers = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    grades: gradesReducer,
    attendance: attendanceReducer,
    calendar: calendarReducer  
});

const persistConfig ={
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);


