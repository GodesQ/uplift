import {register} from "../services/register";
import { requested_url } from "../../../utils/url";

export default async function useRegister(dataForm) {
    return await register(requested_url, dataForm);
}
