import axios from 'axios';
import { token } from '../pages/Login';

const base: string = "https://api.spotify.com/v1";

export async function getData(path: any): Promise<any> {
    try {
        const res = await axios.get(base + path, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        return res.data
    } catch (error) {
        return { status: 500, error: error};
    }
}