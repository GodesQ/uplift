import {login} from "../services/login";
import { requested_url } from "../../../utils/url";

export default async function useLogin(dataForm) {
    return await login(requested_url, dataForm);
}
