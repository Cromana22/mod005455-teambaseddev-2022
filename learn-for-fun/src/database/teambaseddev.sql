-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2022 at 01:49 PM
-- Server version: 5.7.17
-- PHP Version: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teambaseddev`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `courseID` int(11) NOT NULL,
  `courseName` varchar(255) NOT NULL,
  `youtubeURL` varchar(255) NOT NULL,
  `pdfFilename` varchar(255) NOT NULL,
  `codeFilename` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`courseID`, `courseName`, `youtubeURL`, `pdfFilename`, `codeFilename`, `price`) VALUES
(1, 'Blender: Your first tutorial part 1', 'https://www.youtube.com/watch?v=TPrnSACiTJ4', 'blenderpart1.pdf', 'code.py', '5.00'),
(2, 'Blender: Your first tutorial part 2', 'https://www.youtube.com/watch?v=TPrnSACiTJ4', 'blenderpart2.pdf', 'code.py', '10.00'),
(3, 'Blender: Your first tutorial part 3', 'https://www.youtube.com/watch?v=TPrnSACiTJ4', 'blenderpart3.pdf', 'code.py', '15.00'),
(4, 'Blender: Your first tutorial part 4', 'https://www.youtube.com/watch?v=TPrnSACiTJ4', 'blenderpart4.pdf', 'code.py', '20.00');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `subscriptionID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `dateRaised` date NOT NULL,
  `SubscriptionTypeId` int(11) NOT NULL DEFAULT '1',
  `courseID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`subscriptionID`, `userID`, `dateRaised`, `SubscriptionTypeId`, `courseID`) VALUES
(1, 3, '2022-11-09', 1, 1),
(2, 3, '2022-11-14', 1, 2),
(3, 2, '2022-11-14', 1, 1),
(4, 2, '2022-11-15', 1, 2),
(5, 3, '2022-11-17', 1, 3),
(6, 1, '2022-11-13', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptiontype`
--

CREATE TABLE `subscriptiontype` (
  `subscriptionTypeID` int(11) NOT NULL,
  `subscriptionTypeName` varchar(20) NOT NULL DEFAULT 'SingleCourse',
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscriptiontype`
--

INSERT INTO `subscriptiontype` (`subscriptionTypeID`, `subscriptionTypeName`, `price`) VALUES
(1, 'SingleCourse', '5'),
(2, 'AllAccess', '10');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `userID` int(11) NOT NULL,
  `password` varchar(30) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `county` varchar(50) DEFAULT NULL,
  `postcode` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `userID`, `password`, `firstName`, `lastName`, `address1`, `address2`, `city`, `county`, `postcode`) VALUES
('JC@gmail.com', 1, 'Carpenter123', 'Jay', 'Carpenter', '27 North Promenade\r\nDONHEAD ST MARY', NULL, 'Shaftesbury', 'United Kingdom', 'SP7 0HW'),
('MF@gmail.com', 2, 'Farrell123', 'Mohammad', 'Farrell', '17 Peachfield Road\r\nCEFN-COED-Y-CYMMER', NULL, 'Merthyr Tydfil', 'United Kingdom', 'CF48 8TH'),
('AB@gmail.com', 3, 'Begum123', 'Alfie', 'Begum', '97 Park Row\r\nEGERTON', '90 Bishopgate Street\r\nSEDGEFORD', 'Egerton', 'United Kingdom', 'TN27 9TB');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`courseID`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`subscriptionID`),
  ADD KEY `sub to user id_idx` (`userID`),
  ADD KEY `sub to course_idx` (`courseID`),
  ADD KEY `sub to sub type` (`SubscriptionTypeId`);

--
-- Indexes for table `subscriptiontype`
--
ALTER TABLE `subscriptiontype`
  ADD PRIMARY KEY (`subscriptionTypeID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subscription`
--
ALTER TABLE `subscription`
  ADD CONSTRAINT `sub to course` FOREIGN KEY (`courseID`) REFERENCES `course` (`courseID`),
  ADD CONSTRAINT `sub to sub type` FOREIGN KEY (`SubscriptionTypeId`) REFERENCES `subscriptiontype` (`subscriptionTypeID`),
  ADD CONSTRAINT `sub to user id` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
