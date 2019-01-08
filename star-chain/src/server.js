/*
 * 后端接口，用于请求数据
 */

//引入express和request
var express = require('express');
var request = require('request');

//定义后端静态服务器 
var app = express();
	app.get("/",(req,res)=>{
		//设置跨域权限
	   res.append("Access-Control-Allow-Origin","*");
		
		var res2 = req.query;
		console.log('res2=',res2)
		console.log('res2=',req.query.nav)

	    // cors
	    if(req.query.nav==='catelist.do'){
		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.nav}`,(err,response,body)=>{
		        // console.log(body);
		       
		        res.send(body);
		    });
	    }else if(req.query.type==='categoodslist.do'){
	    	// res.append("Access-Control-Allow-Origin","*");
		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.type}`,(err,response,body)=>{
		        // console.log(body);
		       
		        res.send(body);
		    });
	    }
});


app.listen(12345)

{,…}
data: {isLastPage: 0, list: [{eptitle: "包邮", goodsId: "5642002", goodsInventory: "1988",…},…], total: 5}
isLastPage: 0
list: [{eptitle: "包邮", goodsId: "5642002", goodsInventory: "1988",…},…]
0: {eptitle: "包邮", goodsId: "5642002", goodsInventory: "1988",…}
eptitle: "包邮"
goodsId: "5642002"
goodsInventory: "1988"
goodsLogo: "http://img.365hele.com/upload/13320/store/566/9771e321-99e2-4cd4-bdf7-a01c15de1945.jpg_middle.jpg"
goodsName: "雀巢怡养中老年营养奶粉400g礼盒装（400g*2袋）"
goodsOrigPrice: "89.00"
goodsPrice: "89.00"
goodsSales: "2374"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "98737"
shopId: "88964"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/33.jpg"
shopName: "怡家安徽怡达综合店"
shopType: "3"
status: "0"
subjectTitle: ""
1: {eptitle: "", goodsId: "5750432", goodsInventory: "600",…}
eptitle: ""
goodsId: "5750432"
goodsInventory: "600"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/1bc0fa49-2955-4770-bb16-dfbd587d91d9.jpg_middle.jpg"
goodsName: "伊利全脂奶粉方便装400g*2"
goodsOrigPrice: "50.00"
goodsPrice: "50.00"
goodsSales: "208"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "99730"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
2: {eptitle: "", goodsId: "5431665", goodsInventory: "7",…}
eptitle: ""
goodsId: "5431665"
goodsInventory: "7"
goodsLogo: "http://img.365hele.com/upload/31766/store/1226/18b93699-5e4f-46a3-a4d8-134a20723770.jpg_middle.jpg"
goodsName: "依云天然矿泉水塑料瓶500ML*24(整箱售卖)包装破损 基地自提"
goodsOrigPrice: "60.00"
goodsPrice: "60.00"
goodsSales: "88"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "91543"
shopId: "116589"
shopLogo: "http://img.365hele.com/upload/31766/store/1226/47e708cb-1924-4270-ac78-ffee743ae3d1.jpg"
shopName: "雷小妹母婴综合店"
shopType: "3"
status: "0"
3: {eptitle: "", goodsId: "5726485", goodsInventory: "1764",…}
eptitle: ""
goodsId: "5726485"
goodsInventory: "1764"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/d632b103-4a87-4f18-a4d2-1550c46e94b9.jpg_middle.jpg"
goodsName: "伊利中老年多维高钙奶粉方便装400g*2"
goodsOrigPrice: "60.00"
goodsPrice: "60.00"
goodsSales: "88"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "99725"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
subjectTitle: ""
4: {eptitle: "包邮", goodsId: "5740445", goodsInventory: "1922",…}
eptitle: "包邮"
goodsId: "5740445"
goodsInventory: "1922"
goodsLogo: "http://img.365hele.com/upload/13320/store/566/dc604ec8-7fde-4881-8cfe-339c6407a1b5.jpg_middle.jpg"
goodsName: "雀巢怡养益护因子中老年奶粉850G，18年2月4号至2月25暂停发货"
goodsOrigPrice: "92.00"
goodsPrice: "92.00"
goodsSales: "78"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "102243"
shopId: "88964"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/33.jpg"
shopName: "怡家安徽怡达综合店"
shopType: "3"
status: "0"
subjectTitle: ""
5: {eptitle: "", goodsId: "5099774", goodsInventory: "934",…}
eptitle: ""
goodsId: "5099774"
goodsInventory: "934"
goodsLogo: "http://img.365hele.com/upload/31753/store/1216/3c20439a-c3ec-4294-aa0f-22d84c0725cf.jpg_middle.jpg"
goodsName: "兰特Lactel全脂纯牛奶1L装早餐奶烘焙原料斯洛文尼亚进口"
goodsOrigPrice: "16.80"
goodsPrice: "16.80"
goodsSales: "66"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "86072"
shopId: "115878"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/31.jpg"
shopName: "川泰食品专营店"
shopType: "3"
status: "0"
subjectTitle: ""
6: {eptitle: "", goodsId: "5100359", goodsInventory: "944",…}
eptitle: ""
goodsId: "5100359"
goodsInventory: "944"
goodsLogo: "http://img.365hele.com/upload/31753/store/1216/fdf48af6-5dcf-4e4d-a279-588077a50f91.jpg_middle.jpg"
goodsName: "兰特Lactel脱脂纯牛奶1L装早餐奶烘焙原料斯洛文尼亚进口"
goodsOrigPrice: "16.80"
goodsPrice: "16.80"
goodsSales: "56"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "86080"
shopId: "115878"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/31.jpg"
shopName: "川泰食品专营店"
shopType: "3"
status: "0"
subjectTitle: ""
7: {eptitle: "包邮", goodsId: "3523353", goodsInventory: "193",…}
eptitle: "包邮"
goodsId: "3523353"
goodsInventory: "193"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/89b7ae86-4d1a-4f6c-b4ae-589df8664ba5.jpg_middle.jpg"
goodsName: "伊利听装中老年奶粉900g"
goodsOrigPrice: "80.00"
goodsPrice: "80.00"
goodsSales: "42"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "61988"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
subjectTitle: ""
8: {eptitle: "包邮", goodsId: "5773461", goodsInventory: "960",…}
eptitle: "包邮"
goodsId: "5773461"
goodsInventory: "960"
goodsLogo: "http://img.365hele.com/upload/32284/store/1496/5a228d8e-d59d-41da-8519-a55da57fa8c0.jpg_middle.jpg"
goodsName: "八马茶业 安溪铁观音茶叶 清香型乌龙茶兰花香新茶 雅韵252g*2盒"
goodsOrigPrice: "88.00"
goodsPrice: "88.00"
goodsSales: "40"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "103931"
shopId: "148006"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/3.jpg"
shopName: "八马茶业旗舰店"
shopType: "3"
status: "0"
9: {eptitle: "包邮", goodsId: "5100358", goodsInventory: "962",…}
eptitle: "包邮"
goodsId: "5100358"
goodsInventory: "962"
goodsLogo: "http://img.365hele.com/upload/31753/store/1216/b9febaa7-0273-43de-8e9e-08041b7a8c68.jpg_middle.jpg"
goodsName: "兰特Lactel低脂纯牛奶1L装早餐奶烘焙原料斯洛文尼亚进口"
goodsOrigPrice: "16.80"
goodsPrice: "16.80"
goodsSales: "38"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "86078"
shopId: "115878"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/31.jpg"
shopName: "川泰食品专营店"
shopType: "3"
status: "0"
subjectTitle: ""
10: {eptitle: "包邮", goodsId: "5740446", goodsInventory: "1963",…}
eptitle: "包邮"
goodsId: "5740446"
goodsInventory: "1963"
goodsLogo: "http://img.365hele.com/upload/13320/store/566/92646563-75dc-40bd-b84c-d101e62befa2.jpg_middle.jpg"
goodsName: "雀巢怡养健心中老年奶粉800g，18年2月4号至2月25暂停发货"
goodsOrigPrice: "116.00"
goodsPrice: "116.00"
goodsSales: "37"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "102240"
shopId: "88964"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/33.jpg"
shopName: "怡家安徽怡达综合店"
shopType: "3"
status: "0"
subjectTitle: ""
11: {eptitle: "包邮", goodsId: "5771306", goodsInventory: "1973",…}
eptitle: "包邮"
goodsId: "5771306"
goodsInventory: "1973"
goodsLogo: "http://img.365hele.com/upload/30488/store/613/5f996935-f59b-436c-8def-e2dadf0a1dc3.jpg_middle.jpg"
goodsName: "德亚/Weidendorf 酸牛奶（200ml*10礼盒）年货礼品"
goodsOrigPrice: "68.00"
goodsPrice: "68.00"
goodsSales: "27"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "103819"
shopId: "88998"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/9.jpg"
shopName: "富海胜食品专营店"
shopType: "3"
status: "0"
12: {eptitle: "", goodsId: "5566015", goodsInventory: "100",…}
eptitle: ""
goodsId: "5566015"
goodsInventory: "100"
goodsLogo: "http://img.365hele.com/upload/32049/store/1376/9d491ea7-8da1-406f-8807-4fef37457e39.jpg_middle.jpg"
goodsName: "椰岛小鲜海南特产果肉椰汁 500g*15 整箱椰子汁 果肉椰汁"
goodsOrigPrice: "90.00"
goodsPrice: "90.00"
goodsSales: "18"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "96018"
shopId: "133010"
shopLogo: "http://img.365hele.com/upload/32049/store/1376/37b2ea43-31b6-47c6-8c7b-612f7443fa25.jpg"
shopName: "椰岛旗舰店"
shopType: "3"
status: "0"
subjectTitle: ""
13: {eptitle: "", goodsId: "5702456", goodsInventory: "499",…}
eptitle: ""
goodsId: "5702456"
goodsInventory: "499"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/de7fe34e-d4a6-4a05-b785-2152f7dec8c6.jpg_middle.jpg"
goodsName: "伊利女士营养奶粉方便装400g*2"
goodsOrigPrice: "55.00"
goodsPrice: "55.00"
goodsSales: "17"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "99728"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
subjectTitle: ""
14: {eptitle: "", goodsId: "5702461", goodsInventory: "2880",…}
eptitle: ""
goodsId: "5702461"
goodsInventory: "2880"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/0f9e0095-82bc-4e96-b958-ea778f4f1461.jpg_middle.jpg"
goodsName: "伊利学生高锌高钙奶粉方便装400g*2"
goodsOrigPrice: "57.00"
goodsPrice: "57.00"
goodsSales: "17"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "99724"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
subjectTitle: ""
15: {eptitle: "", goodsId: "5702460", goodsInventory: "959",…}
eptitle: ""
goodsId: "5702460"
goodsInventory: "959"
goodsLogo: "http://img.365hele.com/upload/30469/store/601/e68dc7a0-db88-4e2c-a000-3434532331b1.jpg_middle.jpg"
goodsName: "伊利高蛋白高钙脱脂奶粉方便装400g*2"
goodsOrigPrice: "55.00"
goodsPrice: "55.00"
goodsSales: "16"
goodsTransfee: 0
goodsType: "1"
isHasCoupon: "0"
productId: "99722"
shopId: "88988"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/57.jpg"
shopName: "怡家浙江军梦综合店"
shopType: "3"
status: "0"
subjectTitle: ""
16: {eptitle: "包邮", goodsId: "5742702", goodsInventory: "1785",…}
eptitle: "包邮"
goodsId: "5742702"
goodsInventory: "1785"
goodsLogo: "http://img.365hele.com/upload/13320/store/566/d4c4e4d6-66ae-4e93-836d-1fd2677cbb3b.jpg_middle.jpg"
goodsName: "雀巢学生奶粉听装1000g，18年2月4号至2月25暂停发货"
goodsOrigPrice: "129.00"
goodsPrice: "129.00"
goodsSales: "15"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "102252"
shopId: "88964"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/33.jpg"
shopName: "怡家安徽怡达综合店"
shopType: "3"
status: "0"
subjectTitle: ""
17: {eptitle: "包邮", goodsId: "5773470", goodsInventory: "985",…}
eptitle: "包邮"
goodsId: "5773470"
goodsInventory: "985"
goodsLogo: "http://img.365hele.com/upload/32284/store/1496/beced1ee-267c-490f-8666-3a0cfc43c632.jpg_middle.jpg"
goodsName: "八马茶业 安溪铁观音 浓香型 乌龙茶茶叶 安溪原产老枞观音300克"
goodsOrigPrice: "70.00"
goodsPrice: "70.00"
goodsSales: "15"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "103939"
shopId: "148006"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/3.jpg"
shopName: "八马茶业旗舰店"
shopType: "3"
status: "0"
18: {eptitle: "包邮", goodsId: "5817008", goodsInventory: "986",…}
eptitle: "包邮"
goodsId: "5817008"
goodsInventory: "986"
goodsLogo: "http://img.365hele.com/upload/32284/store/1496/06aeec60-c6c7-49eb-8ecf-2ca13a563683.jpg_middle.jpg"
goodsName: "八马茶业 西湖龙井绿茶明前新茶罐装50克*3罐 2018新茶"
goodsOrigPrice: "168.00"
goodsPrice: "168.00"
goodsSales: "14"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "107258"
shopId: "148006"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/3.jpg"
shopName: "八马茶业旗舰店"
shopType: "3"
status: "0"
19: {eptitle: "包邮", goodsId: "5773489", goodsInventory: "987",…}
eptitle: "包邮"
goodsId: "5773489"
goodsInventory: "987"
goodsLogo: "http://img.365hele.com/upload/32284/store/1496/9af0e542-2ecb-42d5-946d-54a13af10d23.jpg_middle.jpg"
goodsName: "八马茶业 安溪铁观音茶叶 浓香型乌龙茶小浓香1号礼盒装250克"
goodsOrigPrice: "115.00"
goodsPrice: "115.00"
goodsSales: "13"
goodsTransfee: 1
goodsType: "1"
isHasCoupon: "0"
productId: "103938"
shopId: "148006"
shopLogo: "http://rs.380star.com/upload/gic/default/suppshop/3.jpg"
shopName: "八马茶业旗舰店"
shopType: "3"
status: "0"
total: 5
msg: "成功"
state: 0
t_id: "38201901081904272706"