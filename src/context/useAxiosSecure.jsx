import axios from "axios";
import { useContext, useEffect } from "react";
import authContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://wirting-server.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    const {signOutUser} = useContext(authContext)
    const navigate = useNavigate()
    useEffect(() =>{
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {

            if(error.status === 401 || error.status === 403) {
                signOutUser()
                .then(() => {
                    navigate('/login')
                })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;
