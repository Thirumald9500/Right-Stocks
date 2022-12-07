import axios from "axios";

const main_url ="http://127.0.0.1:3001/";

const login_url="login";

const register_url = "register";

const home_url = "home2";

const Company_details_url = "companydetails";

const Login_post = (data)=>{
    console.log('insidepost');
    return axios.post(main_url+login_url,data)
}
const Register_post = (data)=>{
    console.log(data,"service");
    return axios.post(main_url+register_url,data)
}
const Home = () => {
    console.log('in home');
    return axios.post(main_url+home_url)
}

const Company_details = () => {
    return axios.get(main_url+Company_details_url)
}

export {Login_post,Register_post,Home,Company_details}