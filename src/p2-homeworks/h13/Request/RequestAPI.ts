import axios from "axios"




export type RequestType = {
  errorText: string;
  info: string;
  yourBody: { success: boolean;}
  yourQuery: {};
}

export const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

    export const RequestAPI = {

        requestWithCheckbox(success: boolean) {
            return instance.post<RequestType>(`auth/test`, {success})
        }
    }