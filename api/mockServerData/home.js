import Mock from 'mockjs'

let List = []

export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    Apple: Mock.Random.float(100, 800, 0, 0),
                    Vivo: Mock.Random.float(100, 800, 0, 0),
                    Oppe: Mock.Random.float(100, 800, 0, 0),
                    Huawei: Mock.Random.float(100, 800, 0, 0),
                })
            )
        }
        return {
            code: 200,
            data: {
                //饼图
                videoData: [
                    {
                        name: 'xiaomi',
                        value: 2999
                    }, {
                        name: 'Vivo',
                        value: 1999
                    }, {
                        name: 'apple',
                        value: 6999
                    }, {
                        name: 'huawei',
                        value: 4999
                    }
                ],

                //柱状图
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 3,
                        active: 20
                    },
                    {
                        data: '周三',
                        new: 7,
                        active: 399
                    },
                ],

                //拆线图
                orderData: [
                    {
                        date: ['201901', '201902', '201903', '201904'],
                        data: List
                    },
                ],

                //
                tableData: [
                    {
                        name: 'Vivo',
                        addr: 300,
                        month: 3500,
                        total: 2200,
                    },
                    {
                        name: 'xiaomi',
                        todayBuy: 300,
                        month: 3100,
                        total: 2600,
                    },
                    {
                        name: 'apple',
                        todayBuy: 300,
                        month: 3200,
                        total: 2200,
                    },
                    {
                        name: 'huawei',
                        todayBuy: 300,
                        month: 3500,
                        total: 2700,
                    },
                ]
            },
        }
    }

}