-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2024 at 06:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel_ubon_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(100) NOT NULL,
  `restaurant_name` varchar(255) DEFAULT '-',
  `restaurant_alley` varchar(255) DEFAULT '-',
  `restaurant_road` varchar(255) DEFAULT '-',
  `restaurant_subdistrict` varchar(255) NOT NULL DEFAULT '-',
  `restaurant_district` varchar(255) NOT NULL DEFAULT '-',
  `restaurant_province` varchar(255) NOT NULL DEFAULT '-',
  `restaurant_post` varchar(255) NOT NULL DEFAULT '-',
  `restaurant_business_hours_s` varchar(255) DEFAULT '-',
  `restaurant_business_hours_e` varchar(255) NOT NULL,
  `restaurant_url` longtext NOT NULL DEFAULT '-',
  `type_restaurant_id` int(11) NOT NULL,
  `restaurant_background` longtext DEFAULT '-',
  `restaurant_facilities_1` varchar(255) DEFAULT '-',
  `restaurant_facilities_2` varchar(255) DEFAULT '-',
  `restaurant_facilities_3` varchar(255) DEFAULT '-',
  `restaurant_facilities_4` varchar(255) DEFAULT '-',
  `restaurant_image_1` longtext NOT NULL,
  `restaurant_image_2` longtext DEFAULT NULL,
  `restaurant_image_3` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `travels`
--

