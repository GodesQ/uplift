import {register} from "../services/register";
import { local_url } from "../../../utils/url";

export default async function useRegister(dataForm) {
    return await register(local_url, dataForm);
}
