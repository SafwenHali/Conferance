import axios from "axios";

const CONFERENCE_API_BASE_URL="http://localhost:8090/Conference/api/";

class ConfService{

    getAllConf(){
        return axios.get(CONFERENCE_API_BASE_URL);
    }
}
export default new ConfService();