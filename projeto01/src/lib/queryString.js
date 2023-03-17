const keyAndValueToString = ([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
        throw new Error("Please check your params");
    }
    return `${key}=${value}`;
};

export function queryString(obj) {
    return Object.entries(obj).map(keyAndValueToString).join("&");
}

export function parse(value) {
    return Object.fromEntries(
        value.split("&").map((item) => {
            let [key, value] = item.split("=");
            if (value.indexOf(",") > -1) {
                value = value.split(",");
            }

            return [key, value];
        })
    );
}
