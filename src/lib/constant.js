export const LOGO_MAP = {
    auth: {
        list: ["bridge"],
        keyword: ["认证", "权限", "统一登录"]
    },
    box: {
        list: ["storage"],
        keyword: ["盒子", "资源"]
    },
    convert: {
        list: ["convert"],
        keyword: ["转换"]
    },
    dc: {
        list: ["dataocean"],
        keyword: ["大数据"]
    },
    es: {
        list: ["es"],
        keyword: ["es"]
    },
    freyr: {
        list: ["handle"],
        keyword: ["天座"]
    },
    galaxy: {
        list: ["galaxy"],
        keyword: ["银河"]
    },
    graphNode: {
        list: ["graph-node"],
        keyword: ["graph-node"]
    },
    kafka: {
        list: ["kafka"],
        keyword: ["kafka"]
    },
    lines: {
        list: ["lines", "licenx"],
        keyword: ["神盾"]
    },
    math: {
        list: ["math"],
        keyword: ["math"]
    },
    mysql: {
        list: ["mysql"],
        keyword: ["mysql"]
    },
    network: {
        list: ["network", "qiming", "graph"],
        keyword: ["图谱"]
    },
    cloud: {
        list: ["cloud", "realtime"],
        keyword: ["云", "实时计算"]
    },
    realtime: {
        list: ["realtime"],
        keyword: ["实时计算"]
    },
    ship: {
        list: ["ship"],
        keyword: ["船"]
    },
    stream: {
        list: ["stream"],
        keyword: ["流计算"]
    },
    turing: {
        list: ["turing"],
        keyword: ["机器学习", "图灵"]
    },
    unite: {
        list: ["baldur"],
        keyword: ["统一服务"]
    }
};

export const getNameByType = (type) => {
    let logoName = "box";
    Object.keys(LOGO_MAP).map(txt => {
        LOGO_MAP[txt]["list"].map(name => {
            if (name === type) {
                logoName = txt;
            }
        })
    })
    return logoName;
};

export const LOGO_ICON_MAP = {
    auth: require("./img/auth.svg"),
    box: require("./img/box.svg"),
    convert: require("./img/convert.svg"),
    dc: require("./img/dc.svg"),
    es: require("./img/es.svg"),
    freyr: require("./img/freyr.svg"),
    galaxy: require("./img/galaxy.svg"),
    graphNode: require("./img/graph-node.svg"),
    kafka: require("./img/kafka.svg"),
    lines: require("./img/lines.svg"),
    math: require("./img/math.svg"),
    mysql: require("./img/mysql.svg"),
    network: require("./img/network.svg"),
    cloud: require("./img/cloud.svg"),
    realtime: require("./img/realtime.svg"),
    ship: require("./img/ship.svg"),
    stream: require("./img/stream.svg"),
    turing: require("./img/turing.svg"),
    unite: require("./img/unite.svg")
};

