import {login} from "../services/login";

export default async function useLogin(dataForm) {
    return await login(dataForm);
}
