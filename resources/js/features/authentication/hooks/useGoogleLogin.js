import { googleLogin } from "../services/login";
import { requested_url } from "../../../utils/url";

export default async function useGoogleLogin() {
    return await googleLogin(requested_url);
}
