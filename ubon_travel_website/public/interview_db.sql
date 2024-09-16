-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2024 at 07:55 PM
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
-- Database: `interview_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `list_leaves`
--

CREATE TABLE `list_leaves` (
  `id` int(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `type_leave` varchar(255) NOT NULL,
  `type_other` varchar(255) NOT NULL DEFAULT '-',
  `cause_leave` varchar(255) NOT NULL,
  `date_s` varchar(255) NOT NULL,
  `date_e` varchar(255) NOT NULL,
  `other_leave` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT current_timestamp(),
  `sid` int(100) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `list_leaves`
--

INSERT INTO `list_leaves` (`id`, `name`, `role`, `email`, `phone_number`, `type_leave`, `type_other`, `cause_leave`, `date_s`, `date_e`, `other_leave`, `create_at`, `sid`) VALUES
(26, 'Thawitchai Boonsong', 'นักพัฒนาโปรแกรม', 'thawitchai285@gmail.com', '0652974104', 'ลากิจ', '-', 'กลับบ้าน', '2024-09-10', '2024-09-28', 'ลากิจ', '2024-09-10 00:30:56', 1),
(29, 'Pongsathon Namsaen ', 'ผัวหลวง', 'ham_kung@hotmail.com', '0905594910', 'ลากิจ', '-', 'กลับบ้าน', '2024-10-06', '2024-10-04', 'ลากิจ', '2024-09-10 00:58:28', 1),
(30, 'Phatcharaporn P.', 'เมียน้อย', 'phatcharaporn@gmail.com', '0652974104', 'พักร้อน', '-', 'ไปนอนกอดแฟน', '2024-09-10', '2024-09-22', 'พักร้อน', '2024-09-10 01:00:16', 1);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `sid` int(100) NOT NULL,
  `sname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`sid`, `sname`) VALUES
(1, 'รอพิจารณา'),
(2, 'อนุมัติ'),
(3, 'ไม่อนุมัติ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list_leaves`
--
ALTER TABLE `list_leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list_leaves`
--
ALTER TABLE `list_leaves`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `sid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
