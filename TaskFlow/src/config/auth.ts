import VueJwtDecode from 'vue-jwt-decode';
import type {User} from "@/config/user";
export const TOKEN_KEY = "taskflow";
export const BASE_URL = "https://localhost:7084/api/v1";

export const getUserFromToken = (): User | null => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        const decodedToken: any = VueJwtDecode.decode(token);
        return {
            username: decodedToken.username,
            name: decodedToken.firstName + ' ' + decodedToken.lastName,
            email: decodedToken.email
        };
    }
    return null;
};

export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
    },
};

// export const isLogged = () => {
//     const token = localStorage.getItem(TOKEN_KEY);
//     return token && !isExpired(token);
// };
export const logoutUser = (): void => {
    localStorage.removeItem(TOKEN_KEY);
};
