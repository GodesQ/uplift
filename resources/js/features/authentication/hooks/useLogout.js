import { requested_url } from "../../../utils/url";
import logout from "../services/logout";

async function useLogout(token) {

    const config = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }

    const response = await logout(requested_url, config);
    return response;
}

export default useLogout;
