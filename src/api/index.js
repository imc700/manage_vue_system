import request from '../utils/request';
import  jwt  from  'jsonwebtoken'

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const login = query => {
    return request({
        url: '/ks-auth/auth/userlogin',
        method: 'post',
        data: query
    });
};

export const logout = () => {
    return request({
        url: '/ks-auth/auth/userlogout',
        method: 'get'
    });
};

export const getuserjwt = () => {
    return request({
        url: '/ks-auth/auth/userjwt',
        method: 'get'
    });
};


export const getUserInfoFromJwt = jwtdata => {
    if(!jwt){
        return ;
    }
    var jwtDecodeVal = jwt.decode(jwtdata);
    console.log("###parse_jwt",jwtDecodeVal);
    if (!jwtDecodeVal) {
        return ;
    }
    let activeUser={}
    activeUser.utype = jwtDecodeVal.utype || '';
    activeUser.username = jwtDecodeVal.name || '';
    activeUser.userpic = jwtDecodeVal.userpic || '';
    activeUser.userid = jwtDecodeVal.userid || '';
    activeUser.authorities = jwtDecodeVal.authorities || '';
    activeUser.uid = jwtDecodeVal.jti || '';
    activeUser.jwt = jwt;
    return activeUser;
}

