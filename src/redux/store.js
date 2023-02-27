import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import adminLoginPermissionReducer from './features/others/admin/adminPermissionSlice';
import prescriptionSlice from './features/others/prescriptionSlice';
import receptionistSlice from './features/others/receptionistSlice';

const customizedMiddleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false
});
export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminLoginPermission: adminLoginPermissionReducer,
    prescription: prescriptionSlice,
    receptionist: receptionistSlice,
    middleware: customizedMiddleware
  }
});