CREATE TABLE `travels` (
  `travel_id` int(100) NOT NULL,
  `travel_name` varchar(255) NOT NULL,
  `travel_road` varchar(255) NOT NULL,
  `travel_alley` varchar(200) NOT NULL,
  `travel_subdistrict` varchar(255) NOT NULL,
  `travel_district` varchar(255) NOT NULL,
  `travel_province` varchar(255) NOT NULL,
  `travel_post` varchar(255) NOT NULL,
  `travel_adult_fee` int(100) NOT NULL,
  `travel_child_fee` int(100) NOT NULL,
  `travel_business_hours_s` varchar(255) NOT NULL,
  `travel_business_hours_e` varchar(255) NOT NULL,
  `travel_url` longtext NOT NULL,
  `type_travel_id` int(11) NOT NULL,
  `travel_background` longtext DEFAULT NULL,
  `travel_facilies_1` varchar(255) DEFAULT NULL,
  `travel_facilies_2` varchar(255) DEFAULT NULL,
  `travel_facilies_3` varchar(255) DEFAULT NULL,
  `travel_facilies_4` varchar(255) DEFAULT NULL,
  `travel_image_1` longtext NOT NULL,
  `travel_image_2` longtext DEFAULT NULL,
  `travel_image_3` longtext DEFAULT NULL,
  `travel_call` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `travels`
--

INSERT INTO `travels` (`travel_id`, `travel_name`, `travel_road`, `travel_alley`, `travel_subdistrict`, `travel_district`, `travel_province`, `travel_post`, `travel_adult_fee`, `travel_child_fee`, `travel_business_hours_s`, `travel_business_hours_e`, `travel_url`, `type_travel_id`, `travel_background`, `travel_facilies_1`, `travel_facilies_2`, `travel_facilies_3`, `travel_facilies_4`, `travel_image_1`, `travel_image_2`, `travel_image_3`, `travel_call`) VALUES
(5, 'ผาแต้ม', 'ชยางกูร', 'ชยางกูร 21', 'ห้วยไผ่', 'โขงเจียม', 'อุบลราชธานี', '34220', 100, 50, '19:00', '10:50', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.588700121364!2d105.5075256!3d15.3987457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3115a33294351715%3A0xcd2bb33dcf86f557!2sPha%20Taem%20National%20Park!5e0!3m2!1sen!2sth!4v1725732549211!5m2!1sen!2sth', 6, '-', 'ที่จอด', 'ร้านค้า', 'ห้องน้ำ', NULL, 'C:\\fakepath\\Thawitchai.jpg', NULL, NULL, '0652974104'),
(6, 'วัดแจ้ง', '-', '-', '-', '-', '-', '-', 0, 0, '12:06', '13:06', '-', 2, '-', NULL, NULL, 'ห้องน้ำ', 'รถสาธารณะ', 'C:\\fakepath\\Thawitchai.jpg', NULL, NULL, NULL),
(7, 'น้ำตกแสงจันทร์', '-', '-', 'นาโพธิ์', 'โขงเจียม', 'อุบลราชธานี', '34220', 0, 0, '', '', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3844.4033766489256!2d105.5877904!3d15.5164918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3115bcb24b9060ff%3A0xdc127b055fe20ad1!2z4LiZ4LmJ4Liz4LiV4LiB4LmB4Liq4LiH4LiI4Lix4LiZ4LiX4Lij4LmMICjguJnguYnguLPguJXguIHguKXguIfguKPguLkp!5e0!3m2!1sth!2sth!4v1726419184557!5m2!1sth!2sth', 7, '-', 'ที่จอด', 'ร้านค้า', 'ห้องน้ำ', NULL, 'C:\\fakepath\\wave.jpg', NULL, NULL, '-1'),
(8, 'ทุ่งศรีเมือง', 'อุปราช', '-', 'ในเมือง', 'เมือง', 'อุบลราชธานี', '34000', 0, 0, '00:03', '05:03', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61591.76175269815!2d104.84468009999996!3d15.241318450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116863274283c6f%3A0xb2113a465814883a!2z4LiX4Li44LmI4LiH4Lio4Lij4Li14LmA4Lih4Li34Lit4LiH!5e0!3m2!1sth!2sth!4v1726419617533!5m2!1sth!2sth', 3, '-', 'ที่จอด', 'ร้านค้า', 'ห้องน้ำ', 'รถสาธารณะ', 'C:\\fakepath\\Thawitchai.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `type_accommodation`
--

CREATE TABLE `type_accommodation` (
  `type_accommodation_id` int(100) NOT NULL,
  `type_accommodation_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type_restaurant`
--

CREATE TABLE `type_restaurant` (
  `type_restaurant_id` int(100) NOT NULL,
  `type_restaurant_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type_travels`
--

CREATE TABLE `type_travels` (
  `type_travel_id` int(100) NOT NULL,
  `type_travel_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `type_travels`
--

INSERT INTO `type_travels` (`type_travel_id`, `type_travel_name`) VALUES
(2, 'วัด'),
(3, 'สวนและสวนสาธารณะ'),
(5, 'ดอยและภูเขา'),
(6, 'อุทยานแห่งชาติ'),
(7, 'น้ำตก');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`),
  ADD KEY `type_restaurant_id` (`type_restaurant_id`);

--
-- Indexes for table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`travel_id`),
  ADD KEY `type_travel_id` (`type_travel_id`);

--
-- Indexes for table `type_accommodation`
--
ALTER TABLE `type_accommodation`
  ADD PRIMARY KEY (`type_accommodation_id`);

--
-- Indexes for table `type_restaurant`
--
ALTER TABLE `type_restaurant`
  ADD PRIMARY KEY (`type_restaurant_id`);

--
-- Indexes for table `type_travels`
--
ALTER TABLE `type_travels`
  ADD PRIMARY KEY (`type_travel_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `travels`
--
ALTER TABLE `travels`
  MODIFY `travel_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `type_accommodation`
--
ALTER TABLE `type_accommodation`
  MODIFY `type_accommodation_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_restaurant`
--
ALTER TABLE `type_restaurant`
  MODIFY `type_restaurant_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_travels`
--
ALTER TABLE `type_travels`
  MODIFY `type_travel_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`type_restaurant_id`) REFERENCES `type_restaurant` (`type_restaurant_id`) ON DELETE CASCADE;

--
-- Constraints for table `travels`
--
ALTER TABLE `travels`
  ADD CONSTRAINT `travels_ibfk_1` FOREIGN KEY (`type_travel_id`) REFERENCES `type_travels` (`type_travel_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
