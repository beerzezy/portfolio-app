import router from "./router";
import axios from "axios";
import store from "./store/store";

router.beforeEach((to, from, next) => {
    //if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
    if (false) {
        if (to.name != "Login") {
            router.push("/Login");
        } else {
            next()
        }
    } else {
        console.log(to)
        if (to.name == "Admin") {
            // if (localStorage.getItem('token') != '') {
            if (true) {
                if (from.name == null) {                                    
                    if (to.path == '/Admin') {
                        router.push('Admin/Home')
                    } else {
                        router.push('User/Home')
                    }
                } else {
                    router.push(from.name)
                }
            } else {
                next()
            }
        } else {
            next();
        }
    }
})