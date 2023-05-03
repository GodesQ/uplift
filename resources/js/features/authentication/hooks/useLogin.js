import {login} from "../services/login";
import { local_url } from "../../../utils/url";

export default async function useLogin(dataForm) {
    return await login(local_url, dataForm);
}
