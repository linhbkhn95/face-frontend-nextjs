import axios from "axios";
import {
    apiBase
} from "./config";

let headers = {
    "Access-Control-Allow-Origin": "*"
};
import localStorage from 'localStorage'
// headers.append("GET", "POST", "OPTIONS");

function preSendData(data) {
    for (var prop in data) {
        let dataElement = data[prop];
        if (
            dataElement == null ||
            dataElement === undefined ||
            dataElement === "null" ||
            dataElement === "" ||
            dataElement === "undefined"
        ) {
            delete data[prop];
        }
    }

    return data;
}
var request = axios.create({
    // baseURL: apiBase,
    headers
});

function requestInterFace() {}
export const get = (endpoint, config = {}, getlocalStorage = true) => {
    if (getlocalStorage && localStorage.getItem("token")) {
        config = {
            ...config,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
    }

    return request.get(endpoint, config);
};
export const post = (
    endpoint,
    data,
    config = {
        headers: null
    }
) => {
    if (localStorage.getItem("token") && !config.headers) {
        config = {
            ...config,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
    }
    data = preSendData(data);

    let formData = new FormData();
    if (data && data.hasFile) {
        config = {
            ...config,
            header: {
                ...config.headers,
                "Content-Type": "multipart/form-data"
            }
        };
        delete data["hasFile"];
        for (var prop in data) {
            if (Array.isArray(data[prop])) {
                data[prop].forEach(dt => {
                    formData.append(prop, dt);
                });
            } else {
                formData.append(prop, data[prop]);
            }

            delete data[prop];
        }
        data = formData;
    }

    return request.post(endpoint, data, config);
};

export const puts = (
    endpoint,
    data,
    config = {
        headers: {}
    }
) => {
    if (localStorage.getItem("token")) {
        config = {
            ...config,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
    }
    return request.put(endpoint, data, config);
};

export const deletes = (
    endpoint,
    data,
    config = {
        headers: {}
    }
) => {
    if (localStorage.getItem("token")) {
        config = {
            ...config,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
    }
    return request.delete(endpoint, config);
};