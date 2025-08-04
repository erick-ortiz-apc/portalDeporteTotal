import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4FTxr4Ic3asSZOphxxf18J_cRBVzW8sk",
  authDomain: "app-portal-deportivo.firebaseapp.com",
  databaseURL: "https://app-portal-deportivo-default-rtdb.firebaseio.com",
  projectId: "app-portal-deportivo",
  storageBucket: "app-portal-deportivo.firebasestorage.app",
  messagingSenderId: "961459996499",
  appId: "1:961459996499:web:8e42e43689ab0674ff03a6"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};