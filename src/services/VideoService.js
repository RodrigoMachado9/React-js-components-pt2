import {ApiService} from "./ApiService";


const endpoint = 'videos';

// videoservice consome o serviço apiservice....

export const VideoService ={
    list(){
        return ApiService.get(endpoint)

    }
};

