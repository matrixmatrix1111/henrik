-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:3306
-- 生成日時: 2025-04-30 05:04:29
-- サーバのバージョン： 5.7.24
-- PHP のバージョン: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `db1`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `recipe_name` varchar(45) NOT NULL,
  `category` tinyint(1) NOT NULL,
  `difficulty` tinyint(1) NOT NULL DEFAULT '2',
  `budget` mediumint(9) NOT NULL,
  `howto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `recipes`
--

INSERT INTO `recipes` (`id`, `recipe_name`, `category`, `difficulty`, `budget`, `howto`) VALUES
(2, '卵焼き', 1, 1, 300, '1.卵を溶く\r\n2,フライパンに油をひく\r\n3,といた卵を焼く'),
(3, '揚げ出汁豆腐', 1, 1, 300, '豆腐を水切り\r\n片栗粉をまぶしてあげる\r\nかけ汁と大根を下ろしてかける'),
(5, 'ほうれん草のおひたし', 1, 2, 10, 'あああああああ');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
