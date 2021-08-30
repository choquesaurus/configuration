
import { Server , listenerServer } from '../src/server';
import supertest from 'supertest';
// import express from 'express'
// const app = express();
const api = supertest(Server.app);

test('Saludo', async ()=>{
 
   await api.get('/Saludo').expect(200);
 
});

afterAll(()=>{
    listenerServer.close();
})