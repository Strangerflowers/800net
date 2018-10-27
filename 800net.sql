/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 800net

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 18:33:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` decimal(10,2) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('9', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '98.00', '76.00', '白色', 'XS', '1');
INSERT INTO `cart` VALUES ('18', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '398.00', '265.00', '白色', 'XS', '1');
INSERT INTO `cart` VALUES ('1', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '398.00', '159.00', '红色', 'S', '1');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `days` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` decimal(10,2) NOT NULL,
  `freight` varchar(255) NOT NULL,
  `s_volum` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `img6` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '159.00', '包邮', '980', '2018-10-23 21:07:51', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('2', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '859.00', '338.00', '包邮', '198', '2018-10-23 21:05:12', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('3', '../images/l1.jpg', '她图新款针织衫女 韩版修身长袖时尚毛衣', '10', '299.00', '158.00', '包邮', '26', '2018-10-23 21:06:39', '../images/l1_1.jpg', '../images/l1_2.jpg', '../images/l1_3.jpg', '../images/l1_4.jpg', '../images/l1_5.jpg', '../images/l1_6.jpg');
INSERT INTO `goodslist` VALUES ('4', '../images/l3.jpg', '她图新款休闲裤女 韩版宽松显瘦两条杠休闲百搭运动裤酷', '8', '449.00', '158.00', '包邮', '80', '2018-10-23 21:17:15', '../images/l3_2.jpg', '../images/l3_3.jpg', '../images/l3_4.jpg', '../images/l3_5.jpg', '../images/l3_1.jpg', '');
INSERT INTO `goodslist` VALUES ('5', '../images/l4.jpg', '2018新款气质优雅圆领长袖荷叶边背带裙两件套A2D575060', '8', '99.00', '76.00', '包邮', '80', '2018-10-24 19:13:32', '../images/l4_2.jpg', '../images/l4_3.jpg', '../images/l4_4.jpg', '../images/l4_5.jpg', '../images/l4_1.jpg', '');
INSERT INTO `goodslist` VALUES ('6', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '859.00', '670.00', '包邮', '198', '2018-10-24 19:13:39', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('7', '../images/l3.jpg', '她图新款休闲裤女 韩版宽松显瘦两条杠休闲百搭运动裤酷', '8', '98.00', '65.00', '包邮', '80', '2018-10-24 19:13:52', '../images/l3_2.jpg', '../images/l3_3.jpg', '../images/l3_4.jpg', '../images/l3_5.jpg', '../images/l3_1.jpg', '');
INSERT INTO `goodslist` VALUES ('8', '../images/l3.jpg', '她图新款休闲裤女 韩版宽松显瘦两条杠休闲百搭运动裤酷', '8', '799.00', '677.00', '包邮', '80', '2018-10-24 19:13:59', '../images/l3_2.jpg', '../images/l3_3.jpg', '../images/l3_4.jpg', '../images/l3_5.jpg', '../images/l3_1.jpg', '');
INSERT INTO `goodslist` VALUES ('9', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '98.00', '76.00', '包邮', '198', '2018-10-24 19:14:05', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('10', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '859.00', '600.00', '包邮', '198', '2018-10-24 19:14:10', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('11', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '786.00', '338.00', '包邮', '432', '2018-10-24 19:14:15', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('12', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '544.00', '234.00', '包邮', '675', '2018-10-24 19:14:22', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('13', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '687.00', '322.00', '包邮', '621', '2018-10-24 19:14:28', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('14', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '859.00', '336.00', '包邮', '433', '2018-10-27 17:00:40', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('15', '../images/d1.jpg', '呢子大衣中长款韩版2017秋装新款气质大红色斗篷外套女秋冬毛呢', '9', '65.00', '30.00', '包邮', '68', '2018-10-24 19:14:38', '../images/d1_1.jpg', '../images/d1_2.jpg', '../images/d_3.jpg', '../images/d1_4.jpg', '../images/d1_5.jpg', '../images/d1_6.jpg');
INSERT INTO `goodslist` VALUES ('16', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '159.00', '包邮', '98', '2018-10-24 19:12:46', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('17', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '159.00', '包邮', '100', '2018-10-24 19:12:48', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('18', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '265.00', '包邮', '23', '2018-10-24 19:14:54', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('19', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '157.00', '包邮', '46', '2018-10-24 19:14:57', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('20', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '150.00', '包邮', '989', '2018-10-24 19:15:01', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('21', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '256.00', '包邮', '432', '2018-10-24 19:15:05', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('22', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '257.00', '包邮', '146', '2018-10-24 19:15:07', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('23', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '124.00', '包邮', '526', '2018-10-24 19:15:13', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('24', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '231.00', '包邮', '43', '2018-10-27 17:00:25', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('25', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '321.00', '包邮', '67', '2018-10-27 17:00:24', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('26', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '216.00', '包邮', '67', '2018-10-27 17:00:21', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('27', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '126.00', '包邮', '67', '2018-10-27 17:00:19', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('28', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '122.00', '包邮', '67', '2018-10-27 17:00:16', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('29', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '15.00', '包邮', '67', '2018-10-27 17:00:08', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('30', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '56.00', '包邮', '67', '2018-10-27 17:00:04', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('31', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '76.00', '包邮', '67', '2018-10-27 17:00:01', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('32', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '99.00', '包邮', '67', '2018-10-27 16:59:59', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('33', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '87.00', '包邮', '67', '2018-10-27 16:59:58', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('34', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '86.00', '包邮', '67', '2018-10-27 16:59:55', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('35', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '85.00', '包邮', '67', '2018-10-27 16:59:54', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('36', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '84.00', '包邮', '67', '2018-10-27 16:59:53', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('37', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '83.00', '包邮', '67', '2018-10-27 16:59:51', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('38', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '82.00', '包邮', '67', '2018-10-27 16:59:50', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('39', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '81.00', '包邮', '67', '2018-10-27 16:59:47', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('40', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '69.00', '包邮', '67', '2018-10-27 16:59:33', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('41', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '62.00', '包邮', '67', '2018-10-27 16:59:26', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('42', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '61.00', '包邮', '67', '2018-10-27 16:59:24', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('43', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '60.00', '包邮', '67', '2018-10-27 16:59:22', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('44', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '59.00', '包邮', '67', '2018-10-27 16:59:19', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('45', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '53.00', '包邮', '67', '2018-10-27 16:59:17', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('46', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '52.00', '包邮', '67', '2018-10-27 16:59:15', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('47', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '51.00', '包邮', '67', '2018-10-27 16:59:13', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('48', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '59.00', '包邮', '67', '2018-10-27 16:59:11', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('49', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '38.00', '包邮', '67', '2018-10-27 16:59:08', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('50', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '33.00', '包邮', '67', '2018-10-27 16:59:06', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('51', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '32.00', '包邮', '67', '2018-10-27 16:59:04', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('52', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '31.00', '包邮', '67', '2018-10-27 16:59:03', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('53', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '30.00', '包邮', '67', '2018-10-27 16:59:01', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('54', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '29.00', '包邮', '67', '2018-10-27 16:59:00', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('55', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '28.00', '包邮', '67', '2018-10-27 16:58:58', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('56', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '27.00', '包邮', '67', '2018-10-27 16:58:56', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('57', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '26.00', '包邮', '67', '2018-10-27 16:58:55', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('58', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '25.00', '包邮', '67', '2018-10-27 16:58:54', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('59', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '233.00', '包邮', '67', '2018-10-27 16:59:27', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('60', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '21.00', '包邮', '67', '2018-10-27 16:58:50', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('61', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '77.00', '包邮', '67', '2018-10-27 16:58:47', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('62', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '55.00', '包邮', '67', '2018-10-27 16:58:44', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('63', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '66.00', '包邮', '67', '2018-10-27 16:58:43', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('64', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '88.00', '包邮', '67', '2018-10-27 16:58:37', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('65', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '28.00', '包邮', '67', '2018-10-27 16:58:35', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('66', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '311.00', '包邮', '67', '2018-10-27 16:58:33', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('67', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '255.00', '包邮', '67', '2018-10-27 16:58:31', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('68', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '99.00', '包邮', '67', '2018-10-27 16:58:28', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('69', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '3986.00', '35.00', '包邮', '67', '2018-10-27 16:58:38', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');
INSERT INTO `goodslist` VALUES ('70', '../images/l2.jpg', '反季清仓2018秋冬新款韩版宽松中长款呢子大衣时尚休闲毛呢外套女', '6', '398.00', '26.00', '包邮', '67', '2018-10-27 16:58:20', '../images/l2_1.jpg', '../images/l2_2.jpg', '../images/l2_3.jpg', '../images/l2_4.jpg', '../images/l2_5.jpg', '../images/l2_6.jpg');

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `free_song` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('1', 'images/h1.jpg', '简朵外套清仓', '308.00', '89', '满2件8折', '包邮', '2018-10-23 19:24:52');
INSERT INTO `home` VALUES ('2', 'images/h2.jpg', '神朵皮草女装钜惠专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 17:57:33');
INSERT INTO `home` VALUES ('3', 'images/h29.jpg', '美阔秋上新特惠转场', '308.00', '99', '满2件8折', '包邮', '2018-10-23 19:25:00');
INSERT INTO `home` VALUES ('4', 'images/h30.jpg', '诗美斯格秋冬时尚集合专场', '498.00', '338', '满2件8折', '包邮', '2018-10-23 19:25:10');
INSERT INTO `home` VALUES ('5', 'images/h3.jpg', '女孩规则秋冬时尚钜惠专场', '698.00', '538', '满2件8折', '包邮', '2018-10-23 19:25:24');
INSERT INTO `home` VALUES ('6', 'images/h4.jpg', '芙娜妮秋季时尚女装上新', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:27');
INSERT INTO `home` VALUES ('7', 'images/h5.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:31');
INSERT INTO `home` VALUES ('8', 'images/h6.jpg', '潮电好物', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:39');
INSERT INTO `home` VALUES ('9', 'images/h7.jpg', '肖哥秋冬卫衣打底特惠专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:44');
INSERT INTO `home` VALUES ('10', 'images/h8.jpg', '鞋柜男女鞋秋冬上新', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:49');
INSERT INTO `home` VALUES ('11', 'images/h9.jpg', '爱客初冬新款来袭', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:53');
INSERT INTO `home` VALUES ('12', 'images/h10.jpg', '殴豁秋季专场特惠', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:22:57');
INSERT INTO `home` VALUES ('13', 'images/h11.jpg', '巴布豆童鞋官方专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:01');
INSERT INTO `home` VALUES ('14', 'images/h12.jpg', '贝尔乐0-3岁婴幼儿穿着专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:07');
INSERT INTO `home` VALUES ('15', 'images/h13.jpg', '特步官方这次疯了真便宜', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:13');
INSERT INTO `home` VALUES ('16', 'images/h14.jpg', '言非衣时尚减龄针织衫', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:17');
INSERT INTO `home` VALUES ('17', 'images/h15.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:20');
INSERT INTO `home` VALUES ('18', 'images/h16.jpg', '爱客初冬新款来袭', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:24');
INSERT INTO `home` VALUES ('19', 'images/h17.jpg', '简朵外套清仓', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:27');
INSERT INTO `home` VALUES ('20', 'images/h18.jpg', '简朵外套清仓', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:32');
INSERT INTO `home` VALUES ('21', 'images/h19.jpg', '神朵皮草女装钜惠专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:35');
INSERT INTO `home` VALUES ('22', 'images/h20.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:40');
INSERT INTO `home` VALUES ('23', 'images/h21.jpg', '爱客初冬新款来袭', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:43');
INSERT INTO `home` VALUES ('24', 'images/h22.jpg', '神朵皮草女装钜惠专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:47');
INSERT INTO `home` VALUES ('25', 'images/h23.jpg', '韩都衣舍2018韩版女装', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:55');
INSERT INTO `home` VALUES ('31', 'images/h31.jpg', '唯思凡童装男童专场', '299.00', '149', '满2件8折', '包邮', '2018-10-23 19:23:24');
INSERT INTO `home` VALUES ('26', 'images/h24.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:23:59');
INSERT INTO `home` VALUES ('27', 'images/h25.jpg', '神朵皮草女装钜惠专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:24:02');
INSERT INTO `home` VALUES ('28', 'images/h26.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:24:07');
INSERT INTO `home` VALUES ('29', 'images/h27.jpg', '简朵外套清仓', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:24:15');
INSERT INTO `home` VALUES ('30', 'images/h28.jpg', '女将秋冬新装上新专场', '308.00', '139', '满2件8折', '包邮', '2018-10-23 19:24:18');
INSERT INTO `home` VALUES ('32', 'images/h32.jpg', '唯思凡女童外套专场', '398.00', '218', '满2件8折', '包邮', '2018-10-23 19:23:24');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `passwodr` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', 'text', '123456', '2018-10-23 21:45:33');
INSERT INTO `register` VALUES ('2', 'text@qq.com', 'q12345', '2018-10-24 11:34:58');
INSERT INTO `register` VALUES ('3', 'text1@qq.com', 'q12345', '2018-10-24 11:37:00');
INSERT INTO `register` VALUES ('4', '', '', '2018-10-24 11:38:23');
INSERT INTO `register` VALUES ('5', '', '', '2018-10-24 11:38:23');
INSERT INTO `register` VALUES ('6', '', '', '2018-10-24 11:38:24');
INSERT INTO `register` VALUES ('7', '', '', '2018-10-24 11:38:24');
INSERT INTO `register` VALUES ('8', '', '', '2018-10-24 11:38:25');
INSERT INTO `register` VALUES ('9', '', '', '2018-10-24 11:38:25');
INSERT INTO `register` VALUES ('10', '', '', '2018-10-24 11:41:38');
INSERT INTO `register` VALUES ('11', '', '', '2018-10-24 11:41:39');
INSERT INTO `register` VALUES ('12', 'text2@qq.com', 'q12345', '2018-10-24 11:42:01');
INSERT INTO `register` VALUES ('13', 'text1@qq.com', 'q123456', '2018-10-24 11:43:15');
INSERT INTO `register` VALUES ('14', 'text1@qq.com', 'q123456', '2018-10-24 11:43:33');
INSERT INTO `register` VALUES ('15', 'text12@qq.com', 'a12345', '2018-10-24 11:50:45');
INSERT INTO `register` VALUES ('16', 'text12@qq.com', 'q123456', '2018-10-24 11:52:50');
INSERT INTO `register` VALUES ('17', 'text113@qq.com', 'q123456', '2018-10-24 11:54:14');
INSERT INTO `register` VALUES ('18', 'test@qq.com', 'q12345', '2018-10-24 16:11:49');
INSERT INTO `register` VALUES ('19', 'test1@qq.com', 'q12345', '2018-10-24 16:27:57');
INSERT INTO `register` VALUES ('20', 'text1234@qq.com', 'q12345', '2018-10-27 17:13:57');
INSERT INTO `register` VALUES ('21', 'text99@qq.com', 'q12345', '2018-10-27 17:15:02');
INSERT INTO `register` VALUES ('22', 'lemon@qq.com', 'q123456', '2018-10-27 17:15:43');
INSERT INTO `register` VALUES ('23', 'lemon1@qq.com', 'q12345', '2018-10-27 17:18:29');
SET FOREIGN_KEY_CHECKS=1;
