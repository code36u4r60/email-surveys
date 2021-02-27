import "reflect-metadata";
import { networkInterfaces } from 'os';
import { app } from './app';

app.listen(3333, () => {
    const nets = networkInterfaces();
    const ip = nets["enp0s3"][0].address;
    console.log(`Server is running! host:${ip}:3333`)
})

