import auth from './img/auth.svg'
import box from './img/box.svg'
import bubble from './img/bubble.svg'
import convert from './img/convert.svg'
import dataocean from './img/dc.svg'
import dispatch from './img/dispatch.svg'
import es from './img/es.svg'
import feature from './img/feature.svg'
import freyr from './img/freyr.svg'
import galaxy from './img/galaxy.svg'
import graphNode from './img/graph-node.svg'
import kafka from './img/kafka.svg'
import lines from './img/lines.svg'
import math from './img/math.svg'
import model from './img/model.svg'
import mysql from './img/mysql.svg'
import network from './img/network.svg'
import cloud from './img/cloud.svg'
import realtime from './img/realtime.svg'
import road from './img/road.svg'
import ship from './img/ship.svg'
import stream from './img/stream.svg'
import turing from './img/turing.svg'
import unite from './img/unite.svg'
import datax from './img/datax.svg'

export const LOGO_MAP = {
    auth: {
        list: ["bridge"],
        keyword: ["认证", "权限", "统一登录"]
    },
    box: {
        list: ["storage"],
        keyword: ["盒子", "资源"]
    },
    bubble: {
        list: ["bi"],
        keyword: ["气泡图", "bi"]
    },
    convert: {
        list: ["convert"],
        keyword: ["转换"]
    },
    dataocean: {
        list: ["dataocean"],
        keyword: ["大数据"]
    },
    dispatch: {
        list: ["dispatch"],
        keyword: ["调度"]
    },
    es: {
        list: ["es"],
        keyword: ["es"]
    },
    feature: {
        list: ["feature"],
        keyword: ["特征", "节点"]
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
        list: ["graph-node", 'collect'],
        keyword: ["数据交换", "graph-node"]
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
    model: {
        list: ["modelex"],
        keyword: ["模型库"]
    },
    mysql: {
        list: ["mysql"],
        keyword: ["mysql"]
    },
    network: {
        list: ["network", "qiming", "graph", "orion"],
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
    road: {
        list: ["road", "smart-highroad"],
        keyword: ["路", "高速"]
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
    },
    datax: {
        list: ["datax"],
        keyword: ["数据交换"]
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
    auth,
    box,
    bubble,
    convert,
    dataocean,
    dispatch,
    es,
    feature,
    freyr,
    galaxy,
    graphNode,
    kafka,
    lines,
    math,
    model,
    mysql,
    network,
    cloud,
    realtime,
    road,
    ship,
    stream,
    turing,
    unite,
    datax,
};

export const SYSTEM_MAP = {
    bridge: {
        name: '权限管理',
        enName: 'Bridge',
        logo: LOGO_ICON_MAP.auth,
        sort: 1
    },
    baldur: {
        name: '统一API服务',
        enName: 'baldur',
        logo: LOGO_ICON_MAP.unite,
        sort: 2
    },
    model: {
        name: '模型平台',
        enName: 'model',
        logo: LOGO_ICON_MAP.math,
        sort: 8
    },
    modelex: {
        name: '模型资产',
        enName: 'model',
        logo: LOGO_ICON_MAP.model,
        sort: 8
    },
    orion: {
        name: '知识图谱',
        enName: 'Orion',
        logo: LOGO_ICON_MAP.network,
        sort: 10
    },
    turing: {
        name: '机器学习',
        enName: 'Machine Learning',
        logo: LOGO_ICON_MAP.turing,
        sort: 10
    },
    convert: {
        name: '数据治理平台',
        enName: 'convert',
        logo: LOGO_ICON_MAP.convert,
        sort: 9
    },
    dataocean: {
        name: '大数据平台',
        enName: 'Data Ocean',
        logo: LOGO_ICON_MAP.dataocean,
        sort: 10
    },
    indicator: {
        name: '离线指标',
        enName: 'indicator',
        logo: LOGO_ICON_MAP.graphNode,
        sort: 10
    },
    dispatch: {
        name: '调度中心',
        enName: 'dispatch',
        logo: LOGO_ICON_MAP.dispatch,
        sort: 10
    },
    feature: {
        name: '特征库平台',
        enName: 'feature',
        logo: LOGO_ICON_MAP.feature,
        sort: 10
    },
    storage: {
        name: '对象存储',
        enName: 'storage',
        logo: LOGO_ICON_MAP.box,
        sort: 12
    },
    bi: {
        name: 'BI系统',
        enName: 'bi',
        logo: LOGO_ICON_MAP.bubble,
        sort: 13
    },
    'smart-highroad': {
        name: '智慧高速分析平台',
        enName: 'smart-highroad',
        logo: LOGO_ICON_MAP.road,
        sort: 14
    },
    collect: {
        name: '数据交换',
        enName: 'datax',
        logo: LOGO_ICON_MAP.graphNode,
        sort: 15
    },
    datax: {
        name: '数据资产',
        enName: 'datax',
        logo: LOGO_ICON_MAP.datax,
        sort: 15
    }
};
