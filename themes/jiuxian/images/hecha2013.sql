-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2013 年 07 月 18 日 04:32
-- 服务器版本: 5.5.16
-- PHP 版本: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `hecha2013`
--

-- --------------------------------------------------------

--
-- 表的结构 `jindong_users`
--

CREATE TABLE IF NOT EXISTS `jindong_users` (
  `user_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL DEFAULT '',
  `user_name` varchar(60) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `question` varchar(255) NOT NULL DEFAULT '',
  `answer` varchar(255) NOT NULL DEFAULT '',
  `sex` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `birthday` date NOT NULL DEFAULT '0000-00-00',
  `user_money` decimal(10,2) NOT NULL DEFAULT '0.00',
  `frozen_money` decimal(10,2) NOT NULL DEFAULT '0.00',
  `pay_points` int(10) unsigned NOT NULL DEFAULT '0',
  `rank_points` int(10) unsigned NOT NULL DEFAULT '0',
  `address_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `reg_time` int(10) unsigned NOT NULL DEFAULT '0',
  `last_login` int(11) unsigned NOT NULL DEFAULT '0',
  `last_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `last_ip` varchar(15) NOT NULL DEFAULT '',
  `visit_count` smallint(5) unsigned NOT NULL DEFAULT '0',
  `user_rank` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `is_special` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `salt` varchar(10) NOT NULL DEFAULT '0',
  `parent_id` mediumint(9) NOT NULL DEFAULT '0',
  `flag` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `alias` varchar(60) NOT NULL,
  `msn` varchar(60) NOT NULL,
  `qq` varchar(20) NOT NULL,
  `office_phone` varchar(20) NOT NULL,
  `home_phone` varchar(20) NOT NULL,
  `mobile_phone` varchar(20) NOT NULL,
  `is_validated` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `credit_line` decimal(10,2) unsigned NOT NULL,
  `passwd_question` varchar(50) DEFAULT NULL,
  `passwd_answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`),
  KEY `email` (`email`),
  KEY `parent_id` (`parent_id`),
  KEY `flag` (`flag`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

--
-- 转存表中的数据 `jindong_users`
--

INSERT INTO `jindong_users` (`user_id`, `email`, `user_name`, `password`, `question`, `answer`, `sex`, `birthday`, `user_money`, `frozen_money`, `pay_points`, `rank_points`, `address_id`, `reg_time`, `last_login`, `last_time`, `last_ip`, `visit_count`, `user_rank`, `is_special`, `salt`, `parent_id`, `flag`, `alias`, `msn`, `qq`, `office_phone`, `home_phone`, `mobile_phone`, `is_validated`, `credit_line`, `passwd_question`, `passwd_answer`) VALUES
(1, 'ecshop@ecshop.com', 'ecshop', '554fcae493e564ee0dc75bdf2ebf94ca', '', '', 0, '1960-03-03', 0.00, 0.00, 98388, 15390, 1, 0, 1245048540, '0000-00-00 00:00:00', '0.0.0.0', 11, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(2, 'vip@ecshop.com', 'vip', '232059cb5361a9336ccf1b8c2ba7657a', '', '', 0, '1949-01-01', 0.00, 0.00, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', 0, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(3, 'text@ecshop.com', 'text', '1cb251ec0d568de6a929b520c4aed8d1', '', '', 0, '1949-01-01', 0.00, 0.00, 0, 0, 2, 0, 1242973574, '0000-00-00 00:00:00', '0.0.0.0', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(5, 'zuanshi@ecshop.com', 'zuanshi', '815a71fb334412e7ba4595741c5a111d', '', '', 0, '1949-01-01', 0.00, 10000.00, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', 0, 3, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(6, 'test@e.com', 'test', '05a671c66aefea124cc08b76ea6d30bb', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1247865791, 1247865791, '0000-00-00 00:00:00', '222.42.114.69', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(7, 'xin@xin.com', 'xin', '82484dac3daa5f365c9a560edf06f449', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 3, 1248421509, 1248467908, '0000-00-00 00:00:00', '123.117.22.28', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(8, 'fdfd@ddffa.com', 'ffafdasf', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1248802264, 1248802264, '0000-00-00 00:00:00', '123.114.127.186', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(9, '2312@alfj.com', '1232', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1248802334, 1248802334, '0000-00-00 00:00:00', '123.114.127.186', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(10, '2331@jflas.com', '231', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1248805082, 1248805082, '0000-00-00 00:00:00', '123.114.127.186', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(11, '233122@jflas.com', '12312', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1248805127, 1248805127, '0000-00-00 00:00:00', '123.114.127.186', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(12, '2221@fdlsafj.com', 'dzdz', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 4, 1248813560, 1251223735, '0000-00-00 00:00:00', '59.56.176.26', 20, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(17, '123321@fdlajf.cn', 'xddx', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251071245, 1251071245, '0000-00-00 00:00:00', '59.56.176.26', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(13, '123@166.com', '123', '8b7c91c469a7e2598b6587efb04a342d', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1248827863, 1248827863, '0000-00-00 00:00:00', '220.175.82.21', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(14, '51359428@qq.com', 'lq582', '9b48bc5e4b9146f895ec7cee6e91a69c', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1250710026, 1251071687, '0000-00-00 00:00:00', '218.5.41.199', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(15, '99920369@qq.com', 'suojia', 'a965837adb48a0b64ecc4413e8a828e0', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1250735635, 1250735635, '0000-00-00 00:00:00', '117.22.49.252', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(16, 'tiandefei8825@163.com', 'admin', '6a897a54d0eeb8d8232cb7ccaf9261ed', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1250811126, 1250811126, '0000-00-00 00:00:00', '123.114.34.209', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(18, '123e321@fdlajf.cn', 'hllovs', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251071290, 1251071290, '0000-00-00 00:00:00', '59.56.176.26', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(19, '123321@fdlajf.cen', 'heljdfl', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251071330, 1251071330, '0000-00-00 00:00:00', '59.56.176.26', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(20, '1233e21@fdlajf.cen', 'dfasf', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251071394, 1251071394, '0000-00-00 00:00:00', '59.56.176.26', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(21, '277835550@qq.com', 'wjfu', 'f8ea124b4b1579c03f0ded0bdb3ea0df', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251404740, 1251404740, '0000-00-00 00:00:00', '58.31.61.32', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(22, 'hruis@yahoo.cn', 'hruis', '0a9cfd7608691a89ac3df60a7cc448ac', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251408981, 1251408981, '0000-00-00 00:00:00', '60.166.98.169', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(23, 'xiayafei525@163.com', 'xiayafei', '1d99ea8554a8d9cdf09862d3a2d6e69b', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1251453335, 1251453335, '0000-00-00 00:00:00', '61.132.138.217', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(24, 'cd50@163.com', 'cd50', 'a965837adb48a0b64ecc4413e8a828e0', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 5, 1251573681, 1251573681, '0000-00-00 00:00:00', '117.22.46.5', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(25, '1111@124.COM', '123456', '9cbf8a4dcb8e30682b927f352d6559a0', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 16, 1251784036, 1353444415, '0000-00-00 00:00:00', '127.0.0.1', 33, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(26, 'mineraldoor@163.com', '4us', '97bc41f93d79935fb5aebb75796914dd', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 6, 1252109944, 1252109944, '0000-00-00 00:00:00', '124.207.237.187', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(27, 'mvpdata@gmail.com', 'mvpdata', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '1949-01-01', 0.00, 0.00, 2900, 2900, 7, 1253065508, 1262046847, '0000-00-00 00:00:00', '119.122.13.166', 9, 3, 0, '0', 0, 0, '', '', '134546', '', '', '', 0, 0.00, NULL, NULL),
(28, 'tiansdb@126.com', 'tiansdb', '702cca031bf09df76618111f1ce728ca', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1253558071, 1255309680, '0000-00-00 00:00:00', '123.119.148.203', 6, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(29, 'yaoyanzhu@yeah.net', 'test001', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 8, 1255218979, 1255241728, '0000-00-00 00:00:00', '60.29.151.238', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(30, 'cfzx008@sohu.com', 'cfzx008', '7fe16893833afa8d415c6cfc1e60cb4e', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1255486713, 1255498694, '0000-00-00 00:00:00', '116.25.164.34', 4, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(31, 'mjzheng@126.com', 'mjzheng', '7a0446f30cf1786fd5d88b7571af88aa', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1256682180, 1256682180, '0000-00-00 00:00:00', '210.192.124.105', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(32, '12345678@121.com', '12345678', '25d55ad283aa400af464c76d713c07ad', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1256756579, 1256756579, '0000-00-00 00:00:00', '59.40.150.63', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(33, 'testreg@163.com', 'testreg', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 9, 1257103558, 1257152030, '0000-00-00 00:00:00', '222.244.67.101', 33, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(34, 'zhf0520@163.com', 'zhaohuifeng', '2427e0c6669051ee0289b58baf5201ee', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 10, 1259132686, 1259132686, '0000-00-00 00:00:00', '114.83.1.191', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(35, 'sh598pp@sohu.com', '孙捍', '4c4ded102fece137747fc6a4a11aae28', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1259441842, 1259441842, '0000-00-00 00:00:00', '221.229.60.246', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(36, '88@21cn.com', '88888', '980ac217c6b51e7dc41040bec1edfec8', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1259962376, 1259962376, '0000-00-00 00:00:00', '116.24.67.214', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(37, 'gggggg@163.com', 'gggggg', '9cafeef08db2dd477098a0293e71f90a', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 11, 1261274396, 1261274396, '0000-00-00 00:00:00', '125.77.121.242', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(38, 'lbxc@163.com', 'eehao', '62b5b0d9b5a4e514b9a9ae3fc57957ec', '', '', 0, '0000-00-00', 452.00, 0.00, 0, 0, 12, 1261886980, 1261897466, '0000-00-00 00:00:00', '60.166.105.86', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(39, 'tangly945@126.com', 'tly945', '9e862c34e6140187749d39f7e6a82552', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1262056670, 1262056670, '0000-00-00 00:00:00', '58.61.212.10', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(42, 'hiyangtao@live.cn', 'hiyangtao', '2eaedd92e4f00cb256d0a460ac5f56ad', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1262746968, 1262746969, '0000-00-00 00:00:00', '121.25.131.74', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(41, 'zjole@163.com', 'Jole', 'c0a0d96024713deb6453e98e8ec2bb37', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1262548570, 1262910908, '0000-00-00 00:00:00', '125.77.191.1', 12, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(43, '1341403531@126.com', 'gill8023', '96e79218965eb72c92a549dd5a330112', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1262807034, 1262807034, '0000-00-00 00:00:00', '218.82.69.29', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(44, 'abc@ll.bom', '崖敌', 'e99a18c428cb38d5f260853678922e03', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 13, 1262922574, 1262922574, '0000-00-00 00:00:00', '125.77.224.26', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(45, '111111111111111@11.com', '11111111', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1267154567, 1267154567, '0000-00-00 00:00:00', '127.0.0.1', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(46, '111111@126.COM', '11111', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1267162801, 1267162801, '0000-00-00 00:00:00', '127.0.0.1', 1, 0, 0, '0', 0, 0, '', '11111111111@126.COM', '1111111111', '111111', '1111111', '111111111', 0, 0.00, 'friend_birthday', '111111111'),
(47, '12@123.com', '1234567', 'fcea920f7412b5da7be0cf42b8c93759', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 17, 1268451172, 1372113512, '0000-00-00 00:00:00', '127.0.0.1', 1588, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(48, 'qq@126.com', 'qweerrrr', '9cbf8a4dcb8e30682b927f352d6559a0', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1273259906, 1273259907, '0000-00-00 00:00:00', '127.0.0.1', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(49, 'tomy_dg@sohu.com', 'tomy', 'b8e13be290ce96f5c3ede2347b3c6110', '', '', 0, '1950-01-01', 0.00, 0.00, 0, 0, 14, 1278471054, 1279072251, '0000-00-00 00:00:00', '113.80.140.202', 6, 3, 0, '0', 0, 0, '', 'tomy_dg@sohu.com', '125049706', '125049706', '125049706', '125049706', 0, 0.00, 'friend_birthday', '12580'),
(50, 'xmneww@sina.com', 'xmneww', 'ef5479971ed9f0ce87828273dd3c81fb', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 15, 1278826589, 1278826589, '0000-00-00 00:00:00', '117.25.255.109', 1, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(51, '81079858@qq.com', 'haitaovip', '4311121b220c9ba05ad80a34d4f3bd83', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1279516817, 1279516817, '0000-00-00 00:00:00', '60.10.96.31', 1, 0, 0, '0', 0, 0, '', 'dfjdsio@fd.com', '81079858', '01049585948', '01085849484', '18495494949', 0, 0.00, 'friend_birthday', 'dfsdjfiodsfjods'),
(52, 'sdfa@ldfjkasdfkl.com', 'ecshops', 'c8837b23ff8aaa8a2dde915473ce0991', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1280954533, 1280954533, '0000-00-00 00:00:00', '59.56.176.26', 1, 0, 0, '0', 0, 0, '', '34943jlsdsl@lfdjsam.com', '23903780418', '123932749142729', '23947197348', '238947193274', 0, 0.00, 'friend_birthday', '324237947923'),
(53, 'www@www.com', 'www', 'd785c99d298a4e9e6e13fe99e602ef42', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1281035049, 1281035049, '0000-00-00 00:00:00', '61.51.200.31', 1, 0, 0, '0', 0, 0, '', 'www@12e.com', '123123', '123123', '123123', '123123', 0, 0.00, 'friend_birthday', '123123'),
(54, 'admin@126.com', '12345', 'e10adc3949ba59abbe56e057f20f883e', '', '', 0, '0000-00-00', 0.00, 0.00, 101, 101, 18, 1372964847, 1374025007, '0000-00-00 00:00:00', '127.0.0.1', 111, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL),
(55, 'admin123@123.com', 'admin123', '0192023a7bbd73250516f069df18b500', '', '', 0, '0000-00-00', 0.00, 0.00, 0, 0, 0, 1373914323, 1374081718, '0000-00-00 00:00:00', '127.0.0.1', 2, 0, 0, '0', 0, 0, '', '', '', '', '', '', 0, 0.00, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `jindong_user_account`
--

CREATE TABLE IF NOT EXISTS `jindong_user_account` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `admin_user` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `add_time` int(10) NOT NULL DEFAULT '0',
  `paid_time` int(10) NOT NULL DEFAULT '0',
  `admin_note` varchar(255) NOT NULL,
  `user_note` varchar(255) NOT NULL,
  `process_type` tinyint(1) NOT NULL DEFAULT '0',
  `payment` varchar(90) NOT NULL,
  `is_paid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `is_paid` (`is_paid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `jindong_user_account`
--

INSERT INTO `jindong_user_account` (`id`, `user_id`, `admin_user`, `amount`, `add_time`, `paid_time`, `admin_note`, `user_note`, `process_type`, `payment`, `is_paid`) VALUES
(1, 21, '', 80.00, 1251404878, 0, '', 'ww', 0, '银行汇款/转帐', 0),
(2, 38, 'test1227', 500.00, 1261897412, 1261897412, '', '', 0, '余额支付', 1);

-- --------------------------------------------------------

--
-- 表的结构 `jindong_user_address`
--

CREATE TABLE IF NOT EXISTS `jindong_user_address` (
  `address_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `address_name` varchar(50) NOT NULL DEFAULT '',
  `user_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `consignee` varchar(60) NOT NULL DEFAULT '',
  `email` varchar(60) NOT NULL DEFAULT '',
  `country` smallint(5) NOT NULL DEFAULT '0',
  `province` smallint(5) NOT NULL DEFAULT '0',
  `city` smallint(5) NOT NULL DEFAULT '0',
  `district` smallint(5) NOT NULL DEFAULT '0',
  `address` varchar(120) NOT NULL DEFAULT '',
  `zipcode` varchar(60) NOT NULL DEFAULT '',
  `tel` varchar(60) NOT NULL DEFAULT '',
  `mobile` varchar(60) NOT NULL DEFAULT '',
  `sign_building` varchar(120) NOT NULL DEFAULT '',
  `best_time` varchar(120) NOT NULL DEFAULT '',
  PRIMARY KEY (`address_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- 转存表中的数据 `jindong_user_address`
--

INSERT INTO `jindong_user_address` (`address_id`, `address_name`, `user_id`, `consignee`, `email`, `country`, `province`, `city`, `district`, `address`, `zipcode`, `tel`, `mobile`, `sign_building`, `best_time`) VALUES
(1, '', 1, '刘先生', 'ecshop@ecshop.com', 1, 2, 52, 502, '海兴大厦', '', '010-25851234', '13986765412', '', ''),
(2, '', 3, '叶先生', 'text@ecshop.com', 1, 2, 52, 510, '通州区旗舰凯旋小区', '', '13588104710', '', '', ''),
(3, '', 7, '兰兰', 'xin@xin.com', 1, 2, 52, 502, '北极故事', '100090', '8876789', '', '', ''),
(4, '', 12, 'eeff', '2221@fdlsafj.com', 1, 2, 52, 502, 'feeefeeeeeeeeee', '', '32323', '', '', ''),
(5, '', 24, '左江', 'cd50@163.com', 1, 24, 311, 2596, '西安雁塔路8号', '', '13888899992', '', '', ''),
(6, '', 26, '孙健', 'mineraldoor@163.com', 0, 0, 0, 0, '', '', '12345678974', '', '', ''),
(7, '', 27, 'vv', 'mvpdata@gmail.com', 1, 2, 52, 501, 'vv', '', '46473243', '', '', ''),
(8, '', 29, 'fdfdsf', 'yaoyanzhu@yeah.net', 1, 2, 52, 500, '如何分辨原装电池 ', '123456', '11234567864', '', '', ''),
(9, '', 33, '111', 'testreg@163.com', 1, 2, 52, 500, '222', '', '1234', '', '', ''),
(10, '', 34, '赵会峰', 'zhf0520@163.com', 1, 25, 321, 2718, '青浦小蒸练塘', '', '13482385616', '', '', ''),
(11, '', 37, 'dffdfd', 'gggggg@163.com', 1, 4, 54, 533, 'dfdfdf', '1111', '111111', '', '111', ''),
(12, '', 38, '11', 'lbxc@163.com', 1, 27, 343, 2913, '11', '', '11', '', '11', ''),
(13, '', 44, 'fafda', 'abc@ll.bom', 1, 21, 277, 2302, 'adfa', '', '123241324123', '', '', ''),
(14, '', 49, 'tomy', 'tomy_dg@sohu.com', 1, 6, 79, 717, 'tomy', '', '12580', '', '', ''),
(15, '', 50, 'xmneww', 'xmneww@sina.com', 1, 4, 60, 587, 'xmneww', '', '05922222222', '', '', ''),
(16, '', 25, '111111111', '1111@124.COM', 1, 4, 54, 532, '1111111111111', '11111111111111111', '1111111111111', '', '', ''),
(17, '', 47, '1111111', '12@123.com', 1, 4, 54, 531, '11111111', '', '1111111111', '', '', ''),
(18, '', 54, 'xiao', 'admin@126.com', 1, 4, 53, 519, '辽宁省沈阳市', '1', '13475481247', '13475481247', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `jindong_user_bonus`
--

CREATE TABLE IF NOT EXISTS `jindong_user_bonus` (
  `bonus_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `bonus_type_id` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `bonus_sn` bigint(20) unsigned NOT NULL DEFAULT '0',
  `user_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `used_time` int(10) unsigned NOT NULL DEFAULT '0',
  `order_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `emailed` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`bonus_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=53 ;

--
-- 转存表中的数据 `jindong_user_bonus`
--

INSERT INTO `jindong_user_bonus` (`bonus_id`, `bonus_type_id`, `bonus_sn`, `user_id`, `used_time`, `order_id`, `emailed`) VALUES
(1, 3, 0, 1, 1242142681, 4, 0),
(2, 4, 1000003379, 1, 1242976699, 14, 0),
(3, 4, 1000018450, 0, 0, 0, 0),
(4, 4, 1000023774, 0, 0, 0, 0),
(5, 4, 1000039394, 0, 0, 0, 0),
(6, 4, 1000049305, 0, 0, 0, 0),
(7, 4, 1000052248, 0, 0, 0, 0),
(8, 4, 1000061542, 0, 0, 0, 0),
(9, 4, 1000070278, 0, 0, 0, 0),
(10, 4, 1000080588, 0, 0, 0, 0),
(11, 4, 1000091405, 0, 0, 0, 0),
(24, 3, 0, 1, 0, 0, 0),
(25, 3, 0, 1, 0, 0, 0),
(26, 3, 0, 1, 0, 0, 0),
(27, 3, 0, 1, 0, 0, 0),
(28, 3, 0, 1, 0, 0, 0),
(29, 3, 0, 1, 0, 0, 0),
(30, 3, 0, 1, 0, 0, 0),
(31, 3, 0, 1, 0, 0, 0),
(32, 3, 0, 27, 0, 0, 0),
(33, 1, 0, 2, 0, 0, 1),
(34, 1, 0, 3, 0, 0, 1),
(35, 1, 0, 5, 0, 0, 1),
(36, 1, 0, 6, 0, 0, 1),
(37, 1, 0, 7, 0, 0, 1),
(38, 1, 0, 8, 0, 0, 1),
(39, 1, 0, 9, 0, 0, 1),
(40, 1, 0, 10, 0, 0, 1),
(41, 1, 0, 11, 0, 0, 1),
(42, 1, 0, 12, 0, 0, 1),
(43, 1, 0, 17, 0, 0, 1),
(44, 1, 0, 13, 0, 0, 1),
(45, 1, 0, 14, 0, 0, 1),
(46, 1, 0, 15, 0, 0, 1),
(47, 1, 0, 16, 0, 0, 1),
(48, 1, 0, 18, 0, 0, 1),
(49, 1, 0, 19, 0, 0, 1),
(50, 1, 0, 20, 0, 0, 1),
(51, 1, 0, 21, 0, 0, 1),
(52, 1, 0, 22, 0, 0, 1);

-- --------------------------------------------------------

--
-- 表的结构 `jindong_user_feed`
--

CREATE TABLE IF NOT EXISTS `jindong_user_feed` (
  `feed_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `value_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `goods_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `feed_type` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `is_feed` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`feed_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `jindong_user_rank`
--

CREATE TABLE IF NOT EXISTS `jindong_user_rank` (
  `rank_id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `rank_name` varchar(30) NOT NULL DEFAULT '',
  `min_points` int(10) unsigned NOT NULL DEFAULT '0',
  `max_points` int(10) unsigned NOT NULL DEFAULT '0',
  `discount` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `show_price` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `special_rank` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`rank_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `jindong_user_rank`
--

INSERT INTO `jindong_user_rank` (`rank_id`, `rank_name`, `min_points`, `max_points`, `discount`, `show_price`, `special_rank`) VALUES
(1, '注册用户', 0, 10000, 100, 0, 0),
(2, 'vip', 10000, 10000000, 95, 0, 0),
(3, '商业用户', 0, 0, 90, 0, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
