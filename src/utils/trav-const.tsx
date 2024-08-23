/* eslint-disable react-refresh/only-export-components */
import { Legionnaire, Praetorian, Imperian, EquitesLegati, EquitesImperatoris, EquitesCaesaris, BatteringRam, FireCatapult } from '../components/trav-comp/travSvg';

export const LEVELS_1_20 = [
	{ option: '1' },
	{ option: '2' },
	{ option: '3' },
	{ option: '4' },
	{ option: '5' },
	{ option: '6' },
	{ option: '7' },
	{ option: '8' },
	{ option: '9' },
	{ option: '10' },
	{ option: '11' },
	{ option: '12' },
	{ option: '13' },
	{ option: '14' },
	{ option: '15' },
	{ option: '16' },
	{ option: '17' },
	{ option: '18' },
	{ option: '19' },
	{ option: '20' },
];

export interface mainBuildingsProps {
	level: number;
	lumber: string;
	clay: string;
	iron: string;
	crop: string;
	cost: string;
	pop?: string;
	cp?: string;
	time?: string;
	defence?: string;
	capacity?: string;
	traders?: string;
	members?: string;
	production?: string;
	prodIncrease?: string;
	wallDeff?: string;
}

export interface BuildingsProps {
	option: string;
	building: mainBuildingsProps[];
}

export interface troopsProps {
	option?: string;
	attack?: number;
	infantryDeff?: number;
	cavalaryDeff?: number;
	fieldSpeed?: number;
	carry?: number;
	lumber?: number;
	clay?: number;
	iron?: number;
	crop?: number;
	// Only Lumber + Clay + Iron
	onlyLCI?: number;
	cost?: number;
	pop?: number;
	time?: string;
	timeLvl20?: string;
	consumption?: number;
}

const ROMAN_TROOPS_NAME = ['Legionnaire', 'Praetorian', 'Imperian', 'Equites Legati', 'Equites Imperatoris', 'Equites Caesaris', 'Battering ram', 'Fire Catapult', 'Senator', 'Settler'];
const TEUTONIC_TROOPS_NAME = ['Maceman', 'Spearman', 'Axeman', 'Scout', 'Paladin', 'Teutonic Knight', 'Ram', 'Catapult', 'Chief', 'Settler'];
const GALLIC_TROOPS_NAME = ['Phalanx', 'Swordsman', 'Pathfinder', 'Theutates Thunder', 'Druidrider', 'Haeduan', 'Ram', 'Trebuchet', 'Chieftain', 'Settler'];
const EGYPTIAN_TROOPS_NAME = ['Slave Militia', 'Ash Warden', 'Khopesh Warrior', 'Sopdu Explorer', 'Anhur Guard', 'Resheph Chariot', 'Ram', 'Stone Catapult', 'Nomarch', 'Settler'];
const HUNS_TROOPS_NAME = ['Mercenary', 'Bowman', 'Spotter', 'Steppe Rider', 'Marksman', 'Marauder', 'Ram', 'Catapult', 'Logades', 'Settler'];
const SPARTAN_TROOPS_NAME = ['Hoplite', 'Sentinel', 'Shieldsman', 'Twinsteel Therion', 'Elpida Rider', 'Corinthian Crusher', 'Ram', 'Ballista', 'Ephor', 'Settler'];

export const ALL_TROOP_NAMES = [ROMAN_TROOPS_NAME, TEUTONIC_TROOPS_NAME, GALLIC_TROOPS_NAME, SPARTAN_TROOPS_NAME, HUNS_TROOPS_NAME, EGYPTIAN_TROOPS_NAME];


export const ROMAN_TROOPS: troopsProps[] = [
	{ option: 'Legionnaire', attack: 40, infantryDeff: 35, cavalaryDeff: 50, fieldSpeed: 12, consumption: 1,carry: 50, lumber: 120, clay: 100, iron: 150, crop: 30, cost: 400, pop: 1, time: '0:26:40', timeLvl20: '00:03:36', },
	{ option: 'Praetorian', attack: 30, infantryDeff: 65, cavalaryDeff: 35, fieldSpeed: 10, consumption: 1,carry: 20, lumber: 100, clay: 130, iron: 160, crop: 70, cost: 460, pop: 1, time: '0:29:20', timeLvl20: '00:03:58', },
	{ option: 'Imperian', attack: 70, infantryDeff: 40, cavalaryDeff: 25, fieldSpeed: 14, consumption: 1,carry: 50, lumber: 150, clay: 160, iron: 210, crop: 80, cost: 600, pop: 1, time: '0:32:00', timeLvl20: '00:04:19', },
	{ option: 'Equites Legati', attack: 0, infantryDeff: 20, cavalaryDeff: 10, fieldSpeed: 32,consumption: 2, carry: 0, lumber: 140, clay: 160, iron: 20, crop: 40, cost: 360, pop: 2, time: '0:22:40', timeLvl20: '00:03:04', },
	{ option: 'Equites Imperatoris', attack: 120, infantryDeff: 65, cavalaryDeff: 50, fieldSpeed: 28,consumption: 3, carry: 100, lumber: 550, clay: 440, iron: 320, crop: 100, cost: 1410, pop: 3, time: '0:44:00', timeLvl20: '00:05:57', },
	{ option: 'Equites Caesaris', attack: 180, infantryDeff: 80, cavalaryDeff: 105, fieldSpeed: 20,consumption: 4, carry: 70, lumber: 550, clay: 640, iron: 800, crop: 180, cost: 2170, pop: 4, time: '0:58:40', timeLvl20: '00:07:55', },
	{ option: 'Battering ram', attack: 60, infantryDeff: 30, cavalaryDeff: 75, fieldSpeed: 8,consumption: 3, carry: 0, lumber: 900, clay: 360, iron: 500, crop: 70, cost: 1830, pop: 3, time: '1:16:40', timeLvl20: '00:10:21', },
	{ option: 'Fire Catapult', attack: 75, infantryDeff: 60, cavalaryDeff: 10, fieldSpeed: 6,consumption: 6, carry: 0, lumber: 950, clay: 1350, iron: 600, crop: 90, cost: 2990, pop: 6, time: '2:30:00', timeLvl20: '00:20:16', },
	{ option: 'Senator', attack: 50, infantryDeff: 40, cavalaryDeff: 30, fieldSpeed: 8, consumption: 5,carry: 0, lumber: 30750, clay: 27200, iron: 45000, crop: 37500, cost: 140450, pop: 5, time: '25:11:40', timeLvl20: '03:24:12', },
	{ option: 'Settler', attack: 0, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1,carry: 3000, lumber: 4600, clay: 4200, iron: 5800, crop: 4400, cost: 19000, pop: 1, time: '7:28:20', timeLvl20: '01:00:34', },
];

export const TEUTONIC_TROOPS: troopsProps[] = [
	{ option: 'Maceman', attack: 40, infantryDeff: 20, cavalaryDeff: 5, fieldSpeed: 14, consumption: 1,carry: 60, lumber: 95, clay: 75, iron: 40, crop: 40, cost: 250, pop: 1, time: '0:06:00', timeLvl20: '00:01:37', },
	{ option: 'Spearman', attack: 10, infantryDeff: 35, cavalaryDeff: 60, fieldSpeed: 14, consumption: 1,carry: 40, lumber: 145, clay: 70, iron: 85, crop: 40, cost: 340, pop: 1, time: '0:09:20', timeLvl20: '00:02:31', },
	{ option: 'Axeman', attack: 60, infantryDeff: 30, cavalaryDeff: 30, fieldSpeed: 12, consumption: 1,carry: 50, lumber: 130, clay: 120, iron: 170, crop: 70, cost: 490, pop: 1, time: '0:10:00', timeLvl20: '00:02:42', },
	{ option: 'Scout', attack: 0, infantryDeff: 10, cavalaryDeff: 5, fieldSpeed: 18, consumption: 1,carry: 0, lumber: 160, clay: 100, iron: 50, crop: 50, cost: 360, pop: 1, time: '0:09:20', timeLvl20: '00:02:31', },
	{ option: 'Paladin', attack: 55, infantryDeff: 100, cavalaryDeff: 40, fieldSpeed: 20, consumption: 2,carry: 110, lumber: 370, clay: 270, iron: 290, crop: 75, cost: 1005, pop: 2, time: '0:20:00', timeLvl20: '00:05:24', },
	{ option: 'Teutonic Knight', attack: 150, infantryDeff: 50, cavalaryDeff: 75, fieldSpeed: 18,consumption: 3, carry: 80, lumber: 450, clay: 515, iron: 480, crop: 80, cost: 1525, pop: 3, time: '0:24:40', timeLvl20: '00:06:40', },
	{ option: 'Ram', attack: 65, infantryDeff: 30, cavalaryDeff: 80, fieldSpeed: 8, consumption: 3,carry: 0, lumber: 1000, clay: 300, iron: 350, crop: 70, cost: 1720, pop: 3, time: '0:35:00', timeLvl20: '00:09:27', },
	{ option: 'Catapult', attack: 50, infantryDeff: 60, cavalaryDeff: 10, fieldSpeed: 6, consumption: 6,carry: 0, lumber: 900, clay: 1200, iron: 600, crop: 60, cost: 2760, pop: 6, time: '1:15:00', timeLvl20: '00:20:16', },
	{ option: 'Chief', attack: 40, infantryDeff: 60, cavalaryDeff: 40, fieldSpeed: 8, consumption: 4,carry: 0, lumber: 35500, clay: 26600, iron: 25000, crop: 27200, cost: 114300, pop: 4, time: '9:47:30', timeLvl20: '02:38:44', },
	{ option: 'Settler', attack: 10, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1,carry: 3000, lumber: 5800, clay: 4400, iron: 4600, crop: 5200, cost: 20000, pop: 1, time: '4:18:20', timeLvl20: '01:09:48', },
];

export const GALLIC_TROOPS: troopsProps[] = [
	{ option: 'Phalanx', attack: 15, infantryDeff: 40, cavalaryDeff: 50, fieldSpeed: 14, consumption: 1,carry: 35, lumber: 100, clay: 130, iron: 55, crop: 30, cost: 315, pop: 1, time: '0:08:40', timeLvl20: '00:02:20', },
	{ option: 'Swordsman', attack: 65, infantryDeff: 35, cavalaryDeff: 20, fieldSpeed: 12, consumption: 1,carry: 45, lumber: 140, clay: 150, iron: 185, crop: 60, cost: 535, pop: 1, time: '0:12:00', timeLvl20: '00:03:15', },
	{ option: 'Pathfinder', attack: 0, infantryDeff: 20, cavalaryDeff: 10, fieldSpeed: 34, consumption: 2,carry: 0, lumber: 170, clay: 150, iron: 20, crop: 40, cost: 380, pop: 2, time: '0:11:20', timeLvl20: '00:03:04', },
	{ option: 'Theutates Thunder', attack: 100, infantryDeff: 25, cavalaryDeff: 40, fieldSpeed: 38,consumption: 2, carry: 75, lumber: 350, clay: 450, iron: 230, crop: 60, cost: 1090, pop: 2, time: '0:20:40', timeLvl20: '00:05:35', },
	{ option: 'Druidrider', attack: 45, infantryDeff: 115, cavalaryDeff: 55, fieldSpeed: 32, consumption: 2,carry: 35, lumber: 360, clay: 330, iron: 280, crop: 120, cost: 1090, pop: 2, time: '0:21:20', timeLvl20: '00:05:46', },
	{ option: 'Haeduan', attack: 140, infantryDeff: 60, cavalaryDeff: 165, fieldSpeed: 26, consumption: 3,carry: 65, lumber: 500, clay: 620, iron: 675, crop: 170, cost: 1965, pop: 3, time: '0:26:00', timeLvl20: '00:07:01', },
	{ option: 'Ram', attack: 50, infantryDeff: 30, cavalaryDeff: 105, fieldSpeed: 8, consumption: 3,carry: 0, lumber: 950, clay: 555, iron: 330, crop: 75, cost: 1910, pop: 3, time: '0:41:40', timeLvl20: '00:11:15', },
	{ option: 'Trebuchet', attack: 70, infantryDeff: 45, cavalaryDeff: 10, fieldSpeed: 6, consumption: 6,carry: 0, lumber: 960, clay: 1450, iron: 630, crop: 90, cost: 3130, pop: 6, time: '1:15:00', timeLvl20: '00:20:16', },
	{ option: 'Chieftain', attack: 40, infantryDeff: 50, cavalaryDeff: 50, fieldSpeed: 10, consumption: 4,carry: 0, lumber: 30750, clay: 45400, iron: 31000, crop: 37500, cost: 144650, pop: 4, time: '12:35:50', timeLvl20: '03:24:12', },
	{ option: 'Settler', attack: 0, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1,carry: 3000, lumber: 4400, clay: 5600, iron: 4200, crop: 3900, cost: 18100, pop: 1, time: '3:09:10', timeLvl20: '00:51:06', },
];

export const EGYPTIAN_TROOPS: troopsProps[] = [
	{ option: 'Slave Militia', attack: 10, infantryDeff: 30, cavalaryDeff: 20, fieldSpeed: 14, consumption: 1, carry: 15, lumber: 45, clay: 60, iron: 30, crop: 15, cost: 150, pop: 1, time: '0:04:25', timeLvl20: '00:01:12', },
	{ option: 'Ash Warden', attack: 30, infantryDeff: 55, cavalaryDeff: 40, fieldSpeed: 12, consumption: 1, carry: 50, lumber: 115, clay: 100, iron: 145, crop: 60, cost: 420, pop: 1, time: '0:11:30', timeLvl20: '00:03:06', },
	{ option: 'Khopesh Warrior', attack: 65, infantryDeff: 50, cavalaryDeff: 20, fieldSpeed: 14, consumption: 1, carry: 45, lumber: 170, clay: 180, iron: 220, crop: 80, cost: 650, pop: 1, time: '0:12:00', timeLvl20: '00:03:15', },
	{ option: 'Sopdu Explorer', attack: 0, infantryDeff: 20, cavalaryDeff: 10, fieldSpeed: 32, consumption: 2, carry: 0, lumber: 170, clay: 150, iron: 20, crop: 40, cost: 380, pop: 2, time: '0:11:20', timeLvl20: '00:03:04', },
	{ option: 'Anhur Guard', attack: 50, infantryDeff: 110, cavalaryDeff: 50, fieldSpeed: 30, consumption: 2, carry: 50, lumber: 360, clay: 330, iron: 280, crop: 120, cost: 1090, pop: 2, time: '0:21:20', timeLvl20: '00:05:46', },
	{ option: 'Resheph Chariot', attack: 110, infantryDeff: 120, cavalaryDeff: 150, fieldSpeed: 20, consumption: 3, carry: 70, lumber: 450, clay: 560, iron: 610, crop: 180, cost: 1800, pop: 3, time: '0:27:00', timeLvl20: '00:07:18', },
	{ option: 'Ram', attack: 55, infantryDeff: 30, cavalaryDeff: 95, fieldSpeed: 8, consumption: 3, carry: 0, lumber: 995, clay: 575, iron: 340, crop: 80, cost: 1990, pop: 3, time: '0:40:00', timeLvl20: '00:10:48', },
	{ option: 'Stone Catapult', attack: 65, infantryDeff: 55, cavalaryDeff: 10, fieldSpeed: 6, consumption: 6, carry: 0, lumber: 980, clay: 1510, iron: 660, crop: 100, cost: 3250, pop: 6, time: '1:15:00', timeLvl20: '00:20:16', },
	{ option: 'Nomarch', attack: 40, infantryDeff: 50, cavalaryDeff: 50, fieldSpeed: 8, consumption: 4, carry: 0, lumber: 34000, clay: 50000, iron: 34000, crop: 42000, cost: 160000, pop: 4, time: '12:35:50', timeLvl20: '03:24:12', },
	{ option: 'Settler', attack: 0, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1, carry: 3000, lumber: 5040, clay: 6510, iron: 4830, crop: 4620, cost: 21000, pop: 1, time: '3:26:40', timeLvl20: '00:55:50', },
];

export const HUNS_TROOPS: troopsProps[] = [
	{ option: 'Mercenary', attack: 35, infantryDeff: 40, cavalaryDeff: 30, fieldSpeed: 12, consumption: 1, carry: 50, lumber: 130, clay: 80, iron: 40, crop: 40, cost: 290, pop: 1, time: '0:06:45', timeLvl20: '00:01:49', },
	{ option: 'Bowman', attack: 50, infantryDeff: 30, cavalaryDeff: 10, fieldSpeed: 12, consumption: 1, carry: 30, lumber: 140, clay: 110, iron: 60, crop: 60, cost: 370, pop: 1, time: '0:09:20', timeLvl20: '00:02:31', },
	{ option: 'Spotter', attack: 0, infantryDeff: 20, cavalaryDeff: 10, fieldSpeed: 38, consumption: 2, carry: 0, lumber: 170, clay: 150, iron: 20, crop: 40, cost: 380, pop: 2, time: '0:11:20', timeLvl20: '00:03:04', },
	{ option: 'Steppe Rider', attack: 120, infantryDeff: 30, cavalaryDeff: 15, fieldSpeed: 32, consumption: 2, carry: 75, lumber: 290, clay: 370, iron: 190, crop: 45, cost: 895, pop: 2, time: '0:20:00', timeLvl20: '00:05:24', },
	{ option: 'Marksman', attack: 110, infantryDeff: 80, cavalaryDeff: 70, fieldSpeed: 30, consumption: 2, carry: 105, lumber: 320, clay: 350, iron: 330, crop: 50, cost: 1050, pop: 2, time: '0:20:40', timeLvl20: '00:05:35', },
	{ option: 'Marauder', attack: 180, infantryDeff: 60, cavalaryDeff: 40, fieldSpeed: 28, consumption: 3, carry: 80, lumber: 450, clay: 560, iron: 610, crop: 140, cost: 1760, pop: 3, time: '0:24:55', timeLvl20: '00:06:44', },
	{ option: 'Ram', attack: 65, infantryDeff: 30, cavalaryDeff: 90, fieldSpeed: 8, consumption: 3, carry: 0, lumber: 1060, clay: 330, iron: 360, crop: 70, cost: 1820, pop: 3, time: '0:36:40', timeLvl20: '00:09:54', },
	{ option: 'Catapult', attack: 45, infantryDeff: 55, cavalaryDeff: 10, fieldSpeed: 6, consumption: 6, carry: 0, lumber: 950, clay: 1280, iron: 620, crop: 60, cost: 2910, pop: 6, time: '1:15:00', timeLvl20: '00:20:16', },
	{ option: 'Logades', attack: 50, infantryDeff: 40, cavalaryDeff: 30, fieldSpeed: 10, consumption: 4, carry: 0, lumber: 37200, clay: 27600, iron: 25200, crop: 27600, cost: 117600, pop: 4, time: '12:35:50', timeLvl20: '03:24:12', },
	{ option: 'Settler', attack: 10, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1, carry: 3000, lumber: 6100, clay: 4600, iron: 4800, crop: 5400, cost: 20900, pop: 1, time: '4:01:15', timeLvl20: '01:05:11', },
];

export const SPARTAN_TROOPS: troopsProps[] = [
	{ option: 'Hoplite', attack: 50, infantryDeff: 35, cavalaryDeff: 30, fieldSpeed: 12, consumption: 1, carry: 60, lumber: 110, clay: 185, iron: 110, crop: 35, cost: 440, pop: 1, time: '0:14:10', timeLvl20: '00:03:50', },
	{ option: 'Sentinel', attack: 0, infantryDeff: 40, cavalaryDeff: 22, fieldSpeed: 18, consumption: 1, carry: 0, lumber: 185, clay: 150, iron: 35, crop: 75, cost: 445, pop: 1, time: '0:10:16', timeLvl20: '00:02:46', },
	{ option: 'Shieldsman', attack: 40, infantryDeff: 85, cavalaryDeff: 45, fieldSpeed: 16, consumption: 1, carry: 40, lumber: 145, clay: 95, iron: 245, crop: 45, cost: 530, pop: 1, time: '0:16:08', timeLvl20: '00:04:22', },
	{ option: 'Twinsteel Therion', attack: 90, infantryDeff: 55, cavalaryDeff: 40, fieldSpeed: 12, consumption: 1, carry: 50, lumber: 130, clay: 200, iron: 400, crop: 65, cost: 795, pop: 1, time: '0:17:36', timeLvl20: '00:04:45', },
	{ option: 'Elpida Rider', attack: 55, infantryDeff: 120, cavalaryDeff: 90, fieldSpeed: 32, consumption: 2, carry: 110, lumber: 555, clay: 445, iron: 330, crop: 110, cost: 1440, pop: 2, time: '0:23:28', timeLvl20: '00:06:20', },
	{ option: 'Corinthian Crusher', attack: 195, infantryDeff: 80, cavalaryDeff: 75, fieldSpeed: 18, consumption: 3, carry: 80, lumber: 660, clay: 495, iron: 995, crop: 165, cost: 2315, pop: 3, time: '0:28:36', timeLvl20: '00:07:44', },
	{ option: 'Ram', attack: 65, infantryDeff: 30, cavalaryDeff: 80, fieldSpeed: 8, consumption: 3, carry: 0, lumber: 525, clay: 260, iron: 790, crop: 130, cost: 1705, pop: 3, time: '0:38:30', timeLvl20: '00:10:24', },
	{ option: 'Ballista', attack: 50, infantryDeff: 60, cavalaryDeff: 10, fieldSpeed: 6, consumption: 6, carry: 0, lumber: 550, clay: 1240, iron: 825, crop: 135, cost: 2750, pop: 6, time: '1:22:30', timeLvl20: '00:22:17', },
	{ option: 'Ephor', attack: 40, infantryDeff: 60, cavalaryDeff: 40, fieldSpeed: 8, consumption: 4, carry: 0, lumber: 33450, clay: 30665, iron: 36240, crop: 13935, cost: 114290, pop: 4, time: '10:46:15', timeLvl20: '02:54:36', },
	{ option: 'Settler', attack: 10, infantryDeff: 80, cavalaryDeff: 80, fieldSpeed: 10, consumption: 1, carry: 3000, lumber: 5115, clay: 5580, iron: 6045, crop: 3255, cost: 19995, pop: 1, time: '4:44:10', timeLvl20: '01:16:46', },
];


export const MAIN_BUILDING: mainBuildingsProps[] = [
	{ level: 1, lumber: '70', clay: '40', iron: '60', crop: '20', cost: '190', pop: '2', cp: '2', time: '0:41:40' },
	{ level: 2, lumber: '90', clay: '50', iron: '75', crop: '25', cost: '240', pop: '1', cp: '3', time: '0:43:40' },
	{ level: 3, lumber: '115', clay: '65', iron: '100', crop: '35', cost: '315', pop: '1', cp: '3', time: '0:53:40' },
	{ level: 4, lumber: '145', clay: '85', iron: '125', crop: '40', cost: '395', pop: '1', cp: '4', time: '1:04:40' },
	{ level: 5, lumber: '190', clay: '105', iron: '160', crop: '55', cost: '510', pop: '1', cp: '5', time: '1:16:50' },
	{ level: 6, lumber: '240', clay: '135', iron: '205', crop: '70', cost: '650', pop: '2', cp: '6', time: '1:30:10' },
	{ level: 7, lumber: '310', clay: '175', iron: '265', crop: '90', cost: '840', pop: '2', cp: '7', time: '1:45:00' },
	{ level: 8, lumber: '395', clay: '225', iron: '340', crop: '115', cost: '1075', pop: '2', cp: '9', time: '2:01:20' },
	{ level: 9, lumber: '505', clay: '290', iron: '430', crop: '145', cost: '1370', pop: '2', cp: '10', time: '2:19:40' },
	{ level: 10, lumber: '645', clay: '370', iron: '555', crop: '185', cost: '1755', pop: '2', cp: '12', time: '2:39:50' },
	{ level: 11, lumber: '825', clay: '470', iron: '710', crop: '235', cost: '2240', pop: '2', cp: '15', time: '3:02:20' },
	{ level: 12, lumber: '1060', clay: '605', iron: '905', crop: '300', cost: '2870', pop: '2', cp: '18', time: '3:27:20' },
	{ level: 13, lumber: '1355', clay: '775', iron: '1160', crop: '385', cost: '3675', pop: '2', cp: '21', time: '3:55:20' },
	{ level: 14, lumber: '1735', clay: '990', iron: '1485', crop: '495', cost: '4705', pop: '2', cp: '26', time: '4:26:20' },
	{ level: 15, lumber: '2220', clay: '1270', iron: '1900', crop: '635', cost: '6025', pop: '2', cp: '31', time: '5:00:50' },
	{ level: 16, lumber: '2840', clay: '1625', iron: '2435', crop: '810', cost: '7710', pop: '3', cp: '37', time: '5:39:30' },
	{ level: 17, lumber: '3635', clay: '2075', iron: '3115', crop: '1040', cost: '9865', pop: '3', cp: '44', time: '6:22:30' },
	{ level: 18, lumber: '4650', clay: '2660', iron: '3990', crop: '1330', cost: '12630', pop: '3', cp: '53', time: '7:10:30' },
	{ level: 19, lumber: '5955', clay: '3405', iron: '5105', crop: '1700', cost: '16165', pop: '3', cp: '64', time: '8:04:00' },
	{ level: 20, lumber: '7620', clay: '4355', iron: '6535', crop: '2180', cost: '20690', pop: '3', cp: '77', time: '9:03:50' },
];

export const RESIDENCE: mainBuildingsProps[] = [
	{ level: 1, lumber: '580', clay: '460', iron: '350', crop: '180', cost: '1570', pop: '1', cp: '2', time: '0:33:20', defence: '2' },
	{ level: 2, lumber: '740', clay: '590', iron: '450', crop: '230', cost: '2010', pop: '1', cp: '3', time: '0:43:40', defence: '8' },
	{ level: 3, lumber: '950', clay: '755', iron: '575', crop: '295', cost: '2575', pop: '1', cp: '3', time: '0:55:40', defence: '18' },
	{ level: 4, lumber: '1215', clay: '965', iron: '735', crop: '375', cost: '3290', pop: '1', cp: '4', time: '1:09:30', defence: '32' },
	{ level: 5, lumber: '1555', clay: '1235', iron: '940', crop: '485', cost: '4215', pop: '1', cp: '5', time: '1:25:40', defence: '50' },
	{ level: 6, lumber: '1995', clay: '1580', iron: '1205', crop: '620', cost: '5400', pop: '1', cp: '6', time: '1:44:20', defence: '72' },
	{ level: 7, lumber: '2550', clay: '2025', iron: '1540', crop: '790', cost: '6905', pop: '1', cp: '7', time: '2:06:10', defence: '98' },
	{ level: 8, lumber: '3265', clay: '2590', iron: '1970', crop: '1015', cost: '8840', pop: '1', cp: '9', time: '2:31:20', defence: '128' },
	{ level: 9, lumber: '4180', clay: '3315', iron: '2520', crop: '1295', cost: '11310', pop: '1', cp: '10', time: '3:00:30', defence: '162' },
	{ level: 10, lumber: '5350', clay: '4245', iron: '3230', crop: '1660', cost: '14485', pop: '1', cp: '12', time: '3:34:20', defence: '200' },
	{ level: 11, lumber: '6845', clay: '5430', iron: '4130', crop: '2125', cost: '18530', pop: '2', cp: '15', time: '4:13:40', defence: '242' },
	{ level: 12, lumber: '8765', clay: '6950', iron: '5290', crop: '2720', cost: '23725', pop: '2', cp: '18', time: '4:59:10', defence: '288' },
	{ level: 13, lumber: '11220', clay: '8900', iron: '6770', crop: '3480', cost: '30370', pop: '2', cp: '21', time: '5:52:10', defence: '338' },
	{ level: 14, lumber: '14360', clay: '11390', iron: '8665', crop: '4455', cost: '38870', pop: '2', cp: '26', time: '6:53:30', defence: '392' },
	{ level: 15, lumber: '18380', clay: '14580', iron: '11090', crop: '5705', cost: '49755', pop: '2', cp: '31', time: '8:04:40', defence: '450' },
	{ level: 16, lumber: '23530', clay: '18660', iron: '14200', crop: '7300', cost: '63690', pop: '2', cp: '37', time: '9:27:10', defence: '512' },
	{ level: 17, lumber: '30115', clay: '23885', iron: '18175', crop: '9345', cost: '81520', pop: '2', cp: '44', time: '11:02:50', defence: '578' },
	{ level: 18, lumber: '38550', clay: '30570', iron: '23260', crop: '11965', cost: '104345', pop: '2', cp: '53', time: '12:54:00', defence: '648' },
	{ level: 19, lumber: '49340', clay: '39130', iron: '29775', crop: '15315', cost: '133560', pop: '2', cp: '64', time: '15:02:50', defence: '722' },
	{ level: 20, lumber: '63155', clay: '50090', iron: '38110', crop: '19600', cost: '170955', pop: '2', cp: '77', time: '17:32:10', defence: '800' },
];

export const PALACE = [
	{ level: 1, lumber: '550', clay: '800', iron: '750', crop: '250', cost: '2350', pop: '1', cp: '6', time: '0:20:50', defence: '2' },
	{ level: 2, lumber: '705', clay: '1025', iron: '960', crop: '320', cost: '3010', pop: '1', cp: '7', time: '0:25:20', defence: '8' },
	{ level: 3, lumber: '900', clay: '1310', iron: '1230', crop: '410', cost: '3850', pop: '1', cp: '9', time: '0:30:40', defence: '18' },
	{ level: 4, lumber: '1155', clay: '1680', iron: '1575', crop: '525', cost: '4935', pop: '1', cp: '10', time: '0:36:50', defence: '32' },
	{ level: 5, lumber: '1475', clay: '2145', iron: '2015', crop: '670', cost: '6305', pop: '1', cp: '12', time: '0:43:50', defence: '50' },
	{ level: 6, lumber: '1890', clay: '2750', iron: '2575', crop: '860', cost: '8075', pop: '1', cp: '15', time: '0:52:10', defence: '72' },
	{ level: 7, lumber: '2420', clay: '3520', iron: '3300', crop: '1100', cost: '10340', pop: '1', cp: '18', time: '1:01:50', defence: '98' },
	{ level: 8, lumber: '3095', clay: '4505', iron: '4220', crop: '1405', cost: '13225', pop: '1', cp: '21', time: '1:12:50', defence: '128' },
	{ level: 9, lumber: '3965', clay: '5765', iron: '5405', crop: '1800', cost: '16935', pop: '1', cp: '26', time: '1:25:50', defence: '162' },
	{ level: 10, lumber: '5075', clay: '7380', iron: '6920', crop: '2305', cost: '21680', pop: '1', cp: '31', time: '1:40:50', defence: '200' },
	{ level: 11, lumber: '6495', clay: '9445', iron: '8855', crop: '2950', cost: '27745', pop: '2', cp: '37', time: '1:58:10', defence: '242' },
	{ level: 12, lumber: '8310', clay: '12090', iron: '11335', crop: '3780', cost: '35515', pop: '2', cp: '45', time: '2:18:20', defence: '288' },
	{ level: 13, lumber: '10640', clay: '15475', iron: '14505', crop: '4835', cost: '45455', pop: '2', cp: '53', time: '2:41:40', defence: '338' },
	{ level: 14, lumber: '13615', clay: '19805', iron: '18570', crop: '6190', cost: '58180', pop: '2', cp: '64', time: '3:08:50', defence: '392' },
	{ level: 15, lumber: '17430', clay: '25355', iron: '23770', crop: '7925', cost: '74480', pop: '2', cp: '77', time: '3:40:10', defence: '450' },
	{ level: 16, lumber: '22310', clay: '32450', iron: '30425', crop: '10140', cost: '95325', pop: '2', cp: '92', time: '4:16:40', defence: '512' },
	{ level: 17, lumber: '28560', clay: '41540', iron: '38940', crop: '12980', cost: '122020', pop: '2', cp: '111', time: '4:59:00', defence: '578' },
	{ level: 18, lumber: '36555', clay: '53170', iron: '49845', crop: '16615', cost: '156185', pop: '2', cp: '133', time: '5:48:10', defence: '648' },
	{ level: 19, lumber: '46790', clay: '68055', iron: '63805', crop: '21270', cost: '199920', pop: '2', cp: '160', time: '6:45:00', defence: '722' },
	{ level: 20, lumber: '59890', clay: '87110', iron: '81670', crop: '27225', cost: '255895', pop: '2', cp: '192', time: '7:51:10', defence: '800' },
];

export const WAREHOUSE = [
	{ level: 1, lumber: '130', clay: '160', iron: '90', crop: '40', cost: '420', pop: '1', cp: '1', time: '0:33:20', capcity: '1200' },
	{ level: 2, lumber: '165', clay: '205', iron: '115', crop: '50', cost: '535', pop: '1', cp: '1', time: '0:43:40', capcity: '1700' },
	{ level: 3, lumber: '215', clay: '260', iron: '145', crop: '65', cost: '685', pop: '1', cp: '2', time: '0:55:40', capcity: '2300' },
	{ level: 4, lumber: '275', clay: '335', iron: '190', crop: '85', cost: '885', pop: '1', cp: '2', time: '1:09:30', capcity: '3100' },
	{ level: 5, lumber: '350', clay: '430', iron: '240', crop: '105', cost: '1125', pop: '1', cp: '2', time: '1:25:40', capcity: '4000' },
	{ level: 6, lumber: '445', clay: '550', iron: '310', crop: '135', cost: '1440', pop: '1', cp: '3', time: '1:44:20', capcity: '5000' },
	{ level: 7, lumber: '570', clay: '705', iron: '395', crop: '175', cost: '1845', pop: '1', cp: '4', time: '2:06:10', capcity: '6300' },
	{ level: 8, lumber: '730', clay: '900', iron: '505', crop: '225', cost: '2360', pop: '1', cp: '4', time: '2:31:20', capcity: '7800' },
	{ level: 9, lumber: '935', clay: '1155', iron: '650', crop: '290', cost: '3030', pop: '1', cp: '5', time: '3:00:30', capcity: '9600' },
	{ level: 10, lumber: '1200', clay: '1475', iron: '830', crop: '370', cost: '3875', pop: '1', cp: '6', time: '3:34:20', capcity: '11800' },
	{ level: 11, lumber: '1535', clay: '1890', iron: '1065', crop: '470', cost: '4960', pop: '2', cp: '7', time: '4:13:40', capcity: '14400' },
	{ level: 12, lumber: '1965', clay: '2420', iron: '1360', crop: '605', cost: '6350', pop: '2', cp: '9', time: '4:59:10', capcity: '17600' },
	{ level: 13, lumber: '2515', clay: '3095', iron: '1740', crop: '775', cost: '8125', pop: '2', cp: '11', time: '5:52:10', capcity: '21400' },
	{ level: 14, lumber: '3220', clay: '3960', iron: '2230', crop: '990', cost: '10400', pop: '2', cp: '13', time: '6:53:30', capcity: '25900' },
	{ level: 15, lumber: '4120', clay: '5070', iron: '2850', crop: '1270', cost: '13310', pop: '2', cp: '15', time: '8:04:40', capcity: '31300' },
	{ level: 16, lumber: '5275', clay: '6490', iron: '3650', crop: '1625', cost: '17040', pop: '2', cp: '18', time: '9:27:10', capcity: '37900' },
	{ level: 17, lumber: '6750', clay: '8310', iron: '4675', crop: '2075', cost: '21810', pop: '2', cp: '22', time: '11:02:50', capcity: '45700' },
	{ level: 18, lumber: '8640', clay: '10635', iron: '5980', crop: '2660', cost: '27915', pop: '2', cp: '27', time: '12:54:00', capcity: '55100' },
	{ level: 19, lumber: '11060', clay: '13610', iron: '7655', crop: '3405', cost: '35730', pop: '2', cp: '32', time: '15:02:50', capcity: '66400' },
	{ level: 20, lumber: '14155', clay: '17420', iron: '9800', crop: '4355', cost: '45730', pop: '2', cp: '38', time: '17:32:10', capcity: '80000' },
];

export const GRANARY = [
	{ level: 1, lumber: '80', clay: '100', iron: '70', crop: '20', cost: '270', pop: '1', cp: '1', time: '0:26:40', capacity: '1200' },
	{ level: 2, lumber: '100', clay: '130', iron: '90', crop: '25', cost: '345', pop: '1', cp: '1', time: '0:36:00', capacity: '1700' },
	{ level: 3, lumber: '130', clay: '165', iron: '115', crop: '35', cost: '445', pop: '1', cp: '2', time: '0:46:40', capacity: '2300' },
	{ level: 4, lumber: '170', clay: '210', iron: '145', crop: '40', cost: '565', pop: '1', cp: '2', time: '0:59:10', capacity: '3100' },
	{ level: 5, lumber: '215', clay: '270', iron: '190', crop: '55', cost: '730', pop: '1', cp: '2', time: '1:13:40', capacity: '4000' },
	{ level: 6, lumber: '275', clay: '345', iron: '240', crop: '70', cost: '930', pop: '1', cp: '3', time: '1:30:20', capacity: '5000' },
	{ level: 7, lumber: '350', clay: '440', iron: '310', crop: '90', cost: '1190', pop: '1', cp: '4', time: '1:49:50', capacity: '6300' },
	{ level: 8, lumber: '450', clay: '565', iron: '395', crop: '115', cost: '1525', pop: '1', cp: '4', time: '2:12:30', capacity: '7800' },
	{ level: 9, lumber: '575', clay: '720', iron: '505', crop: '145', cost: '1945', pop: '1', cp: '5', time: '2:38:40', capacity: '9600' },
	{ level: 10, lumber: '740', clay: '920', iron: '645', crop: '185', cost: '2490', pop: '1', cp: '6', time: '3:09:00', capacity: '11800' },
	{ level: 11, lumber: '945', clay: '1180', iron: '825', crop: '235', cost: '3185', pop: '2', cp: '7', time: '3:44:10', capacity: '14400' },
	{ level: 12, lumber: '1210', clay: '1510', iron: '1060', crop: '300', cost: '4080', pop: '2', cp: '9', time: '4:25:10', capacity: '17600' },
	{ level: 13, lumber: '1545', clay: '1935', iron: '1355', crop: '385', cost: '5220', pop: '2', cp: '11', time: '5:12:30', capacity: '21400' },
	{ level: 14, lumber: '1980', clay: '2475', iron: '1735', crop: '495', cost: '6685', pop: '2', cp: '13', time: '6:07:30', capacity: '25900' },
	{ level: 15, lumber: '2535', clay: '3170', iron: '2220', crop: '635', cost: '8560', pop: '2', cp: '15', time: '7:11:20', capacity: '31300' },
	{ level: 16, lumber: '3245', clay: '4055', iron: '2840', crop: '810', cost: '10950', pop: '2', cp: '18', time: '8:25:20', capacity: '37900' },
	{ level: 17, lumber: '4155', clay: '5190', iron: '3635', crop: '1040', cost: '14020', pop: '2', cp: '22', time: '9:51:10', capacity: '45700' },
	{ level: 18, lumber: '5315', clay: '6645', iron: '4650', crop: '1330', cost: '17940', pop: '2', cp: '27', time: '11:30:50', capacity: '55100' },
	{ level: 19, lumber: '6805', clay: '8505', iron: '5955', crop: '1700', cost: '22965', pop: '2', cp: '32', time: '13:26:20', capacity: '66400' },
	{ level: 20, lumber: '8710', clay: '10890', iron: '7620', crop: '2180', cost: '29400', pop: '2', cp: '38', time: '15:40:20', capacity: '80000' },
];

export const ACADEMY = [
	{ level: 1, lumber: '220', clay: '160', iron: '90', crop: '40', cost: '510', pop: '4', cp: '5', time: '0:33:20' },
	{ level: 2, lumber: '280', clay: '205', iron: '115', crop: '50', cost: '650', pop: '2', cp: '6', time: '0:43:40' },
	{ level: 3, lumber: '360', clay: '260', iron: '145', crop: '65', cost: '830', pop: '2', cp: '7', time: '0:55:40' },
	{ level: 4, lumber: '460', clay: '335', iron: '190', crop: '85', cost: '1070', pop: '2', cp: '8', time: '1:09:30' },
	{ level: 5, lumber: '590', clay: '430', iron: '240', crop: '105', cost: '1365', pop: '2', cp: '10', time: '1:25:40' },
	{ level: 6, lumber: '755', clay: '550', iron: '310', crop: '135', cost: '1750', pop: '3', cp: '12', time: '1:44:20' },
	{ level: 7, lumber: '970', clay: '705', iron: '395', crop: '175', cost: '2245', pop: '3', cp: '14', time: '2:06:10' },
	{ level: 8, lumber: '1240', clay: '900', iron: '505', crop: '225', cost: '2870', pop: '3', cp: '17', time: '2:31:20' },
	{ level: 9, lumber: '1585', clay: '1155', iron: '650', crop: '290', cost: '3680', pop: '3', cp: '21', time: '3:00:30' },
	{ level: 10, lumber: '2030', clay: '1475', iron: '830', crop: '370', cost: '4705', pop: '3', cp: '25', time: '3:34:20' },
	{ level: 11, lumber: '2595', clay: '1890', iron: '1065', crop: '470', cost: '6020', pop: '3', cp: '30', time: '4:13:40' },
	{ level: 12, lumber: '3325', clay: '2420', iron: '1360', crop: '605', cost: '7710', pop: '3', cp: '36', time: '4:59:10' },
	{ level: 13, lumber: '4255', clay: '3095', iron: '1740', crop: '775', cost: '9865', pop: '3', cp: '43', time: '5:52:10' },
	{ level: 14, lumber: '5445', clay: '3960', iron: '2230', crop: '990', cost: '12625', pop: '3', cp: '51', time: '6:53:30' },
	{ level: 15, lumber: '6970', clay: '5070', iron: '2850', crop: '1270', cost: '16160', pop: '3', cp: '62', time: '8:04:40' },
	{ level: 16, lumber: '8925', clay: '6490', iron: '3650', crop: '1625', cost: '20690', pop: '4', cp: '74', time: '9:27:10' },
	{ level: 17, lumber: '11425', clay: '8310', iron: '4675', crop: '2075', cost: '26485', pop: '4', cp: '89', time: '11:02:50' },
	{ level: 18, lumber: '14620', clay: '10635', iron: '5980', crop: '2660', cost: '33895', pop: '4', cp: '106', time: '12:54:00' },
	{ level: 19, lumber: '18715', clay: '13610', iron: '7655', crop: '3405', cost: '43385', pop: '4', cp: '128', time: '15:02:50' },
	{ level: 20, lumber: '23955', clay: '17420', iron: '9800', crop: '4355', cost: '55530', pop: '4', cp: '153', time: '17:32:10' },
];

export const MARKETPLACE = [
	{ level: 1, lumber: '80', clay: '70', iron: '120', crop: '70', cost: '340', pop: '4', cp: '4', time: '0:30:00', traders: '1' },
	{ level: 2, lumber: '100', clay: '90', iron: '155', crop: '90', cost: '435', pop: '2', cp: '4', time: '0:39:50', traders: '2' },
	{ level: 3, lumber: '130', clay: '115', iron: '195', crop: '115', cost: '555', pop: '2', cp: '5', time: '0:51:10', traders: '3' },
	{ level: 4, lumber: '170', clay: '145', iron: '250', crop: '145', cost: '710', pop: '2', cp: '6', time: '1:04:20', traders: '4' },
	{ level: 5, lumber: '215', clay: '190', iron: '320', crop: '190', cost: '915', pop: '2', cp: '7', time: '1:19:40', traders: '5' },
	{ level: 6, lumber: '275', clay: '240', iron: '410', crop: '240', cost: '1165', pop: '3', cp: '9', time: '1:37:20', traders: '6' },
	{ level: 7, lumber: '350', clay: '310', iron: '530', crop: '310', cost: '1500', pop: '3', cp: '11', time: '1:58:00', traders: '7' },
	{ level: 8, lumber: '450', clay: '395', iron: '675', crop: '395', cost: '1915', pop: '3', cp: '13', time: '2:21:50', traders: '8' },
	{ level: 9, lumber: '575', clay: '505', iron: '865', crop: '505', cost: '2450', pop: '3', cp: '15', time: '2:49:30', traders: '9' },
	{ level: 10, lumber: '740', clay: '645', iron: '1105', crop: '645', cost: '3135', pop: '3', cp: '19', time: '3:21:40', traders: '10' },
	{ level: 11, lumber: '945', clay: '825', iron: '1415', crop: '825', cost: '4010', pop: '3', cp: '22', time: '3:59:00', traders: '11' },
	{ level: 12, lumber: '1210', clay: '1060', iron: '1815', crop: '1060', cost: '5145', pop: '3', cp: '27', time: '4:42:10', traders: '12' },
	{ level: 13, lumber: '1545', clay: '1355', iron: '2320', crop: '1355', cost: '6575', pop: '3', cp: '32', time: '5:32:20', traders: '13' },
	{ level: 14, lumber: '1980', clay: '1735', iron: '2970', crop: '1735', cost: '8420', pop: '3', cp: '39', time: '6:30:30', traders: '14' },
	{ level: 15, lumber: '2535', clay: '2220', iron: '3805', crop: '2220', cost: '10780', pop: '3', cp: '46', time: '7:38:00', traders: '15' },
	{ level: 16, lumber: '3245', clay: '2840', iron: '4870', crop: '2840', cost: '13795', pop: '4', cp: '55', time: '8:56:20', traders: '16' },
	{ level: 17, lumber: '4155', clay: '3635', iron: '6230', crop: '3635', cost: '17655', pop: '4', cp: '67', time: '10:27:00', traders: '17' },
	{ level: 18, lumber: '5315', clay: '4650', iron: '7975', crop: '4650', cost: '22590', pop: '4', cp: '80', time: '12:12:20', traders: '18' },
	{ level: 19, lumber: '6805', clay: '5955', iron: '10210', crop: '5955', cost: '28925', pop: '4', cp: '96', time: '14:14:30', traders: '19' },
	{ level: 20, lumber: '8710', clay: '7620', iron: '13065', crop: '7620', cost: '37015', pop: '4', cp: '115', time: '16:36:20', traders: '20' },
];

export const BARRACKS = [
	{ level: 1, lumber: '210', clay: '140', iron: '260', crop: '120', cost: '730', pop: '4', cp: '1', time: '0:33:20' },
	{ level: 2, lumber: '270', clay: '180', iron: '335', crop: '155', cost: '940', pop: '2', cp: '1', time: '0:43:40' },
	{ level: 3, lumber: '345', clay: '230', iron: '425', crop: '195', cost: '1195', pop: '2', cp: '2', time: '0:55:40' },
	{ level: 4, lumber: '440', clay: '295', iron: '545', crop: '250', cost: '1530', pop: '2', cp: '2', time: '1:09:30' },
	{ level: 5, lumber: '565', clay: '375', iron: '700', crop: '320', cost: '1960', pop: '2', cp: '2', time: '1:25:40' },
	{ level: 6, lumber: '720', clay: '480', iron: '895', crop: '410', cost: '2505', pop: '3', cp: '3', time: '1:44:20' },
	{ level: 7, lumber: '925', clay: '615', iron: '1145', crop: '530', cost: '3215', pop: '3', cp: '4', time: '2:06:10' },
	{ level: 8, lumber: '1180', clay: '790', iron: '1465', crop: '675', cost: '4110', pop: '3', cp: '4', time: '2:31:20' },
	{ level: 9, lumber: '1515', clay: '1010', iron: '1875', crop: '865', cost: '5265', pop: '3', cp: '5', time: '3:00:30' },
	{ level: 10, lumber: '1935', clay: '1290', iron: '2400', crop: '1105', cost: '6730', pop: '3', cp: '6', time: '3:34:20' },
	{ level: 11, lumber: '2480', clay: '1655', iron: '3070', crop: '1415', cost: '8620', pop: '3', cp: '7', time: '4:13:40' },
	{ level: 12, lumber: '3175', clay: '2115', iron: '3930', crop: '1815', cost: '11035', pop: '3', cp: '9', time: '4:59:10' },
	{ level: 13, lumber: '4060', clay: '2710', iron: '5030', crop: '2320', cost: '14120', pop: '3', cp: '11', time: '5:52:10' },
	{ level: 14, lumber: '5200', clay: '3465', iron: '6435', crop: '2970', cost: '18070', pop: '3', cp: '13', time: '6:53:30' },
	{ level: 15, lumber: '6655', clay: '4435', iron: '8240', crop: '3805', cost: '23135', pop: '3', cp: '15', time: '8:04:40' },
	{ level: 16, lumber: '8520', clay: '5680', iron: '10545', crop: '4870', cost: '29615', pop: '4', cp: '18', time: '9:27:10' },
	{ level: 17, lumber: '10905', clay: '7270', iron: '13500', crop: '6230', cost: '37905', pop: '4', cp: '22', time: '11:02:50' },
	{ level: 18, lumber: '13955', clay: '9305', iron: '17280', crop: '7975', cost: '48515', pop: '4', cp: '27', time: '12:54:00' },
	{ level: 19, lumber: '17865', clay: '11910', iron: '22120', crop: '10210', cost: '62105', pop: '4', cp: '32', time: '15:02:50' },
	{ level: 20, lumber: '22865', clay: '15245', iron: '28310', crop: '13065', cost: '79485', pop: '4', cp: '38', time: '17:32:10' },
];

export const EMBASSY = [
	{ level: 1, lumber: '180', clay: '130', iron: '150', crop: '80', cost: '540', pop: '3', cp: '5', time: '0:33:20', members: '0' },
	{ level: 2, lumber: '230', clay: '165', iron: '190', crop: '100', cost: '685', pop: '2', cp: '6', time: '0:43:40', members: '0' },
	{ level: 3, lumber: '295', clay: '215', iron: '245', crop: '130', cost: '885', pop: '2', cp: '7', time: '0:55:40', members: '9' },
	{ level: 4, lumber: '375', clay: '275', iron: '315', crop: '170', cost: '1135', pop: '2', cp: '8', time: '1:09:30', members: '12' },
	{ level: 5, lumber: '485', clay: '350', iron: '405', crop: '215', cost: '1455', pop: '2', cp: '10', time: '1:25:40', members: '15' },
	{ level: 6, lumber: '620', clay: '445', iron: '515', crop: '275', cost: '1855', pop: '2', cp: '12', time: '1:44:20', members: '18' },
	{ level: 7, lumber: '790', clay: '570', iron: '660', crop: '350', cost: '2370', pop: '2', cp: '14', time: '2:06:10', members: '21' },
	{ level: 8, lumber: '1015', clay: '730', iron: '845', crop: '450', cost: '3040', pop: '2', cp: '17', time: '2:31:20', members: '24' },
	{ level: 9, lumber: '1295', clay: '935', iron: '1080', crop: '575', cost: '3885', pop: '2', cp: '21', time: '3:00:30', members: '27' },
	{ level: 10, lumber: '1660', clay: '1200', iron: '1385', crop: '740', cost: '4985', pop: '2', cp: '25', time: '3:34:20', members: '30' },
	{ level: 11, lumber: '2125', clay: '1535', iron: '1770', crop: '945', cost: '6375', pop: '3', cp: '30', time: '4:13:40', members: '33' },
	{ level: 12, lumber: '2720', clay: '1965', iron: '2265', crop: '1210', cost: '8160', pop: '3', cp: '36', time: '4:59:10', members: '36' },
	{ level: 13, lumber: '3480', clay: '2515', iron: '2900', crop: '1545', cost: '10440', pop: '3', cp: '43', time: '5:52:10', members: '39' },
	{ level: 14, lumber: '4455', clay: '3220', iron: '3715', crop: '1980', cost: '13370', pop: '3', cp: '51', time: '6:53:30', members: '42' },
	{ level: 15, lumber: '5705', clay: '4120', iron: '4755', crop: '2535', cost: '17115', pop: '3', cp: '62', time: '8:04:40', members: '45' },
	{ level: 16, lumber: '7300', clay: '5275', iron: '6085', crop: '3245', cost: '21905', pop: '3', cp: '74', time: '9:27:10', members: '48' },
	{ level: 17, lumber: '9345', clay: '6750', iron: '7790', crop: '4155', cost: '28040', pop: '3', cp: '89', time: '11:02:50', members: '51' },
	{ level: 18, lumber: '11965', clay: '8640', iron: '9970', crop: '5315', cost: '35890', pop: '3', cp: '106', time: '12:54:00', members: '54' },
	{ level: 19, lumber: '15315', clay: '11060', iron: '12760', crop: '6805', cost: '45940', pop: '3', cp: '128', time: '15:02:50', members: '57' },
	{ level: 20, lumber: '19600', clay: '14155', iron: '16335', crop: '8710', cost: '58800', pop: '3', cp: '153', time: '17:32:10', members: '60' },
];

export const LUMBER = [
	{ level: 1, lumber: '40', clay: '100', iron: '50', crop: '60', cost: '250', pop: '2', cp: '1', time: '0:04:20', production: '7' },
	{ level: 2, lumber: '65', clay: '165', iron: '85', crop: '100', cost: '415', pop: '1', cp: '1', time: '0:10:20', production: '13' },
	{ level: 3, lumber: '110', clay: '280', iron: '140', crop: '165', cost: '695', pop: '1', cp: '2', time: '0:19:50', production: '21' },
	{ level: 4, lumber: '185', clay: '465', iron: '235', crop: '280', cost: '1165', pop: '1', cp: '2', time: '0:35:00', production: '31' },
	{ level: 5, lumber: '310', clay: '780', iron: '390', crop: '465', cost: '1945', pop: '1', cp: '2', time: '0:59:20', production: '46' },
	{ level: 6, lumber: '520', clay: '1300', iron: '650', crop: '780', cost: '3250', pop: '2', cp: '3', time: '1:38:10', production: '70' },
	{ level: 7, lumber: '870', clay: '2170', iron: '1085', crop: '1300', cost: '5425', pop: '2', cp: '4', time: '2:40:20', production: '98' },
	{ level: 8, lumber: '1450', clay: '3625', iron: '1810', crop: '2175', cost: '9060', pop: '2', cp: '4', time: '4:19:50', production: '140' },
	{ level: 9, lumber: '2420', clay: '6050', iron: '3025', crop: '3630', cost: '15125', pop: '2', cp: '5', time: '6:59:10', production: '203' },
	{ level: 10, lumber: '4040', clay: '10105', iron: '5050', crop: '6060', cost: '25255', pop: '2', cp: '6', time: '11:14:00', production: '280' },
	{ level: 11, lumber: '6750', clay: '16870', iron: '8435', crop: '10125', cost: '42180', pop: '2', cp: '7', time: '18:01:40', production: '392' },
	{ level: 12, lumber: '11270', clay: '28175', iron: '14090', crop: '16905', cost: '70440', pop: '2', cp: '9', time: '28:54:10', production: '525' },
	{ level: 13, lumber: '18820', clay: '47055', iron: '23525', crop: '28230', cost: '117630', pop: '2', cp: '11', time: '46:18:00', production: '693' },
	{ level: 14, lumber: '31430', clay: '78580', iron: '39290', crop: '47150', cost: '196450', pop: '2', cp: '13', time: '74:08:00', production: '889' },
	{ level: 15, lumber: '52490', clay: '131230', iron: '65615', crop: '78740', cost: '328075', pop: '2', cp: '15', time: '118:40:10', production: '1120' },
	{ level: 16, lumber: '87660', clay: '219155', iron: '109575', crop: '131490', cost: '547880', pop: '3', cp: '18', time: '189:55:30', production: '1400' },
	{ level: 17, lumber: '146395', clay: '365985', iron: '182995', crop: '219590', cost: '914965', pop: '3', cp: '22', time: '303:56:10', production: '1820' },
	{ level: 18, lumber: '244480', clay: '611195', iron: '305600', crop: '366715', cost: '1527990', pop: '3', cp: '27', time: '486:21:20', production: '2240' },
	{ level: 19, lumber: '408280', clay: '1020695', iron: '510350', crop: '612420', cost: '2551745', pop: '3', cp: '32', time: '778:13:20', production: '2800' },
	{ level: 20, lumber: '681825', clay: '1704565', iron: '852280', crop: '1022740', cost: '4261410', pop: '3', cp: '38', time: '1245:12:50', production: '3430' },
	{ level: 21, lumber: '1138650', clay: '2846620', iron: '1423310', crop: '1707970', cost: '7116550', pop: '3', cp: '46', time: '1992:23:50', production: '4270' },
	{ level: 22, lumber: '1901540', clay: '4753855', iron: '2376925', crop: '2852315', cost: '11884635', pop: '3', cp: '55', time: '3187:53:20', production: '5250' },
];

export const CLAY = [
	{ level: 1, lumber: '80', clay: '40', iron: '80', crop: '50', cost: '250', pop: '2', cp: '1', time: '0:03:40', production: '7' },
	{ level: 2, lumber: '135', clay: '65', iron: '135', crop: '85', cost: '420', pop: '1', cp: '1', time: '0:09:10', production: '13' },
	{ level: 3, lumber: '225', clay: '110', iron: '225', crop: '140', cost: '700', pop: '1', cp: '2', time: '0:18:00', production: '21' },
	{ level: 4, lumber: '375', clay: '185', iron: '375', crop: '235', cost: '1170', pop: '1', cp: '2', time: '0:32:10', production: '31' },
	{ level: 5, lumber: '620', clay: '310', iron: '620', crop: '390', cost: '1940', pop: '1', cp: '2', time: '0:54:50', production: '46' },
	{ level: 6, lumber: '1040', clay: '520', iron: '1040', crop: '650', cost: '3250', pop: '2', cp: '3', time: '1:31:10', production: '70' },
	{ level: 7, lumber: '1735', clay: '870', iron: '1735', crop: '1085', cost: '5425', pop: '2', cp: '4', time: '2:29:10', production: '98' },
	{ level: 8, lumber: '2900', clay: '1450', iron: '2900', crop: '1810', cost: '9060', pop: '2', cp: '4', time: '4:02:00', production: '140' },
	{ level: 9, lumber: '4840', clay: '2420', iron: '4840', crop: '3025', cost: '15125', pop: '2', cp: '5', time: '6:30:30', production: '203' },
	{ level: 10, lumber: '8080', clay: '4040', iron: '8080', crop: '5050', cost: '25250', pop: '2', cp: '6', time: '10:28:10', production: '280' },
	{ level: 11, lumber: '13500', clay: '6750', iron: '13500', crop: '8435', cost: '42185', pop: '2', cp: '7', time: '16:48:30', production: '392' },
	{ level: 12, lumber: '22540', clay: '11270', iron: '22540', crop: '14090', cost: '70440', pop: '2', cp: '9', time: '26:56:50', production: '525' },
	{ level: 13, lumber: '37645', clay: '18820', iron: '37645', crop: '23525', cost: '117635', pop: '2', cp: '11', time: '43:10:20', production: '693' },
	{ level: 14, lumber: '62865', clay: '31430', iron: '62865', crop: '39290', cost: '196450', pop: '2', cp: '13', time: '69:07:50', production: '889' },
	{ level: 15, lumber: '104985', clay: '52490', iron: '104985', crop: '65615', cost: '328075', pop: '2', cp: '15', time: '110:39:50', production: '1120' },
	{ level: 16, lumber: '175320', clay: '87660', iron: '175320', crop: '109575', cost: '547875', pop: '3', cp: '18', time: '177:07:00', production: '1400' },
	{ level: 17, lumber: '292790', clay: '146395', iron: '292790', crop: '182995', cost: '914970', pop: '3', cp: '22', time: '283:26:30', production: '1820' },
	{ level: 18, lumber: '488955', clay: '244480', iron: '488955', crop: '305600', cost: '1527990', pop: '3', cp: '27', time: '453:33:40', production: '2240' },
	{ level: 19, lumber: '816555', clay: '408280', iron: '816555', crop: '510350', cost: '2551740', pop: '3', cp: '32', time: '725:45:10', production: '2800' },
	{ level: 20, lumber: '1363650', clay: '681825', iron: '1363650', crop: '852280', cost: '4261405', pop: '3', cp: '38', time: '1161:15:40', production: '3430' },
	{ level: 21, lumber: '2277295', clay: '1138650', iron: '2277295', crop: '1423310', cost: '7116550', pop: '3', cp: '46', time: '1858:04:20', production: '4270' },
	{ level: 22, lumber: '3803085', clay: '1901540', iron: '3803085', crop: '2376925', cost: '11884635', pop: '3', cp: '55', time: '2972:58:10', production: '5250' },
];

export const IRON = [
	{ level: 1, lumber: '100', clay: '80', iron: '30', crop: '60', cost: '270', pop: '3', cp: '1', time: '0:07:30', production: '7' },
	{ level: 2, lumber: '165', clay: '135', iron: '50', crop: '100', cost: '450', pop: '2', cp: '1', time: '0:15:20', production: '13' },
	{ level: 3, lumber: '280', clay: '225', iron: '85', crop: '165', cost: '755', pop: '2', cp: '2', time: '0:27:50', production: '21' },
	{ level: 4, lumber: '465', clay: '375', iron: '140', crop: '280', cost: '1260', pop: '2', cp: '2', time: '0:48:00', production: '31' },
	{ level: 5, lumber: '780', clay: '620', iron: '235', crop: '465', cost: '2100', pop: '2', cp: '2', time: '1:20:00', production: '46' },
	{ level: 6, lumber: '1300', clay: '1040', iron: '390', crop: '780', cost: '3510', pop: '2', cp: '3', time: '2:11:20', production: '70' },
	{ level: 7, lumber: '2170', clay: '1735', iron: '650', crop: '1300', cost: '5855', pop: '2', cp: '4', time: '3:33:30', production: '98' },
	{ level: 8, lumber: '3625', clay: '2900', iron: '1085', crop: '2175', cost: '9785', pop: '2', cp: '4', time: '5:44:50', production: '140' },
	{ level: 9, lumber: '6050', clay: '4840', iron: '1815', crop: '3630', cost: '16335', pop: '2', cp: '5', time: '9:15:10', production: '203' },
	{ level: 10, lumber: '10105', clay: '8080', iron: '3030', crop: '6060', cost: '27275', pop: '2', cp: '6', time: '14:51:40', production: '280' },
	{ level: 11, lumber: '16870', clay: '13500', iron: '5060', crop: '10125', cost: '45555', pop: '3', cp: '7', time: '23:50:00', production: '392' },
	{ level: 12, lumber: '28175', clay: '22540', iron: '8455', crop: '16905', cost: '76075', pop: '3', cp: '9', time: '38:11:10', production: '525' },
	{ level: 13, lumber: '47055', clay: '37645', iron: '14115', crop: '28230', cost: '127045', pop: '3', cp: '11', time: '61:09:20', production: '693' },
	{ level: 14, lumber: '78580', clay: '62865', iron: '23575', crop: '47150', cost: '212170', pop: '3', cp: '13', time: '97:54:10', production: '889' },
	{ level: 15, lumber: '131230', clay: '104985', iron: '39370', crop: '78740', cost: '354325', pop: '3', cp: '15', time: '156:42:00', production: '1120' },
	{ level: 16, lumber: '219155', clay: '175320', iron: '65745', crop: '131490', cost: '591710', pop: '3', cp: '18', time: '250:46:30', production: '1400' },
	{ level: 17, lumber: '365985', clay: '292790', iron: '109795', crop: '219590', cost: '988160', pop: '3', cp: '22', time: '401:17:40', production: '1820' },
	{ level: 18, lumber: '611195', clay: '488955', iron: '183360', crop: '366715', cost: '1650225', pop: '3', cp: '27', time: '642:07:40', production: '2240' },
	{ level: 19, lumber: '1020695', clay: '816555', iron: '306210', crop: '612420', cost: '2755880', pop: '3', cp: '32', time: '1027:27:30', production: '2800' },
	{ level: 20, lumber: '1704565', clay: '1363650', iron: '511370', crop: '1022740', cost: '4602325', pop: '3', cp: '38', time: '1643:59:30', production: '3430' },
	{ level: 21, lumber: '2846620', clay: '2277295', iron: '853985', crop: '1707970', cost: '7685870', pop: '4', cp: '46', time: '2630:26:30', production: '4270' },
	{ level: 22, lumber: '4753855', clay: '3803085', iron: '1426155', crop: '2852315', cost: '12835410', pop: '4', cp: '55', time: '4208:45:40', production: '5250' },
];

export const CROP = [
	{ level: 1, lumber: '70', clay: '90', iron: '70', crop: '20', cost: '250', pop: '0', cp: '1', time: '0:02:30', production: '7' },
	{ level: 2, lumber: '115', clay: '150', iron: '115', crop: '35', cost: '415', pop: '0', cp: '1', time: '0:07:20', production: '13' },
	{ level: 3, lumber: '195', clay: '250', iron: '195', crop: '55', cost: '695', pop: '0', cp: '2', time: '0:15:00', production: '21' },
	{ level: 4, lumber: '325', clay: '420', iron: '325', crop: '95', cost: '1165', pop: '0', cp: '2', time: '0:27:30', production: '31' },
	{ level: 5, lumber: '545', clay: '700', iron: '545', crop: '155', cost: '1945', pop: '0', cp: '2', time: '0:47:10', production: '46' },
	{ level: 6, lumber: '910', clay: '1170', iron: '910', crop: '260', cost: '3250', pop: '1', cp: '3', time: '1:18:50', production: '70' },
	{ level: 7, lumber: '1520', clay: '1950', iron: '1520', crop: '435', cost: '5425', pop: '1', cp: '4', time: '2:09:40', production: '98' },
	{ level: 8, lumber: '2535', clay: '3260', iron: '2535', crop: '725', cost: '9055', pop: '1', cp: '4', time: '3:30:40', production: '140' },
	{ level: 9, lumber: '4235', clay: '5445', iron: '4235', crop: '1210', cost: '15125', pop: '1', cp: '5', time: '5:40:30', production: '203' },
	{ level: 10, lumber: '7070', clay: '9095', iron: '7070', crop: '2020', cost: '25255', pop: '1', cp: '6', time: '9:08:00', production: '280' },
	{ level: 11, lumber: '11810', clay: '15185', iron: '11810', crop: '3375', cost: '42180', pop: '1', cp: '7', time: '14:40:10', production: '392' },
	{ level: 12, lumber: '19725', clay: '25360', iron: '19725', crop: '5635', cost: '70445', pop: '1', cp: '9', time: '23:31:40', production: '525' },
	{ level: 13, lumber: '32940', clay: '42350', iron: '32940', crop: '9410', cost: '117640', pop: '1', cp: '11', time: '37:41:50', production: '693' },
	{ level: 14, lumber: '55005', clay: '70720', iron: '55005', crop: '15715', cost: '196445', pop: '1', cp: '13', time: '60:22:20', production: '889' },
	{ level: 15, lumber: '91860', clay: '118105', iron: '91860', crop: '26245', cost: '328070', pop: '1', cp: '15', time: '96:39:10', production: '1120' },
	{ level: 16, lumber: '153405', clay: '197240', iron: '153405', crop: '43830', cost: '547880', pop: '2', cp: '18', time: '154:41:50', production: '1400' },
	{ level: 17, lumber: '256190', clay: '329385', iron: '256190', crop: '73195', cost: '914960', pop: '2', cp: '22', time: '247:34:20', production: '1820' },
	{ level: 18, lumber: '427835', clay: '550075', iron: '427835', crop: '122240', cost: '1527985', pop: '2', cp: '27', time: '396:10:10', production: '2240' },
	{ level: 19, lumber: '714485', clay: '918625', iron: '714485', crop: '204140', cost: '2551735', pop: '2', cp: '32', time: '633:55:40', production: '2800' },
	{ level: 20, lumber: '1193195', clay: '1534105', iron: '1193195', crop: '340915', cost: '4261410', pop: '2', cp: '38', time: '1014:20:30', production: '3430' },
	{ level: 21, lumber: '1992635', clay: '2561960', iron: '1992635', crop: '569325', cost: '7116555', pop: '2', cp: '46', time: '1623:00:10', production: '4270' },
	{ level: 22, lumber: '3327700', clay: '4278470', iron: '3327700', crop: '950770', cost: '11884640', pop: '2', cp: '55', time: '2596:51:30', production: '5250' },
];

export const HERO_MANSION = [
	{ level: 1, lumber: '700', clay: '670', iron: '700', crop: '240', cost: '2310', pop: '2', cp: '1', time: '0:38:20', },
	{ level: 2, lumber: '930', clay: '890', iron: '930', crop: '320', cost: '3070', pop: '1', cp: '1', time: '0:44:30', },
	{ level: 3, lumber: '1240', clay: '1185', iron: '1240', crop: '425', cost: '4090', pop: '1', cp: '2', time: '0:51:30', },
	{ level: 4, lumber: '1645', clay: '1575', iron: '1645', crop: '565', cost: '5430', pop: '1', cp: '2', time: '0:59:50', },
	{ level: 5, lumber: '2190', clay: '2095', iron: '2190', crop: '750', cost: '7225', pop: '1', cp: '2', time: '1:09:20', },
	{ level: 6, lumber: '2915', clay: '2790', iron: '2915', crop: '1000', cost: '9620', pop: '2', cp: '3', time: '1:20:30', },
	{ level: 7, lumber: '3875', clay: '3710', iron: '3875', crop: '1330', cost: '12790', pop: '2', cp: '4', time: '1:33:20', },
	{ level: 8, lumber: '5155', clay: '4930', iron: '5155', crop: '1765', cost: '17005', pop: '2', cp: '4', time: '1:48:20', },
	{ level: 9, lumber: '6855', clay: '6560', iron: '6855', crop: '2350', cost: '22620', pop: '2', cp: '5', time: '2:05:40', },
	{ level: 10, lumber: '9115', clay: '8725', iron: '9115', crop: '3125', cost: '30080', pop: '2', cp: '6', time: '2:25:50', },
	{ level: 11, lumber: '12125', clay: '11605', iron: '12125', crop: '4155', cost: '40010', pop: '2', cp: '7', time: '2:49:10', },
	{ level: 12, lumber: '16125', clay: '15435', iron: '16125', crop: '5530', cost: '53215', pop: '2', cp: '9', time: '3:16:10', },
	{ level: 13, lumber: '21445', clay: '20525', iron: '21445', crop: '7350', cost: '70765', pop: '2', cp: '11', time: '3:47:30', },
	{ level: 14, lumber: '28520', clay: '27300', iron: '28520', crop: '9780', cost: '94120', pop: '2', cp: '13', time: '4:24:00', },
	{ level: 15, lumber: '37935', clay: '36310', iron: '37935', crop: '13005', cost: '125185', pop: '2', cp: '15', time: '5:06:10', },
	{ level: 16, lumber: '50450', clay: '48290', iron: '50450', crop: '17300', cost: '166490', pop: '3', cp: '18', time: '5:55:10', },
	{ level: 17, lumber: '67100', clay: '64225', iron: '67100', crop: '23005', cost: '221430', pop: '3', cp: '22', time: '6:52:00', },
	{ level: 18, lumber: '89245', clay: '85420', iron: '89245', crop: '30600', cost: '294510', pop: '3', cp: '27', time: '7:58:00', },
	{ level: 19, lumber: '118695', clay: '113605', iron: '118695', crop: '40695', cost: '391690', pop: '3', cp: '32', time: '9:14:20', },
	{ level: 20, lumber: '157865', clay: '151095', iron: '157865', crop: '54125', cost: '520950', pop: '3', cp: '38', time: '10:43:10', },
];

export const BAKERY = [
	{ level: 1, lumber: '1200', clay: '1480', iron: '870', crop: '1600', cost: '5150', pop: '4', cp: '1', time: '0:30:40', prodIncrease: '5%' },
	{ level: 2, lumber: '2160', clay: '2665', iron: '1565', crop: '2880', cost: '9270', pop: '2', cp: '1', time: '0:56:00', prodIncrease: '10%' },
	{ level: 3, lumber: '3890', clay: '4795', iron: '2820', crop: '5185', cost: '16690', pop: '2', cp: '2', time: '1:34:00', prodIncrease: '15%' },
	{ level: 4, lumber: '7000', clay: '8630', iron: '5075', crop: '9330', cost: '30035', pop: '2', cp: '2', time: '2:31:00', prodIncrease: '20%' },
	{ level: 5, lumber: '12595', clay: '15535', iron: '9135', crop: '16795', cost: '54060', pop: '2', cp: '2', time: '3:56:30', prodIncrease: '25%' },
];

export const BRICKYARD = [
	{ level: 1, lumber: '440', clay: '480', iron: '320', crop: '50', cost: '1290', pop: '3', cp: '1', time: '0:23:40', prodIncrease: '5%' },
	{ level: 2, lumber: '790', clay: '865', iron: '575', crop: '90', cost: '2320', pop: '2', cp: '1', time: '0:45:30', prodIncrease: '10%' },
	{ level: 3, lumber: '1425', clay: '1555', iron: '1035', crop: '160', cost: '4175', pop: '2', cp: '2', time: '1:18:20', prodIncrease: '15%' },
	{ level: 4, lumber: '2565', clay: '2800', iron: '1865', crop: '290', cost: '7520', pop: '2', cp: '2', time: '2:07:20', prodIncrease: '20%' },
	{ level: 5, lumber: '4620', clay: '5040', iron: '3360', crop: '525', cost: '13545', pop: '2', cp: '2', time: '3:21:00', prodIncrease: '25%' },
];

export const GRAIN_MILL = [
	{ level: 1, lumber: '500', clay: '440', iron: '380', crop: '1240', cost: '2560', pop: '3', cp: '1', time: '0:15:20', prodIncrease: '5%' },
	{ level: 2, lumber: '900', clay: '790', iron: '685', crop: '2230', cost: '4605', pop: '2', cp: '1', time: '0:33:00', prodIncrease: '10%' },
	{ level: 3, lumber: '1620', clay: '1425', iron: '1230', crop: '4020', cost: '8295', pop: '2', cp: '2', time: '0:59:30', prodIncrease: '15%' },
	{ level: 4, lumber: '2915', clay: '2565', iron: '2215', crop: '7230', cost: '14925', pop: '2', cp: '2', time: '1:39:20', prodIncrease: '20%' },
	{ level: 5, lumber: '5250', clay: '4620', iron: '3990', crop: '13015', cost: '26875', pop: '2', cp: '2', time: '2:38:50', prodIncrease: '25%' },
];

export const IRON_FOUNDRY = [
	{ level: 1, lumber: '200', clay: '450', iron: '510', crop: '120', cost: '1280', pop: '6', cp: '1', time: '0:34:00', prodIncrease: '5%' },
	{ level: 2, lumber: '360', clay: '810', iron: '920', crop: '215', cost: '2305', pop: '3', cp: '1', time: '1:01:00', prodIncrease: '10%' },
	{ level: 3, lumber: '650', clay: '1460', iron: '1650', crop: '390', cost: '4150', pop: '3', cp: '2', time: '1:41:30', prodIncrease: '15%' },
	{ level: 4, lumber: '1165', clay: '2625', iron: '2975', crop: '700', cost: '7465', pop: '3', cp: '2', time: '2:42:20', prodIncrease: '20%' },
	{ level: 5, lumber: '2100', clay: '4725', iron: '5355', crop: '1260', cost: '13440', pop: '3', cp: '2', time: '4:13:20', prodIncrease: '25%' },
];

export const SAWMILL = [
	{ level: 1, lumber: '520', clay: '380', iron: '290', crop: '90', cost: '1280', pop: '4', cp: '1', time: '0:25:00', prodIncrease: '5%' },
	{ level: 2, lumber: '935', clay: '685', iron: '520', crop: '160', cost: '2300', pop: '2', cp: '1', time: '0:47:30', prodIncrease: '10%' },
	{ level: 3, lumber: '1685', clay: '1230', iron: '940', crop: '290', cost: '4145', pop: '2', cp: '2', time: '1:21:20', prodIncrease: '15%' },
	{ level: 4, lumber: '3035', clay: '2215', iron: '1690', crop: '525', cost: '7465', pop: '2', cp: '2', time: '2:11:50', prodIncrease: '20%' },
	{ level: 5, lumber: '5460', clay: '3990', iron: '3045', crop: '945', cost: '13440', pop: '2', cp: '2', time: '3:27:50', prodIncrease: '25%' },
];

export const SMITHY = [
	{ level: 1, lumber: '180', clay: '250', iron: '500', crop: '160', cost: '1090', pop: '4', cp: '2', time: '0:16:40' },
	{ level: 2, lumber: '230', clay: '320', iron: '640', crop: '205', cost: '1395', pop: '2', cp: '3', time: '0:21:50' },
	{ level: 3, lumber: '295', clay: '410', iron: '820', crop: '260', cost: '1785', pop: '2', cp: '3', time: '0:27:50' },
	{ level: 4, lumber: '375', clay: '525', iron: '1050', crop: '335', cost: '2285', pop: '2', cp: '4', time: '0:34:50' },
	{ level: 5, lumber: '485', clay: '670', iron: '1340', crop: '430', cost: '2925', pop: '2', cp: '5', time: '0:42:50' },
	{ level: 6, lumber: '620', clay: '860', iron: '1720', crop: '550', cost: '3750', pop: '3', cp: '6', time: '0:52:10' },
	{ level: 7, lumber: '790', clay: '1100', iron: '2200', crop: '705', cost: '4795', pop: '3', cp: '7', time: '1:03:00' },
	{ level: 8, lumber: '1015', clay: '1405', iron: '2815', crop: '900', cost: '6135', pop: '3', cp: '9', time: '1:15:40' },
	{ level: 9, lumber: '1295', clay: '1800', iron: '3605', crop: '1155', cost: '7855', pop: '3', cp: '10', time: '1:30:10' },
	{ level: 10, lumber: '1660', clay: '2305', iron: '4610', crop: '1475', cost: '10050', pop: '3', cp: '12', time: '1:47:10' },
	{ level: 11, lumber: '2125', clay: '2950', iron: '5905', crop: '1890', cost: '12870', pop: '3', cp: '15', time: '2:06:50' },
	{ level: 12, lumber: '2720', clay: '3780', iron: '7555', crop: '2420', cost: '16475', pop: '3', cp: '18', time: '2:29:40' },
	{ level: 13, lumber: '3480', clay: '4835', iron: '9670', crop: '3095', cost: '21080', pop: '3', cp: '21', time: '2:56:00' },
	{ level: 14, lumber: '4455', clay: '6190', iron: '12380', crop: '3960', cost: '26985', pop: '3', cp: '26', time: '3:26:40' },
	{ level: 15, lumber: '5705', clay: '7925', iron: '15845', crop: '5070', cost: '34545', pop: '3', cp: '31', time: '4:02:20' },
	{ level: 16, lumber: '7300', clay: '10140', iron: '20280', crop: '6490', cost: '44210', pop: '4', cp: '37', time: '4:43:30' },
	{ level: 17, lumber: '9345', clay: '12980', iron: '25960', crop: '8310', cost: '56595', pop: '4', cp: '44', time: '5:31:30' },
	{ level: 18, lumber: '11965', clay: '16615', iron: '33230', crop: '10635', cost: '72445', pop: '4', cp: '53', time: '6:27:00' },
	{ level: 19, lumber: '15315', clay: '21270', iron: '42535', crop: '13610', cost: '92730', pop: '4', cp: '64', time: '7:31:20' },
	{ level: 20, lumber: '19600', clay: '27225', iron: '54445', crop: '17420', cost: '118690', pop: '4', cp: '77', time: '8:46:10' },
];

export const CITY_WALL = [
	{ level: 1, lumber: '70', clay: '90', iron: '170', crop: '70', cost: '400', pop: '0', cp: '1', time: '0:16:40', wallDeff: '+10, +3.0%' },
	{ level: 2, lumber: '90', clay: '115', iron: '220', crop: '90', cost: '515', pop: '0', cp: '1', time: '0:21:50', wallDeff: '+20, +6.1%' },
	{ level: 3, lumber: '115', clay: '145', iron: '280', crop: '115', cost: '655', pop: '0', cp: '2', time: '0:27:50', wallDeff: '+30, +9.3%' },
	{ level: 4, lumber: '145', clay: '190', iron: '355', crop: '145', cost: '835', pop: '0', cp: '2', time: '0:34:50', wallDeff: '+40, +12.6%' },
	{ level: 5, lumber: '190', clay: '240', iron: '455', crop: '190', cost: '1075', pop: '0', cp: '2', time: '0:42:50', wallDeff: '+50, +15.9%' },
	{ level: 6, lumber: '240', clay: '310', iron: '585', crop: '240', cost: '1375', pop: '1', cp: '3', time: '0:52:10', wallDeff: '+60, +19.4%' },
	{ level: 7, lumber: '310', clay: '395', iron: '750', crop: '310', cost: '1765', pop: '1', cp: '4', time: '1:03:00', wallDeff: '+70, +23.0%' },
	{ level: 8, lumber: '395', clay: '505', iron: '955', crop: '395', cost: '2250', pop: '1', cp: '4', time: '1:15:40', wallDeff: '+80, +26.7%' },
	{ level: 9, lumber: '505', clay: '650', iron: '1225', crop: '505', cost: '2885', pop: '1', cp: '5', time: '1:30:10', wallDeff: '+90, +30.5%' },
	{ level: 10, lumber: '645', clay: '830', iron: '1570', crop: '645', cost: '3690', pop: '1', cp: '6', time: '1:47:10', wallDeff: '+100, +34.4%' },
	{ level: 11, lumber: '825', clay: '1065', iron: '2005', crop: '825', cost: '4720', pop: '1', cp: '7', time: '2:06:50', wallDeff: '+110, +38.4%' },
	{ level: 12, lumber: '1060', clay: '1360', iron: '2570', crop: '1060', cost: '6050', pop: '1', cp: '9', time: '2:29:40', wallDeff: '+120, +42.6%' },
	{ level: 13, lumber: '1355', clay: '1740', iron: '3290', crop: '1355', cost: '7740', pop: '1', cp: '11', time: '2:56:00', wallDeff: '+130, +46.9%' },
	{ level: 14, lumber: '1735', clay: '2230', iron: '4210', crop: '1735', cost: '9910', pop: '1', cp: '13', time: '3:26:40', wallDeff: '+140, +51.3%' },
	{ level: 15, lumber: '2220', clay: '2850', iron: '5390', crop: '2220', cost: '12680', pop: '1', cp: '15', time: '4:02:20', wallDeff: '+150, +55.8%' },
	{ level: 16, lumber: '2840', clay: '3650', iron: '6895', crop: '2840', cost: '16225', pop: '2', cp: '18', time: '4:43:30', wallDeff: '+160, +60.5%' },
	{ level: 17, lumber: '3635', clay: '4675', iron: '8825', crop: '3635', cost: '20770', pop: '2', cp: '22', time: '5:31:30', wallDeff: '+170, +65.3%' },
	{ level: 18, lumber: '4650', clay: '5980', iron: '11300', crop: '4650', cost: '26580', pop: '2', cp: '27', time: '6:27:00', wallDeff: '+180, +70.2%' },
	{ level: 19, lumber: '5955', clay: '7655', iron: '14460', crop: '5955', cost: '34025', pop: '2', cp: '32', time: '7:31:20', wallDeff: '+190, +75.4%' },
	{ level: 20, lumber: '7620', clay: '9800', iron: '18510', crop: '7620', cost: '43550', pop: '2', cp: '38', time: '8:46:10', wallDeff: '+200, +80.6%' },
];

export const EARTH_WALL = [
	{ level: 1, lumber: '120', clay: '200', iron: '0', crop: '80', cost: '400', pop: '0', cp: '1', time: '0:16:40', wallDeff: '+6, +2.0%' },
	{ level: 2, lumber: '155', clay: '255', iron: '0', crop: '100', cost: '510', pop: '0', cp: '1', time: '0:21:50', wallDeff: '+12, +4.0%' },
	{ level: 3, lumber: '195', clay: '330', iron: '0', crop: '130', cost: '655', pop: '0', cp: '2', time: '0:27:50', wallDeff: '+18, +6.1%' },
	{ level: 4, lumber: '250', clay: '420', iron: '0', crop: '170', cost: '840', pop: '0', cp: '2', time: '0:34:50', wallDeff: '+24, +8.2%' },
	{ level: 5, lumber: '320', clay: '535', iron: '0', crop: '215', cost: '1070', pop: '0', cp: '2', time: '0:42:50', wallDeff: '+30, +10.4%' },
	{ level: 6, lumber: '410', clay: '685', iron: '0', crop: '275', cost: '1370', pop: '1', cp: '3', time: '0:52:10', wallDeff: '+36, +12.6%' },
	{ level: 7, lumber: '530', clay: '880', iron: '0', crop: '350', cost: '1760', pop: '1', cp: '4', time: '1:03:00', wallDeff: '+42, +14.9%' },
	{ level: 8, lumber: '675', clay: '1125', iron: '0', crop: '450', cost: '2250', pop: '1', cp: '4', time: '1:15:40', wallDeff: '+48, +17.2%' },
	{ level: 9, lumber: '865', clay: '1440', iron: '0', crop: '575', cost: '2880', pop: '1', cp: '5', time: '1:30:10', wallDeff: '+54, +19.5%' },
	{ level: 10, lumber: '1105', clay: '1845', iron: '0', crop: '740', cost: '3690', pop: '1', cp: '6', time: '1:47:10', wallDeff: '+60, +21.9%' },
	{ level: 11, lumber: '1415', clay: '2360', iron: '0', crop: '945', cost: '4720', pop: '1', cp: '7', time: '2:06:50', wallDeff: '+66, +24.3%' },
	{ level: 12, lumber: '1815', clay: '3020', iron: '0', crop: '1210', cost: '6045', pop: '1', cp: '9', time: '2:29:40', wallDeff: '+72, +26.8%' },
	{ level: 13, lumber: '2320', clay: '3870', iron: '0', crop: '1545', cost: '7735', pop: '1', cp: '11', time: '2:56:00', wallDeff: '+78, +29.4%' },
	{ level: 14, lumber: '2970', clay: '4950', iron: '0', crop: '1980', cost: '9900', pop: '1', cp: '13', time: '3:26:40', wallDeff: '+84, +31.9%' },
	{ level: 15, lumber: '3805', clay: '6340', iron: '0', crop: '2535', cost: '12680', pop: '1', cp: '15', time: '4:02:20', wallDeff: '+90, +34.6%' },
	{ level: 16, lumber: '4870', clay: '8115', iron: '0', crop: '3245', cost: '16230', pop: '2', cp: '18', time: '4:43:30', wallDeff: '+96, +37.3%' },
	{ level: 17, lumber: '6230', clay: '10385', iron: '0', crop: '4155', cost: '20770', pop: '2', cp: '22', time: '5:31:30', wallDeff: '+102, +40.0%' },
	{ level: 18, lumber: '7975', clay: '13290', iron: '0', crop: '5315', cost: '26580', pop: '2', cp: '27', time: '6:27:00', wallDeff: '+108, +42.8%' },
	{ level: 19, lumber: '10210', clay: '17015', iron: '0', crop: '6805', cost: '34030', pop: '2', cp: '32', time: '7:31:20', wallDeff: '+114, +45.7%' },
	{ level: 20, lumber: '13065', clay: '21780', iron: '0', crop: '8710', cost: '43555', pop: '2', cp: '38', time: '8:46:10', wallDeff: '+120, +48.6%' },
];

export const PALISADE = [
	{ level: 1, lumber: '160', clay: '100', iron: '80', crop: '60', cost: '400', pop: '0', cp: '1', time: '0:16:40', wallDeff: '+8, +2.5%' },
	{ level: 2, lumber: '205', clay: '130', iron: '100', crop: '75', cost: '510', pop: '0', cp: '1', time: '0:21:50', wallDeff: '+16, +5.1%' },
	{ level: 3, lumber: '260', clay: '165', iron: '130', crop: '100', cost: '655', pop: '0', cp: '2', time: '0:27:50', wallDeff: '+24, +7.7%' },
	{ level: 4, lumber: '335', clay: '210', iron: '170', crop: '125', cost: '840', pop: '0', cp: '2', time: '0:34:50', wallDeff: '+32, +10.4%' },
	{ level: 5, lumber: '430', clay: '270', iron: '215', crop: '160', cost: '1075', pop: '0', cp: '2', time: '0:42:50', wallDeff: '+40, +13.1%' },
	{ level: 6, lumber: '550', clay: '345', iron: '275', crop: '205', cost: '1375', pop: '1', cp: '3', time: '0:52:10', wallDeff: '+48, +16.0%' },
	{ level: 7, lumber: '705', clay: '440', iron: '350', crop: '265', cost: '1760', pop: '1', cp: '4', time: '1:03:00', wallDeff: '+56, +18.9%' },
	{ level: 8, lumber: '900', clay: '565', iron: '450', crop: '340', cost: '2255', pop: '1', cp: '4', time: '1:15:40', wallDeff: '+64, +21.8%' },
	{ level: 9, lumber: '1155', clay: '720', iron: '575', crop: '430', cost: '2880', pop: '1', cp: '5', time: '1:30:10', wallDeff: '+72, +24.9%' },
	{ level: 10, lumber: '1475', clay: '920', iron: '740', crop: '555', cost: '3690', pop: '1', cp: '6', time: '1:47:10', wallDeff: '+80, +28.0%' },
	{ level: 11, lumber: '1890', clay: '1180', iron: '945', crop: '710', cost: '4725', pop: '1', cp: '7', time: '2:06:50', wallDeff: '+88, +31.2%' },
	{ level: 12, lumber: '2420', clay: '1510', iron: '1210', crop: '905', cost: '6045', pop: '1', cp: '9', time: '2:29:40', wallDeff: '+96, +34.5%' },
	{ level: 13, lumber: '3095', clay: '1935', iron: '1545', crop: '1160', cost: '7735', pop: '1', cp: '11', time: '2:56:00', wallDeff: '+104, +37.9%' },
	{ level: 14, lumber: '3960', clay: '2475', iron: '1980', crop: '1485', cost: '9900', pop: '1', cp: '13', time: '3:26:40', wallDeff: '+112, +41.3%' },
	{ level: 15, lumber: '5070', clay: '3170', iron: '2535', crop: '1900', cost: '12675', pop: '1', cp: '15', time: '4:02:20', wallDeff: '+120, +44.8%' },
	{ level: 16, lumber: '6490', clay: '4055', iron: '3245', crop: '2435', cost: '16225', pop: '2', cp: '18', time: '4:43:30', wallDeff: '+128, +48.5%' },
	{ level: 17, lumber: '8310', clay: '5190', iron: '4155', crop: '3115', cost: '20770', pop: '2', cp: '22', time: '5:31:30', wallDeff: '+136, +52.2%' },
	{ level: 18, lumber: '10635', clay: '6645', iron: '5315', crop: '3990', cost: '26585', pop: '2', cp: '27', time: '6:27:00', wallDeff: '+144, +56.0%' },
	{ level: 19, lumber: '13610', clay: '8505', iron: '6805', crop: '5105', cost: '34025', pop: '2', cp: '32', time: '7:31:20', wallDeff: '+152, +59.9%' },
	{ level: 20, lumber: '17420', clay: '10890', iron: '8710', crop: '6535', cost: '43555', pop: '2', cp: '38', time: '8:46:10', wallDeff: '+160, +63.9%' },
];

export const STONE_WALL = [
	{ level: 1, lumber: '110', clay: '160', iron: '70', crop: '60', cost: '400', pop: '0', cp: '1', time: '0:16:40', deffWall: '+8, +2.5%' },
	{ level: 2, lumber: '140', clay: '205', iron: '90', crop: '75', cost: '510', pop: '0', cp: '1', time: '0:21:50', deffWall: '+16, +5.1%' },
	{ level: 3, lumber: '180', clay: '260', iron: '115', crop: '100', cost: '655', pop: '0', cp: '2', time: '0:27:50', deffWall: '+24, +7.7%' },
	{ level: 4, lumber: '230', clay: '335', iron: '145', crop: '125', cost: '835', pop: '0', cp: '2', time: '0:34:50', deffWall: '+32, +10.4%' },
	{ level: 5, lumber: '295', clay: '430', iron: '190', crop: '160', cost: '1075', pop: '0', cp: '2', time: '0:42:50', deffWall: '+40, +13.1%' },
	{ level: 6, lumber: '380', clay: '550', iron: '240', crop: '205', cost: '1375', pop: '1', cp: '3', time: '0:52:10', deffWall: '+48, +16.0%' },
	{ level: 7, lumber: '485', clay: '705', iron: '310', crop: '265', cost: '1765', pop: '1', cp: '4', time: '1:03:00', deffWall: '+56, +18.9%' },
	{ level: 8, lumber: '620', clay: '900', iron: '395', crop: '340', cost: '2255', pop: '1', cp: '4', time: '1:15:40', deffWall: '+64, +21.8%' },
	{ level: 9, lumber: '795', clay: '1155', iron: '505', crop: '430', cost: '2885', pop: '1', cp: '5', time: '1:30:10', deffWall: '+72, +24.9%' },
	{ level: 10, lumber: '1015', clay: '1475', iron: '645', crop: '555', cost: '3690', pop: '1', cp: '6', time: '1:47:10', deffWall: '+80, +28.0%' },
	{ level: 11, lumber: '1300', clay: '1890', iron: '825', crop: '710', cost: '4725', pop: '1', cp: '7', time: '2:06:50', deffWall: '+88, +31.2%' },
	{ level: 12, lumber: '1660', clay: '2420', iron: '1060', crop: '905', cost: '6045', pop: '1', cp: '9', time: '2:29:40', deffWall: '+96, +34.5%' },
	{ level: 13, lumber: '2130', clay: '3095', iron: '1355', crop: '1160', cost: '7740', pop: '1', cp: '11', time: '2:56:00', deffWall: '+104, +37.9%' },
	{ level: 14, lumber: '2725', clay: '3960', iron: '1735', crop: '1485', cost: '9905', pop: '1', cp: '13', time: '3:26:40', deffWall: '+112, +41.3%' },
	{ level: 15, lumber: '3485', clay: '5070', iron: '2220', crop: '1900', cost: '12675', pop: '1', cp: '15', time: '4:02:20', deffWall: '+120, +44.8%' },
	{ level: 16, lumber: '4460', clay: '6490', iron: '2840', crop: '2435', cost: '16225', pop: '2', cp: '18', time: '4:43:30', deffWall: '+128, +48.5%' },
	{ level: 17, lumber: '5710', clay: '8310', iron: '3635', crop: '3115', cost: '20770', pop: '2', cp: '22', time: '5:31:30', deffWall: '+136, +52.2%' },
	{ level: 18, lumber: '7310', clay: '10635', iron: '4650', crop: '3990', cost: '26585', pop: '2', cp: '27', time: '6:27:00', deffWall: '+144, +56.0%' },
	{ level: 19, lumber: '9360', clay: '13610', iron: '5955', crop: '5105', cost: '34030', pop: '2', cp: '32', time: '7:31:20', deffWall: '+152, +59.9%' },
	{ level: 20, lumber: '11980', clay: '17420', iron: '7620', crop: '6535', cost: '43555', pop: '2', cp: '38', time: '8:46:10', deffWall: '+160, +63.9%' },
];

export const MAKESHIFT_WALL = [
	{ level: 1, lumber: '50', clay: '80', iron: '40', crop: '30', cost: '200', pop: '0', cp: '1', time: '0:16:40', deffWall: '+6, +1.5%' },
	{ level: 2, lumber: '65', clay: '100', iron: '50', crop: '40', cost: '255', pop: '0', cp: '1', time: '0:21:50', deffWall: '+12, +3.0%' },
	{ level: 3, lumber: '80', clay: '130', iron: '65', crop: '50', cost: '325', pop: '0', cp: '2', time: '0:27:50', deffWall: '+18, +4.6%' },
	{ level: 4, lumber: '105', clay: '170', iron: '85', crop: '65', cost: '425', pop: '0', cp: '2', time: '0:34:50', deffWall: '+24, +6.1%' },
	{ level: 5, lumber: '135', clay: '215', iron: '105', crop: '80', cost: '535', pop: '0', cp: '2', time: '0:42:50', deffWall: '+30, +7.7%' },
	{ level: 6, lumber: '170', clay: '275', iron: '135', crop: '105', cost: '685', pop: '1', cp: '3', time: '0:52:10', deffWall: '+36, +9.3%' },
	{ level: 7, lumber: '220', clay: '350', iron: '175', crop: '130', cost: '875', pop: '1', cp: '4', time: '1:03:00', deffWall: '+42, +11.0%' },
	{ level: 8, lumber: '280', clay: '450', iron: '225', crop: '170', cost: '1125', pop: '1', cp: '4', time: '1:15:40', deffWall: '+48, +12.6%' },
	{ level: 9, lumber: '360', clay: '575', iron: '290', crop: '215', cost: '1440', pop: '1', cp: '5', time: '1:30:10', deffWall: '+54, +14.3%' },
	{ level: 10, lumber: '460', clay: '740', iron: '370', crop: '275', cost: '1845', pop: '1', cp: '6', time: '1:47:10', deffWall: '+60, +16.1%' },
	{ level: 11, lumber: '590', clay: '945', iron: '470', crop: '355', cost: '2360', pop: '1', cp: '7', time: '2:06:50', deffWall: '+66, +17.8%' },
	{ level: 12, lumber: '755', clay: '1210', iron: '605', crop: '455', cost: '3025', pop: '1', cp: '9', time: '2:29:40', deffWall: '+72, +19.6%' },
	{ level: 13, lumber: '965', clay: '1545', iron: '775', crop: '580', cost: '3865', pop: '1', cp: '11', time: '2:56:00', deffWall: '+78, +21.4%' },
	{ level: 14, lumber: '1240', clay: '1980', iron: '990', crop: '745', cost: '4955', pop: '1', cp: '13', time: '3:26:40', deffWall: '+84, +23.2%' },
	{ level: 15, lumber: '1585', clay: '2535', iron: '1270', crop: '950', cost: '6340', pop: '1', cp: '15', time: '4:02:20', deffWall: '+90, +25.0%' },
	{ level: 16, lumber: '2030', clay: '3245', iron: '1625', crop: '1215', cost: '8115', pop: '2', cp: '18', time: '4:43:30', deffWall: '+96, +26.9%' },
	{ level: 17, lumber: '2595', clay: '4155', iron: '2075', crop: '1560', cost: '10385', pop: '2', cp: '22', time: '5:31:30', deffWall: '+102, +28.8%' },
	{ level: 18, lumber: '3325', clay: '5315', iron: '2660', crop: '1995', cost: '13295', pop: '2', cp: '27', time: '6:27:00', deffWall: '+108, +30.7%' },
	{ level: 19, lumber: '4255', clay: '6805', iron: '3405', crop: '2550', cost: '17015', pop: '2', cp: '32', time: '7:31:20', deffWall: '+114, +32.7%' },
	{ level: 20, lumber: '5445', clay: '8710', iron: '4355', crop: '3265', cost: '21775', pop: '2', cp: '38', time: '8:46:10', deffWall: '+120, +34.7%' },
];

export const TRADE_OFFICE = [
	{ level: 1, lumber: '1400', clay: '1330', iron: '1200', crop: '400', cost: '4330', pop: '3', cp: '4', time: '0:25:00', capacity: '120%', },
	{ level: 2, lumber: '1790', clay: '1700', iron: '1535', crop: '510', cost: '5535', pop: '2', cp: '4', time: '0:31:30', capacity: '140%', },
	{ level: 3, lumber: '2295', clay: '2180', iron: '1965', crop: '655', cost: '7095', pop: '2', cp: '5', time: '0:39:00', capacity: '160%', },
	{ level: 4, lumber: '2935', clay: '2790', iron: '2515', crop: '840', cost: '9080', pop: '2', cp: '6', time: '0:47:50', capacity: '180%', },
	{ level: 5, lumber: '3760', clay: '3570', iron: '3220', crop: '1075', cost: '11625', pop: '2', cp: '7', time: '0:58:00', capacity: '200%', },
	{ level: 6, lumber: '4810', clay: '4570', iron: '4125', crop: '1375', cost: '14880', pop: '2', cp: '9', time: '1:09:40', capacity: '220%', },
	{ level: 7, lumber: '6155', clay: '5850', iron: '5280', crop: '1760', cost: '19045', pop: '2', cp: '11', time: '1:23:20', capacity: '240%', },
	{ level: 8, lumber: '7880', clay: '7485', iron: '6755', crop: '2250', cost: '24370', pop: '2', cp: '13', time: '1:39:10', capacity: '260%', },
	{ level: 9, lumber: '10090', clay: '9585', iron: '8645', crop: '2880', cost: '31200', pop: '2', cp: '15', time: '1:57:30', capacity: '280%', },
	{ level: 10, lumber: '12915', clay: '12265', iron: '11070', crop: '3690', cost: '39940', pop: '2', cp: '19', time: '2:18:50', capacity: '300%', },
	{ level: 11, lumber: '16530', clay: '15700', iron: '14165', crop: '4720', cost: '51115', pop: '3', cp: '22', time: '2:43:40', capacity: '320%', },
	{ level: 12, lumber: '21155', clay: '20100', iron: '18135', crop: '6045', cost: '65435', pop: '3', cp: '27', time: '3:12:20', capacity: '340%', },
	{ level: 13, lumber: '27080', clay: '25725', iron: '23210', crop: '7735', cost: '83750', pop: '3', cp: '32', time: '3:45:30', capacity: '360%', },
	{ level: 14, lumber: '34660', clay: '32930', iron: '29710', crop: '9905', cost: '107205', pop: '3', cp: '39', time: '4:24:10', capacity: '380%', },
	{ level: 15, lumber: '44370', clay: '42150', iron: '38030', crop: '12675', cost: '137225', pop: '3', cp: '46', time: '5:08:50', capacity: '400%', },
	{ level: 16, lumber: '56790', clay: '53950', iron: '48680', crop: '16225', cost: '175645', pop: '3', cp: '55', time: '6:00:50', capacity: '420%', },
	{ level: 17, lumber: '72690', clay: '69060', iron: '62310', crop: '20770', cost: '224830', pop: '3', cp: '67', time: '7:01:00', capacity: '440%', },
	{ level: 18, lumber: '93045', clay: '88395', iron: '79755', crop: '26585', cost: '287780', pop: '3', cp: '80', time: '8:10:50', capacity: '460%', },
	{ level: 19, lumber: '119100', clay: '113145', iron: '102085', crop: '34030', cost: '368360', pop: '3', cp: '96', time: '9:31:50', capacity: '480%', },
	{ level: 20, lumber: '152445', clay: '144825', iron: '130670', crop: '43555', cost: '471495', pop: '3', cp: '115', time: '11:06:00', capacity: '500%', },
];

export const STABLE = [
	{ level: 1, lumber: '260', clay: '140', iron: '220', crop: '100', cost: '720', pop: '5', cp: '2', time: '0:18:20' },
	{ level: 2, lumber: '335', clay: '180', iron: '280', crop: '130', cost: '925', pop: '3', cp: '3', time: '0:23:50' },
	{ level: 3, lumber: '425', clay: '230', iron: '360', crop: '165', cost: '1180', pop: '3', cp: '3', time: '0:30:00' },
	{ level: 4, lumber: '545', clay: '295', iron: '460', crop: '210', cost: '1510', pop: '3', cp: '4', time: '0:37:20' },
	{ level: 5, lumber: '700', clay: '375', iron: '590', crop: '270', cost: '1935', pop: '3', cp: '5', time: '0:45:50' },
	{ level: 6, lumber: '895', clay: '480', iron: '755', crop: '345', cost: '2475', pop: '3', cp: '6', time: '0:55:40' },
	{ level: 7, lumber: '1145', clay: '615', iron: '970', crop: '440', cost: '3170', pop: '3', cp: '7', time: '1:07:10' },
	{ level: 8, lumber: '1465', clay: '790', iron: '1240', crop: '565', cost: '4060', pop: '3', cp: '9', time: '1:20:20' },
	{ level: 9, lumber: '1875', clay: '1010', iron: '1585', crop: '720', cost: '5190', pop: '3', cp: '10', time: '1:35:40' },
	{ level: 10, lumber: '2400', clay: '1290', iron: '2030', crop: '920', cost: '6640', pop: '3', cp: '12', time: '1:53:30' },
	{ level: 11, lumber: '3070', clay: '1655', iron: '2595', crop: '1180', cost: '8500', pop: '4', cp: '15', time: '2:14:10' },
	{ level: 12, lumber: '3930', clay: '2115', iron: '3325', crop: '1510', cost: '10880', pop: '4', cp: '18', time: '2:38:10' },
	{ level: 13, lumber: '5030', clay: '2710', iron: '4255', crop: '1935', cost: '13930', pop: '4', cp: '21', time: '3:06:00' },
	{ level: 14, lumber: '6435', clay: '3465', iron: '5445', crop: '2475', cost: '17820', pop: '4', cp: '26', time: '3:38:10' },
	{ level: 15, lumber: '8240', clay: '4435', iron: '6970', crop: '3170', cost: '22815', pop: '4', cp: '31', time: '4:15:40' },
	{ level: 16, lumber: '10545', clay: '5680', iron: '8925', crop: '4055', cost: '29205', pop: '4', cp: '37', time: '4:59:00' },
	{ level: 17, lumber: '13500', clay: '7270', iron: '11425', crop: '5190', cost: '37385', pop: '4', cp: '44', time: '5:49:20' },
	{ level: 18, lumber: '17280', clay: '9305', iron: '14620', crop: '6645', cost: '47850', pop: '4', cp: '53', time: '6:47:50' },
	{ level: 19, lumber: '22120', clay: '11910', iron: '18715', crop: '8505', cost: '61250', pop: '4', cp: '64', time: '7:55:30' },
	{ level: 20, lumber: '28310', clay: '15245', iron: '23955', crop: '10890', cost: '78400', pop: '4', cp: '77', time: '9:14:00' },
];

export const HOSPITAL = [
	{ level: 1, lumber: '320', clay: '280', iron: '420', crop: '360', cost: '1380', pop: '3', cp: '5', time: '0:25:00', },
	{ level: 2, lumber: '410', clay: '360', iron: '540', crop: '460', cost: '1770', pop: '2', cp: '6', time: '0:31:30', },
	{ level: 3, lumber: '525', clay: '460', iron: '690', crop: '590', cost: '2265', pop: '2', cp: '7', time: '0:39:00', },
	{ level: 4, lumber: '670', clay: '585', iron: '880', crop: '755', cost: '2890', pop: '2', cp: '8', time: '0:47:50', },
	{ level: 5, lumber: '860', clay: '750', iron: '1125', crop: '965', cost: '3700', pop: '2', cp: '10', time: '0:58:00', },
	{ level: 6, lumber: '1100', clay: '960', iron: '1445', crop: '1235', cost: '4740', pop: '2', cp: '12', time: '1:09:40', },
	{ level: 7, lumber: '1405', clay: '1230', iron: '1845', crop: '1585', cost: '6065', pop: '2', cp: '14', time: '1:23:20', },
	{ level: 8, lumber: '1800', clay: '1575', iron: '2365', crop: '2025', cost: '7765', pop: '2', cp: '17', time: '1:39:10', },
	{ level: 9, lumber: '2305', clay: '2020', iron: '3025', crop: '2595', cost: '9945', pop: '2', cp: '21', time: '1:57:30', },
	{ level: 10, lumber: '2950', clay: '2585', iron: '3875', crop: '3320', cost: '12730', pop: '2', cp: '25', time: '2:18:50', },
	{ level: 11, lumber: '3780', clay: '3305', iron: '4960', crop: '4250', cost: '16295', pop: '3', cp: '30', time: '2:43:40', },
	{ level: 12, lumber: '4835', clay: '4230', iron: '6345', crop: '5440', cost: '20850', pop: '3', cp: '36', time: '3:12:20', },
	{ level: 13, lumber: '6190', clay: '5415', iron: '8125', crop: '6965', cost: '26695', pop: '3', cp: '43', time: '3:45:30', },
	{ level: 14, lumber: '7925', clay: '6930', iron: '10400', crop: '8915', cost: '34170', pop: '3', cp: '51', time: '4:24:10', },
	{ level: 15, lumber: '10140', clay: '8875', iron: '13310', crop: '11410', cost: '43735', pop: '3', cp: '62', time: '5:08:50', },
	{ level: 16, lumber: '12980', clay: '11360', iron: '17035', crop: '14605', cost: '55980', pop: '3', cp: '74', time: '6:00:50', },
	{ level: 17, lumber: '16615', clay: '14540', iron: '21810', crop: '18690', cost: '71655', pop: '3', cp: '89', time: '7:01:00', },
	{ level: 18, lumber: '21270', clay: '18610', iron: '27915', crop: '23925', cost: '91720', pop: '3', cp: '106', time: '8:10:50', },
	{ level: 19, lumber: '27225', clay: '23820', iron: '35730', crop: '30625', cost: '117400', pop: '3', cp: '128', time: '9:31:50', },
	{ level: 20, lumber: '34845', clay: '30490', iron: '45735', crop: '39200', cost: '150270', pop: '3', cp: '153', time: '11:06:00', },
];

export const TOURNAMENT_SQUARE = [
	{ level: 1, lumber: '1750', clay: '2250', iron: '1530', crop: '240', cost: '5770', pop: '1', cp: '1', time: '0:58:20', bonus: '120%' },
	{ level: 2, lumber: '2240', clay: '2880', iron: '1960', crop: '305', cost: '7385', pop: '1', cp: '1', time: '1:12:40', bonus: '140%' },
	{ level: 3, lumber: '2865', clay: '3685', iron: '2505', crop: '395', cost: '9450', pop: '1', cp: '2', time: '1:29:20', bonus: '160%' },
	{ level: 4, lumber: '3670', clay: '4720', iron: '3210', crop: '505', cost: '12105', pop: '1', cp: '2', time: '1:48:30', bonus: '180%' },
	{ level: 5, lumber: '4700', clay: '6040', iron: '4105', crop: '645', cost: '15490', pop: '1', cp: '2', time: '2:11:00', bonus: '200%' },
	{ level: 6, lumber: '6015', clay: '7730', iron: '5255', crop: '825', cost: '19825', pop: '1', cp: '3', time: '2:36:50', bonus: '220%' },
	{ level: 7, lumber: '7695', clay: '9895', iron: '6730', crop: '1055', cost: '25375', pop: '1', cp: '4', time: '3:07:00', bonus: '240%' },
	{ level: 8, lumber: '9850', clay: '12665', iron: '8615', crop: '1350', cost: '32480', pop: '1', cp: '4', time: '3:42:00', bonus: '260%' },
	{ level: 9, lumber: '12610', clay: '16215', iron: '11025', crop: '1730', cost: '41580', pop: '1', cp: '5', time: '4:22:30', bonus: '280%' },
	{ level: 10, lumber: '16140', clay: '20755', iron: '14110', crop: '2215', cost: '53220', pop: '1', cp: '6', time: '5:09:30', bonus: '300%' },
	{ level: 11, lumber: '20660', clay: '26565', iron: '18065', crop: '2835', cost: '68125', pop: '2', cp: '7', time: '6:04:00', bonus: '320%' },
	{ level: 12, lumber: '26445', clay: '34000', iron: '23120', crop: '3625', cost: '87190', pop: '2', cp: '9', time: '7:07:10', bonus: '340%' },
	{ level: 13, lumber: '33850', clay: '43520', iron: '29595', crop: '4640', cost: '111605', pop: '2', cp: '11', time: '8:20:30', bonus: '360%' },
	{ level: 14, lumber: '43330', clay: '55705', iron: '37880', crop: '5940', cost: '142855', pop: '2', cp: '13', time: '9:45:40', bonus: '380%' },
	{ level: 15, lumber: '55460', clay: '71305', iron: '48490', crop: '7605', cost: '182860', pop: '2', cp: '15', time: '11:24:20', bonus: '400%' },
	{ level: 16, lumber: '70990', clay: '91270', iron: '62065', crop: '9735', cost: '234060', pop: '2', cp: '18', time: '13:18:50', bonus: '420%' },
	{ level: 17, lumber: '90865', clay: '116825', iron: '79440', crop: '12460', cost: '299590', pop: '2', cp: '22', time: '15:31:40', bonus: '440%' },
	{ level: 18, lumber: '116305', clay: '149540', iron: '101685', crop: '15950', cost: '383480', pop: '2', cp: '27', time: '18:05:40', bonus: '460%' },
	{ level: 19, lumber: '148875', clay: '191410', iron: '130160', crop: '20415', cost: '490860', pop: '2', cp: '32', time: '21:04:20', bonus: '480%' },
	{ level: 20, lumber: '190560', clay: '245005', iron: '166600', crop: '26135', cost: '628300', pop: '2', cp: '38', time: '24:31:40', bonus: '500%' },
];

export const STONEMASON = [
	{ level: 1, lumber: '155', clay: '130', iron: '125', crop: '70', cost: '480', pop: '2', cp: '1', time: '0:36:40', durability: '110%' },
	{ level: 2, lumber: '200', clay: '165', iron: '160', crop: '90', cost: '615', pop: '1', cp: '1', time: '0:52:30', durability: '120%' },
	{ level: 3, lumber: '255', clay: '215', iron: '205', crop: '115', cost: '790', pop: '1', cp: '2', time: '1:11:00', durability: '130%' },
	{ level: 4, lumber: '325', clay: '275', iron: '260', crop: '145', cost: '1005', pop: '1', cp: '2', time: '1:32:20', durability: '140%' },
	{ level: 5, lumber: '415', clay: '350', iron: '335', crop: '190', cost: '1290', pop: '1', cp: '2', time: '1:57:00', durability: '150%' },
	{ level: 6, lumber: '535', clay: '445', iron: '430', crop: '240', cost: '1650', pop: '2', cp: '3', time: '2:25:50', durability: '160%' },
	{ level: 7, lumber: '680', clay: '570', iron: '550', crop: '310', cost: '2110', pop: '2', cp: '4', time: '2:59:10', durability: '170%' },
	{ level: 8, lumber: '875', clay: '730', iron: '705', crop: '395', cost: '2705', pop: '2', cp: '4', time: '3:37:50', durability: '180%' },
	{ level: 9, lumber: '1115', clay: '935', iron: '900', crop: '505', cost: '3455', pop: '2', cp: '5', time: '4:22:40', durability: '190%' },
	{ level: 10, lumber: '1430', clay: '1200', iron: '1155', crop: '645', cost: '4430', pop: '2', cp: '6', time: '5:14:40', durability: '200%' },
	{ level: 11, lumber: '1830', clay: '1535', iron: '1475', crop: '825', cost: '5665', pop: '2', cp: '7', time: '6:15:00', durability: '210%' },
	{ level: 12, lumber: '2340', clay: '1965', iron: '1890', crop: '1060', cost: '7255', pop: '2', cp: '9', time: '7:25:00', durability: '220%' },
	{ level: 13, lumber: '3000', clay: '2515', iron: '2420', crop: '1355', cost: '9290', pop: '2', cp: '11', time: '8:46:10', durability: '230%' },
	{ level: 14, lumber: '3840', clay: '3220', iron: '3095', crop: '1735', cost: '11890', pop: '2', cp: '13', time: '10:20:20', durability: '240%' },
	{ level: 15, lumber: '4910', clay: '4120', iron: '3960', crop: '2220', cost: '15210', pop: '2', cp: '15', time: '12:09:40', durability: '250%' },
	{ level: 16, lumber: '6290', clay: '5275', iron: '5070', crop: '2840', cost: '19475', pop: '3', cp: '18', time: '14:16:20', durability: '260%' },
	{ level: 17, lumber: '8050', clay: '6750', iron: '6490', crop: '3635', cost: '24925', pop: '3', cp: '22', time: '16:43:20', durability: '270%' },
	{ level: 18, lumber: '10300', clay: '8640', iron: '8310', crop: '4650', cost: '31900', pop: '3', cp: '27', time: '19:33:50', durability: '280%' },
	{ level: 19, lumber: '13185', clay: '11060', iron: '10635', crop: '5955', cost: '40835', pop: '3', cp: '32', time: '22:51:40', durability: '290%' },
	{ level: 20, lumber: '16880', clay: '14155', iron: '13610', crop: '7620', cost: '52265', pop: '3', cp: '38', time: '26:41:10', durability: '300%' },
];

export const WORKSHOP = [
	{ level: 1, lumber: '460', clay: '510', iron: '600', crop: '320', cost: '1890', pop: '3', cp: '4', time: '0:50:00' },
	{ level: 2, lumber: '590', clay: '655', iron: '770', crop: '410', cost: '2425', pop: '2', cp: '4', time: '1:03:00' },
	{ level: 3, lumber: '755', clay: '835', iron: '985', crop: '525', cost: '3100', pop: '2', cp: '5', time: '1:18:00' },
	{ level: 4, lumber: '965', clay: '1070', iron: '1260', crop: '670', cost: '3965', pop: '2', cp: '6', time: '1:35:30' },
	{ level: 5, lumber: '1235', clay: '1370', iron: '1610', crop: '860', cost: '5075', pop: '2', cp: '7', time: '1:55:50' },
	{ level: 6, lumber: '1580', clay: '1750', iron: '2060', crop: '1100', cost: '6490', pop: '2', cp: '9', time: '2:19:20' },
	{ level: 7, lumber: '2025', clay: '2245', iron: '2640', crop: '1405', cost: '8315', pop: '2', cp: '11', time: '2:46:40' },
	{ level: 8, lumber: '2590', clay: '2870', iron: '3380', crop: '1800', cost: '10640', pop: '2', cp: '13', time: '3:18:20' },
	{ level: 9, lumber: '3315', clay: '3675', iron: '4325', crop: '2305', cost: '13620', pop: '2', cp: '15', time: '3:55:10' },
	{ level: 10, lumber: '4245', clay: '4705', iron: '5535', crop: '2950', cost: '17435', pop: '2', cp: '19', time: '4:37:40' },
	{ level: 11, lumber: '5430', clay: '6020', iron: '7085', crop: '3780', cost: '22315', pop: '3', cp: '22', time: '5:27:10' },
	{ level: 12, lumber: '6950', clay: '7705', iron: '9065', crop: '4835', cost: '28555', pop: '3', cp: '27', time: '6:24:30' },
	{ level: 13, lumber: '8900', clay: '9865', iron: '11605', crop: '6190', cost: '36560', pop: '3', cp: '32', time: '7:31:00' },
	{ level: 14, lumber: '11390', clay: '12625', iron: '14855', crop: '7925', cost: '46795', pop: '3', cp: '39', time: '8:48:10' },
	{ level: 15, lumber: '14580', clay: '16165', iron: '19015', crop: '10140', cost: '59900', pop: '3', cp: '46', time: '10:17:40' },
	{ level: 16, lumber: '18660', clay: '20690', iron: '24340', crop: '12980', cost: '76670', pop: '3', cp: '55', time: '12:01:30' },
	{ level: 17, lumber: '23885', clay: '26480', iron: '31155', crop: '16615', cost: '98135', pop: '3', cp: '67', time: '14:02:00' },
	{ level: 18, lumber: '30570', clay: '33895', iron: '39875', crop: '21270', cost: '125610', pop: '3', cp: '80', time: '16:21:40' },
	{ level: 19, lumber: '39130', clay: '43385', iron: '51040', crop: '27225', cost: '160780', pop: '3', cp: '96', time: '19:03:50' },
	{ level: 20, lumber: '50090', clay: '55535', iron: '65335', crop: '34845', cost: '205805', pop: '3', cp: '115', time: '22:11:50' },
];

export const TOWN_HALL = [
	{ level: 1, lumber: '1250', clay: '1110', iron: '1260', crop: '600', cost: '4220', pop: '4', cp: '6', time: '3:28:20' },
	{ level: 2, lumber: '1600', clay: '1420', iron: '1615', crop: '770', cost: '5405', pop: '2', cp: '7', time: '4:06:40' },
	{ level: 3, lumber: '2050', clay: '1820', iron: '2065', crop: '985', cost: '6920', pop: '2', cp: '9', time: '4:51:10' },
	{ level: 4, lumber: '2620', clay: '2330', iron: '2640', crop: '1260', cost: '8850', pop: '2', cp: '10', time: '5:42:40' },
	{ level: 5, lumber: '3355', clay: '2980', iron: '3380', crop: '1610', cost: '11325', pop: '2', cp: '12', time: '6:42:30' },
	{ level: 6, lumber: '4295', clay: '3815', iron: '4330', crop: '2060', cost: '14500', pop: '3', cp: '15', time: '7:52:00' },
	{ level: 7, lumber: '5500', clay: '4880', iron: '5540', crop: '2640', cost: '18560', pop: '3', cp: '18', time: '9:12:30' },
	{ level: 8, lumber: '7035', clay: '6250', iron: '7095', crop: '3380', cost: '23760', pop: '3', cp: '21', time: '10:45:50' },
	{ level: 9, lumber: '9005', clay: '8000', iron: '9080', crop: '4325', cost: '30410', pop: '3', cp: '26', time: '12:34:10' },
	{ level: 10, lumber: '11530', clay: '10240', iron: '11620', crop: '5535', cost: '38925', pop: '3', cp: '31', time: '14:39:50' },
	{ level: 11, lumber: '14755', clay: '13105', iron: '14875', crop: '7085', cost: '49820', pop: '3', cp: '37', time: '17:05:40' },
	{ level: 12, lumber: '18890', clay: '16775', iron: '19040', crop: '9065', cost: '63770', pop: '3', cp: '45', time: '19:54:50' },
	{ level: 13, lumber: '24180', clay: '21470', iron: '24370', crop: '11605', cost: '81625', pop: '3', cp: '53', time: '23:11:00' },
	{ level: 14, lumber: '30950', clay: '27480', iron: '31195', crop: '14855', cost: '104480', pop: '3', cp: '64', time: '26:58:30' },
	{ level: 15, lumber: '39615', clay: '35175', iron: '39930', crop: '19015', cost: '133735', pop: '3', cp: '77', time: '31:22:30' },
	{ level: 16, lumber: '50705', clay: '45025', iron: '51110', crop: '24340', cost: '171180', pop: '4', cp: '92', time: '36:28:40' },
	{ level: 17, lumber: '64905', clay: '57635', iron: '65425', crop: '31155', cost: '219120', pop: '4', cp: '111', time: '42:23:50' },
	{ level: 18, lumber: '83075', clay: '73770', iron: '83740', crop: '39875', cost: '280460', pop: '4', cp: '133', time: '49:15:50' },
	{ level: 19, lumber: '106340', clay: '94430', iron: '107190', crop: '51040', cost: '359000', pop: '4', cp: '160', time: '57:13:40' },
	{ level: 20, lumber: '136115', clay: '120870', iron: '137200', crop: '65335', cost: '459520', pop: '4', cp: '192', time: '66:28:10' },
];

export const RALLY_POINT = [
	{ level: 1, lumber: '110', clay: '160', iron: '90', crop: '70', cost: '430', pop: '1', cp: '1',	time: '0:33:20', },
	{ level: 2, lumber: '140', clay: '205', iron: '115', crop: '90', cost: '550', pop: '1', cp: '1',	time: '0:43:40', },
	{ level: 3, lumber: '180', clay: '260', iron: '145', crop: '115', cost: '700', pop: '1', cp: '2',	time: '0:55:40', },
	{ level: 4, lumber: '230', clay: '335', iron: '190', crop: '145', cost: '900', pop: '1', cp: '2',	time: '1:09:30', },
	{ level: 5, lumber: '295', clay: '430', iron: '240', crop: '190', cost: '1155', pop: '1', cp: '2',	time: '1:25:40', },
	{ level: 6, lumber: '380', clay: '550', iron: '310', crop: '240', cost: '1480', pop: '1', cp: '3',	time: '1:44:20', },
	{ level: 7, lumber: '485', clay: '705', iron: '395', crop: '310', cost: '1895', pop: '1', cp: '4',	time: '2:06:10', },
	{ level: 8, lumber: '620', clay: '900', iron: '505', crop: '395', cost: '2420', pop: '1', cp: '4',	time: '2:31:20', },
	{ level: 9, lumber: '795', clay: '1155', iron: '650', crop: '505', cost: '3105', pop: '1', cp: '5',	time: '3:00:30', },
	{ level: 10, lumber: '1015', clay: '1475', iron: '830', crop: '645', cost: '3965', pop: '1', cp: '6',	time: '3:34:20', },
	{ level: 11, lumber: '1300', clay: '1890', iron: '1065', crop: '825', cost: '5080', pop: '2', cp: '7',	time: '4:13:40', },
	{ level: 12, lumber: '1660', clay: '2420', iron: '1360', crop: '1060', cost: '6500', pop: '2', cp: '9',	time: '4:59:10', },
	{ level: 13, lumber: '2130', clay: '3095', iron: '1740', crop: '1355', cost: '8320', pop: '2', cp: '11',	time: '5:52:10', },
	{ level: 14, lumber: '2725', clay: '3960', iron: '2230', crop: '1735', cost: '10650', pop: '2', cp: '13',	time: '6:53:30', },
	{ level: 15, lumber: '3485', clay: '5070', iron: '2850', crop: '2220', cost: '13625', pop: '2', cp: '15',	time: '8:04:40', },
	{ level: 16, lumber: '4460', clay: '6490', iron: '3650', crop: '2840', cost: '17440', pop: '2', cp: '18',	time: '9:27:10', },
	{ level: 17, lumber: '5710', clay: '8310', iron: '4675', crop: '3635', cost: '22330', pop: '2', cp: '22',	time: '11:02:50', },
	{ level: 18, lumber: '7310', clay: '10635', iron: '5980', crop: '4650', cost: '28575', pop: '2', cp: '27',	time: '12:54:00', },
	{ level: 19, lumber: '9360', clay: '13610', iron: '7655', crop: '5955', cost: '36580', pop: '2', cp: '32',	time: '15:02:50', },
	{ level: 20, lumber: '11980', clay: '17420', iron: '9800', crop: '7620', cost: '46820', pop: '2', cp: '38',	time: '17:32:10', },
];

export const TREASURY = [
	{ level: 1, lumber: '2880', clay: '2740', iron: '2580', crop: '990', cost: '9190', pop: '4', cp: '7', time: '2:13:20' },
	{ level: 2, lumber: '3630', clay: '3450', iron: '3250', crop: '1245', cost: '11575', pop: '2', cp: '9', time: '2:39:40' },
	{ level: 3, lumber: '4570', clay: '4350', iron: '4095', crop: '1570', cost: '14585', pop: '2', cp: '10', time: '3:10:10' },
	{ level: 4, lumber: '5760', clay: '5480', iron: '5160', crop: '1980', cost: '18380', pop: '2', cp: '12', time: '3:45:40' },
	{ level: 5, lumber: '7260', clay: '6905', iron: '6505', crop: '2495', cost: '23165', pop: '2', cp: '15', time: '4:26:50' },
	{ level: 6, lumber: '9145', clay: '8700', iron: '8195', crop: '3145', cost: '29185', pop: '3', cp: '18', time: '5:14:30' },
	{ level: 7, lumber: '11525', clay: '10965', iron: '10325', crop: '3960', cost: '36775', pop: '3', cp: '21', time: '6:09:40' },
	{ level: 8, lumber: '14520', clay: '13815', iron: '13010', crop: '4990', cost: '46335', pop: '3', cp: '26', time: '7:13:50' },
	{ level: 9, lumber: '18295', clay: '17405', iron: '16390', crop: '6290', cost: '58380', pop: '3', cp: '31', time: '8:28:20' },
	{ level: 10, lumber: '23055', clay: '21930', iron: '20650', crop: '7925', cost: '73560', pop: '3', cp: '37', time: '9:54:40' },
	{ level: 11, lumber: '29045', clay: '27635', iron: '26020', crop: '9985', cost: '92685', pop: '3', cp: '45', time: '11:34:50' },
	{ level: 12, lumber: '36600', clay: '34820', iron: '32785', crop: '12580', cost: '116785', pop: '3', cp: '53', time: '13:31:00' },
	{ level: 13, lumber: '46115', clay: '43875', iron: '41310', crop: '15850', cost: '147150', pop: '3', cp: '64', time: '15:45:40' },
	{ level: 14, lumber: '58105', clay: '55280', iron: '52050', crop: '19975', cost: '185410', pop: '3', cp: '77', time: '18:22:00' },
	{ level: 15, lumber: '73210', clay: '69655', iron: '65585', crop: '25165', cost: '233615', pop: '3', cp: '92', time: '21:23:20' },
	{ level: 16, lumber: '92245', clay: '87760', iron: '82640', crop: '31710', cost: '294355', pop: '4', cp: '111', time: '24:53:40' },
	{ level: 17, lumber: '116230', clay: '110580', iron: '104125', crop: '39955', cost: '370890', pop: '4', cp: '133', time: '28:57:40' },
	{ level: 18, lumber: '146450', clay: '139330', iron: '131195', crop: '50340', cost: '467315', pop: '4', cp: '160', time: '33:40:40' },
	{ level: 19, lumber: '184530', clay: '175560', iron: '165305', crop: '63430', cost: '588825', pop: '4', cp: '192', time: '39:09:00' },
	{ level: 20, lumber: '232505', clay: '221205', iron: '208285', crop: '79925', cost: '741920', pop: '4', cp: '230', time: '45:29:50' },
];

export const CRANNY = [
	{ level: 1, lumber: '40', clay: '50', iron: '30', crop: '10', cost: '130', pop: '0', cp: '1', time: '0:05:00' },
	{ level: 2, lumber: '50', clay: '65', iron: '40', crop: '15', cost: '170', pop: '0', cp: '1', time: '0:10:50' },
	{ level: 3, lumber: '65', clay: '80', iron: '50', crop: '15', cost: '210', pop: '0', cp: '2', time: '0:17:30' },
	{ level: 4, lumber: '85', clay: '105', iron: '65', crop: '20', cost: '275', pop: '0', cp: '2', time: '0:25:20' },
	{ level: 5, lumber: '105', clay: '135', iron: '80', crop: '25', cost: '345', pop: '0', cp: '2', time: '0:34:20' },
	{ level: 6, lumber: '135', clay: '170', iron: '105', crop: '35', cost: '445', pop: '1', cp: '3', time: '0:44:50' },
	{ level: 7, lumber: '175', clay: '220', iron: '130', crop: '45', cost: '570', pop: '1', cp: '4', time: '0:57:00' },
	{ level: 8, lumber: '225', clay: '280', iron: '170', crop: '55', cost: '730', pop: '1', cp: '4', time: '1:11:10' },
	{ level: 9, lumber: '290', clay: '360', iron: '215', crop: '70', cost: '935', pop: '1', cp: '5', time: '1:27:40' },
	{ level: 10, lumber: '370', clay: '460', iron: '275', crop: '90', cost: '1195', pop: '1', cp: '6', time: '1:46:40' },
];

export const BUILDINGS: BuildingsProps[] = [
	{ option: 'Main Building', building: MAIN_BUILDING },
	{ option: 'Warehouse', building: WAREHOUSE },
	{ option: 'Granary', building: GRANARY },
	{ option: 'Marketplace', building: MARKETPLACE },
	{ option: 'Embassy', building: EMBASSY },
	{ option: 'Residence', building: RESIDENCE },
	{ option: 'Palace', building: PALACE },
	{ option: 'Cranny', building: CRANNY },
	{ option: 'Barracks', building: BARRACKS },
	{ option: 'Academy', building: ACADEMY },
	{ option: 'Smithy', building: SMITHY },
	{ option: 'Stable', building: STABLE },
	{ option: 'Workshop', building: WORKSHOP },
	{ option: 'Town Hall', building: TOWN_HALL },
	{ option: `Hero's Mansion`, building: HERO_MANSION },
	{ option: 'Hospital', building: HOSPITAL },
	{ option: 'Rally Point', building: RALLY_POINT },
	{ option: 'Trade Office', building: TRADE_OFFICE },
	{ option: 'Tournament Square', building: TOURNAMENT_SQUARE },
	{ option: 'Treasury', building: TREASURY },
	{ option: 'City Wall - Romans', building: CITY_WALL },
	{ option: 'Earth Wall - Teutons', building: EARTH_WALL },
	{ option: 'Palisade - Gauls', building: PALISADE },
	{ option: 'Stone Wall - Egyptians', building: STONE_WALL },
	{ option: 'Makeshift Wall - Huns', building: MAKESHIFT_WALL },
	{ option: 'Stonemason', building: STONEMASON },
	{ option: 'Woodcutter', building: LUMBER },
	{ option: 'Clay Pit', building: CLAY },
	{ option: 'Iron Mine', building: IRON },
	{ option: 'Cropland', building: CROP },
	{ option: 'Sawmill', building: SAWMILL },
	{ option: 'Brickyard', building: BRICKYARD },
	{ option: 'Iron Foundry', building: IRON_FOUNDRY },
	{ option: 'Grain Mill', building: GRAIN_MILL },
	{ option: `Bakery`, building: BAKERY },
];

export const TROOPS = [
	{ option: 'Romans', troops: ROMAN_TROOPS },
	{ option: 'Teutons', troops: TEUTONIC_TROOPS },
	{ option: 'Gallics', troops: GALLIC_TROOPS },
	{ option: 'Egyptians', troops: EGYPTIAN_TROOPS },
	{ option: 'Huns', troops: HUNS_TROOPS },
	{ option: 'Spartans', troops: SPARTAN_TROOPS },
];

export const ROMAN_TROOPS_TRAIN_LEVELS = [{
	option: 'Level 1', troops: [
		{ option: 'Legionnaire', x1: '00:26:40', x2: '00:13:20', x3: '00:08:53', x5: '00:05:20', x10: '00:02:40' },
		{ option: 'Praetorian', x1: '00:29:20', x2: '00:14:40', x3: '00:09:47', x5: '00:05:52', x10: '00:02:56' },
		{ option: 'Imperian', x1: '00:32:00', x2: '00:16:00', x3: '00:10:40', x5: '00:06:24', x10: '00:03:12' },
		{ option: 'Equites Legati', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Equites Imperatoris', x1: '00:44:00', x2: '00:22:00', x3: '00:14:40', x5: '00:08:48', x10: '00:04:24' },
		{ option: 'Equites Caesaris', x1: '00:58:40', x2: '00:29:20', x3: '00:19:33', x5: '00:11:44', x10: '00:05:52' },
		{ option: 'Battering ram', x1: '01:16:40', x2: '00:38:20', x3: '00:25:33', x5: '00:15:20', x10: '00:07:40' },
		{ option: 'Fire Catapult', x1: '02:30:00', x2: '01:15:00', x3: '00:50:00', x5: '00:30:00', x10: '00:15:00' },
		{ option: 'Senator', x1: '25:11:40', x2: '12:35:50', x3: '08:23:53', x5: '05:02:20', x10: '02:31:10' },
		{ option: 'Settler', x1: '07:28:20', x2: '03:44:10', x3: '02:29:27', x5: '01:29:40', x10: '00:44:50' },
	],
}, {
	option: 'Level 2', troops: [
		{ option: 'Legionnaire', x1: '00:24:00', x2: '00:12:00', x3: '00:08:00', x5: '00:04:48', x10: '00:02:24' },
		{ option: 'Praetorian', x1: '00:26:24', x2: '00:13:12', x3: '00:08:48', x5: '00:05:17', x10: '00:02:38' },
		{ option: 'Imperian', x1: '00:28:48', x2: '00:14:24', x3: '00:09:36', x5: '00:05:46', x10: '00:02:53' },
		{ option: 'Equites Legati', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Equites Imperatoris', x1: '00:39:36', x2: '00:19:48', x3: '00:13:12', x5: '00:07:55', x10: '00:03:58' },
		{ option: 'Equites Caesaris', x1: '00:52:48', x2: '00:26:24', x3: '00:17:36', x5: '00:10:34', x10: '00:05:17' },
		{ option: 'Battering ram', x1: '01:09:00', x2: '00:34:30', x3: '00:23:00', x5: '00:13:48', x10: '00:06:54' },
		{ option: 'Fire Catapult', x1: '02:15:00', x2: '01:07:30', x3: '00:45:00', x5: '00:27:00', x10: '00:13:30' },
		{ option: 'Senator', x1: '22:40:30', x2: '11:20:15', x3: '07:33:30', x5: '04:32:06', x10: '02:16:03' },
		{ option: 'Settler', x1: '06:43:30', x2: '03:21:45', x3: '02:14:30', x5: '01:20:42', x10: '00:40:21' },
	],
}, {
	option: 'Level 3', troops: [
		{ option: 'Legionnaire', x1: '00:21:36', x2: '00:10:48', x3: '00:07:12', x5: '00:04:19', x10: '00:02:10' },
		{ option: 'Praetorian', x1: '00:23:46', x2: '00:11:53', x3: '00:07:55', x5: '00:04:45', x10: '00:02:23' },
		{ option: 'Imperian', x1: '00:25:55', x2: '00:12:58', x3: '00:08:38', x5: '00:05:11', x10: '00:02:36' },
		{ option: 'Equites Legati', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Equites Imperatoris', x1: '00:35:38', x2: '00:17:49', x3: '00:11:53', x5: '00:07:08', x10: '00:03:34' },
		{ option: 'Equites Caesaris', x1: '00:47:31', x2: '00:23:46', x3: '00:15:50', x5: '00:09:30', x10: '00:04:45' },
		{ option: 'Battering ram', x1: '01:02:06', x2: '00:31:03', x3: '00:20:42', x5: '00:12:25', x10: '00:06:13' },
		{ option: 'Fire Catapult', x1: '02:01:30', x2: '01:00:45', x3: '00:40:30', x5: '00:24:18', x10: '00:12:09' },
		{ option: 'Senator', x1: '20:24:27', x2: '10:12:14', x3: '06:48:09', x5: '04:04:53', x10: '02:02:27' },
		{ option: 'Settler', x1: '06:03:09', x2: '03:01:35', x3: '02:01:03', x5: '01:12:38', x10: '00:36:19' },
	],
}, {
	option: 'Level 4', troops: [
		{ option: 'Legionnaire', x1: '00:19:26', x2: '00:09:43', x3: '00:06:29', x5: '00:03:53', x10: '00:01:57' },
		{ option: 'Praetorian', x1: '00:21:23', x2: '00:10:42', x3: '00:07:08', x5: '00:04:17', x10: '00:02:08' },
		{ option: 'Imperian', x1: '00:23:20', x2: '00:11:40', x3: '00:07:47', x5: '00:04:40', x10: '00:02:20' },
		{ option: 'Equites Legati', x1: '00:16:31', x2: '00:08:16', x3: '00:05:30', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Equites Imperatoris', x1: '00:32:05', x2: '00:16:03', x3: '00:10:42', x5: '00:06:25', x10: '00:03:13' },
		{ option: 'Equites Caesaris', x1: '00:42:46', x2: '00:21:23', x3: '00:14:15', x5: '00:08:33', x10: '00:04:17' },
		{ option: 'Battering ram', x1: '00:55:53', x2: '00:27:57', x3: '00:18:38', x5: '00:11:11', x10: '00:05:35' },
		{ option: 'Fire Catapult', x1: '001:49:21', x2: '00:54:41', x3: '00:36:27', x5: '00:21:52', x10: '00:10:56' },
		{ option: 'Senator', x1: '18:22:00', x2: '09:11:00', x3: '06:07:20', x5: '03:40:24', x10: '01:50:12' },
		{ option: 'Settler', x1: '05:26:50', x2: '02:43:25', x3: '01:48:57', x5: '01:05:22', x10: '00:32:41' },
	],
}, {
	option: 'Level 5', troops: [
		{ option: 'Legionnaire', x1: '00:17:30', x2: '00:08:45', x3: '00:05:50', x5: '00:03:30', x10: '00:01:45' },
		{ option: 'Praetorian', x1: '00:19:15', x2: '00:09:38', x3: '00:06:25', x5: '00:03:51', x10: '00:01:56' },
		{ option: 'Imperian', x1: '00:21:00', x2: '00:10:30', x3: '00:07:00', x5: '00:04:12', x10: '00:02:06' },
		{ option: 'Equites Legati', x1: '00:14:52', x2: '00:07:26', x3: '00:04:57', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Equites Imperatoris', x1: '00:28:52', x2: '00:14:26', x3: '00:09:37', x5: '00:05:46', x10: '00:02:53' },
		{ option: 'Equites Caesaris', x1: '00:38:29', x2: '00:19:15', x3: '00:12:50', x5: '00:07:42', x10: '00:03:51' },
		{ option: 'Battering ram', x1: '00:50:18', x2: '00:25:09', x3: '00:16:46', x5: '00:10:04', x10: '00:05:02' },
		{ option: 'Fire Catapult', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Senator', x1: '16:31:48', x2: '08:15:54', x3: '05:30:36', x5: '03:18:22', x10: '01:39:11' },
		{ option: 'Settler', x1: '04:54:09', x2: '02:27:05', x3: '01:38:03', x5: '00:58:50', x10: '00:29:25' },
	],
}, {
	option: 'Level 6', troops: [
		{ option: 'Legionnaire', x1: '00:15:45', x2: '00:07:53', x3: '00:05:15', x5: '00:03:09', x10: '00:01:35' },
		{ option: 'Praetorian', x1: '00:17:19', x2: '00:08:40', x3: '00:05:46', x5: '00:03:28', x10: '00:01:44' },
		{ option: 'Imperian', x1: '00:18:54', x2: '00:09:27', x3: '00:06:18', x5: '00:03:47', x10: '00:01:53' },
		{ option: 'Equites Legati', x1: '00:13:23', x2: '00:06:42', x3: '00:04:28', x5: '00:02:41', x10: '00:01:20' },
		{ option: 'Equites Imperatoris', x1: '00:25:59', x2: '00:12:60', x3: '00:08:40', x5: '00:05:12', x10: '00:02:36' },
		{ option: 'Equites Caesaris', x1: '00:34:39', x2: '00:17:20', x3: '00:11:33', x5: '00:06:56', x10: '00:03:28' },
		{ option: 'Battering ram', x1: '00:45:16', x2: '00:22:38', x3: '00:15:05', x5: '00:09:03', x10: '00:04:32' },
		{ option: 'Fire Catapult', x1: '01:28:34', x2: '00:44:17', x3: '00:29:31', x5: '00:17:43', x10: '00:08:51' },
		{ option: 'Senator', x1: '14:52:37', x2: '07:26:19', x3: '04:57:32', x5: '02:58:31', x10: '01:29:16' },
		{ option: 'Settler', x1: '04:24:44', x2: '02:12:22', x3: '01:28:15', x5: '00:52:57', x10: '00:26:28' },
	],
}, {
	option: 'Level 7', troops: [
		{ option: 'Legionnaire', x1: '00:14:10', x2: '00:07:05', x3: '00:04:43', x5: '00:02:50', x10: '00:01:25' },
		{ option: 'Praetorian', x1: '00:15:35', x2: '00:07:48', x3: '00:05:12', x5: '00:03:07', x10: '00:01:34' },
		{ option: 'Imperian', x1: '00:17:00', x2: '00:08:30', x3: '00:05:40', x5: '00:03:24', x10: '00:01:42' },
		{ option: 'Equites Legati', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Equites Imperatoris', x1: '00:23:23', x2: '00:11:42', x3: '00:07:48', x5: '00:04:41', x10: '00:02:20' },
		{ option: 'Equites Caesaris', x1: '00:31:11', x2: '00:15:36', x3: '00:10:24', x5: '00:06:14', x10: '00:03:07' },
		{ option: 'Battering ram', x1: '00:40:45', x2: '00:20:23', x3: '00:13:35', x5: '00:08:09', x10: '00:04:05' },
		{ option: 'Fire Catapult', x1: '01:19:43', x2: '00:39:52', x3: '00:26:34', x5: '00:15:57', x10: '00:07:58' },
		{ option: 'Senator', x1: '13:23:22', x2: '06:41:41', x3: '04:27:47', x5: '02:40:40', x10: '01:20:20' },
		{ option: 'Settler', x1: '03:58:16', x2: '01:59:08', x3: '01:19:25', x5: '00:47:39', x10: '00:23:50' },
	],
}, {
	option: 'Level 8', troops: [
		{ option: 'Legionnaire', x1: '00:12:45', x2: '00:06:23', x3: '00:04:15', x5: '00:02:33', x10: '00:01:17' },
		{ option: 'Praetorian', x1: '00:14:02', x2: '00:07:01', x3: '00:04:41', x5: '00:02:48', x10: '00:01:24' },
		{ option: 'Imperian', x1: '00:15:18', x2: '00:07:39', x3: '00:05:06', x5: '00:03:04', x10: '00:01:32' },
		{ option: 'Equites Legati', x1: '00:10:50', x2: '00:05:25', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Equites Imperatoris', x1: '00:21:03', x2: '00:10:32', x3: '00:07:01', x5: '00:04:13', x10: '00:02:06' },
		{ option: 'Equites Caesaris', x1: '00:28:04', x2: '00:14:02', x3: '00:09:21', x5: '00:05:37', x10: '00:02:48' },
		{ option: 'Battering ram', x1: '00:36:40', x2: '00:18:20', x3: '00:12:13', x5: '00:07:20', x10: '00:03:40' },
		{ option: 'Fire Catapult', x1: '01:11:45', x2: '00:35:53', x3: '00:23:55', x5: '00:14:21', x10: '00:07:11' },
		{ option: 'Senator', x1: '12:03:02', x2: '06:01:31', x3: '04:01:01', x5: '02:24:36', x10: '01:12:18' },
		{ option: 'Settler', x1: '03:34:26', x2: '01:47:13', x3: '01:11:29', x5: '00:42:53', x10: '00:21:27' },
	],
}, {
	option: 'Level 9', troops: [
		{ option: 'Legionnaire', x1: '00:11:29', x2: '00:05:45', x3: '00:03:50', x5: '00:02:18', x10: '00:01:09' },
		{ option: 'Praetorian', x1: '00:12:38', x2: '00:06:19', x3: '00:04:13', x5: '00:02:32', x10: '00:01:16' },
		{ option: 'Imperian', x1: '00:13:46', x2: '00:06:53', x3: '00:04:35', x5: '00:02:45', x10: '00:01:23' },
		{ option: 'Equites Legati', x1: '00:09:45', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Equites Imperatoris', x1: '00:18:56', x2: '00:09:28', x3: '00:06:19', x5: '00:03:47', x10: '00:01:54' },
		{ option: 'Equites Caesaris', x1: '00:25:15', x2: '00:12:38', x3: '00:08:25', x5: '00:05:03', x10: '00:02:32' },
		{ option: 'Battering ram', x1: '00:33:00', x2: '00:16:30', x3: '00:11:00', x5: '00:06:36', x10: '00:03:18' },
		{ option: 'Fire Catapult', x1: '01:04:34', x2: '00:32:17', x3: '00:21:31', x5: '00:12:55', x10: '00:06:27' },
		{ option: 'Senator', x1: '10:50:43', x2: '05:25:22', x3: '03:36:54', x5: '02:10:09', x10: '01:05:04' },
		{ option: 'Settler', x1: '03:13:00', x2: '01:36:30', x3: '01:04:20', x5: '00:38:36', x10: '00:19:18' },
	],
}, {
	option: 'Level 10', troops: [
		{ option: 'Legionnaire', x1: '00:10:20', x2: '00:05:10', x3: '00:03:27', x5: '00:02:04', x10: '00:01:02' },
		{ option: 'Praetorian', x1: '00:11:22', x2: '00:05:41', x3: '00:03:47', x5: '00:02:16', x10: '00:01:08' },
		{ option: 'Imperian', x1: '00:12:24', x2: '00:06:12', x3: '00:04:08', x5: '00:02:29', x10: '00:01:14' },
		{ option: 'Equites Legati', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Equites Imperatoris', x1: '00:17:03', x2: '00:08:32', x3: '00:05:41', x5: '00:03:25', x10: '00:01:42' },
		{ option: 'Equites Caesaris', x1: '00:22:44', x2: '00:11:22', x3: '00:07:35', x5: '00:04:33', x10: '00:02:16' },
		{ option: 'Battering ram', x1: '00:29:42', x2: '00:14:51', x3: '00:09:54', x5: '00:05:56', x10: '00:02:58' },
		{ option: 'Fire Catapult', x1: '00:58:07', x2: '00:29:04', x3: '00:19:22', x5: '00:11:37', x10: '00:05:49' },
		{ option: 'Senator', x1: '09:45:39', x2: '04:52:50', x3: '03:15:13', x5: '01:57:08', x10: '00:58:34' },
		{ option: 'Settler', x1: '02:53:42', x2: '01:26:51', x3: '00:57:54', x5: '00:34:44', x10: '00:17:22' },
	],
}, {
	option: 'Level 11', troops: [
		{ option: 'Legionnaire', x1: '00:09:18', x2: '00:04:39', x3: '00:03:06', x5: '00:01:52', x10: '00:00:56' },
		{ option: 'Praetorian', x1: '00:10:14', x2: '00:05:07', x3: '00:03:25', x5: '00:02:03', x10: '00:01:01' },
		{ option: 'Imperian', x1: '00:11:09', x2: '00:05:35', x3: '00:03:43', x5: '00:02:14', x10: '00:01:07' },
		{ option: 'Equites Legati', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Equites Imperatoris', x1: '00:15:21', x2: '00:07:41', x3: '00:05:07', x5: '00:03:04', x10: '00:01:32' },
		{ option: 'Equites Caesaris', x1: '00:20:27', x2: '00:10:14', x3: '00:06:49', x5: '00:04:05', x10: '00:02:03' },
		{ option: 'Battering ram', x1: '00:26:44', x2: '00:13:22', x3: '00:08:55', x5: '00:05:21', x10: '00:02:40' },
		{ option: 'Fire Catapult', x1: '00:52:18', x2: '00:26:09', x3: '00:17:26', x5: '00:10:28', x10: '00:05:14' },
		{ option: 'Senator', x1: '08:47:05', x2: '04:23:33', x3: '02:55:42', x5: '01:45:25', x10: '00:52:43' },
		{ option: 'Settler', x1: '02:36:19', x2: '01:18:10', x3: '00:52:06', x5: '00:31:16', x10: '00:15:38' },
	],
}, {
	option: 'Level 12', troops: [
		{ option: 'Legionnaire', x1: '00:08:22', x2: '00:04:11', x3: '00:02:47', x5: '00:01:40', x10: '00:00:50' },
		{ option: 'Praetorian', x1: '00:09:12', x2: '00:04:36', x3: '00:03:04', x5: '00:01:50', x10: '00:00:55' },
		{ option: 'Imperian', x1: '00:10:03', x2: '00:05:02', x3: '00:03:21', x5: '00:02:01', x10: '00:01:00' },
		{ option: 'Equites Legati', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Equites Imperatoris', x1: '00:13:48', x2: '00:06:54', x3: '00:04:36', x5: '00:02:46', x10: '00:01:23' },
		{ option: 'Equites Caesaris', x1: '00:18:25', x2: '00:09:13', x3: '00:06:08', x5: '00:03:41', x10: '00:01:51' },
		{ option: 'Battering ram', x1: '00:24:04', x2: '00:12:02', x3: '00:08:01', x5: '00:04:49', x10: '00:02:24' },
		{ option: 'Fire Catapult', x1: '00:47:04', x2: '00:23:32', x3: '00:15:41', x5: '00:09:25', x10: '00:04:42' },
		{ option: 'Senator', x1: '07:54:23', x2: '03:57:12', x3: '02:38:08', x5: '01:34:53', x10: '00:47:26' },
		{ option: 'Settler', x1: '02:20:42', x2: '01:10:21', x3: '00:46:54', x5: '00:28:08', x10: '00:14:04' },
	],
}, {
	option: 'Level 13', troops: [
		{ option: 'Legionnaire', x1: '00:07:32', x2: '00:03:46', x3: '00:02:31', x5: '00:01:30', x10: '00:00:45' },
		{ option: 'Praetorian', x1: '00:08:17', x2: '00:04:09', x3: '00:02:46', x5: '00:01:39', x10: '00:00:50' },
		{ option: 'Imperian', x1: '00:09:02', x2: '00:04:31', x3: '00:03:01', x5: '00:01:48', x10: '00:00:54' },
		{ option: 'Equites Legati', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Equites Imperatoris', x1: '00:12:26', x2: '00:06:13', x3: '00:04:09', x5: '00:02:29', x10: '00:01:15' },
		{ option: 'Equites Caesaris', x1: '00:16:34', x2: '00:08:17', x3: '00:05:31', x5: '00:03:19', x10: '00:01:39' },
		{ option: 'Battering ram', x1: '00:21:39', x2: '00:10:50', x3: '00:07:13', x5: '00:04:20', x10: '00:02:10' },
		{ option: 'Fire Catapult', x1: '00:42:22', x2: '00:21:11', x3: '00:14:07', x5: '00:08:28', x10: '00:04:14' },
		{ option: 'Senator', x1: '07:06:56', x2: '03:33:28', x3: '02:22:19', x5: '01:25:23', x10: '00:42:42' },
		{ option: 'Settler', x1: '02:06:37', x2: '01:03:19', x3: '00:42:12', x5: '00:25:19', x10: '00:12:40' },
	],
}, {
	option: 'Level 14', troops: [
		{ option: 'Legionnaire', x1: '00:06:47', x2: '00:03:24', x3: '00:02:16', x5: '00:01:21', x10: '00:00:41' },
		{ option: 'Praetorian', x1: '00:07:27', x2: '00:03:44', x3: '00:02:29', x5: '00:01:29', x10: '00:00:45' },
		{ option: 'Imperian', x1: '00:08:08', x2: '00:04:04', x3: '00:02:43', x5: '00:01:38', x10: '00:00:49' },
		{ option: 'Equites Legati', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Equites Imperatoris', x1: '00:11:11', x2: '00:05:36', x3: '00:03:44', x5: '00:02:14', x10: '00:01:07' },
		{ option: 'Equites Caesaris', x1: '00:14:55', x2: '00:07:28', x3: '00:04:58', x5: '00:02:59', x10: '00:01:30' },
		{ option: 'Battering ram', x1: '00:19:29', x2: '00:09:45', x3: '00:06:30', x5: '00:03:54', x10: '00:01:57' },
		{ option: 'Fire Catapult', x1: '00:38:08', x2: '00:19:04', x3: '00:12:43', x5: '00:07:38', x10: '00:03:49' },
		{ option: 'Senator', x1: '06:24:15', x2: '03:12:08', x3: '02:08:05', x5: '01:16:51', x10: '00:38:26' },
		{ option: 'Settler', x1: '01:53:58', x2: '00:56:59', x3: '00:37:59', x5: '00:22:48', x10: '00:11:24' },
	],
}, {
	option: 'Level 15', troops: [
		{ option: 'Legionnaire', x1: '00:06:06', x2: '00:03:03', x3: '00:02:02', x5: '00:01:13', x10: '00:00:37' },
		{ option: 'Praetorian', x1: '00:06:43', x2: '00:03:22', x3: '00:02:14', x5: '00:01:21', x10: '00:00:40' },
		{ option: 'Imperian', x1: '00:07:19', x2: '00:03:40', x3: '00:02:26', x5: '00:01:28', x10: '00:00:44' },
		{ option: 'Equites Legati', x1: '00:05:11', x2: '00:02:36', x3: '00:01:44', x5: '00:01:02', x10: '00:00:31' },
		{ option: 'Equites Imperatoris', x1: '00:10:04', x2: '00:05:02', x3: '00:03:21', x5: '00:02:01', x10: '00:01:00' },
		{ option: 'Equites Caesaris', x1: '00:13:25', x2: '00:06:43', x3: '00:04:28', x5: '00:02:41', x10: '00:01:21' },
		{ option: 'Battering ram', x1: '00:17:32', x2: '00:08:46', x3: '00:05:51', x5: '00:03:30', x10: '00:01:45' },
		{ option: 'Fire Catapult', x1: '00:34:19', x2: '00:17:10', x3: '00:11:26', x5: '00:06:52', x10: '00:03:26' },
		{ option: 'Senator', x1: '05:45:49', x2: '02:52:55', x3: '01:55:16', x5: '01:09:10', x10: '00:34:35' },
		{ option: 'Settler', x1: '01:42:34', x2: '00:51:17', x3: '00:34:11', x5: '00:20:31', x10: '00:10:15' },
	],
}, {
	option: 'Level 16', troops: [
		{ option: 'Legionnaire', x1: '00:05:29', x2: '00:02:45', x3: '00:01:50', x5: '00:01:06', x10: '00:00:33' },
		{ option: 'Praetorian', x1: '00:06:02', x2: '00:03:01', x3: '00:02:01', x5: '00:01:12', x10: '00:00:36' },
		{ option: 'Imperian', x1: '00:06:35', x2: '00:03:18', x3: '00:02:12', x5: '00:01:19', x10: '00:00:40' },
		{ option: 'Equites Legati', x1: '00:04:40', x2: '00:02:20', x3: '00:01:33', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Equites Imperatoris', x1: '00:09:04', x2: '00:04:32', x3: '00:03:01', x5: '00:01:49', x10: '00:00:54' },
		{ option: 'Equites Caesaris', x1: '00:12:05', x2: '00:06:03', x3: '00:04:02', x5: '00:02:25', x10: '00:01:13' },
		{ option: 'Battering ram', x1: '00:15:47', x2: '00:07:54', x3: '00:05:16', x5: '00:03:09', x10: '00:01:35' },
		{ option: 'Fire Catapult', x1: '00:30:53', x2: '00:15:27', x3: '00:10:18', x5: '00:06:11', x10: '00:03:05' },
		{ option: 'Senator', x1: '05:11:14', x2: '02:35:37', x3: '01:43:45', x5: '01:02:15', x10: '00:31:07' },
		{ option: 'Settler', x1: '01:32:18', x2: '00:46:09', x3: '00:30:46', x5: '00:18:28', x10: '00:09:14' },
	],
}, {
	option: 'Level 17', troops: [
		{ option: 'Legionnaire', x1: '00:04:56', x2: '00:02:28', x3: '00:01:39', x5: '00:00:59', x10: '00:00:30' },
		{ option: 'Praetorian', x1: '00:05:26', x2: '00:02:43', x3: '00:01:49', x5: '00:01:05', x10: '00:00:33' },
		{ option: 'Imperian', x1: '00:05:56', x2: '00:02:58', x3: '00:01:59', x5: '00:01:11', x10: '00:00:36' },
		{ option: 'Equites Legati', x1: '00:04:12', x2: '00:02:06', x3: '00:01:24', x5: '00:00:50', x10: '00:00:25' },
		{ option: 'Equites Imperatoris', x1: '00:08:09', x2: '00:04:05', x3: '00:02:43', x5: '00:01:38', x10: '00:00:49' },
		{ option: 'Equites Caesaris', x1: '00:10:52', x2: '00:05:26', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Battering ram', x1: '00:14:12', x2: '00:07:06', x3: '00:04:44', x5: '00:02:50', x10: '00:01:25' },
		{ option: 'Fire Catapult', x1: '00:27:48', x2: '00:13:54', x3: '00:09:16', x5: '00:05:34', x10: '00:02:47' },
		{ option: 'Senator', x1: '04:40:07', x2: '02:20:04', x3: '01:33:22', x5: '00:56:01', x10: '00:28:01' },
		{ option: 'Settler', x1: '01:23:05', x2: '00:41:33', x3: '00:27:42', x5: '00:16:37', x10: '00:08:19' },
	],
}, {
	option: 'Level 18', troops: [
		{ option: 'Legionnaire', x1: '00:04:27', x2: '00:02:14', x3: '00:01:29', x5: '00:00:53', x10: '00:00:27' },
		{ option: 'Praetorian', x1: '00:04:54', x2: '00:02:27', x3: '00:01:38', x5: '00:00:59', x10: '00:00:29' },
		{ option: 'Imperian', x1: '00:05:20', x2: '00:02:40', x3: '00:01:47', x5: '00:01:04', x10: '00:00:32' },
		{ option: 'Equites Legati', x1: '00:03:47', x2: '00:01:54', x3: '00:01:16', x5: '00:00:45', x10: '00:00:23' },
		{ option: 'Equites Imperatoris', x1: '00:07:20', x2: '00:03:40', x3: '00:02:27', x5: '00:01:28', x10: '00:00:44' },
		{ option: 'Equites Caesaris', x1: '00:09:47', x2: '00:04:54', x3: '00:03:16', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Battering ram', x1: '00:12:47', x2: '00:06:24', x3: '00:04:16', x5: '00:02:33', x10: '00:01:17' },
		{ option: 'Fire Catapult', x1: '00:25:01', x2: '00:12:31', x3: '00:08:20', x5: '00:05:00', x10: '00:02:30' },
		{ option: 'Senator', x1: '04:12:06', x2: '02:06:03', x3: '01:24:02', x5: '00:50:25', x10: '00:25:13' },
		{ option: 'Settler', x1: '01:14:46', x2: '00:37:23', x3: '00:24:55', x5: '00:14:57', x10: '00:07:29' },
	],
}, {
	option: 'Level 19', troops: [
		{ option: 'Legionnaire', x1: '00:04:00', x2: '00:02:00', x3: '00:01:20', x5: '00:00:48', x10: '00:00:24' },
		{ option: 'Praetorian', x1: '00:04:24', x2: '00:02:12', x3: '00:01:28', x5: '00:00:53', x10: '00:00:26' },
		{ option: 'Imperian', x1: '00:04:48', x2: '00:02:24', x3: '00:01:36', x5: '00:00:58', x10: '00:00:29' },
		{ option: 'Equites Legati', x1: '00:03:24', x2: '00:01:42', x3: '00:01:08', x5: '00:00:41', x10: '00:00:20' },
		{ option: 'Equites Imperatoris', x1: '00:06:36', x2: '00:03:18', x3: '00:02:12', x5: '00:01:19', x10: '00:00:40' },
		{ option: 'Equites Caesaris', x1: '00:08:48', x2: '00:04:24', x3: '00:02:56', x5: '00:01:46', x10: '00:00:53' },
		{ option: 'Battering ram', x1: '00:11:30', x2: '00:05:45', x3: '00:03:50', x5: '00:02:18', x10: '00:01:09' },
		{ option: 'Fire Catapult', x1: '00:22:31', x2: '00:11:16', x3: '00:07:30', x5: '00:04:30', x10: '00:02:15' },
		{ option: 'Senator', x1: '03:46:54', x2: '01:53:27', x3: '01:15:38', x5: '00:45:23', x10: '00:22:41' },
		{ option: 'Settler', x1: '01:07:18', x2: '00:33:39', x3: '00:22:26', x5: '00:13:28', x10: '00:06:44' },
	],
}, {
	option: 'Level 20', troops: [
		{ option: 'Legionnaire', x1: '00:03:36', x2: '00:01:48', x3: '00:01:12', x5: '00:00:43', x10: '00:00:22' },
		{ option: 'Praetorian', x1: '00:03:58', x2: '00:01:59', x3: '00:01:19', x5: '00:00:48', x10: '00:00:24' },
		{ option: 'Imperian', x1: '00:04:19', x2: '00:02:10', x3: '00:01:26', x5: '00:00:52', x10: '00:00:26' },
		{ option: 'Equites Legati', x1: '00:03:04', x2: '00:01:32', x3: '00:01:01', x5: '00:00:37', x10: '00:00:18' },
		{ option: 'Equites Imperatoris', x1: '00:05:57', x2: '00:02:59', x3: '00:01:59', x5: '00:01:11', x10: '00:00:36' },
		{ option: 'Equites Caesaris', x1: '00:07:55', x2: '00:03:58', x3: '00:02:38', x5: '00:01:35', x10: '00:00:48' },
		{ option: 'Battering ram', x1: '00:10:21', x2: '00:05:11', x3: '00:03:27', x5: '00:02:04', x10: '00:01:02' },
		{ option: 'Fire Catapult', x1: '00:20:16', x2: '00:10:08', x3: '00:06:45', x5: '00:04:03', x10: '00:02:02' },
		{ option: 'Senator', x1: '03:24:12', x2: '01:42:06', x3: '01:08:04', x5: '00:40:50', x10: '00:20:25' },
		{ option: 'Settler', x1: '01:00:34', x2: '00:30:17', x3: '00:20:11', x5: '00:12:07', x10: '00:06:03' },
	],
},
];

export const TEUTONIC_TROOPS_TRAIN_LEVELS = [{
	option: 'Level 1', troops: [
		{ option: 'Maceman', x1: '00:12:00', x2: '00:06:00', x3: '00:04:00', x5: '00:02:24', x10: '00:01:12' },
		{ option: 'Spearman', x1: '00:18:40', x2: '00:09:20', x3: '00:06:13', x5: '00:03:44', x10: '00:01:52' },
		{ option: 'Axeman', x1: '00:20:00', x2: '00:10:00', x3: '00:06:40', x5: '00:04:00', x10: '00:02:00' },
		{ option: 'Scout', x1: '00:18:40', x2: '00:09:20', x3: '00:06:13', x5: '00:03:44', x10: '00:01:52' },
		{ option: 'Paladin', x1: '00:40:00', x2: '00:20:00', x3: '00:13:20', x5: '00:08:00', x10: '00:04:00' },
		{ option: 'Teutonic Knight', x1: '00:49:20', x2: '00:24:40', x3: '00:16:27', x5: '00:09:52', x10: '00:04:56' },
		{ option: 'Ram', x1: '01:10:00', x2: '00:35:00', x3: '00:23:20', x5: '00:14:00', x10: '00:07:00' },
		{ option: 'Catapult', x1: '02:30:00', x2: '01:15:00', x3: '00:50:00', x5: '00:30:00', x10: '00:15:00' },
		{ option: 'Chief', x1: '19:35:00', x2: '09:47:30', x3: '06:31:40', x5: '03:55:00', x10: '01:57:30' },
		{ option: 'Settler', x1: '08:36:40', x2: '04:18:20', x3: '02:52:13', x5: '01:43:20', x10: '00:51:40' },
	],
}, {
	option: 'Level 2', troops: [
		{ option: 'Maceman', x1: '00:10:48', x2: '00:05:24', x3: '00:03:36', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Spearman', x1: '00:16:48', x2: '00:08:24', x3: '00:05:36', x5: '00:03:22', x10: '00:01:41' },
		{ option: 'Axeman', x1: '00:18:00', x2: '00:09:00', x3: '00:06:00', x5: '00:03:36', x10: '00:01:48' },
		{ option: 'Scout', x1: '00:16:48', x2: '00:08:24', x3: '00:05:36', x5: '00:03:22', x10: '00:01:41' },
		{ option: 'Paladin', x1: '00:36:00', x2: '00:18:00', x3: '00:12:00', x5: '00:07:12', x10: '00:03:36' },
		{ option: 'Teutonic Knight', x1: '00:44:24', x2: '00:22:12', x3: '00:14:48', x5: '00:08:53', x10: '00:04:26' },
		{ option: 'Ram', x1: '01:03:00', x2: '00:31:30', x3: '00:21:00', x5: '00:12:36', x10: '00:06:18' },
		{ option: 'Catapult', x1: '02:15:00', x2: '01:07:30', x3: '00:45:00', x5: '00:27:00', x10: '00:13:30' },
		{ option: 'Chief', x1: '17:37:30', x2: '08:48:45', x3: '05:52:30', x5: '03:31:30', x10: '01:45:45' },
		{ option: 'Settler', x1: '07:45:00', x2: '03:52:30', x3: '02:35:00', x5: '01:33:00', x10: '00:46:30' },
	],
}, {
	option: 'Level 3', troops: [
		{ option: 'Maceman', x1: '00:09:43', x2: '00:04:52', x3: '00:03:14', x5: '00:01:57', x10: '00:00:58' },
		{ option: 'Spearman', x1: '00:15:07', x2: '00:07:34', x3: '00:05:02', x5: '00:03:01', x10: '00:01:31' },
		{ option: 'Axeman', x1: '00:16:12', x2: '00:08:06', x3: '00:05:24', x5: '00:03:14', x10: '00:01:37' },
		{ option: 'Scout', x1: '00:15:07', x2: '00:07:34', x3: '00:05:02', x5: '00:03:01', x10: '00:01:31' },
		{ option: 'Paladin', x1: '00:32:24', x2: '00:16:12', x3: '00:10:48', x5: '00:06:29', x10: '00:03:14' },
		{ option: 'Teutonic Knight', x1: '00:39:58', x2: '00:19:59', x3: '00:13:19', x5: '00:07:60', x10: '00:03:60' },
		{ option: 'Ram', x1: '00:56:42', x2: '00:28:21', x3: '00:18:54', x5: '00:11:20', x10: '00:05:40' },
		{ option: 'Catapult', x1: '02:01:30', x2: '01:00:45', x3: '00:40:30', x5: '00:24:18', x10: '00:12:09' },
		{ option: 'Chief', x1: '15:51:45', x2: '07:55:53', x3: '05:17:15', x5: '03:10:21', x10: '01:35:11' },
		{ option: 'Settler', x1: '06:58:30', x2: '03:29:15', x3: '02:19:30', x5: '01:23:42', x10: '00:41:51' },
	],
}, {
	option: 'Level 4', troops: [
		{ option: 'Maceman', x1: '00:08:45', x2: '00:04:23', x3: '00:02:55', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Spearman', x1: '00:13:36', x2: '00:06:48', x3: '00:04:32', x5: '00:02:43', x10: '00:01:22' },
		{ option: 'Axeman', x1: '00:14:35', x2: '00:07:18', x3: '00:04:52', x5: '00:02:55', x10: '00:01:28' },
		{ option: 'Scout', x1: '00:13:36', x2: '00:06:48', x3: '00:04:32', x5: '00:02:43', x10: '00:01:22' },
		{ option: 'Paladin', x1: '00:29:10', x2: '00:14:35', x3: '00:09:43', x5: '00:05:50', x10: '00:02:55' },
		{ option: 'Teutonic Knight', x1: '00:35:58', x2: '00:17:59', x3: '00:11:59', x5: '00:07:12', x10: '00:03:36' },
		{ option: 'Ram', x1: '00:51:02', x2: '00:25:31', x3: '00:17:01', x5: '00:10:12', x10: '00:05:06' },
		{ option: 'Catapult', x1: '01:49:21', x2: '00:54:41', x3: '00:36:27', x5: '00:21:52', x10: '00:10:56' },
		{ option: 'Chief', x1: '14:16:35', x2: '07:08:18', x3: '04:45:32', x5: '02:51:19', x10: '01:25:40' },
		{ option: 'Settler', x1: '06:16:39', x2: '03:08:20', x3: '02:05:33', x5: '01:15:20', x10: '00:37:40' },
	],
}, {
	option: 'Level 5', troops: [
		{ option: 'Maceman', x1: '00:07:52', x2: '00:03:56', x3: '00:02:37', x5: '00:01:34', x10: '00:00:47' },
		{ option: 'Spearman', x1: '00:12:15', x2: '00:06:08', x3: '00:04:05', x5: '00:02:27', x10: '00:01:14' },
		{ option: 'Axeman', x1: '00:13:07', x2: '00:06:34', x3: '00:04:22', x5: '00:02:37', x10: '00:01:19' },
		{ option: 'Scout', x1: '00:12:15', x2: '00:06:08', x3: '00:04:05', x5: '00:02:27', x10: '00:01:14' },
		{ option: 'Paladin', x1: '00:26:15', x2: '00:13:08', x3: '00:08:45', x5: '00:05:15', x10: '00:02:38' },
		{ option: 'Teutonic Knight', x1: '00:32:22', x2: '00:16:11', x3: '00:10:47', x5: '00:06:28', x10: '00:03:14' },
		{ option: 'Ram', x1: '00:45:56', x2: '00:22:58', x3: '00:15:19', x5: '00:09:11', x10: '00:04:36' },
		{ option: 'Catapult', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Chief', x1: '12:50:55', x2: '06:25:28', x3: '04:16:58', x5: '02:34:11', x10: '01:17:06' },
		{ option: 'Settler', x1: '05:38:59', x2: '02:49:30', x3: '01:52:60', x5: '01:07:48', x10: '00:33:54' },
	],
}, {
	option: 'Level 6', troops: [
		{ option: 'Maceman', x1: '00:07:05', x2: '00:03:33', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Spearman', x1: '00:11:01', x2: '00:05:31', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
		{ option: 'Axeman', x1: '00:11:49', x2: '00:05:55', x3: '00:03:56', x5: '00:02:22', x10: '00:01:11' },
		{ option: 'Scout', x1: '00:11:01', x2: '00:05:31', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
		{ option: 'Paladin', x1: '00:23:37', x2: '00:11:49', x3: '00:07:52', x5: '00:04:43', x10: '00:02:22' },
		{ option: 'Teutonic Knight', x1: '00:29:08', x2: '00:14:34', x3: '00:09:43', x5: '00:05:50', x10: '00:02:55' },
		{ option: 'Ram', x1: '00:41:20', x2: '00:20:40', x3: '00:13:47', x5: '00:08:16', x10: '00:04:08' },
		{ option: 'Catapult', x1: '01:28:34', x2: '00:44:17', x3: '00:29:31', x5: '00:17:43', x10: '00:08:51' },
		{ option: 'Chief', x1: '11:33:50', x2: '05:46:55', x3: '03:51:17', x5: '02:18:46', x10: '01:09:23' },
		{ option: 'Settler', x1: '05:05:05', x2: '02:32:33', x3: '01:41:42', x5: '01:01:01', x10: '00:30:31' },
	],
}, {
	option: 'Level 7', troops: [
		{ option: 'Maceman', x1: '00:06:23', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Spearman', x1: '00:09:55', x2: '00:04:58', x3: '00:03:18', x5: '00:01:59', x10: '00:00:60' },
		{ option: 'Axeman', x1: '00:10:38', x2: '00:05:19', x3: '00:03:33', x5: '00:02:08', x10: '00:01:04' },
		{ option: 'Scout', x1: '00:09:55', x2: '00:04:58', x3: '00:03:18', x5: '00:01:59', x10: '00:00:60' },
		{ option: 'Paladin', x1: '00:21:15', x2: '00:10:38', x3: '00:07:05', x5: '00:04:15', x10: '00:02:08' },
		{ option: 'Teutonic Knight', x1: '00:26:13', x2: '00:13:07', x3: '00:08:44', x5: '00:05:15', x10: '00:02:37' },
		{ option: 'Ram', x1: '00:37:12', x2: '00:18:36', x3: '00:12:24', x5: '00:07:26', x10: '00:03:43' },
		{ option: 'Catapult', x1: '01:19:43', x2: '00:39:52', x3: '00:26:34', x5: '00:15:57', x10: '00:07:58' },
		{ option: 'Chief', x1: '10:24:27', x2: '05:12:14', x3: '03:28:09', x5: '02:04:53', x10: '01:02:27' },
		{ option: 'Settler', x1: '04:34:35', x2: '02:17:18', x3: '01:31:32', x5: '00:54:55', x10: '00:27:28' },
	],
}, {
	option: 'Level 8', troops: [
		{ option: 'Maceman', x1: '00:05:44', x2: '00:02:52', x3: '00:01:55', x5: '00:01:09', x10: '00:00:34' },
		{ option: 'Spearman', x1: '00:08:56', x2: '00:04:28', x3: '00:02:59', x5: '00:01:47', x10: '00:00:54' },
		{ option: 'Axeman', x1: '00:09:34', x2: '00:04:47', x3: '00:03:11', x5: '00:01:55', x10: '00:00:57' },
		{ option: 'Scout', x1: '00:08:56', x2: '00:04:28', x3: '00:02:59', x5: '00:01:47', x10: '00:00:54' },
		{ option: 'Paladin', x1: '00:19:08', x2: '00:09:34', x3: '00:06:23', x5: '00:03:50', x10: '00:01:55' },
		{ option: 'Teutonic Knight', x1: '00:23:36', x2: '00:11:48', x3: '00:07:52', x5: '00:04:43', x10: '00:02:22' },
		{ option: 'Ram', x1: '00:33:29', x2: '00:16:45', x3: '00:11:10', x5: '00:06:42', x10: '00:03:21' },
		{ option: 'Catapult', x1: '01:11:45', x2: '00:35:53', x3: '00:23:55', x5: '00:14:21', x10: '00:07:11' },
		{ option: 'Chief', x1: '09:22:00', x2: '04:41:00', x3: '03:07:20', x5: '01:52:24', x10: '00:56:12' },
		{ option: 'Settler', x1: '04:07:07', x2: '02:03:34', x3: '01:22:22', x5: '00:49:25', x10: '00:24:43' },
	],
}, {
	option: 'Level 9', troops: [
		{ option: 'Maceman', x1: '00:05:10', x2: '00:02:35', x3: '00:01:43', x5: '00:01:02', x10: '00:00:31' },
		{ option: 'Spearman', x1: '00:08:02', x2: '00:04:01', x3: '00:02:41', x5: '00:01:36', x10: '00:00:48' },
		{ option: 'Axeman', x1: '00:08:37', x2: '00:04:19', x3: '00:02:52', x5: '00:01:43', x10: '00:00:52' },
		{ option: 'Scout', x1: '00:08:02', x2: '00:04:01', x3: '00:02:41', x5: '00:01:36', x10: '00:00:48' },
		{ option: 'Paladin', x1: '00:17:13', x2: '00:08:37', x3: '00:05:44', x5: '00:03:27', x10: '00:01:43' },
		{ option: 'Teutonic Knight', x1: '00:21:14', x2: '00:10:37', x3: '00:07:05', x5: '00:04:15', x10: '00:02:07' },
		{ option: 'Ram', x1: '00:30:08', x2: '00:15:04', x3: '00:10:03', x5: '00:06:02', x10: '00:03:01' },
		{ option: 'Catapult', x1: '01:04:34', x2: '00:32:17', x3: '00:21:31', x5: '00:12:55', x10: '00:06:27' },
		{ option: 'Chief', x1: '08:25:48', x2: '04:12:54', x3: '02:48:36', x5: '01:41:10', x10: '00:50:35' },
		{ option: 'Settler', x1: '03:42:24', x2: '01:51:12', x3: '01:14:08', x5: '00:44:29', x10: '00:22:14' },
	],
}, {
	option: 'Level 10', troops: [
		{ option: 'Maceman', x1: '00:04:39', x2: '00:02:20', x3: '00:01:33', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Spearman', x1: '00:07:14', x2: '00:03:37', x3: '00:02:25', x5: '00:01:27', x10: '00:00:43' },
		{ option: 'Axeman', x1: '00:07:45', x2: '00:03:53', x3: '00:02:35', x5: '00:01:33', x10: '00:00:47' },
		{ option: 'Scout', x1: '00:07:14', x2: '00:03:37', x3: '00:02:25', x5: '00:01:27', x10: '00:00:43' },
		{ option: 'Paladin', x1: '00:15:30', x2: '00:07:45', x3: '00:05:10', x5: '00:03:06', x10: '00:01:33' },
		{ option: 'Teutonic Knight', x1: '00:19:07', x2: '00:09:34', x3: '00:06:22', x5: '00:03:49', x10: '00:01:55' },
		{ option: 'Ram', x1: '00:27:07', x2: '00:13:34', x3: '00:09:02', x5: '00:05:25', x10: '00:02:43' },
		{ option: 'Catapult', x1: '00:58:07', x2: '00:29:04', x3: '00:19:22', x5: '00:11:37', x10: '00:05:49' },
		{ option: 'Chief', x1: '07:35:13', x2: '03:47:37', x3: '02:31:44', x5: '01:31:03', x10: '00:45:31' },
		{ option: 'Settler', x1: '03:20:10', x2: '01:40:05', x3: '01:06:43', x5: '00:40:02', x10: '00:20:01' },
	],
}, {
	option: 'Level 11', troops: [
		{ option: 'Maceman', x1: '00:04:11', x2: '00:02:06', x3: '00:01:24', x5: '00:00:50', x10: '00:00:25' },
		{ option: 'Spearman', x1: '00:06:31', x2: '00:03:16', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
		{ option: 'Axeman', x1: '00:06:58', x2: '00:03:29', x3: '00:02:19', x5: '00:01:24', x10: '00:00:42' },
		{ option: 'Scout', x1: '00:06:31', x2: '00:03:16', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
		{ option: 'Paladin', x1: '00:13:57', x2: '00:06:59', x3: '00:04:39', x5: '00:02:47', x10: '00:01:24' },
		{ option: 'Teutonic Knight', x1: '00:17:12', x2: '00:08:36', x3: '00:05:44', x5: '00:03:26', x10: '00:01:43' },
		{ option: 'Ram', x1: '00:24:24', x2: '00:12:12', x3: '00:08:08', x5: '00:04:53', x10: '00:02:26' },
		{ option: 'Catapult', x1: '00:52:18', x2: '00:26:09', x3: '00:17:26', x5: '00:10:28', x10: '00:05:14' },
		{ option: 'Chief', x1: '06:49:42', x2: '03:24:51', x3: '02:16:34', x5: '01:21:56', x10: '00:40:58' },
		{ option: 'Settler', x1: '03:00:09', x2: '01:30:05', x3: '01:00:03', x5: '00:36:02', x10: '00:18:01' },
	],
}, {
	option: 'Level 12', troops: [
		{ option: 'Maceman', x1: '00:03:46', x2: '00:01:53', x3: '00:01:15', x5: '00:00:45', x10: '00:00:23' },
		{ option: 'Spearman', x1: '00:05:51', x2: '00:02:56', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Axeman', x1: '00:06:17', x2: '00:03:09', x3: '00:02:06', x5: '00:01:15', x10: '00:00:38' },
		{ option: 'Scout', x1: '00:05:51', x2: '00:02:56', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Paladin', x1: '00:12:33', x2: '00:06:17', x3: '00:04:11', x5: '00:02:31', x10: '00:01:15' },
		{ option: 'Teutonic Knight', x1: '00:15:29', x2: '00:07:45', x3: '00:05:10', x5: '00:03:06', x10: '00:01:33' },
		{ option: 'Ram', x1: '00:21:58', x2: '00:10:59', x3: '00:07:19', x5: '00:04:24', x10: '00:02:12' },
		{ option: 'Catapult', x1: '00:47:04', x2: '00:23:32', x3: '00:15:41', x5: '00:09:25', x10: '00:04:42' },
		{ option: 'Chief', x1: '06:08:44', x2: '03:04:22', x3: '02:02:55', x5: '01:13:45', x10: '00:36:52' },
		{ option: 'Settler', x1: '02:42:08', x2: '01:21:04', x3: '00:54:03', x5: '00:32:26', x10: '00:16:13' },
	],
}, {
	option: 'Level 13', troops: [
		{ option: 'Maceman', x1: '00:03:23', x2: '00:01:42', x3: '00:01:08', x5: '00:00:41', x10: '00:00:20' },
		{ option: 'Spearman', x1: '00:05:16', x2: '00:02:38', x3: '00:01:45', x5: '00:01:03', x10: '00:00:32' },
		{ option: 'Axeman', x1: '00:05:39', x2: '00:02:50', x3: '00:01:53', x5: '00:01:08', x10: '00:00:34' },
		{ option: 'Scout', x1: '00:05:16', x2: '00:02:38', x3: '00:01:45', x5: '00:01:03', x10: '00:00:32' },
		{ option: 'Paladin', x1: '00:11:18', x2: '00:05:39', x3: '00:03:46', x5: '00:02:16', x10: '00:01:08' },
		{ option: 'Teutonic Knight', x1: '00:13:56', x2: '00:06:58', x3: '00:04:39', x5: '00:02:47', x10: '00:01:24' },
		{ option: 'Ram', x1: '00:19:46', x2: '00:09:53', x3: '00:06:35', x5: '00:03:57', x10: '00:01:59' },
		{ option: 'Catapult', x1: '00:42:22', x2: '00:21:11', x3: '00:14:07', x5: '00:08:28', x10: '00:04:14' },
		{ option: 'Chief', x1: '05:31:51', x2: '02:45:56', x3: '01:50:37', x5: '01:06:22', x10: '00:33:11' },
		{ option: 'Settler', x1: '02:25:55', x2: '01:12:58', x3: '00:48:38', x5: '00:29:11', x10: '00:14:36' },
	],
}, {
	option: 'Level 14', troops: [
		{ option: 'Maceman', x1: '00:03:03', x2: '00:01:32', x3: '00:01:01', x5: '00:00:37', x10: '00:00:18' },
		{ option: 'Spearman', x1: '00:04:45', x2: '00:02:23', x3: '00:01:35', x5: '00:00:57', x10: '00:00:29' },
		{ option: 'Axeman', x1: '00:05:05', x2: '00:02:33', x3: '00:01:42', x5: '00:01:01', x10: '00:00:31' },
		{ option: 'Scout', x1: '00:04:45', x2: '00:02:23', x3: '00:01:35', x5: '00:00:57', x10: '00:00:29' },
		{ option: 'Paladin', x1: '00:10:10', x2: '00:05:05', x3: '00:03:23', x5: '00:02:02', x10: '00:01:01' },
		{ option: 'Teutonic Knight', x1: '00:12:32', x2: '00:06:16', x3: '00:04:11', x5: '00:02:30', x10: '00:01:15' },
		{ option: 'Ram', x1: '00:17:48', x2: '00:08:54', x3: '00:05:56', x5: '00:03:34', x10: '00:01:47' },
		{ option: 'Catapult', x1: '00:38:08', x2: '00:19:04', x3: '00:12:43', x5: '00:07:38', x10: '00:03:49' },
		{ option: 'Chief', x1: '04:58:40', x2: '02:29:20', x3: '01:39:33', x5: '00:59:44', x10: '00:29:52' },
		{ option: 'Settler', x1: '02:11:20', x2: '01:05:40', x3: '00:43:47', x5: '00:26:16', x10: '00:13:08' },
	],
}, {
	option: 'Level 15', troops: [
		{ option: 'Maceman', x1: '00:02:45', x2: '00:01:23', x3: '00:00:55', x5: '00:00:33', x10: '00:00:17' },
		{ option: 'Spearman', x1: '00:04:16', x2: '00:02:08', x3: '00:01:25', x5: '00:00:51', x10: '00:00:26' },
		{ option: 'Axeman', x1: '00:04:35', x2: '00:02:18', x3: '00:01:32', x5: '00:00:55', x10: '00:00:28' },
		{ option: 'Scout', x1: '00:04:16', x2: '00:02:08', x3: '00:01:25', x5: '00:00:51', x10: '00:00:26' },
		{ option: 'Paladin', x1: '00:09:09', x2: '00:04:35', x3: '00:03:03', x5: '00:01:50', x10: '00:00:55' },
		{ option: 'Teutonic Knight', x1: '00:11:17', x2: '00:05:39', x3: '00:03:46', x5: '00:02:15', x10: '00:01:08' },
		{ option: 'Ram', x1: '00:16:01', x2: '00:08:01', x3: '00:05:20', x5: '00:03:12', x10: '00:01:36' },
		{ option: 'Catapult', x1: '00:34:19', x2: '00:17:10', x3: '00:11:26', x5: '00:06:52', x10: '00:03:26' },
		{ option: 'Chief', x1: '04:28:48', x2: '02:14:24', x3: '01:29:36', x5: '00:53:46', x10: '00:26:53' },
		{ option: 'Settler', x1: '01:58:12', x2: '00:59:06', x3: '00:39:24', x5: '00:23:38', x10: '00:11:49' },
	],
}, {
	option: 'Level 16', troops: [
		{ option: 'Maceman', x1: '00:02:28', x2: '00:01:14', x3: '00:00:49', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Spearman', x1: '00:03:51', x2: '00:01:56', x3: '00:01:17', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Axeman', x1: '00:04:07', x2: '00:02:04', x3: '00:01:22', x5: '00:00:49', x10: '00:00:25' },
		{ option: 'Scout', x1: '00:03:51', x2: '00:01:56', x3: '00:01:17', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Paladin', x1: '00:08:14', x2: '00:04:07', x3: '00:02:45', x5: '00:01:39', x10: '00:00:49' },
		{ option: 'Teutonic Knight', x1: '00:10:09', x2: '00:05:05', x3: '00:03:23', x5: '00:02:02', x10: '00:01:01' },
		{ option: 'Ram', x1: '00:14:25', x2: '00:07:13', x3: '00:04:48', x5: '00:02:53', x10: '00:01:27' },
		{ option: 'Catapult', x1: '00:30:53', x2: '00:15:27', x3: '00:10:18', x5: '00:06:11', x10: '00:03:05' },
		{ option: 'Chief', x1: '04:01:55', x2: '02:00:58', x3: '01:20:38', x5: '00:48:23', x10: '00:24:12' },
		{ option: 'Settler', x1: '01:46:23', x2: '00:53:12', x3: '00:35:28', x5: '00:21:17', x10: '00:10:38' },
	],
}, {
	option: 'Level 17', troops: [
		{ option: 'Maceman', x1: '00:02:13', x2: '00:01:07', x3: '00:00:44', x5: '00:00:27', x10: '00:00:13' },
		{ option: 'Spearman', x1: '00:03:28', x2: '00:01:44', x3: '00:01:09', x5: '00:00:42', x10: '00:00:21' },
		{ option: 'Axeman', x1: '00:03:42', x2: '00:01:51', x3: '00:01:14', x5: '00:00:44', x10: '00:00:22' },
		{ option: 'Scout', x1: '00:03:28', x2: '00:01:44', x3: '00:01:09', x5: '00:00:42', x10: '00:00:21' },
		{ option: 'Paladin', x1: '00:07:25', x2: '00:03:43', x3: '00:02:28', x5: '00:01:29', x10: '00:00:45' },
		{ option: 'Teutonic Knight', x1: '00:09:08', x2: '00:04:34', x3: '00:03:03', x5: '00:01:50', x10: '00:00:55' },
		{ option: 'Ram', x1: '00:12:58', x2: '00:06:29', x3: '00:04:19', x5: '00:02:36', x10: '00:01:18' },
		{ option: 'Catapult', x1: '00:27:48', x2: '00:13:54', x3: '00:09:16', x5: '00:05:34', x10: '00:02:47' },
		{ option: 'Chief', x1: '03:37:44', x2: '01:48:52', x3: '01:12:35', x5: '00:43:33', x10: '00:21:46' },
		{ option: 'Settler', x1: '01:35:44', x2: '00:47:52', x3: '00:31:55', x5: '00:19:09', x10: '00:09:34' },
	],
}, {
	option: 'Level 18', troops: [
		{ option: 'Maceman', x1: '00:02:00', x2: '00:01:00', x3: '00:00:40', x5: '00:00:24', x10: '00:00:12' },
		{ option: 'Spearman', x1: '00:03:07', x2: '00:01:34', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Axeman', x1: '00:03:20', x2: '00:01:40', x3: '00:01:07', x5: '00:00:40', x10: '00:00:20' },
		{ option: 'Scout', x1: '00:03:07', x2: '00:01:34', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Paladin', x1: '00:06:40', x2: '00:03:20', x3: '00:02:13', x5: '00:01:20', x10: '00:00:40' },
		{ option: 'Teutonic Knight', x1: '00:08:14', x2: '00:04:07', x3: '00:02:45', x5: '00:01:39', x10: '00:00:49' },
		{ option: 'Ram', x1: '00:11:40', x2: '00:05:50', x3: '00:03:53', x5: '00:02:20', x10: '00:01:10' },
		{ option: 'Catapult', x1: '00:25:01', x2: '00:12:31', x3: '00:08:20', x5: '00:05:00', x10: '00:02:30' },
		{ option: 'Chief', x1: '03:15:57', x2: '01:37:59', x3: '01:05:19', x5: '00:39:11', x10: '00:19:36' },
		{ option: 'Settler', x1: '01:26:10', x2: '00:43:05', x3: '00:28:43', x5: '00:17:14', x10: '00:08:37' },
	],
}, {
	option: 'Level 19', troops: [
		{ option: 'Maceman', x1: '00:01:48', x2: '00:00:54', x3: '00:00:36', x5: '00:00:22', x10: '00:00:11' },
		{ option: 'Spearman', x1: '00:02:48', x2: '00:01:24', x3: '00:00:56', x5: '00:00:34', x10: '00:00:17' },
		{ option: 'Axeman', x1: '00:03:00', x2: '00:01:30', x3: '00:01:00', x5: '00:00:36', x10: '00:00:18' },
		{ option: 'Scout', x1: '00:02:48', x2: '00:01:24', x3: '00:00:56', x5: '00:00:34', x10: '00:00:17' },
		{ option: 'Paladin', x1: '00:06:00', x2: '00:03:00', x3: '00:02:00', x5: '00:01:12', x10: '00:00:36' },
		{ option: 'Teutonic Knight', x1: '00:07:24', x2: '00:03:42', x3: '00:02:28', x5: '00:01:29', x10: '00:00:44' },
		{ option: 'Ram', x1: '00:10:30', x2: '00:05:15', x3: '00:03:30', x5: '00:02:06', x10: '00:01:03' },
		{ option: 'Catapult', x1: '00:22:31', x2: '00:11:16', x3: '00:07:30', x5: '00:04:30', x10: '00:02:15' },
		{ option: 'Chief', x1: '02:56:22', x2: '01:28:11', x3: '00:58:47', x5: '00:35:16', x10: '00:17:38' },
		{ option: 'Settler', x1: '01:17:33', x2: '00:38:47', x3: '00:25:51', x5: '00:15:31', x10: '00:07:45' },
	],
}, {
	option: 'Level 20', troops: [
		{ option: 'Maceman', x1: '00:01:37', x2: '00:00:49', x3: '00:00:32', x5: '00:00:19', x10: '00:00:10' },
		{ option: 'Spearman', x1: '00:02:31', x2: '00:01:16', x3: '00:00:50', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Axeman', x1: '00:02:42', x2: '00:01:21', x3: '00:00:54', x5: '00:00:32', x10: '00:00:16' },
		{ option: 'Scout', x1: '00:02:31', x2: '00:01:16', x3: '00:00:50', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Paladin', x1: '00:05:24', x2: '00:02:42', x3: '00:01:48', x5: '00:01:05', x10: '00:00:32' },
		{ option: 'Teutonic Knight', x1: '00:06:40', x2: '00:03:20', x3: '00:02:13', x5: '00:01:20', x10: '00:00:40' },
		{ option: 'Ram', x1: '00:09:27', x2: '00:04:44', x3: '00:03:09', x5: '00:01:53', x10: '00:00:57' },
		{ option: 'Catapult', x1: '00:20:16', x2: '00:10:08', x3: '00:06:45', x5: '00:04:03', x10: '00:02:02' },
		{ option: 'Chief', x1: '02:38:44', x2: '01:19:22', x3: '00:52:55', x5: '00:31:45', x10: '00:15:52' },
		{ option: 'Settler', x1: '01:09:48', x2: '00:34:54', x3: '00:23:16', x5: '00:13:58', x10: '00:06:59' },
	],
},
];

export const GALIC_TROOPS_TRAIN_LEVELS = [{
	option: 'Level 1', troops: [
		{ option: 'Phalanx', x1: '00:17:20', x2: '00:08:40', x3: '00:05:47', x5: '00:03:28', x10: '00:01:44' },
		{ option: 'Swordsman', x1: '00:24:00', x2: '00:12:00', x3: '00:08:00', x5: '00:04:48', x10: '00:02:24' },
		{ option: 'Pathfinder', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Theutates Thunder', x1: '00:41:20', x2: '00:20:40', x3: '00:13:47', x5: '00:08:16', x10: '00:04:08' },
		{ option: 'Druidrider', x1: '00:42:40', x2: '00:21:20', x3: '00:14:13', x5: '00:08:32', x10: '00:04:16' },
		{ option: 'Haeduan', x1: '00:52:00', x2: '00:26:00', x3: '00:17:20', x5: '00:10:24', x10: '00:05:12' },
		{ option: 'Ram', x1: '01:23:20', x2: '00:41:40', x3: '00:27:47', x5: '00:16:40', x10: '00:08:20' },
		{ option: 'Trebuchet', x1: '02:30:00', x2: '01:15:00', x3: '00:50:00', x5: '00:30:00', x10: '00:15:00' },
		{ option: 'Chieftain', x1: '25:11:40', x2: '12:35:50', x3: '08:23:53', x5: '05:02:20', x10: '02:31:10' },
		{ option: 'Settler', x1: '06:18:20', x2: '03:09:10', x3: '02:06:07', x5: '01:15:40', x10: '00:37:50' },
	],
}, {
	option: 'Level 2', troops: [
		{ option: 'Phalanx', x1: '00:15:36', x2: '00:07:48', x3: '00:05:12', x5: '00:03:07', x10: '00:01:34' },
		{ option: 'Swordsman', x1: '00:21:36', x2: '00:10:48', x3: '00:07:12', x5: '00:04:19', x10: '00:02:10' },
		{ option: 'Pathfinder', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Theutates Thunder', x1: '00:37:12', x2: '00:18:36', x3: '00:12:24', x5: '00:07:26', x10: '00:03:43' },
		{ option: 'Druidrider', x1: '00:38:24', x2: '00:19:12', x3: '00:12:48', x5: '00:07:41', x10: '00:03:50' },
		{ option: 'Haeduan', x1: '00:46:48', x2: '00:23:24', x3: '00:15:36', x5: '00:09:22', x10: '00:04:41' },
		{ option: 'Ram', x1: '01:15:00', x2: '00:37:30', x3: '00:25:00', x5: '00:15:00', x10: '00:07:30' },
		{ option: 'Trebuchet', x1: '02:15:00', x2: '01:07:30', x3: '00:45:00', x5: '00:27:00', x10: '00:13:30' },
		{ option: 'Chieftain', x1: '22:40:30', x2: '11:20:15', x3: '07:33:30', x5: '04:32:06', x10: '02:16:03' },
		{ option: 'Settler', x1: '05:40:30', x2: '02:50:15', x3: '01:53:30', x5: '01:08:06', x10: '00:34:03' },
	],
}, {
	option: 'Level 3', troops: [
		{ option: 'Phalanx', x1: '00:14:02', x2: '00:07:01', x3: '00:04:41', x5: '00:02:48', x10: '00:01:24' },
		{ option: 'Swordsman', x1: '00:19:26', x2: '00:09:43', x3: '00:06:29', x5: '00:03:53', x10: '00:01:57' },
		{ option: 'Pathfinder', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Theutates Thunder', x1: '00:33:29', x2: '00:16:45', x3: '00:11:10', x5: '00:06:42', x10: '00:03:21' },
		{ option: 'Druidrider', x1: '00:34:34', x2: '00:17:17', x3: '00:11:31', x5: '00:06:55', x10: '00:03:27' },
		{ option: 'Haeduan', x1: '00:42:07', x2: '00:21:04', x3: '00:14:02', x5: '00:08:25', x10: '00:04:13' },
		{ option: 'Ram', x1: '01:07:30', x2: '00:33:45', x3: '00:22:30', x5: '00:13:30', x10: '00:06:45' },
		{ option: 'Trebuchet', x1: '02:01:30', x2: '01:00:45', x3: '00:40:30', x5: '00:24:18', x10: '00:12:09' },
		{ option: 'Chieftain', x1: '20:24:27', x2: '10:12:14', x3: '06:48:09', x5: '04:04:53', x10: '02:02:27' },
		{ option: 'Settler', x1: '05:06:27', x2: '02:33:14', x3: '01:42:09', x5: '01:01:17', x10: '00:30:39' },
	],
}, {
	option: 'Level 4', troops: [
		{ option: 'Phalanx', x1: '00:12:38', x2: '00:06:19', x3: '00:04:13', x5: '00:02:32', x10: '00:01:16' },
		{ option: 'Swordsman', x1: '00:17:30', x2: '00:08:45', x3: '00:05:50', x5: '00:03:30', x10: '00:01:45' },
		{ option: 'Pathfinder', x1: '00:16:31', x2: '00:08:16', x3: '00:05:30', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Theutates Thunder', x1: '00:30:08', x2: '00:15:04', x3: '00:10:03', x5: '00:06:02', x10: '00:03:01' },
		{ option: 'Druidrider', x1: '00:31:06', x2: '00:15:33', x3: '00:10:22', x5: '00:06:13', x10: '00:03:07' },
		{ option: 'Haeduan', x1: '00:37:54', x2: '00:18:57', x3: '00:12:38', x5: '00:07:35', x10: '00:03:47' },
		{ option: 'Ram', x1: '01:00:45', x2: '00:30:23', x3: '00:20:15', x5: '00:12:09', x10: '00:06:05' },
		{ option: 'Trebuchet', x1: '01:49:21', x2: '00:54:41', x3: '00:36:27', x5: '00:21:52', x10: '00:10:56' },
		{ option: 'Chieftain', x1: '18:22:00', x2: '09:11:00', x3: '06:07:20', x5: '03:40:24', x10: '01:50:12' },
		{ option: 'Settler', x1: '04:35:48', x2: '02:17:54', x3: '01:31:56', x5: '00:55:10', x10: '00:27:35' },
	],
}, {
	option: 'Level 5', troops: [
		{ option: 'Phalanx', x1: '00:11:22', x2: '00:05:41', x3: '00:03:47', x5: '00:02:16', x10: '00:01:08' },
		{ option: 'Swordsman', x1: '00:15:45', x2: '00:07:53', x3: '00:05:15', x5: '00:03:09', x10: '00:01:35' },
		{ option: 'Pathfinder', x1: '00:14:52', x2: '00:07:26', x3: '00:04:57', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Theutates Thunder', x1: '00:27:07', x2: '00:13:34', x3: '00:09:02', x5: '00:05:25', x10: '00:02:43' },
		{ option: 'Druidrider', x1: '00:28:00', x2: '00:14:00', x3: '00:09:20', x5: '00:05:36', x10: '00:02:48' },
		{ option: 'Haeduan', x1: '00:34:07', x2: '00:17:04', x3: '00:11:22', x5: '00:06:49', x10: '00:03:25' },
		{ option: 'Ram', x1: '00:54:41', x2: '00:27:21', x3: '00:18:14', x5: '00:10:56', x10: '00:05:28' },
		{ option: 'Trebuchet', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Chieftain', x1: '16:31:48', x2: '08:15:54', x3: '05:30:36', x5: '03:18:22', x10: '01:39:11' },
		{ option: 'Settler', x1: '04:08:13', x2: '02:04:07', x3: '01:22:44', x5: '00:49:39', x10: '00:24:49' },
	],
}, {
	option: 'Level 6', troops: [
		{ option: 'Phalanx', x1: '00:11:22', x2: '00:05:41', x3: '00:03:47', x5: '00:02:16', x10: '00:01:08' },
		{ option: 'Swordsman', x1: '00:15:45', x2: '00:07:53', x3: '00:05:15', x5: '00:03:09', x10: '00:01:35' },
		{ option: 'Pathfinder', x1: '00:14:52', x2: '00:07:26', x3: '00:04:57', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Theutates Thunder', x1: '00:27:07', x2: '00:13:34', x3: '00:09:02', x5: '00:05:25', x10: '00:02:43' },
		{ option: 'Druidrider', x1: '00:28:00', x2: '00:14:00', x3: '00:09:20', x5: '00:05:36', x10: '00:02:48' },
		{ option: 'Haeduan', x1: '00:34:07', x2: '00:17:04', x3: '00:11:22', x5: '00:06:49', x10: '00:03:25' },
		{ option: 'Ram', x1: '00:54:41', x2: '00:27:21', x3: '00:18:14', x5: '00:10:56', x10: '00:05:28' },
		{ option: 'Trebuchet', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Chieftain', x1: '16:31:48', x2: '08:15:54', x3: '05:30:36', x5: '03:18:22', x10: '01:39:11' },
		{ option: 'Settler', x1: '04:08:13', x2: '02:04:07', x3: '01:22:44', x5: '00:49:39', x10: '00:24:49' },
	],
}, {
	option: 'Level 7', troops: [
		{ option: 'Phalanx', x1: '00:09:13', x2: '00:04:37', x3: '00:03:04', x5: '00:01:51', x10: '00:00:55' },
		{ option: 'Swordsman', x1: '00:12:45', x2: '00:06:23', x3: '00:04:15', x5: '00:02:33', x10: '00:01:17' },
		{ option: 'Pathfinder', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Theutates Thunder', x1: '00:21:58', x2: '00:10:59', x3: '00:07:19', x5: '00:04:24', x10: '00:02:12' },
		{ option: 'Druidrider', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Haeduan', x1: '00:27:38', x2: '00:13:49', x3: '00:09:13', x5: '00:05:32', x10: '00:02:46' },
		{ option: 'Ram', x1: '00:44:17', x2: '00:22:09', x3: '00:14:46', x5: '00:08:51', x10: '00:04:26' },
		{ option: 'Trebuchet', x1: '01:19:43', x2: '00:39:52', x3: '00:26:34', x5: '00:15:57', x10: '00:07:58' },
		{ option: 'Chieftain', x1: '13:23:22', x2: '06:41:41', x3: '04:27:47', x5: '02:40:40', x10: '01:20:20' },
		{ option: 'Settler', x1: '03:21:04', x2: '01:40:32', x3: '01:07:01', x5: '00:40:13', x10: '00:20:06' },
	],
}, {
	option: 'Level 8', troops: [
		{ option: 'Phalanx', x1: '00:08:17', x2: '00:04:09', x3: '00:02:46', x5: '00:01:39', x10: '00:00:50' },
		{ option: 'Swordsman', x1: '00:11:29', x2: '00:05:45', x3: '00:03:50', x5: '00:02:18', x10: '00:01:09' },
		{ option: 'Pathfinder', x1: '00:10:50', x2: '00:05:25', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Theutates Thunder', x1: '00:19:46', x2: '00:09:53', x3: '00:06:35', x5: '00:03:57', x10: '00:01:59' },
		{ option: 'Druidrider', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Haeduan', x1: '00:24:52', x2: '00:12:26', x3: '00:08:17', x5: '00:04:58', x10: '00:02:29' },
		{ option: 'Ram', x1: '00:39:51', x2: '00:19:56', x3: '00:13:17', x5: '00:07:58', x10: '00:03:59' },
		{ option: 'Trebuchet', x1: '01:11:45', x2: '00:35:53', x3: '00:23:55', x5: '00:14:21', x10: '00:07:11' },
		{ option: 'Chieftain', x1: '12:03:02', x2: '06:01:31', x3: '04:01:01', x5: '02:24:36', x10: '01:12:18' },
		{ option: 'Settler', x1: '03:00:57', x2: '01:30:29', x3: '01:00:19', x5: '00:36:11', x10: '00:18:06' },
	],
}, {
	option: 'Level 9', troops: [
		{ option: 'Phalanx', x1: '00:07:28', x2: '00:03:44', x3: '00:02:29', x5: '00:01:30', x10: '00:00:45' },
		{ option: 'Swordsman', x1: '00:10:20', x2: '00:05:10', x3: '00:03:27', x5: '00:02:04', x10: '00:01:02' },
		{ option: 'Pathfinder', x1: '00:09:45', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Theutates Thunder', x1: '00:17:48', x2: '00:08:54', x3: '00:05:56', x5: '00:03:34', x10: '00:01:47' },
		{ option: 'Druidrider', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Haeduan', x1: '00:22:23', x2: '00:11:12', x3: '00:07:28', x5: '00:04:29', x10: '00:02:14' },
		{ option: 'Ram', x1: '00:35:52', x2: '00:17:56', x3: '00:11:57', x5: '00:07:10', x10: '00:03:35' },
		{ option: 'Trebuchet', x1: '01:04:34', x2: '00:32:17', x3: '00:21:31', x5: '00:12:55', x10: '00:06:27' },
		{ option: 'Chieftain', x1: '10:50:43', x2: '05:25:22', x3: '03:36:54', x5: '02:10:09', x10: '01:05:04' },
		{ option: 'Settler', x1: '02:42:52', x2: '01:21:26', x3: '00:54:17', x5: '00:32:34', x10: '00:16:17' },
	],
}, {
	option: 'Level 10', troops: [
		{ option: 'Phalanx', x1: '00:06:43', x2: '00:03:22', x3: '00:02:14', x5: '00:01:21', x10: '00:00:40' },
		{ option: 'Swordsman', x1: '00:09:18', x2: '00:04:39', x3: '00:03:06', x5: '00:01:52', x10: '00:00:56' },
		{ option: 'Pathfinder', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Theutates Thunder', x1: '00:16:01', x2: '00:08:01', x3: '00:05:20', x5: '00:03:12', x10: '00:01:36' },
		{ option: 'Druidrider', x1: '00:16:32', x2: '00:08:16', x3: '00:05:31', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Haeduan', x1: '00:20:09', x2: '00:10:05', x3: '00:06:43', x5: '00:04:02', x10: '00:02:01' },
		{ option: 'Ram', x1: '00:32:17', x2: '00:16:09', x3: '00:10:46', x5: '00:06:27', x10: '00:03:14' },
		{ option: 'Trebuchet', x1: '00:58:07', x2: '00:29:04', x3: '00:19:22', x5: '00:11:37', x10: '00:05:49' },
		{ option: 'Chieftain', x1: '09:45:39', x2: '04:52:50', x3: '03:15:13', x5: '01:57:08', x10: '00:58:34' },
		{ option: 'Settler', x1: '02:26:34', x2: '01:13:17', x3: '00:48:51', x5: '00:29:19', x10: '00:14:39' },
	],
}, {
	option: 'Level 11', troops: [
		{ option: 'Phalanx', x1: '00:06:03', x2: '00:03:02', x3: '00:02:01', x5: '00:01:13', x10: '00:00:36' },
		{ option: 'Swordsman', x1: '00:08:22', x2: '00:04:11', x3: '00:02:47', x5: '00:01:40', x10: '00:00:50' },
		{ option: 'Pathfinder', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Theutates Thunder', x1: '00:14:25', x2: '00:07:13', x3: '00:04:48', x5: '00:02:53', x10: '00:01:27' },
		{ option: 'Druidrider', x1: '00:14:53', x2: '00:07:27', x3: '00:04:58', x5: '00:02:59', x10: '00:01:29' },
		{ option: 'Haeduan', x1: '00:18:08', x2: '00:09:04', x3: '00:06:03', x5: '00:03:38', x10: '00:01:49' },
		{ option: 'Ram', x1: '00:29:03', x2: '00:14:32', x3: '00:09:41', x5: '00:05:49', x10: '00:02:54' },
		{ option: 'Trebuchet', x1: '00:52:18', x2: '00:26:09', x3: '00:17:26', x5: '00:10:28', x10: '00:05:14' },
		{ option: 'Chieftain', x1: '08:47:05', x2: '04:23:33', x3: '02:55:42', x5: '01:45:25', x10: '00:52:43' },
		{ option: 'Settler', x1: '02:11:55', x2: '01:05:58', x3: '00:43:58', x5: '00:26:23', x10: '00:13:12' },
	],
}, {
	option: 'Level 12', troops: [
		{ option: 'Phalanx', x1: '00:05:26', x2: '00:02:43', x3: '00:01:49', x5: '00:01:05', x10: '00:00:33' },
		{ option: 'Swordsman', x1: '00:07:32', x2: '00:03:46', x3: '00:02:31', x5: '00:01:30', x10: '00:00:45' },
		{ option: 'Pathfinder', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Theutates Thunder', x1: '00:12:58', x2: '00:06:29', x3: '00:04:19', x5: '00:02:36', x10: '00:01:18' },
		{ option: 'Druidrider', x1: '00:13:23', x2: '00:06:42', x3: '00:04:28', x5: '00:02:41', x10: '00:01:20' },
		{ option: 'Haeduan', x1: '00:16:19', x2: '00:08:10', x3: '00:05:26', x5: '00:03:16', x10: '00:01:38' },
		{ option: 'Ram', x1: '00:26:09', x2: '00:13:05', x3: '00:08:43', x5: '00:05:14', x10: '00:02:37' },
		{ option: 'Trebuchet', x1: '00:47:04', x2: '00:23:32', x3: '00:15:41', x5: '00:09:25', x10: '00:04:42' },
		{ option: 'Chieftain', x1: '07:54:23', x2: '03:57:12', x3: '02:38:08', x5: '01:34:53', x10: '00:47:26' },
		{ option: 'Settler', x1: '01:58:44', x2: '00:59:22', x3: '00:39:35', x5: '00:23:45', x10: '00:11:52' },
	],
}, {
	option: 'Level 13', troops: [
		{ option: 'Phalanx', x1: '00:04:54', x2: '00:02:27', x3: '00:01:38', x5: '00:00:59', x10: '00:00:29' },
		{ option: 'Swordsman', x1: '00:06:47', x2: '00:03:24', x3: '00:02:16', x5: '00:01:21', x10: '00:00:41' },
		{ option: 'Pathfinder', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Theutates Thunder', x1: '00:11:40', x2: '00:05:50', x3: '00:03:53', x5: '00:02:20', x10: '00:01:10' },
		{ option: 'Druidrider', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Haeduan', x1: '00:14:41', x2: '00:07:21', x3: '00:04:54', x5: '00:02:56', x10: '00:01:28' },
		{ option: 'Ram', x1: '00:23:32', x2: '00:11:46', x3: '00:07:51', x5: '00:04:42', x10: '00:02:21' },
		{ option: 'Trebuchet', x1: '00:42:22', x2: '00:21:11', x3: '00:14:07', x5: '00:08:28', x10: '00:04:14' },
		{ option: 'Chieftain', x1: '07:06:56', x2: '03:33:28', x3: '02:22:19', x5: '01:25:23', x10: '00:42:42' },
		{ option: 'Settler', x1: '01:46:51', x2: '00:53:26', x3: '00:35:37', x5: '00:21:22', x10: '00:10:41' },
	],
}, {
	option: 'Level 14', troops: [
		{ option: 'Phalanx', x1: '00:04:24', x2: '00:02:12', x3: '00:01:28', x5: '00:00:53', x10: '00:00:26' },
		{ option: 'Swordsman', x1: '00:06:06', x2: '00:03:03', x3: '00:02:02', x5: '00:01:13', x10: '00:00:37' },
		{ option: 'Pathfinder', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Theutates Thunder', x1: '00:10:30', x2: '00:05:15', x3: '00:03:30', x5: '00:02:06', x10: '00:01:03' },
		{ option: 'Druidrider', x1: '00:10:51', x2: '00:05:26', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Haeduan', x1: '00:13:13', x2: '00:06:37', x3: '00:04:24', x5: '00:02:39', x10: '00:01:19' },
		{ option: 'Ram', x1: '00:21:11', x2: '00:10:36', x3: '00:07:04', x5: '00:04:14', x10: '00:02:07' },
		{ option: 'Trebuchet', x1: '00:38:08', x2: '00:19:04', x3: '00:12:43', x5: '00:07:38', x10: '00:03:49' },
		{ option: 'Chieftain', x1: '06:24:15', x2: '03:12:08', x3: '02:08:05', x5: '01:16:51', x10: '00:38:26' },
		{ option: 'Settler', x1: '01:36:10', x2: '00:48:05', x3: '00:32:03', x5: '00:19:14', x10: '00:09:37' },
	],
}, {
	option: 'Level 15', troops: [
		{ option: 'Phalanx', x1: '00:03:58', x2: '00:01:59', x3: '00:01:19', x5: '00:00:48', x10: '00:00:24' },
		{ option: 'Swordsman', x1: '00:05:29', x2: '00:02:45', x3: '00:01:50', x5: '00:01:06', x10: '00:00:33' },
		{ option: 'Pathfinder', x1: '00:05:11', x2: '00:02:36', x3: '00:01:44', x5: '00:01:02', x10: '00:00:31' },
		{ option: 'Theutates Thunder', x1: '00:09:27', x2: '00:04:44', x3: '00:03:09', x5: '00:01:53', x10: '00:00:57' },
		{ option: 'Druidrider', x1: '00:09:46', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Haeduan', x1: '00:11:54', x2: '00:05:57', x3: '00:03:58', x5: '00:02:23', x10: '00:01:11' },
		{ option: 'Ram', x1: '00:19:04', x2: '00:09:32', x3: '00:06:21', x5: '00:03:49', x10: '00:01:54' },
		{ option: 'Trebuchet', x1: '00:34:19', x2: '00:17:10', x3: '00:11:26', x5: '00:06:52', x10: '00:03:26' },
		{ option: 'Chieftain', x1: '05:45:49', x2: '02:52:55', x3: '01:55:16', x5: '01:09:10', x10: '00:34:35' },
		{ option: 'Settler', x1: '01:26:33', x2: '00:43:17', x3: '00:28:51', x5: '00:17:19', x10: '00:08:39' },
	],
}, {
	option: 'Level 16', troops: [
		{ option: 'Phalanx', x1: '00:03:34', x2: '00:01:47', x3: '00:01:11', x5: '00:00:43', x10: '00:00:21' },
		{ option: 'Swordsman', x1: '00:04:56', x2: '00:02:28', x3: '00:01:39', x5: '00:00:59', x10: '00:00:30' },
		{ option: 'Pathfinder', x1: '00:04:40', x2: '00:02:20', x3: '00:01:33', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Theutates Thunder', x1: '00:08:31', x2: '00:04:16', x3: '00:02:50', x5: '00:01:42', x10: '00:00:51' },
		{ option: 'Druidrider', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Haeduan', x1: '00:10:42', x2: '00:05:21', x3: '00:03:34', x5: '00:02:08', x10: '00:01:04' },
		{ option: 'Ram', x1: '00:17:09', x2: '00:08:35', x3: '00:05:43', x5: '00:03:26', x10: '00:01:43' },
		{ option: 'Trebuchet', x1: '00:30:53', x2: '00:15:27', x3: '00:10:18', x5: '00:06:11', x10: '00:03:05' },
		{ option: 'Chieftain', x1: '05:11:14', x2: '02:35:37', x3: '01:43:45', x5: '01:02:15', x10: '00:31:07' },
		{ option: 'Settler', x1: '01:17:54', x2: '00:38:57', x3: '00:25:58', x5: '00:15:35', x10: '00:07:47' },
	],
}, {
	option: 'Level 17', troops: [
		{ option: 'Phalanx', x1: '00:03:13', x2: '00:01:37', x3: '00:01:04', x5: '00:00:39', x10: '00:00:19' },
		{ option: 'Swordsman', x1: '00:04:27', x2: '00:02:14', x3: '00:01:29', x5: '00:00:53', x10: '00:00:27' },
		{ option: 'Pathfinder', x1: '00:04:12', x2: '00:02:06', x3: '00:01:24', x5: '00:00:50', x10: '00:00:25' },
		{ option: 'Theutates Thunder', x1: '00:07:40', x2: '00:03:50', x3: '00:02:33', x5: '00:01:32', x10: '00:00:46' },
		{ option: 'Druidrider', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Haeduan', x1: '00:09:38', x2: '00:04:49', x3: '00:03:13', x5: '00:01:56', x10: '00:00:58' },
		{ option: 'Ram', x1: '00:15:27', x2: '00:07:44', x3: '00:05:09', x5: '00:03:05', x10: '00:01:33' },
		{ option: 'Trebuchet', x1: '00:27:48', x2: '00:13:54', x3: '00:09:16', x5: '00:05:34', x10: '00:02:47' },
		{ option: 'Chieftain', x1: '04:40:07', x2: '02:20:04', x3: '01:33:22', x5: '00:56:01', x10: '00:28:01' },
		{ option: 'Settler', x1: '01:10:06', x2: '00:35:03', x3: '00:23:22', x5: '00:14:01', x10: '00:07:01' },
	],
}, {
	option: 'Level 18', troops: [
		{ option: 'Phalanx', x1: '00:02:53', x2: '00:01:27', x3: '00:00:58', x5: '00:00:35', x10: '00:00:17' },
		{ option: 'Swordsman', x1: '00:04:00', x2: '00:02:00', x3: '00:01:20', x5: '00:00:48', x10: '00:00:24' },
		{ option: 'Pathfinder', x1: '00:03:47', x2: '00:01:54', x3: '00:01:16', x5: '00:00:45', x10: '00:00:23' },
		{ option: 'Theutates Thunder', x1: '00:06:54', x2: '00:03:27', x3: '00:02:18', x5: '00:01:23', x10: '00:00:41' },
		{ option: 'Druidrider', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Haeduan', x1: '00:08:40', x2: '00:04:20', x3: '00:02:53', x5: '00:01:44', x10: '00:00:52' },
		{ option: 'Ram', x1: '00:13:54', x2: '00:06:57', x3: '00:04:38', x5: '00:02:47', x10: '00:01:23' },
		{ option: 'Trebuchet', x1: '00:25:01', x2: '00:12:31', x3: '00:08:20', x5: '00:05:00', x10: '00:02:30' },
		{ option: 'Chieftain', x1: '04:12:06', x2: '02:06:03', x3: '01:24:02', x5: '00:50:25', x10: '00:25:13' },
		{ option: 'Settler', x1: '01:03:06', x2: '00:31:33', x3: '00:21:02', x5: '00:12:37', x10: '00:06:19' },
	],
}, {
	option: 'Level 19', troops: [
		{ option: 'Phalanx', x1: '00:02:36', x2: '00:01:18', x3: '00:00:52', x5: '00:00:31', x10: '00:00:16' },
		{ option: 'Swordsman', x1: '00:03:36', x2: '00:01:48', x3: '00:01:12', x5: '00:00:43', x10: '00:00:22' },
		{ option: 'Pathfinder', x1: '00:03:24', x2: '00:01:42', x3: '00:01:08', x5: '00:00:41', x10: '00:00:20' },
		{ option: 'Theutates Thunder', x1: '00:06:12', x2: '00:03:06', x3: '00:02:04', x5: '00:01:14', x10: '00:00:37' },
		{ option: 'Druidrider', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Haeduan', x1: '00:07:48', x2: '00:03:54', x3: '00:02:36', x5: '00:01:34', x10: '00:00:47' },
		{ option: 'Ram', x1: '00:12:30', x2: '00:06:15', x3: '00:04:10', x5: '00:02:30', x10: '00:01:15' },
		{ option: 'Trebuchet', x1: '00:22:31', x2: '00:11:16', x3: '00:07:30', x5: '00:04:30', x10: '00:02:15' },
		{ option: 'Chieftain', x1: '03:46:54', x2: '01:53:27', x3: '01:15:38', x5: '00:45:23', x10: '00:22:41' },
		{ option: 'Settler', x1: '00:56:47', x2: '00:28:24', x3: '00:18:56', x5: '00:11:21', x10: '00:05:41' },
	],
}, {
	option: 'Level 20', troops: [
		{ option: 'Phalanx', x1: '00:02:20', x2: '00:01:10', x3: '00:00:47', x5: '00:00:28', x10: '00:00:14' },
		{ option: 'Swordsman', x1: '00:03:15', x2: '00:01:38', x3: '00:01:05', x5: '00:00:39', x10: '00:00:20' },
		{ option: 'Pathfinder', x1: '00:03:04', x2: '00:01:32', x3: '00:01:01', x5: '00:00:37', x10: '00:00:18' },
		{ option: 'Theutates Thunder', x1: '00:05:35', x2: '00:02:48', x3: '00:01:52', x5: '00:01:07', x10: '00:00:34' },
		{ option: 'Druidrider', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Haeduan', x1: '00:07:01', x2: '00:03:31', x3: '00:02:20', x5: '00:01:24', x10: '00:00:42' },
		{ option: 'Ram', x1: '00:11:15', x2: '00:05:38', x3: '00:03:45', x5: '00:02:15', x10: '00:01:08' },
		{ option: 'Trebuchet', x1: '00:20:16', x2: '00:10:08', x3: '00:06:45', x5: '00:04:03', x10: '00:02:02' },
		{ option: 'Chieftain', x1: '03:24:12', x2: '01:42:06', x3: '01:08:04', x5: '00:40:50', x10: '00:20:25' },
		{ option: 'Settler', x1: '00:51:06', x2: '00:25:33', x3: '00:17:02', x5: '00:10:13', x10: '00:05:07' },
	],
},
];

export const EGYPTIAN_TROOPS_TRAIN_LEVELS = [{
	option: 'Level 1', troops: [
		{ option: 'Slave Militia', x1: '00:08:50', x2: '00:04:25', x3: '00:02:57', x5: '00:01:46', x10: '00:00:53' },
		{ option: 'Ash Warden', x1: '00:23:00', x2: '00:11:30', x3: '00:07:40', x5: '00:04:36', x10: '00:02:18' },
		{ option: 'Khopesh Warrior', x1: '00:24:00', x2: '00:12:00', x3: '00:08:00', x5: '00:04:48', x10: '00:02:24' },
		{ option: 'Sopdu Explorer', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Anhur Guard', x1: '00:42:40', x2: '00:21:20', x3: '00:14:13', x5: '00:08:32', x10: '00:04:16' },
		{ option: 'Resheph Chariot', x1: '00:54:00', x2: '00:27:00', x3: '00:18:00', x5: '00:10:48', x10: '00:05:24' },
		{ option: 'Ram', x1: '01:20:00', x2: '00:40:00', x3: '00:26:40', x5: '00:16:00', x10: '00:08:00' },
		{ option: 'Stone Catapult', x1: '02:30:00', x2: '01:15:00', x3: '00:50:00', x5: '00:30:00', x10: '00:15:00' },
		{ option: 'Nomarch', x1: '25:11:40', x2: '12:35:50', x3: '08:23:53', x5: '05:02:20', x10: '02:31:10' },
		{ option: 'Settler', x1: '06:53:20', x2: '03:26:40', x3: '02:17:47', x5: '01:22:40', x10: '00:41:20' }
	]
}, {
	option: 'Level 2', troops: [
		{ option: 'Slave Militia', x1: '00:07:57', x2: '00:03:59', x3: '00:02:39', x5: '00:01:35', x10: '00:00:48' },
		{ option: 'Ash Warden', x1: '00:20:42', x2: '00:10:21', x3: '00:06:54', x5: '00:04:08', x10: '00:02:04' },
		{ option: 'Khopesh Warrior', x1: '00:21:36', x2: '00:10:48', x3: '00:07:12', x5: '00:04:19', x10: '00:02:10' },
		{ option: 'Sopdu Explorer', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Anhur Guard', x1: '00:38:24', x2: '00:19:12', x3: '00:12:48', x5: '00:07:41', x10: '00:03:50' },
		{ option: 'Resheph Chariot', x1: '00:48:36', x2: '00:24:18', x3: '00:16:12', x5: '00:09:43', x10: '00:04:52' },
		{ option: 'Ram', x1: '01:12:00', x2: '00:36:00', x3: '00:24:00', x5: '00:14:24', x10: '00:07:12' },
		{ option: 'Stone Catapult', x1: '02:15:00', x2: '01:07:30', x3: '00:45:00', x5: '00:27:00', x10: '00:13:30' },
		{ option: 'Nomarch', x1: '22:40:30', x2: '11:20:15', x3: '07:33:30', x5: '04:32:06', x10: '02:16:03' },
		{ option: 'Settler', x1: '06:12:00', x2: '03:06:00', x3: '02:04:00', x5: '01:14:24', x10: '00:37:12' }
	]
}, {
	option: 'Level 3', troops: [
		{ option: 'Slave Militia', x1: '00:07:09', x2: '00:03:35', x3: '00:02:23', x5: '00:01:26', x10: '00:00:43' },
		{ option: 'Ash Warden', x1: '00:18:38', x2: '00:09:19', x3: '00:06:13', x5: '00:03:44', x10: '00:01:52' },
		{ option: 'Khopesh Warrior', x1: '00:19:26', x2: '00:09:43', x3: '00:06:29', x5: '00:03:53', x10: '00:01:57' },
		{ option: 'Sopdu Explorer', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Anhur Guard', x1: '00:34:34', x2: '00:17:17', x3: '00:11:31', x5: '00:06:55', x10: '00:03:27' },
		{ option: 'Resheph Chariot', x1: '00:43:44', x2: '00:21:52', x3: '00:14:35', x5: '00:08:45', x10: '00:04:22' },
		{ option: 'Ram', x1: '01:04:48', x2: '00:32:24', x3: '00:21:36', x5: '00:12:58', x10: '00:06:29' },
		{ option: 'Stone Catapult', x1: '02:01:30', x2: '01:00:45', x3: '00:40:30', x5: '00:24:18', x10: '00:12:09' },
		{ option: 'Nomarch', x1: '020:24:27', x2: '10:12:14', x3: '06:48:09', x5: '04:04:53', x10: '02:02:27' },
		{ option: 'Settler', x1: '05:34:48', x2: '02:47:24', x3: '01:51:36', x5: '01:06:58', x10: '00:33:29' }
	]
}, {
	option: 'Level 4', troops: [
		{ option: 'Slave Militia', x1: '00:06:26', x2: '00:03:13', x3: '00:02:09', x5: '00:01:17', x10: '00:00:39' },
		{ option: 'Ash Warden', x1: '00:16:46', x2: '00:08:23', x3: '00:05:35', x5: '00:03:21', x10: '00:01:41' },
		{ option: 'Khopesh Warrior', x1: '00:17:30', x2: '00:08:45', x3: '00:05:50', x5: '00:03:30', x10: '00:01:45' },
		{ option: 'Sopdu Explorer', x1: '00:16:31', x2: '00:08:16', x3: '00:05:30', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Anhur Guard', x1: '00:31:06', x2: '00:15:33', x3: '00:10:22', x5: '00:06:13', x10: '00:03:07' },
		{ option: 'Resheph Chariot', x1: '00:39:22', x2: '00:19:41', x3: '00:13:07', x5: '00:07:52', x10: '00:03:56' },
		{ option: 'Ram', x1: '00:58:19', x2: '00:29:10', x3: '00:19:26', x5: '00:11:40', x10: '00:05:50' },
		{ option: 'Stone Catapult', x1: '01:49:21', x2: '00:54:41', x3: '00:36:27', x5: '00:21:52', x10: '00:10:56' },
		{ option: 'Nomarch', x1: '18:22:00', x2: '09:11:00', x3: '06:07:20', x5: '03:40:24', x10: '01:50:12' },
		{ option: 'Settler', x1: '05:01:19', x2: '02:30:40', x3: '01:40:26', x5: '01:00:16', x10: '00:30:08' }
	]
}, {
	option: 'Level 5', troops: [
		{ option: 'Slave Militia', x1: '00:05:48', x2: '00:02:54', x3: '00:01:56', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Ash Warden', x1: '00:15:05', x2: '00:07:33', x3: '00:05:02', x5: '00:03:01', x10: '00:01:31' },
		{ option: 'Khopesh Warrior', x1: '00:15:45', x2: '00:07:53', x3: '00:05:15', x5: '00:03:09', x10: '00:01:35' },
		{ option: 'Sopdu Explorer', x1: '00:14:52', x2: '00:07:26', x3: '00:04:57', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Anhur Guard', x1: '00:28:00', x2: '00:14:00', x3: '00:09:20', x5: '00:05:36', x10: '00:02:48' },
		{ option: 'Resheph Chariot', x1: '00:35:26', x2: '00:17:43', x3: '00:11:49', x5: '00:07:05', x10: '00:03:33' },
		{ option: 'Ram', x1: '00:52:29', x2: '00:26:15', x3: '00:17:30', x5: '00:10:30', x10: '00:05:15' },
		{ option: 'Stone Catapult', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Nomarch', x1: '16:31:48', x2: '08:15:54', x3: '05:30:36', x5: '03:18:22', x10: '01:39:11' },
		{ option: 'Settler', x1: '04:31:11', x2: '02:15:36', x3: '01:30:24', x5: '00:54:14', x10: '00:27:07' }
	]
}, {
	option: 'Level 6', troops: [
		{ option: 'Slave Militia', x1: '00:05:13', x2: '00:02:37', x3: '00:01:44', x5: '00:01:03', x10: '00:00:31' },
		{ option: 'Ash Warden', x1: '00:13:35', x2: '00:06:48', x3: '00:04:32', x5: '00:02:43', x10: '00:01:22' },
		{ option: 'Khopesh Warrior', x1: '00:14:10', x2: '00:07:05', x3: '00:04:43', x5: '00:02:50', x10: '00:01:25' },
		{ option: 'Sopdu Explorer', x1: '00:13:23', x2: '00:06:42', x3: '00:04:28', x5: '00:02:41', x10: '00:01:20' },
		{ option: 'Anhur Guard', x1: '00:25:12', x2: '00:12:36', x3: '00:08:24', x5: '00:05:02', x10: '00:02:31' },
		{ option: 'Resheph Chariot', x1: '00:31:53', x2: '00:15:57', x3: '00:10:38', x5: '00:06:23', x10: '00:03:11' },
		{ option: 'Ram', x1: '00:47:14', x2: '00:23:37', x3: '00:15:45', x5: '00:09:27', x10: '00:04:43' },
		{ option: 'Stone Catapult', x1: '01:28:34', x2: '00:44:17', x3: '00:29:31', x5: '00:17:43', x10: '00:08:51' },
		{ option: 'Nomarch', x1: '14:52:37', x2: '07:26:19', x3: '04:57:32', x5: '02:58:31', x10: '01:29:16' },
		{ option: 'Settler', x1: '04:04:04', x2: '02:02:02', x3: '01:21:21', x5: '00:48:49', x10: '00:24:24' }
	]
}, {
	option: 'Level 7', troops: [
		{ option: 'Slave Militia', x1: '00:04:42', x2: '00:02:21', x3: '00:01:34', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Ash Warden', x1: '00:12:13', x2: '00:06:07', x3: '00:04:04', x5: '00:02:27', x10: '00:01:13' },
		{ option: 'Khopesh Warrior', x1: '00:12:45', x2: '00:06:23', x3: '00:04:15', x5: '00:02:33', x10: '00:01:17' },
		{ option: 'Sopdu Explorer', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Anhur Guard', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Resheph Chariot', x1: '00:28:42', x2: '00:14:21', x3: '00:09:34', x5: '00:05:44', x10: '00:02:52' },
		{ option: 'Ram', x1: '00:42:31', x2: '00:21:16', x3: '00:14:10', x5: '00:08:30', x10: '00:04:15' },
		{ option: 'Stone Catapult', x1: '01:19:43', x2: '00:39:52', x3: '00:26:34', x5: '00:15:57', x10: '00:07:58' },
		{ option: 'Nomarch', x1: '13:23:22', x2: '06:41:41', x3: '04:27:47', x5: '02:40:40', x10: '01:20:20' },
		{ option: 'Settler', x1: '03:39:40', x2: '01:49:50', x3: '01:13:13', x5: '00:43:56', x10: '00:21:58' }
	]
}, {
	option: 'Level 8', troops: [
		{ option: 'Slave Militia', x1: '00:04:13', x2: '00:02:07', x3: '00:01:24', x5: '00:00:51', x10: '00:00:25' },
		{ option: 'Ash Warden', x1: '00:11:00', x2: '00:05:30', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
		{ option: 'Khopesh Warrior', x1: '00:11:29', x2: '00:05:45', x3: '00:03:50', x5: '00:02:18', x10: '00:01:09' },
		{ option: 'Sopdu Explorer', x1: '00:10:50', x2: '00:05:25', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Anhur Guard', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Resheph Chariot', x1: '00:25:50', x2: '00:12:55', x3: '00:08:37', x5: '00:05:10', x10: '00:02:35' },
		{ option: 'Ram', x1: '00:38:16', x2: '00:19:08', x3: '00:12:45', x5: '00:07:39', x10: '00:03:50' },
		{ option: 'Stone Catapult', x1: '01:11:45', x2: '00:35:53', x3: '00:23:55', x5: '00:14:21', x10: '00:07:11' },
		{ option: 'Nomarch', x1: '12:03:02', x2: '06:01:31', x3: '04:01:01', x5: '02:24:36', x10: '01:12:18' },
		{ option: 'Settler', x1: '03:17:42', x2: '01:38:51', x3: '01:05:54', x5: '00:39:32', x10: '00:19:46' }
	]
}, {
	option: 'Level 9', troops: [
		{ option: 'Slave Militia', x1: '00:03:48', x2: '00:01:54', x3: '00:01:16', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Ash Warden', x1: '00:09:54', x2: '00:04:57', x3: '00:03:18', x5: '00:01:59', x10: '00:00:59' },
		{ option: 'Khopesh Warrior', x1: '00:10:20', x2: '00:05:10', x3: '00:03:27', x5: '00:02:04', x10: '00:01:02' },
		{ option: 'Sopdu Explorer', x1: '00:09:45', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Anhur Guard', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Resheph Chariot', x1: '00:23:15', x2: '00:11:38', x3: '00:07:45', x5: '00:04:39', x10: '00:02:20' },
		{ option: 'Ram', x1: '00:34:26', x2: '00:17:13', x3: '00:11:29', x5: '00:06:53', x10: '00:03:27' },
		{ option: 'Stone Catapult', x1: '01:04:34', x2: '00:32:17', x3: '00:21:31', x5: '00:12:55', x10: '00:06:27' },
		{ option: 'Nomarch', x1: '10:50:43', x2: '05:25:22', x3: '03:36:54', x5: '02:10:09', x10: '01:05:04' },
		{ option: 'Settler', x1: '02:57:56', x2: '01:28:58', x3: '00:59:19', x5: '00:35:35', x10: '00:17:48' }
	]
}, {
	option: 'Level 10', troops: [
		{ option: 'Slave Militia', x1: '00:03:25', x2: '00:01:43', x3: '00:01:08', x5: '00:00:41', x10: '00:00:21' },
		{ option: 'Ash Warden', x1: '00:08:55', x2: '00:04:28', x3: '00:02:58', x5: '00:01:47', x10: '00:00:54' },
		{ option: 'Khopesh Warrior', x1: '00:09:18', x2: '00:04:39', x3: '00:03:06', x5: '00:01:52', x10: '00:00:56' },
		{ option: 'Sopdu Explorer', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Anhur Guard', x1: '00:16:32', x2: '00:08:16', x3: '00:05:31', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Resheph Chariot', x1: '00:20:55', x2: '00:10:28', x3: '00:06:58', x5: '00:04:11', x10: '00:02:06' },
		{ option: 'Ram', x1: '00:31:00', x2: '00:15:30', x3: '00:10:20', x5: '00:06:12', x10: '00:03:06' },
		{ option: 'Stone Catapult', x1: '00:58:07', x2: '00:29:04', x3: '00:19:22', x5: '00:11:37', x10: '00:05:49' },
		{ option: 'Nomarch', x1: '09:45:39', x2: '04:52:50', x3: '03:15:13', x5: '01:57:08', x10: '00:58:34' },
		{ option: 'Settler', x1: '02:40:08', x2: '01:20:04', x3: '00:53:23', x5: '00:32:02', x10: '00:16:01' }
	]
}, {
	option: 'Level 11', troops: [
		{ option: 'Slave Militia', x1: '00:03:05', x2: '00:01:33', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Ash Warden', x1: '00:08:01', x2: '00:04:01', x3: '00:02:40', x5: '00:01:36', x10: '00:00:48' },
		{ option: 'Khopesh Warrior', x1: '00:08:22', x2: '00:04:11', x3: '00:02:47', x5: '00:01:40', x10: '00:00:50' },
		{ option: 'Sopdu Explorer', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Anhur Guard', x1: '00:14:53', x2: '00:07:27', x3: '00:04:58', x5: '00:02:59', x10: '00:01:29' },
		{ option: 'Resheph Chariot', x1: '00:18:50', x2: '00:09:25', x3: '00:06:17', x5: '00:03:46', x10: '00:01:53' },
		{ option: 'Ram', x1: '00:27:54', x2: '00:13:57', x3: '00:09:18', x5: '00:05:35', x10: '00:02:47' },
		{ option: 'Stone Catapult', x1: '00:52:18', x2: '00:26:09', x3: '00:17:26', x5: '00:10:28', x10: '00:05:14' },
		{ option: 'Nomarch', x1: '08:47:05', x2: '04:23:33', x3: '02:55:42', x5: '01:45:25', x10: '00:52:43' },
		{ option: 'Settler', x1: '02:24:07', x2: '01:12:04', x3: '00:48:02', x5: '00:28:49', x10: '00:14:25' }
	]
}, {
	option: 'Level 12', troops: [
		{ option: 'Slave Militia', x1: '00:02:46', x2: '00:01:23', x3: '00:00:55', x5: '00:00:33', x10: '00:00:17' },
		{ option: 'Ash Warden', x1: '00:07:13', x2: '00:03:37', x3: '00:02:24', x5: '00:01:27', x10: '00:00:43' },
		{ option: 'Khopesh Warrior', x1: '00:07:32', x2: '00:03:46', x3: '00:02:31', x5: '00:01:30', x10: '00:00:45' },
		{ option: 'Sopdu Explorer', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Anhur Guard', x1: '00:13:23', x2: '00:06:42', x3: '00:04:28', x5: '00:02:41', x10: '00:01:20' },
		{ option: 'Resheph Chariot', x1: '00:16:57', x2: '00:08:29', x3: '00:05:39', x5: '00:03:23', x10: '00:01:42' },
		{ option: 'Ram', x1: '00:25:06', x2: '00:12:33', x3: '00:08:22', x5: '00:05:01', x10: '00:02:31' },
		{ option: 'Stone Catapult', x1: '00:47:04', x2: '00:23:32', x3: '00:15:41', x5: '00:09:25', x10: '00:04:42' },
		{ option: 'Nomarch', x1: '07:54:23', x2: '03:57:12', x3: '02:38:08', x5: '01:34:53', x10: '00:47:26' },
		{ option: 'Settler', x1: '02:09:43', x2: '01:04:52', x3: '00:43:14', x5: '00:25:57', x10: '00:12:58' }
	]
}, {
	option: 'Level 13', troops: [
		{ option: 'Slave Militia', x1: '00:02:30', x2: '00:01:15', x3: '00:00:50', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Ash Warden', x1: '00:06:30', x2: '00:03:15', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
		{ option: 'Khopesh Warrior', x1: '00:06:47', x2: '00:03:24', x3: '00:02:16', x5: '00:01:21', x10: '00:00:41' },
		{ option: 'Sopdu Explorer', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Anhur Guard', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Resheph Chariot', x1: '00:15:15', x2: '00:07:38', x3: '00:05:05', x5: '00:03:03', x10: '00:01:32' },
		{ option: 'Ram', x1: '00:22:36', x2: '00:11:18', x3: '00:07:32', x5: '00:04:31', x10: '00:02:16' },
		{ option: 'Stone Catapult', x1: '00:42:22', x2: '00:21:11', x3: '00:14:07', x5: '00:08:28', x10: '00:04:14' },
		{ option: 'Nomarch', x1: '07:06:56', x2: '03:33:28', x3: '02:22:19', x5: '01:25:23', x10: '00:42:42' },
		{ option: 'Settler', x1: '01:56:44', x2: '00:58:22', x3: '00:38:55', x5: '00:23:21', x10: '00:11:40' }
	]
}, {
	option: 'Level 14', troops: [
		{ option: 'Slave Militia', x1: '00:02:15', x2: '00:01:08', x3: '00:00:45', x5: '00:00:27', x10: '00:00:14' },
		{ option: 'Ash Warden', x1: '00:05:51', x2: '00:02:56', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Khopesh Warrior', x1: '00:06:06', x2: '00:03:03', x3: '00:02:02', x5: '00:01:13', x10: '00:00:37' },
		{ option: 'Sopdu Explorer', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Anhur Guard', x1: '00:10:51', x2: '00:05:26', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Resheph Chariot', x1: '00:13:44', x2: '00:06:52', x3: '00:04:35', x5: '00:02:45', x10: '00:01:22' },
		{ option: 'Ram', x1: '00:20:20', x2: '00:10:10', x3: '00:06:47', x5: '00:04:04', x10: '00:02:02' },
		{ option: 'Stone Catapult', x1: '00:38:08', x2: '00:19:04', x3: '00:12:43', x5: '00:07:38', x10: '00:03:49' },
		{ option: 'Nomarch', x1: '06:24:15', x2: '03:12:08', x3: '02:08:05', x5: '01:16:51', x10: '00:38:26' },
		{ option: 'Settler', x1: '01:45:04', x2: '00:52:32', x3: '00:35:01', x5: '00:21:01', x10: '00:10:30' }
	]
}, {
	option: 'Level 15', troops: [
		{ option: 'Slave Militia', x1: '00:02:01', x2: '00:01:01', x3: '00:00:40', x5: '00:00:24', x10: '00:00:12' },
		{ option: 'Ash Warden', x1: '00:05:16', x2: '00:02:38', x3: '00:01:45', x5: '00:01:03', x10: '00:00:32' },
		{ option: 'Khopesh Warrior', x1: '00:05:29', x2: '00:02:45', x3: '00:01:50', x5: '00:01:06', x10: '00:00:33' },
		{ option: 'Sopdu Explorer', x1: '00:05:11', x2: '00:02:36', x3: '00:01:44', x5: '00:01:02', x10: '00:00:31' },
		{ option: 'Anhur Guard', x1: '00:09:46', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Resheph Chariot', x1: '00:12:21', x2: '00:06:11', x3: '00:04:07', x5: '00:02:28', x10: '00:01:14' },
		{ option: 'Ram', x1: '00:18:18', x2: '00:09:09', x3: '00:06:06', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Stone Catapult', x1: '00:34:19', x2: '00:17:10', x3: '00:11:26', x5: '00:06:52', x10: '00:03:26' },
		{ option: 'Nomarch', x1: '05:45:49', x2: '02:52:55', x3: '01:55:16', x5: '01:09:10', x10: '00:34:35' },
		{ option: 'Settler', x1: '01:34:33', x2: '00:47:17', x3: '00:31:31', x5: '00:18:55', x10: '00:09:27' }
	]
}, {
	option: 'Level 16', troops: [
		{ option: 'Slave Militia', x1: '00:01:49', x2: '00:00:55', x3: '00:00:36', x5: '00:00:22', x10: '00:00:11' },
		{ option: 'Ash Warden', x1: '00:04:44', x2: '00:02:22', x3: '00:01:35', x5: '00:00:57', x10: '00:00:28' },
		{ option: 'Khopesh Warrior', x1: '00:04:56', x2: '00:02:28', x3: '00:01:39', x5: '00:00:59', x10: '00:00:30' },
		{ option: 'Sopdu Explorer', x1: '00:04:40', x2: '00:02:20', x3: '00:01:33', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Anhur Guard', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Resheph Chariot', x1: '00:11:07', x2: '00:05:34', x3: '00:03:42', x5: '00:02:13', x10: '00:01:07' },
		{ option: 'Ram', x1: '00:16:28', x2: '00:08:14', x3: '00:05:29', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Stone Catapult', x1: '00:30:53', x2: '00:15:27', x3: '00:10:18', x5: '00:06:11', x10: '00:03:05' },
		{ option: 'Nomarch', x1: '05:11:14', x2: '02:35:37', x3: '01:43:45', x5: '01:02:15', x10: '00:31:07' },
		{ option: 'Settler', x1: '01:25:06', x2: '00:42:33', x3: '00:28:22', x5: '00:17:01', x10: '00:08:31' }
	]
}, {
	option: 'Level 17', troops: [
		{ option: 'Slave Militia', x1: '00:01:38', x2: '00:00:49', x3: '00:00:33', x5: '00:00:20', x10: '00:00:10' },
		{ option: 'Ash Warden', x1: '00:04:16', x2: '00:02:08', x3: '00:01:25', x5: '00:00:51', x10: '00:00:26' },
		{ option: 'Khopesh Warrior', x1: '00:04:27', x2: '00:02:14', x3: '00:01:29', x5: '00:00:53', x10: '00:00:27' },
		{ option: 'Sopdu Explorer', x1: '00:04:12', x2: '00:02:06', x3: '00:01:24', x5: '00:00:50', x10: '00:00:25' },
		{ option: 'Anhur Guard', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Resheph Chariot', x1: '00:10:00', x2: '00:05:00', x3: '00:03:20', x5: '00:02:00', x10: '00:01:00' },
		{ option: 'Ram', x1: '00:14:49', x2: '00:07:25', x3: '00:04:56', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Stone Catapult', x1: '00:27:48', x2: '00:13:54', x3: '00:09:16', x5: '00:05:34', x10: '00:02:47' },
		{ option: 'Nomarch', x1: '04:40:07', x2: '02:20:04', x3: '01:33:22', x5: '00:56:01', x10: '00:28:01' },
		{ option: 'Settler', x1: '01:16:35', x2: '00:38:18', x3: '00:25:32', x5: '00:15:19', x10: '00:07:40' }
	]
}, {
	option: 'Level 18', troops: [
		{ option: 'Slave Militia', x1: '00:01:28', x2: '00:00:44', x3: '00:00:29', x5: '00:00:18', x10: '00:00:09' },
		{ option: 'Ash Warden', x1: '00:03:50', x2: '00:01:55', x3: '00:01:17', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Khopesh Warrior', x1: '00:04:00', x2: '00:02:00', x3: '00:01:20', x5: '00:00:48', x10: '00:00:24' },
		{ option: 'Sopdu Explorer', x1: '00:03:47', x2: '00:01:54', x3: '00:01:16', x5: '00:00:45', x10: '00:00:23' },
		{ option: 'Anhur Guard', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Resheph Chariot', x1: '00:09:00', x2: '00:04:30', x3: '00:03:00', x5: '00:01:48', x10: '00:00:54' },
		{ option: 'Ram', x1: '00:13:21', x2: '00:06:41', x3: '00:04:27', x5: '00:02:40', x10: '00:01:20' },
		{ option: 'Stone Catapult', x1: '00:25:01', x2: '00:12:31', x3: '00:08:20', x5: '00:05:00', x10: '00:02:30' },
		{ option: 'Nomarch', x1: '04:12:06', x2: '02:06:03', x3: '01:24:02', x5: '00:50:25', x10: '00:25:13' },
		{ option: 'Settler', x1: '01:08:56', x2: '00:34:28', x3: '00:22:59', x5: '00:13:47', x10: '00:06:54' }
	]
}, {
	option: 'Level 19', troops: [
		{ option: 'Slave Militia', x1: '00:01:20', x2: '00:00:40', x3: '00:00:27', x5: '00:00:16', x10: '00:00:08' },
		{ option: 'Ash Warden', x1: '00:03:27', x2: '00:01:44', x3: '00:01:09', x5: '00:00:41', x10: '00:00:21' },
		{ option: 'Khopesh Warrior', x1: '00:03:36', x2: '00:01:48', x3: '00:01:12', x5: '00:00:43', x10: '00:00:22' },
		{ option: 'Sopdu Explorer', x1: '00:03:24', x2: '00:01:42', x3: '00:01:08', x5: '00:00:41', x10: '00:00:20' },
		{ option: 'Anhur Guard', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Resheph Chariot', x1: '00:08:06', x2: '00:04:03', x3: '00:02:42', x5: '00:01:37', x10: '00:00:49' },
		{ option: 'Ram', x1: '00:12:00', x2: '00:06:00', x3: '00:04:00', x5: '00:02:24', x10: '00:01:12' },
		{ option: 'Stone Catapult', x1: '00:22:31', x2: '00:11:16', x3: '00:07:30', x5: '00:04:30', x10: '00:02:15' },
		{ option: 'Nomarch', x1: '03:46:54', x2: '01:53:27', x3: '01:15:38', x5: '00:45:23', x10: '00:22:41' },
		{ option: 'Settler', x1: '01:02:02', x2: '00:31:01', x3: '00:20:41', x5: '00:12:24', x10: '00:06:12' }
	]
}, {
	option: 'Level 20', troops: [
		{ option: 'Slave Militia', x1: '00:01:12', x2: '00:00:36', x3: '00:00:24', x5: '00:00:14', x10: '00:00:07' },
		{ option: 'Ash Warden', x1: '00:03:06', x2: '00:01:33', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Khopesh Warrior', x1: '00:03:15', x2: '00:01:38', x3: '00:01:05', x5: '00:00:39', x10: '00:00:20' },
		{ option: 'Sopdu Explorer', x1: '00:03:04', x2: '00:01:32', x3: '00:01:01', x5: '00:00:37', x10: '00:00:18' },
		{ option: 'Anhur Guard', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Resheph Chariot', x1: '00:07:18', x2: '00:03:39', x3: '00:02:26', x5: '00:01:28', x10: '00:00:44' },
		{ option: 'Ram', x1: '00:10:48', x2: '00:05:24', x3: '00:03:36', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Stone Catapult', x1: '00:20:16', x2: '00:10:08', x3: '00:06:45', x5: '00:04:03', x10: '00:02:02' },
		{ option: 'Nomarch', x1: '03:24:12', x2: '01:42:06', x3: '01:08:04', x5: '00:40:50', x10: '00:20:25' },
		{ option: 'Settler', x1: '00:55:50', x2: '00:27:55', x3: '00:18:37', x5: '00:11:10', x10: '00:05:35' }
	]
}
];

export const HUNS_TROOPS_TRAIN_LEVELS = [{
	option: 'Level 1', troops: [
		{ option: 'Mercenary', x1: '00:13:30', x2: '00:06:45', x3: '00:04:30', x5: '00:02:42', x10: '00:01:21' },
		{ option: 'Bowman', x1: '00:18:40', x2: '00:09:20', x3: '00:06:13', x5: '00:03:44', x10: '00:01:52' },
		{ option: 'Spotter', x1: '00:22:40', x2: '00:11:20', x3: '00:07:33', x5: '00:04:32', x10: '00:02:16' },
		{ option: 'Steppe Rider', x1: '00:40:00', x2: '00:20:00', x3: '00:13:20', x5: '00:08:00', x10: '00:04:00' },
		{ option: 'Marksman', x1: '00:41:20', x2: '00:20:40', x3: '00:13:47', x5: '00:08:16', x10: '00:04:08' },
		{ option: 'Marauder', x1: '00:49:50', x2: '00:24:55', x3: '00:16:37', x5: '00:09:58', x10: '00:04:59' },
		{ option: 'Ram', x1: '01:13:20', x2: '00:36:40', x3: '00:24:27', x5: '00:14:40', x10: '00:07:20' },
		{ option: 'Catapult', x1: '02:30:00', x2: '01:15:00', x3: '00:50:00', x5: '00:30:00', x10: '00:15:00' },
		{ option: 'Logades', x1: '25:11:40', x2: '12:35:50', x3: '08:23:53', x5: '05:02:20', x10: '02:31:10' },
		{ option: 'Settler', x1: '08:02:30', x2: '04:01:15', x3: '02:40:50', x5: '01:36:30', x10: '00:48:15' }
	]
}, {
	option: 'Level 2', troops: [
		{ option: 'Mercenary', x1: '00:12:09', x2: '00:06:05', x3: '00:04:03', x5: '00:02:26', x10: '00:01:13' },
		{ option: 'Bowman', x1: '00:16:48', x2: '00:08:24', x3: '00:05:36', x5: '00:03:22', x10: '00:01:41' },
		{ option: 'Spotter', x1: '00:20:24', x2: '00:10:12', x3: '00:06:48', x5: '00:04:05', x10: '00:02:02' },
		{ option: 'Steppe Rider', x1: '00:36:00', x2: '00:18:00', x3: '00:12:00', x5: '00:07:12', x10: '00:03:36' },
		{ option: 'Marksman', x1: '00:37:12', x2: '00:18:36', x3: '00:12:24', x5: '00:07:26', x10: '00:03:43' },
		{ option: 'Marauder', x1: '00:44:51', x2: '00:22:26', x3: '00:14:57', x5: '00:08:58', x10: '00:04:29' },
		{ option: 'Ram', x1: '01:06:00', x2: '00:33:00', x3: '00:22:00', x5: '00:13:12', x10: '00:06:36' },
		{ option: 'Catapult', x1: '02:15:00', x2: '01:07:30', x3: '00:45:00', x5: '00:27:00', x10: '00:13:30' },
		{ option: 'Logades', x1: '22:40:30', x2: '11:20:15', x3: '07:33:30', x5: '04:32:06', x10: '02:16:03' },
		{ option: 'Settler', x1: '07:14:15', x2: '03:37:08', x3: '02:24:45', x5: '01:26:51', x10: '00:43:26' }
	]
}, {
	option: 'Level 3', troops: [
		{ option: 'Mercenary', x1: '00:10:56', x2: '00:05:28', x3: '00:03:39', x5: '00:02:11', x10: '00:01:06' },
		{ option: 'Bowman', x1: '00:15:07', x2: '00:07:34', x3: '00:05:02', x5: '00:03:01', x10: '00:01:31' },
		{ option: 'Spotter', x1: '00:18:22', x2: '00:09:11', x3: '00:06:07', x5: '00:03:40', x10: '00:01:50' },
		{ option: 'Steppe Rider', x1: '00:32:24', x2: '00:16:12', x3: '00:10:48', x5: '00:06:29', x10: '00:03:14' },
		{ option: 'Marksman', x1: '00:33:29', x2: '00:16:45', x3: '00:11:10', x5: '00:06:42', x10: '00:03:21' },
		{ option: 'Marauder', x1: '00:40:22', x2: '00:20:11', x3: '00:13:27', x5: '00:08:04', x10: '00:04:02' },
		{ option: 'Ram', x1: '00:59:24', x2: '00:29:42', x3: '00:19:48', x5: '00:11:53', x10: '00:05:56' },
		{ option: 'Catapult', x1: '02:01:30', x2: '01:00:45', x3: '00:40:30', x5: '00:24:18', x10: '00:12:09' },
		{ option: 'Logades', x1: '20:24:27', x2: '10:12:14', x3: '06:48:09', x5: '04:04:53', x10: '02:02:27' },
		{ option: 'Settler', x1: '06:30:50', x2: '03:15:25', x3: '02:10:17', x5: '01:18:10', x10: '00:39:05' }
	]
}, {
	option: 'Level 4', troops: [
		{ option: 'Mercenary', x1: '00:09:50', x2: '00:04:55', x3: '00:03:17', x5: '00:01:58', x10: '00:00:59' },
		{ option: 'Bowman', x1: '00:13:36', x2: '00:06:48', x3: '00:04:32', x5: '00:02:43', x10: '00:01:22' },
		{ option: 'Spotter', x1: '00:16:31', x2: '00:08:16', x3: '00:05:30', x5: '00:03:18', x10: '00:01:39' },
		{ option: 'Steppe Rider', x1: '00:29:10', x2: '00:14:35', x3: '00:09:43', x5: '00:05:50', x10: '00:02:55' },
		{ option: 'Marksman', x1: '00:30:08', x2: '00:15:04', x3: '00:10:03', x5: '00:06:02', x10: '00:03:01' },
		{ option: 'Marauder', x1: '00:36:20', x2: '00:18:10', x3: '00:12:07', x5: '00:07:16', x10: '00:03:38' },
		{ option: 'Ram', x1: '00:53:28', x2: '00:26:44', x3: '00:17:49', x5: '00:10:42', x10: '00:05:21' },
		{ option: 'Catapult', x1: '01:49:21', x2: '00:54:41', x3: '00:36:27', x5: '00:21:52', x10: '00:10:56' },
		{ option: 'Logades', x1: '18:22:00', x2: '09:11:00', x3: '06:07:20', x5: '03:40:24', x10: '01:50:12' },
		{ option: 'Settler', x1: '05:51:45', x2: '02:55:53', x3: '01:57:15', x5: '01:10:21', x10: '00:35:11' }
	]
}, {
	option: 'Level 5', troops: [
		{ option: 'Mercenary', x1: '00:08:51', x2: '00:04:26', x3: '00:02:57', x5: '00:01:46', x10: '00:00:53' },
		{ option: 'Bowman', x1: '00:12:15', x2: '00:06:08', x3: '00:04:05', x5: '00:02:27', x10: '00:01:14' },
		{ option: 'Spotter', x1: '00:14:52', x2: '00:07:26', x3: '00:04:57', x5: '00:02:58', x10: '00:01:29' },
		{ option: 'Steppe Rider', x1: '00:26:15', x2: '00:13:08', x3: '00:08:45', x5: '00:05:15', x10: '00:02:38' },
		{ option: 'Marksman', x1: '00:27:07', x2: '00:13:34', x3: '00:09:02', x5: '00:05:25', x10: '00:02:43' },
		{ option: 'Marauder', x1: '00:32:42', x2: '00:16:21', x3: '00:10:54', x5: '00:06:32', x10: '00:03:16' },
		{ option: 'Ram', x1: '00:48:07', x2: '00:24:04', x3: '00:16:02', x5: '00:09:37', x10: '00:04:49' },
		{ option: 'Catapult', x1: '01:38:25', x2: '00:49:13', x3: '00:32:48', x5: '00:19:41', x10: '00:09:51' },
		{ option: 'Logades', x1: '16:31:48', x2: '08:15:54', x3: '05:30:36', x5: '03:18:22', x10: '01:39:11' },
		{ option: 'Settler', x1: '05:16:34', x2: '02:38:17', x3: '01:45:31', x5: '01:03:19', x10: '00:31:39' }
	]
}, {
	option: 'Level 6', troops: [
		{ option: 'Mercenary', x1: '00:07:58', x2: '00:03:59', x3: '00:02:39', x5: '00:01:36', x10: '00:00:48' },
		{ option: 'Bowman', x1: '00:11:01', x2: '00:05:31', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
		{ option: 'Spotter', x1: '00:13:23', x2: '00:06:42', x3: '00:04:28', x5: '00:02:41', x10: '00:01:20' },
		{ option: 'Steppe Rider', x1: '00:23:37', x2: '00:11:49', x3: '00:07:52', x5: '00:04:43', x10: '00:02:22' },
		{ option: 'Marksman', x1: '00:24:24', x2: '00:12:12', x3: '00:08:08', x5: '00:04:53', x10: '00:02:26' },
		{ option: 'Marauder', x1: '00:29:26', x2: '00:14:43', x3: '00:09:49', x5: '00:05:53', x10: '00:02:57' },
		{ option: 'Ram', x1: '00:43:18', x2: '00:21:39', x3: '00:14:26', x5: '00:08:40', x10: '00:04:20' },
		{ option: 'Catapult', x1: '01:28:34', x2: '00:44:17', x3: '00:29:31', x5: '00:17:43', x10: '00:08:51' },
		{ option: 'Logades', x1: '14:52:37', x2: '07:26:19', x3: '04:57:32', x5: '02:58:31', x10: '01:29:16' },
		{ option: 'Settler', x1: '04:44:55', x2: '02:22:28', x3: '01:34:58', x5: '00:56:59', x10: '00:28:30' }
	]
}, {
	option: 'Level 7', troops: [
		{ option: 'Mercenary', x1: '00:07:10', x2: '00:03:35', x3: '00:02:23', x5: '00:01:26', x10: '00:00:43' },
		{ option: 'Bowman', x1: '00:09:55', x2: '00:04:58', x3: '00:03:18', x5: '00:01:59', x10: '00:00:60' },
		{ option: 'Spotter', x1: '00:12:03', x2: '00:06:02', x3: '00:04:01', x5: '00:02:25', x10: '00:01:12' },
		{ option: 'Steppe Rider', x1: '00:21:15', x2: '00:10:38', x3: '00:07:05', x5: '00:04:15', x10: '00:02:08' },
		{ option: 'Marksman', x1: '00:21:58', x2: '00:10:59', x3: '00:07:19', x5: '00:04:24', x10: '00:02:12' },
		{ option: 'Marauder', x1: '00:26:29', x2: '00:13:15', x3: '00:08:50', x5: '00:05:18', x10: '00:02:39' },
		{ option: 'Ram', x1: '00:38:58', x2: '00:19:29', x3: '00:12:59', x5: '00:07:48', x10: '00:03:54' },
		{ option: 'Catapult', x1: '01:19:43', x2: '00:39:52', x3: '00:26:34', x5: '00:15:57', x10: '00:07:58' },
		{ option: 'Logades', x1: '13:23:22', x2: '06:41:41', x3: '04:27:47', x5: '02:40:40', x10: '01:20:20' },
		{ option: 'Settler', x1: '04:16:25', x2: '02:08:13', x3: '01:25:28', x5: '00:51:17', x10: '00:25:39' }
	]
}, {
	option: 'Level 8', troops: [
		{ option: 'Mercenary', x1: '00:06:27', x2: '00:03:14', x3: '00:02:09', x5: '00:01:17', x10: '00:00:39' },
		{ option: 'Bowman', x1: '00:08:56', x2: '00:04:28', x3: '00:02:59', x5: '00:01:47', x10: '00:00:54' },
		{ option: 'Spotter', x1: '00:10:50', x2: '00:05:25', x3: '00:03:37', x5: '00:02:10', x10: '00:01:05' },
		{ option: 'Steppe Rider', x1: '00:19:08', x2: '00:09:34', x3: '00:06:23', x5: '00:03:50', x10: '00:01:55' },
		{ option: 'Marksman', x1: '00:19:46', x2: '00:09:53', x3: '00:06:35', x5: '00:03:57', x10: '00:01:59' },
		{ option: 'Marauder', x1: '00:23:50', x2: '00:11:55', x3: '00:07:57', x5: '00:04:46', x10: '00:02:23' },
		{ option: 'Ram', x1: '00:35:05', x2: '00:17:33', x3: '00:11:42', x5: '00:07:01', x10: '00:03:31' },
		{ option: 'Catapult', x1: '01:11:45', x2: '00:35:53', x3: '00:23:55', x5: '00:14:21', x10: '00:07:11' },
		{ option: 'Logades', x1: '12:03:02', x2: '06:01:31', x3: '04:01:01', x5: '02:24:36', x10: '01:12:18' },
		{ option: 'Settler', x1: '03:50:47', x2: '01:55:24', x3: '01:16:56', x5: '00:46:09', x10: '00:23:05' }
	]
}, {
	option: 'Level 9', troops: [
		{ option: 'Mercenary', x1: '00:05:49', x2: '00:02:55', x3: '00:01:56', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Bowman', x1: '00:08:02', x2: '00:04:01', x3: '00:02:41', x5: '00:01:36', x10: '00:00:48' },
		{ option: 'Spotter', x1: '00:09:45', x2: '00:04:53', x3: '00:03:15', x5: '00:01:57', x10: '00:00:59' },
		{ option: 'Steppe Rider', x1: '00:17:13', x2: '00:08:37', x3: '00:05:44', x5: '00:03:27', x10: '00:01:43' },
		{ option: 'Marksman', x1: '00:17:48', x2: '00:08:54', x3: '00:05:56', x5: '00:03:34', x10: '00:01:47' },
		{ option: 'Marauder', x1: '00:21:27', x2: '00:10:44', x3: '00:07:09', x5: '00:04:17', x10: '00:02:09' },
		{ option: 'Ram', x1: '00:31:34', x2: '00:15:47', x3: '00:10:31', x5: '00:06:19', x10: '00:03:09' },
		{ option: 'Catapult', x1: '01:04:34', x2: '00:32:17', x3: '00:21:31', x5: '00:12:55', x10: '00:06:27' },
		{ option: 'Logades', x1: '10:50:43', x2: '05:25:22', x3: '03:36:54', x5: '02:10:09', x10: '01:05:04' },
		{ option: 'Settler', x1: '03:27:42', x2: '01:43:51', x3: '01:09:14', x5: '00:41:32', x10: '00:20:46' }
	]
}, {
	option: 'Level 10', troops: [
		{ option: 'Mercenary', x1: '00:05:14', x2: '00:02:37', x3: '00:01:45', x5: '00:01:03', x10: '00:00:31' },
		{ option: 'Bowman', x1: '00:07:14', x2: '00:03:37', x3: '00:02:25', x5: '00:01:27', x10: '00:00:43' },
		{ option: 'Spotter', x1: '00:08:47', x2: '00:04:24', x3: '00:02:56', x5: '00:01:45', x10: '00:00:53' },
		{ option: 'Steppe Rider', x1: '00:15:30', x2: '00:07:45', x3: '00:05:10', x5: '00:03:06', x10: '00:01:33' },
		{ option: 'Marksman', x1: '00:16:01', x2: '00:08:01', x3: '00:05:20', x5: '00:03:12', x10: '00:01:36' },
		{ option: 'Marauder', x1: '00:19:18', x2: '00:09:39', x3: '00:06:26', x5: '00:03:52', x10: '00:01:56' },
		{ option: 'Ram', x1: '00:28:25', x2: '00:14:13', x3: '00:09:28', x5: '00:05:41', x10: '00:02:51' },
		{ option: 'Catapult', x1: '00:58:07', x2: '00:29:04', x3: '00:19:22', x5: '00:11:37', x10: '00:05:49' },
		{ option: 'Logades', x1: '09:45:39', x2: '04:52:50', x3: '03:15:13', x5: '01:57:08', x10: '00:58:34' },
		{ option: 'Settler', x1: '03:06:56', x2: '01:33:28', x3: '01:02:19', x5: '00:37:23', x10: '00:18:42' }
	]
}, {
	option: 'Level 11', troops: [
		{ option: 'Mercenary', x1: '00:04:42', x2: '00:02:21', x3: '00:01:34', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Bowman', x1: '00:06:31', x2: '00:03:16', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
		{ option: 'Spotter', x1: '00:07:54', x2: '00:03:57', x3: '00:02:38', x5: '00:01:35', x10: '00:00:47' },
		{ option: 'Steppe Rider', x1: '00:13:57', x2: '00:06:59', x3: '00:04:39', x5: '00:02:47', x10: '00:01:24' },
		{ option: 'Marksman', x1: '00:14:25', x2: '00:07:13', x3: '00:04:48', x5: '00:02:53', x10: '00:01:27' },
		{ option: 'Marauder', x1: '00:17:23', x2: '00:08:42', x3: '00:05:48', x5: '00:03:29', x10: '00:01:44' },
		{ option: 'Ram', x1: '00:25:34', x2: '00:12:47', x3: '00:08:31', x5: '00:05:07', x10: '00:02:33' },
		{ option: 'Catapult', x1: '00:52:18', x2: '00:26:09', x3: '00:17:26', x5: '00:10:28', x10: '00:05:14' },
		{ option: 'Logades', x1: '08:47:05', x2: '04:23:33', x3: '02:55:42', x5: '01:45:25', x10: '00:52:43' },
		{ option: 'Settler', x1: '02:48:14', x2: '01:24:07', x3: '00:56:05', x5: '00:33:39', x10: '00:16:49' }
	]
}, {
	option: 'Level 12', troops: [
		{ option: 'Mercenary', x1: '00:04:14', x2: '00:02:07', x3: '00:01:25', x5: '00:00:51', x10: '00:00:25' },
		{ option: 'Bowman', x1: '00:05:51', x2: '00:02:56', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
		{ option: 'Spotter', x1: '00:07:07', x2: '00:03:34', x3: '00:02:22', x5: '00:01:25', x10: '00:00:43' },
		{ option: 'Steppe Rider', x1: '00:12:33', x2: '00:06:17', x3: '00:04:11', x5: '00:02:31', x10: '00:01:15' },
		{ option: 'Marksman', x1: '00:12:58', x2: '00:06:29', x3: '00:04:19', x5: '00:02:36', x10: '00:01:18' },
		{ option: 'Marauder', x1: '00:15:38', x2: '00:07:49', x3: '00:05:13', x5: '00:03:08', x10: '00:01:34' },
		{ option: 'Ram', x1: '00:23:01', x2: '00:11:31', x3: '00:07:40', x5: '00:04:36', x10: '00:02:18' },
		{ option: 'Catapult', x1: '00:47:04', x2: '00:23:32', x3: '00:15:41', x5: '00:09:25', x10: '00:04:42' },
		{ option: 'Logades', x1: '07:54:23', x2: '03:57:12', x3: '02:38:08', x5: '01:34:53', x10: '00:47:26' },
		{ option: 'Settler', x1: '02:31:25', x2: '01:15:43', x3: '00:50:28', x5: '00:30:17', x10: '00:15:09' }
	]
}, {
	option: 'Level 13', troops: [
		{ option: 'Mercenary', x1: '00:03:49', x2: '00:01:55', x3: '00:01:16', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Bowman', x1: '00:05:16', x2: '00:02:38', x3: '00:01:45', x5: '00:01:03', x10: '00:00:32' },
		{ option: 'Spotter', x1: '00:06:24', x2: '00:03:12', x3: '00:02:08', x5: '00:01:17', x10: '00:00:38' },
		{ option: 'Steppe Rider', x1: '00:11:18', x2: '00:05:39', x3: '00:03:46', x5: '00:02:16', x10: '00:01:08' },
		{ option: 'Marksman', x1: '00:11:40', x2: '00:05:50', x3: '00:03:53', x5: '00:02:20', x10: '00:01:10' },
		{ option: 'Marauder', x1: '00:14:04', x2: '00:07:02', x3: '00:04:41', x5: '00:02:49', x10: '00:01:24' },
		{ option: 'Ram', x1: '00:20:43', x2: '00:10:22', x3: '00:06:54', x5: '00:04:09', x10: '00:02:04' },
		{ option: 'Catapult', x1: '00:42:22', x2: '00:21:11', x3: '00:14:07', x5: '00:08:28', x10: '00:04:14' },
		{ option: 'Logades', x1: '07:06:56', x2: '03:33:28', x3: '02:22:19', x5: '01:25:23', x10: '00:42:42' },
		{ option: 'Settler', x1: '02:16:16', x2: '01:08:08', x3: '00:45:25', x5: '00:27:15', x10: '00:13:38' }
	]
}, {
	option: 'Level 14', troops: [
		{ option: 'Mercenary', x1: '00:03:26', x2: '00:01:43', x3: '00:01:09', x5: '00:00:41', x10: '00:00:21' },
		{ option: 'Bowman', x1: '00:04:45', x2: '00:02:23', x3: '00:01:35', x5: '00:00:57', x10: '00:00:29' },
		{ option: 'Spotter', x1: '00:05:46', x2: '00:02:53', x3: '00:01:55', x5: '00:01:09', x10: '00:00:35' },
		{ option: 'Steppe Rider', x1: '00:10:10', x2: '00:05:05', x3: '00:03:23', x5: '00:02:02', x10: '00:01:01' },
		{ option: 'Marksman', x1: '00:10:30', x2: '00:05:15', x3: '00:03:30', x5: '00:02:06', x10: '00:01:03' },
		{ option: 'Marauder', x1: '00:12:40', x2: '00:06:20', x3: '00:04:13', x5: '00:02:32', x10: '00:01:16' },
		{ option: 'Ram', x1: '00:18:38', x2: '00:09:19', x3: '00:06:13', x5: '00:03:44', x10: '00:01:52' },
		{ option: 'Catapult', x1: '00:38:08', x2: '00:19:04', x3: '00:12:43', x5: '00:07:38', x10: '00:03:49' },
		{ option: 'Logades', x1: '06:24:15', x2: '03:12:08', x3: '02:08:05', x5: '01:16:51', x10: '00:38:26' },
		{ option: 'Settler', x1: '02:02:39', x2: '01:01:20', x3: '00:40:53', x5: '00:24:32', x10: '00:12:16' }
	]
}, {
	option: 'Level 15', troops: [
		{ option: 'Mercenary', x1: '00:03:05', x2: '00:01:33', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Bowman', x1: '00:04:16', x2: '00:02:08', x3: '00:01:25', x5: '00:00:51', x10: '00:00:26' },
		{ option: 'Spotter', x1: '00:05:11', x2: '00:02:36', x3: '00:01:44', x5: '00:01:02', x10: '00:00:31' },
		{ option: 'Steppe Rider', x1: '00:09:09', x2: '00:04:35', x3: '00:03:03', x5: '00:01:50', x10: '00:00:55' },
		{ option: 'Marksman', x1: '00:09:27', x2: '00:04:44', x3: '00:03:09', x5: '00:01:53', x10: '00:00:57' },
		{ option: 'Marauder', x1: '00:11:24', x2: '00:05:42', x3: '00:03:48', x5: '00:02:17', x10: '00:01:08' },
		{ option: 'Ram', x1: '00:16:47', x2: '00:08:24', x3: '00:05:36', x5: '00:03:21', x10: '00:01:41' },
		{ option: 'Catapult', x1: '00:34:19', x2: '00:17:10', x3: '00:11:26', x5: '00:06:52', x10: '00:03:26' },
		{ option: 'Logades', x1: '05:45:49', x2: '02:52:55', x3: '01:55:16', x5: '01:09:10', x10: '00:34:35' },
		{ option: 'Settler', x1: '01:50:23', x2: '00:55:12', x3: '00:36:48', x5: '00:22:05', x10: '00:11:02' }
	]
}, {
	option: 'Level 16', troops: [
		{ option: 'Mercenary', x1: '00:02:47', x2: '00:01:24', x3: '00:00:56', x5: '00:00:33', x10: '00:00:17' },
		{ option: 'Bowman', x1: '00:03:51', x2: '00:01:56', x3: '00:01:17', x5: '00:00:46', x10: '00:00:23' },
		{ option: 'Spotter', x1: '00:04:40', x2: '00:02:20', x3: '00:01:33', x5: '00:00:56', x10: '00:00:28' },
		{ option: 'Steppe Rider', x1: '00:08:14', x2: '00:04:07', x3: '00:02:45', x5: '00:01:39', x10: '00:00:49' },
		{ option: 'Marksman', x1: '00:08:31', x2: '00:04:16', x3: '00:02:50', x5: '00:01:42', x10: '00:00:51' },
		{ option: 'Marauder', x1: '00:10:16', x2: '00:05:08', x3: '00:03:25', x5: '00:02:03', x10: '00:01:02' },
		{ option: 'Ram', x1: '00:15:06', x2: '00:07:33', x3: '00:05:02', x5: '00:03:01', x10: '00:01:31' },
		{ option: 'Catapult', x1: '00:30:53', x2: '00:15:27', x3: '00:10:18', x5: '00:06:11', x10: '00:03:05' },
		{ option: 'Logades', x1: '05:11:14', x2: '02:35:37', x3: '01:43:45', x5: '01:02:15', x10: '00:31:07' },
		{ option: 'Settler', x1: '01:39:21', x2: '00:49:41', x3: '00:33:07', x5: '00:19:52', x10: '00:09:56' }
	]
}, {
	option: 'Level 17', troops: [
		{ option: 'Mercenary', x1: '00:02:30', x2: '00:01:15', x3: '00:00:50', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Bowman', x1: '00:03:28', x2: '00:01:44', x3: '00:01:09', x5: '00:00:42', x10: '00:00:21' },
		{ option: 'Spotter', x1: '00:04:12', x2: '00:02:06', x3: '00:01:24', x5: '00:00:50', x10: '00:00:25' },
		{ option: 'Steppe Rider', x1: '00:07:25', x2: '00:03:43', x3: '00:02:28', x5: '00:01:29', x10: '00:00:45' },
		{ option: 'Marksman', x1: '00:07:40', x2: '00:03:50', x3: '00:02:33', x5: '00:01:32', x10: '00:00:46' },
		{ option: 'Marauder', x1: '00:09:14', x2: '00:04:37', x3: '00:03:05', x5: '00:01:51', x10: '00:00:55' },
		{ option: 'Ram', x1: '00:13:35', x2: '00:06:48', x3: '00:04:32', x5: '00:02:43', x10: '00:01:22' },
		{ option: 'Catapult', x1: '00:27:48', x2: '00:13:54', x3: '00:09:16', x5: '00:05:34', x10: '00:02:47' },
		{ option: 'Logades', x1: '04:40:07', x2: '02:20:04', x3: '01:33:22', x5: '00:56:01', x10: '00:28:01' },
		{ option: 'Settler', x1: '01:29:24', x2: '00:44:42', x3: '00:29:48', x5: '00:17:53', x10: '00:08:56' }
	]
}, {
	option: 'Level 18', troops: [
		{ option: 'Mercenary', x1: '00:02:15', x2: '00:01:08', x3: '00:00:45', x5: '00:00:27', x10: '00:00:14' },
		{ option: 'Bowman', x1: '00:03:07', x2: '00:01:34', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
		{ option: 'Spotter', x1: '00:03:47', x2: '00:01:54', x3: '00:01:16', x5: '00:00:45', x10: '00:00:23' },
		{ option: 'Steppe Rider', x1: '00:06:40', x2: '00:03:20', x3: '00:02:13', x5: '00:01:20', x10: '00:00:40' },
		{ option: 'Marksman', x1: '00:06:54', x2: '00:03:27', x3: '00:02:18', x5: '00:01:23', x10: '00:00:41' },
		{ option: 'Marauder', x1: '00:08:19', x2: '00:04:10', x3: '00:02:46', x5: '00:01:40', x10: '00:00:50' },
		{ option: 'Ram', x1: '00:12:14', x2: '00:06:07', x3: '00:04:05', x5: '00:02:27', x10: '00:01:13' },
		{ option: 'Catapult', x1: '00:25:01', x2: '00:12:31', x3: '00:08:20', x5: '00:05:00', x10: '00:02:30' },
		{ option: 'Logades', x1: '04:12:06', x2: '02:06:03', x3: '01:24:02', x5: '00:50:25', x10: '00:25:13' },
		{ option: 'Settler', x1: '01:20:28', x2: '00:40:14', x3: '00:26:49', x5: '00:16:06', x10: '00:08:03' }
	]
}, {
	option: 'Level 19', troops: [
		{ option: 'Mercenary', x1: '00:02:02', x2: '00:01:01', x3: '00:00:41', x5: '00:00:24', x10: '00:00:12' },
		{ option: 'Bowman', x1: '00:02:48', x2: '00:01:24', x3: '00:00:56', x5: '00:00:34', x10: '00:00:17' },
		{ option: 'Spotter', x1: '00:03:24', x2: '00:01:42', x3: '00:01:08', x5: '00:00:41', x10: '00:00:20' },
		{ option: 'Steppe Rider', x1: '00:06:00', x2: '00:03:00', x3: '00:02:00', x5: '00:01:12', x10: '00:00:36' },
		{ option: 'Marksman', x1: '00:06:12', x2: '00:03:06', x3: '00:02:04', x5: '00:01:14', x10: '00:00:37' },
		{ option: 'Marauder', x1: '00:07:29', x2: '00:03:45', x3: '00:02:30', x5: '00:01:30', x10: '00:00:45' },
		{ option: 'Ram', x1: '00:11:00', x2: '00:05:30', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
		{ option: 'Catapult', x1: '00:22:31', x2: '00:11:16', x3: '00:07:30', x5: '00:04:30', x10: '00:02:15' },
		{ option: 'Logades', x1: '03:46:54', x2: '01:53:27', x3: '01:15:38', x5: '00:45:23', x10: '00:22:41' },
		{ option: 'Settler', x1: '01:12:25', x2: '00:36:13', x3: '00:24:08', x5: '00:14:29', x10: '00:07:15' }
	]
}, {
	option: 'Level 20', troops: [
		{ option: 'Mercenary', x1: '00:01:49', x2: '00:00:55', x3: '00:00:36', x5: '00:00:22', x10: '00:00:11' },
		{ option: 'Bowman', x1: '00:02:31', x2: '00:01:16', x3: '00:00:50', x5: '00:00:30', x10: '00:00:15' },
		{ option: 'Spotter', x1: '00:03:04', x2: '00:01:32', x3: '00:01:01', x5: '00:00:37', x10: '00:00:18' },
		{ option: 'Steppe Rider', x1: '00:05:24', x2: '00:02:42', x3: '00:01:48', x5: '00:01:05', x10: '00:00:32' },
		{ option: 'Marksman', x1: '00:05:35', x2: '00:02:48', x3: '00:01:52', x5: '00:01:07', x10: '00:00:34' },
		{ option: 'Marauder', x1: '00:06:44', x2: '00:03:22', x3: '00:02:15', x5: '00:01:21', x10: '00:00:40' },
		{ option: 'Ram', x1: '00:09:54', x2: '00:04:57', x3: '00:03:18', x5: '00:01:59', x10: '00:00:59' },
		{ option: 'Catapult', x1: '00:20:16', x2: '00:10:08', x3: '00:06:45', x5: '00:04:03', x10: '00:02:02' },
		{ option: 'Logades', x1: '03:24:12', x2: '01:42:06', x3: '01:08:04', x5: '00:40:50', x10: '00:20:25' },
		{ option: 'Settler', x1: '01:05:11', x2: '00:32:36', x3: '00:21:44', x5: '00:13:02', x10: '00:06:31' }
	]
}
];

export const SPARTANS_TROOPS_TRAIN_LEVELS = [
	{
		option: 'Level 1', troops: [
			{ option: 'Hoplite', x1: '00:28:20', x2: '00:14:10', x3: '00:09:27', x5: '00:05:40', x10: '00:02:50' },
			{ option: 'Sentinel', x1: '00:20:32', x2: '00:10:16', x3: '00:06:51', x5: '00:04:06', x10: '00:02:03' },
			{ option: 'Shieldsman', x1: '00:32:16', x2: '00:16:08', x3: '00:10:45', x5: '00:06:27', x10: '00:03:14' },
			{ option: 'Twinsteel Therion', x1: '00:35:12', x2: '00:17:36', x3: '00:11:44', x5: '00:07:02', x10: '00:03:31' },
			{ option: 'Elpida Rider', x1: '00:46:56', x2: '00:23:28', x3: '00:15:39', x5: '00:09:23', x10: '00:04:42' },
			{ option: 'Corinthian Crusher', x1: '00:57:12', x2: '00:28:36', x3: '00:19:04', x5: '00:11:26', x10: '00:05:43' },
			{ option: 'Ram', x1: '01:17:00', x2: '00:38:30', x3: '00:25:40', x5: '00:15:24', x10: '00:07:42' },
			{ option: 'Ballista', x1: '02:45:00', x2: '01:22:30', x3: '00:55:00', x5: '00:33:00', x10: '00:16:30' },
			{ option: 'Ephor', x1: '21:32:30', x2: '10:46:15', x3: '07:10:50', x5: '04:18:30', x10: '02:09:15' },
			{ option: 'Settler', x1: '09:28:20', x2: '04:44:10', x3: '03:09:27', x5: '01:53:40', x10: '00:56:50' }
		]
	}, {
		option: 'Level 2', troops: [
			{ option: 'Hoplite', x1: '00:25:30', x2: '00:12:45', x3: '00:08:30', x5: '00:05:06', x10: '00:02:33' },
			{ option: 'Sentinel', x1: '00:18:29', x2: '00:09:15', x3: '00:06:10', x5: '00:03:42', x10: '00:01:51' },
			{ option: 'Shieldsman', x1: '00:29:02', x2: '00:14:31', x3: '00:09:41', x5: '00:05:48', x10: '00:02:54' },
			{ option: 'Twinsteel Therion', x1: '00:31:41', x2: '00:15:51', x3: '00:10:34', x5: '00:06:20', x10: '00:03:10' },
			{ option: 'Elpida Rider', x1: '00:42:14', x2: '00:21:07', x3: '00:14:05', x5: '00:08:27', x10: '00:04:13' },
			{ option: 'Corinthian Crusher', x1: '00:51:29', x2: '00:25:45', x3: '00:17:10', x5: '00:10:18', x10: '00:05:09' },
			{ option: 'Ram', x1: '01:09:18', x2: '00:34:39', x3: '00:23:06', x5: '00:13:52', x10: '00:06:56' },
			{ option: 'Ballista', x1: '02:28:30', x2: '01:14:15', x3: '00:49:30', x5: '00:29:42', x10: '00:14:51' },
			{ option: 'Ephor', x1: '19:23:15', x2: '09:41:38', x3: '06:27:45', x5: '03:52:39', x10: '01:56:20' },
			{ option: 'Settler', x1: '08:31:30', x2: '04:15:45', x3: '02:50:30', x5: '01:42:18', x10: '00:51:09' }
		]
	}, {
		option: 'Level 3', troops: [
			{ option: 'Hoplite', x1: '00:22:57', x2: '00:11:29', x3: '00:07:39', x5: '00:04:35', x10: '00:02:18' },
			{ option: 'Sentinel', x1: '00:16:38', x2: '00:08:19', x3: '00:05:33', x5: '00:03:20', x10: '00:01:40' },
			{ option: 'Shieldsman', x1: '00:26:08', x2: '00:13:04', x3: '00:08:43', x5: '00:05:14', x10: '00:02:37' },
			{ option: 'Twinsteel Therion', x1: '00:28:31', x2: '00:14:16', x3: '00:09:30', x5: '00:05:42', x10: '00:02:51' },
			{ option: 'Elpida Rider', x1: '00:38:01', x2: '00:19:01', x3: '00:12:40', x5: '00:07:36', x10: '00:03:48' },
			{ option: 'Corinthian Crusher', x1: '00:46:20', x2: '00:23:10', x3: '00:15:27', x5: '00:09:16', x10: '00:04:38' },
			{ option: 'Ram', x1: '01:02:22', x2: '00:31:11', x3: '00:20:47', x5: '00:12:28', x10: '00:06:14' },
			{ option: 'Ballista', x1: '02:13:39', x2: '01:06:50', x3: '00:44:33', x5: '00:26:44', x10: '00:13:22' },
			{ option: 'Ephor', x1: '17:26:56', x2: '08:43:28', x3: '05:48:59', x5: '03:29:23', x10: '01:44:42' },
			{ option: 'Settler', x1: '07:40:21', x2: '03:50:11', x3: '02:33:27', x5: '01:32:04', x10: '00:46:02' }
		]
	}, {
		option: 'Level 4', troops: [
			{ option: 'Hoplite', x1: '00:20:39', x2: '00:10:20', x3: '00:06:53', x5: '00:04:08', x10: '00:02:04' },
			{ option: 'Sentinel', x1: '00:14:58', x2: '00:07:29', x3: '00:04:59', x5: '00:02:60', x10: '00:01:30' },
			{ option: 'Shieldsman', x1: '00:23:31', x2: '00:11:46', x3: '00:07:50', x5: '00:04:42', x10: '00:02:21' },
			{ option: 'Twinsteel Therion', x1: '00:25:40', x2: '00:12:50', x3: '00:08:33', x5: '00:05:08', x10: '00:02:34' },
			{ option: 'Elpida Rider', x1: '00:34:13', x2: '00:17:07', x3: '00:11:24', x5: '00:06:51', x10: '00:03:25' },
			{ option: 'Corinthian Crusher', x1: '00:41:42', x2: '00:20:51', x3: '00:13:54', x5: '00:08:20', x10: '00:04:10' },
			{ option: 'Ram', x1: '00:56:08', x2: '00:28:04', x3: '00:18:43', x5: '00:11:14', x10: '00:05:37' },
			{ option: 'Ballista', x1: '02:00:17', x2: '01:00:09', x3: '00:40:06', x5: '00:24:03', x10: '00:12:02' },
			{ option: 'Ephor', x1: '15:42:14', x2: '07:51:07', x3: '05:14:05', x5: '03:08:27', x10: '01:34:13' },
			{ option: 'Settler', x1: '06:54:19', x2: '03:27:10', x3: '02:18:06', x5: '01:22:52', x10: '00:41:26' }
		]
	}, {
		option: 'Level 5', troops: [
			{ option: 'Hoplite', x1: '00:18:35', x2: '00:09:18', x3: '00:06:12', x5: '00:03:43', x10: '00:01:52' },
			{ option: 'Sentinel', x1: '00:13:28', x2: '00:06:44', x3: '00:04:29', x5: '00:02:42', x10: '00:01:21' },
			{ option: 'Shieldsman', x1: '00:21:10', x2: '00:10:35', x3: '00:07:03', x5: '00:04:14', x10: '00:02:07' },
			{ option: 'Twinsteel Therion', x1: '00:23:06', x2: '00:11:33', x3: '00:07:42', x5: '00:04:37', x10: '00:02:19' },
			{ option: 'Elpida Rider', x1: '00:30:48', x2: '00:15:24', x3: '00:10:16', x5: '00:06:10', x10: '00:03:05' },
			{ option: 'Corinthian Crusher', x1: '00:37:32', x2: '00:18:46', x3: '00:12:31', x5: '00:07:30', x10: '00:03:45' },
			{ option: 'Ram', x1: '00:50:31', x2: '00:25:16', x3: '00:16:50', x5: '00:10:06', x10: '00:05:03' },
			{ option: 'Ballista', x1: '01:48:15', x2: '00:54:08', x3: '00:36:05', x5: '00:21:39', x10: '00:10:50' },
			{ option: 'Ephor', x1: '14:08:01', x2: '07:04:01', x3: '04:42:40', x5: '02:49:36', x10: '01:24:48' },
			{ option: 'Settler', x1: '06:12:53', x2: '03:06:27', x3: '02:04:18', x5: '01:14:35', x10: '00:37:17' }
		]
	}, {
		option: 'Level 6', troops: [
			{ option: 'Hoplite', x1: '00:16:44', x2: '00:08:22', x3: '00:05:35', x5: '00:03:21', x10: '00:01:40' },
			{ option: 'Sentinel', x1: '00:12:07', x2: '00:06:04', x3: '00:04:02', x5: '00:02:25', x10: '00:01:13' },
			{ option: 'Shieldsman', x1: '00:19:03', x2: '00:09:32', x3: '00:06:21', x5: '00:03:49', x10: '00:01:54' },
			{ option: 'Twinsteel Therion', x1: '00:20:47', x2: '00:10:24', x3: '00:06:56', x5: '00:04:09', x10: '00:02:05' },
			{ option: 'Elpida Rider', x1: '00:27:43', x2: '00:13:52', x3: '00:09:14', x5: '00:05:33', x10: '00:02:46' },
			{ option: 'Corinthian Crusher', x1: '00:33:47', x2: '00:16:54', x3: '00:11:16', x5: '00:06:45', x10: '00:03:23' },
			{ option: 'Ram', x1: '00:45:28', x2: '00:22:44', x3: '00:15:09', x5: '00:09:06', x10: '00:04:33' },
			{ option: 'Ballista', x1: '01:37:26', x2: '00:48:43', x3: '00:32:29', x5: '00:19:29', x10: '00:09:45' },
			{ option: 'Ephor', x1: '12:43:12', x2: '06:21:36', x3: '04:14:24', x5: '02:32:38', x10: '01:16:19' },
			{ option: 'Settler', x1: '05:35:36', x2: '02:47:48', x3: '01:51:52', x5: '01:07:07', x10: '00:33:34' }
		]
	}, {
		option: 'Level 7', troops: [
			{ option: 'Hoplite', x1: '00:15:03', x2: '00:07:32', x3: '00:05:01', x5: '00:03:01', x10: '00:01:30' },
			{ option: 'Sentinel', x1: '00:10:55', x2: '00:05:28', x3: '00:03:38', x5: '00:02:11', x10: '00:01:06' },
			{ option: 'Shieldsman', x1: '00:17:09', x2: '00:08:35', x3: '00:05:43', x5: '00:03:26', x10: '00:01:43' },
			{ option: 'Twinsteel Therion', x1: '00:18:42', x2: '00:09:21', x3: '00:06:14', x5: '00:03:44', x10: '00:01:52' },
			{ option: 'Elpida Rider', x1: '00:24:57', x2: '00:12:29', x3: '00:08:19', x5: '00:04:59', x10: '00:02:30' },
			{ option: 'Corinthian Crusher', x1: '00:30:24', x2: '00:15:12', x3: '00:10:08', x5: '00:06:05', x10: '00:03:02' },
			{ option: 'Ram', x1: '00:40:55', x2: '00:20:28', x3: '00:13:38', x5: '00:08:11', x10: '00:04:06' },
			{ option: 'Ballista', x1: '01:27:41', x2: '00:43:51', x3: '00:29:14', x5: '00:17:32', x10: '00:08:46' },
			{ option: 'Ephor', x1: '11:26:53', x2: '05:43:27', x3: '03:48:58', x5: '02:17:23', x10: '01:08:41' },
			{ option: 'Settler', x1: '05:02:02', x2: '02:31:01', x3: '01:40:41', x5: '01:00:24', x10: '00:30:12' }
		]
	}, {
		option: 'Level 8', troops: [
			{ option: 'Hoplite', x1: '00:13:33', x2: '00:06:47', x3: '00:04:31', x5: '00:02:43', x10: '00:01:21' },
			{ option: 'Sentinel', x1: '00:09:49', x2: '00:04:55', x3: '00:03:16', x5: '00:01:58', x10: '00:00:59' },
			{ option: 'Shieldsman', x1: '00:15:26', x2: '00:07:43', x3: '00:05:09', x5: '00:03:05', x10: '00:01:33' },
			{ option: 'Twinsteel Therion', x1: '00:16:50', x2: '00:08:25', x3: '00:05:37', x5: '00:03:22', x10: '00:01:41' },
			{ option: 'Elpida Rider', x1: '00:22:27', x2: '00:11:14', x3: '00:07:29', x5: '00:04:29', x10: '00:02:15' },
			{ option: 'Corinthian Crusher', x1: '00:27:22', x2: '00:13:41', x3: '00:09:07', x5: '00:05:28', x10: '00:02:44' },
			{ option: 'Ram', x1: '00:36:50', x2: '00:18:25', x3: '00:12:17', x5: '00:07:22', x10: '00:03:41' },
			{ option: 'Ballista', x1: '01:18:55', x2: '00:39:28', x3: '00:26:18', x5: '00:15:47', x10: '00:07:54' },
			{ option: 'Ephor', x1: '10:18:12', x2: '05:09:06', x3: '03:26:04', x5: '02:03:38', x10: '01:01:49' },
			{ option: 'Settler', x1: '04:31:50', x2: '02:15:55', x3: '01:30:37', x5: '00:54:22', x10: '00:27:11' }
		]
	}, {
		option: 'Level 9', troops: [
			{ option: 'Hoplite', x1: '00:12:12', x2: '00:06:06', x3: '00:04:04', x5: '00:02:26', x10: '00:01:13' },
			{ option: 'Sentinel', x1: '00:08:50', x2: '00:04:25', x3: '00:02:57', x5: '00:01:46', x10: '00:00:53' },
			{ option: 'Shieldsman', x1: '00:13:53', x2: '00:06:57', x3: '00:04:38', x5: '00:02:47', x10: '00:01:23' },
			{ option: 'Twinsteel Therion', x1: '00:15:09', x2: '00:07:35', x3: '00:05:03', x5: '00:03:02', x10: '00:01:31' },
			{ option: 'Elpida Rider', x1: '00:20:12', x2: '00:10:06', x3: '00:06:44', x5: '00:04:02', x10: '00:02:01' },
			{ option: 'Corinthian Crusher', x1: '00:24:37', x2: '00:12:19', x3: '00:08:12', x5: '00:04:55', x10: '00:02:28' },
			{ option: 'Ram', x1: '00:33:09', x2: '00:16:35', x3: '00:11:03', x5: '00:06:38', x10: '00:03:19' },
			{ option: 'Ballista', x1: '01:11:02', x2: '00:35:31', x3: '00:23:41', x5: '00:14:12', x10: '00:07:06' },
			{ option: 'Ephor', x1: '09:16:23', x2: '04:38:12', x3: '03:05:28', x5: '01:51:17', x10: '00:55:38' },
			{ option: 'Settler', x1: '04:04:39', x2: '02:02:20', x3: '01:21:33', x5: '00:48:56', x10: '00:24:28' }
		]
	}, {
		option: 'Level 10', troops: [
			{ option: 'Hoplite', x1: '00:10:59', x2: '00:05:30', x3: '00:03:40', x5: '00:02:12', x10: '00:01:06' },
			{ option: 'Sentinel', x1: '00:07:57', x2: '00:03:59', x3: '00:02:39', x5: '00:01:35', x10: '00:00:48' },
			{ option: 'Shieldsman', x1: '00:12:30', x2: '00:06:15', x3: '00:04:10', x5: '00:02:30', x10: '00:01:15' },
			{ option: 'Twinsteel Therion', x1: '00:13:38', x2: '00:06:49', x3: '00:04:33', x5: '00:02:44', x10: '00:01:22' },
			{ option: 'Elpida Rider', x1: '00:18:11', x2: '00:09:06', x3: '00:06:04', x5: '00:03:38', x10: '00:01:49' },
			{ option: 'Corinthian Crusher', x1: '00:22:10', x2: '00:11:05', x3: '00:07:23', x5: '00:04:26', x10: '00:02:13' },
			{ option: 'Ram', x1: '00:29:50', x2: '00:14:55', x3: '00:09:57', x5: '00:05:58', x10: '00:02:59' },
			{ option: 'Ballista', x1: '01:03:55', x2: '00:31:58', x3: '00:21:18', x5: '00:12:47', x10: '00:06:24' },
			{ option: 'Ephor', x1: '08:20:44', x2: '04:10:22', x3: '02:46:55', x5: '01:40:09', x10: '00:50:04' },
			{ option: 'Settler', x1: '03:40:11', x2: '01:50:06', x3: '01:13:24', x5: '00:44:02', x10: '00:22:01' }
		]
	}, {
		option: 'Level 11', troops: [
			{ option: 'Hoplite', x1: '00:09:53', x2: '00:04:57', x3: '00:03:18', x5: '00:01:59', x10: '00:00:59' },
			{ option: 'Sentinel', x1: '00:07:10', x2: '00:03:35', x3: '00:02:23', x5: '00:01:26', x10: '00:00:43' },
			{ option: 'Shieldsman', x1: '00:11:15', x2: '00:05:38', x3: '00:03:45', x5: '00:02:15', x10: '00:01:08' },
			{ option: 'Twinsteel Therion', x1: '00:12:16', x2: '00:06:08', x3: '00:04:05', x5: '00:02:27', x10: '00:01:14' },
			{ option: 'Elpida Rider', x1: '00:16:22', x2: '00:08:11', x3: '00:05:27', x5: '00:03:16', x10: '00:01:38' },
			{ option: 'Corinthian Crusher', x1: '00:19:57', x2: '00:09:59', x3: '00:06:39', x5: '00:03:59', x10: '00:01:60' },
			{ option: 'Ram', x1: '00:26:51', x2: '00:13:26', x3: '00:08:57', x5: '00:05:22', x10: '00:02:41' },
			{ option: 'Ballista', x1: '00:57:32', x2: '00:28:46', x3: '00:19:11', x5: '00:11:30', x10: '00:05:45' },
			{ option: 'Ephor', x1: '07:30:40', x2: '03:45:20', x3: '02:30:13', x5: '01:30:08', x10: '00:45:04' },
			{ option: 'Settler', x1: '03:18:10', x2: '01:39:05', x3: '01:06:03', x5: '00:39:38', x10: '00:19:49' }
		]
	}, {
		option: 'Level 12', troops: [
			{ option: 'Hoplite', x1: '00:08:53', x2: '00:04:27', x3: '00:02:58', x5: '00:01:47', x10: '00:00:53' },
			{ option: 'Sentinel', x1: '00:06:27', x2: '00:03:14', x3: '00:02:09', x5: '00:01:17', x10: '00:00:39' },
			{ option: 'Shieldsman', x1: '00:10:08', x2: '00:05:04', x3: '00:03:23', x5: '00:02:02', x10: '00:01:01' },
			{ option: 'Twinsteel Therion', x1: '00:11:03', x2: '00:05:32', x3: '00:03:41', x5: '00:02:13', x10: '00:01:06' },
			{ option: 'Elpida Rider', x1: '00:14:44', x2: '00:07:22', x3: '00:04:55', x5: '00:02:57', x10: '00:01:28' },
			{ option: 'Corinthian Crusher', x1: '00:17:57', x2: '00:08:59', x3: '00:05:59', x5: '00:03:35', x10: '00:01:48' },
			{ option: 'Ram', x1: '00:24:10', x2: '00:12:05', x3: '00:08:03', x5: '00:04:50', x10: '00:02:25' },
			{ option: 'Ballista', x1: '00:51:47', x2: '00:25:54', x3: '00:17:16', x5: '00:10:21', x10: '00:05:11' },
			{ option: 'Ephor', x1: '06:45:36', x2: '03:22:48', x3: '02:15:12', x5: '01:21:07', x10: '00:40:34' },
			{ option: 'Settler', x1: '02:58:21', x2: '01:29:11', x3: '00:59:27', x5: '00:35:40', x10: '00:17:50' }
		]
	}, {
		option: 'Level 13', troops: [
			{ option: 'Hoplite', x1: '00:08:00', x2: '00:04:00', x3: '00:02:40', x5: '00:01:36', x10: '00:00:48' },
			{ option: 'Sentinel', x1: '00:05:48', x2: '00:02:54', x3: '00:01:56', x5: '00:01:10', x10: '00:00:35' },
			{ option: 'Shieldsman', x1: '00:09:07', x2: '00:04:34', x3: '00:03:02', x5: '00:01:49', x10: '00:00:55' },
			{ option: 'Twinsteel Therion', x1: '00:09:56', x2: '00:04:58', x3: '00:03:19', x5: '00:01:59', x10: '00:00:60' },
			{ option: 'Elpida Rider', x1: '00:13:15', x2: '00:06:38', x3: '00:04:25', x5: '00:02:39', x10: '00:01:20' },
			{ option: 'Corinthian Crusher', x1: '00:16:09', x2: '00:08:05', x3: '00:05:23', x5: '00:03:14', x10: '00:01:37' },
			{ option: 'Ram', x1: '00:21:45', x2: '00:10:53', x3: '00:07:15', x5: '00:04:21', x10: '00:02:11' },
			{ option: 'Ballista', x1: '00:46:36', x2: '00:23:18', x3: '00:15:32', x5: '00:09:19', x10: '00:04:40' },
			{ option: 'Ephor', x1: '06:05:02', x2: '03:02:31', x3: '02:01:41', x5: '01:13:00', x10: '00:36:30' },
			{ option: 'Settler', x1: '02:40:31', x2: '01:20:16', x3: '00:53:30', x5: '00:32:06', x10: '00:16:03' }
		]
	}, {
		option: 'Level 14', troops: [
			{ option: 'Hoplite', x1: '00:07:12', x2: '00:03:36', x3: '00:02:24', x5: '00:01:26', x10: '00:00:43' },
			{ option: 'Sentinel', x1: '00:05:13', x2: '00:02:37', x3: '00:01:44', x5: '00:01:03', x10: '00:00:31' },
			{ option: 'Shieldsman', x1: '00:08:12', x2: '00:04:06', x3: '00:02:44', x5: '00:01:38', x10: '00:00:49' },
			{ option: 'Twinsteel Therion', x1: '00:08:57', x2: '00:04:29', x3: '00:02:59', x5: '00:01:47', x10: '00:00:54' },
			{ option: 'Elpida Rider', x1: '00:11:56', x2: '00:05:58', x3: '00:03:59', x5: '00:02:23', x10: '00:01:12' },
			{ option: 'Corinthian Crusher', x1: '00:14:32', x2: '00:07:16', x3: '00:04:51', x5: '00:02:54', x10: '00:01:27' },
			{ option: 'Ram', x1: '00:19:34', x2: '00:09:47', x3: '00:06:31', x5: '00:03:55', x10: '00:01:57' },
			{ option: 'Ballista', x1: '00:41:56', x2: '00:20:58', x3: '00:13:59', x5: '00:08:23', x10: '00:04:12' },
			{ option: 'Ephor', x1: '05:28:32', x2: '02:44:16', x3: '01:49:31', x5: '01:05:42', x10: '00:32:51' },
			{ option: 'Settler', x1: '02:24:28', x2: '01:12:14', x3: '00:48:09', x5: '00:28:54', x10: '00:14:27' }
		]
	}, {
		option: 'Level 15', troops: [
			{ option: 'Hoplite', x1: '00:06:29', x2: '00:03:15', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
			{ option: 'Sentinel', x1: '00:04:42', x2: '00:02:21', x3: '00:01:34', x5: '00:00:56', x10: '00:00:28' },
			{ option: 'Shieldsman', x1: '00:07:23', x2: '00:03:42', x3: '00:02:28', x5: '00:01:29', x10: '00:00:44' },
			{ option: 'Twinsteel Therion', x1: '00:08:03', x2: '00:04:02', x3: '00:02:41', x5: '00:01:37', x10: '00:00:48' },
			{ option: 'Elpida Rider', x1: '00:10:44', x2: '00:05:22', x3: '00:03:35', x5: '00:02:09', x10: '00:01:04' },
			{ option: 'Corinthian Crusher', x1: '00:13:05', x2: '00:06:33', x3: '00:04:22', x5: '00:02:37', x10: '00:01:19' },
			{ option: 'Ram', x1: '00:17:37', x2: '00:08:49', x3: '00:05:52', x5: '00:03:31', x10: '00:01:46' },
			{ option: 'Ballista', x1: '00:37:45', x2: '00:18:53', x3: '00:12:35', x5: '00:07:33', x10: '00:03:47' },
			{ option: 'Ephor', x1: '04:55:41', x2: '02:27:51', x3: '01:38:34', x5: '00:59:08', x10: '00:29:34' },
			{ option: 'Settler', x1: '02:10:01', x2: '01:05:01', x3: '00:43:20', x5: '00:26:00', x10: '00:13:00' }
		]
	}, {
		option: 'Level 16', troops: [
			{ option: 'Hoplite', x1: '00:05:50', x2: '00:02:55', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
			{ option: 'Sentinel', x1: '00:04:14', x2: '00:02:07', x3: '00:01:25', x5: '00:00:51', x10: '00:00:25' },
			{ option: 'Shieldsman', x1: '00:06:39', x2: '00:03:20', x3: '00:02:13', x5: '00:01:20', x10: '00:00:40' },
			{ option: 'Twinsteel Therion', x1: '00:07:15', x2: '00:03:38', x3: '00:02:25', x5: '00:01:27', x10: '00:00:44' },
			{ option: 'Elpida Rider', x1: '00:09:40', x2: '00:04:50', x3: '00:03:13', x5: '00:01:56', x10: '00:00:58' },
			{ option: 'Corinthian Crusher', x1: '00:11:47', x2: '00:05:54', x3: '00:03:56', x5: '00:02:21', x10: '00:01:11' },
			{ option: 'Ram', x1: '00:15:51', x2: '00:07:56', x3: '00:05:17', x5: '00:03:10', x10: '00:01:35' },
			{ option: 'Ballista', x1: '00:33:58', x2: '00:16:59', x3: '00:11:19', x5: '00:06:48', x10: '00:03:24' },
			{ option: 'Ephor', x1: '04:26:07', x2: '02:13:04', x3: '01:28:42', x5: '00:53:13', x10: '00:26:37' },
			{ option: 'Settler', x1: '01:57:01', x2: '00:58:31', x3: '00:39:00', x5: '00:23:24', x10: '00:11:42' }
		]
	}, {
		option: 'Level 17', troops: [
			{ option: 'Hoplite', x1: '00:05:15', x2: '00:02:38', x3: '00:01:45', x5: '00:01:03', x10: '00:00:32' },
			{ option: 'Sentinel', x1: '00:03:48', x2: '00:01:54', x3: '00:01:16', x5: '00:00:46', x10: '00:00:23' },
			{ option: 'Shieldsman', x1: '00:05:59', x2: '00:02:60', x3: '00:01:60', x5: '00:01:12', x10: '00:00:36' },
			{ option: 'Twinsteel Therion', x1: '00:06:31', x2: '00:03:16', x3: '00:02:10', x5: '00:01:18', x10: '00:00:39' },
			{ option: 'Elpida Rider', x1: '00:08:42', x2: '00:04:21', x3: '00:02:54', x5: '00:01:44', x10: '00:00:52' },
			{ option: 'Corinthian Crusher', x1: '00:10:36', x2: '00:05:18', x3: '00:03:32', x5: '00:02:07', x10: '00:01:04' },
			{ option: 'Ram', x1: '00:14:16', x2: '00:07:08', x3: '00:04:45', x5: '00:02:51', x10: '00:01:26' },
			{ option: 'Ballista', x1: '00:30:34', x2: '00:15:17', x3: '00:10:11', x5: '00:06:07', x10: '00:03:03' },
			{ option: 'Ephor', x1: '03:59:30', x2: '01:59:45', x3: '01:19:50', x5: '00:47:54', x10: '00:23:57' },
			{ option: 'Settler', x1: '01:45:19', x2: '00:52:40', x3: '00:35:06', x5: '00:21:04', x10: '00:10:32' }
		]
	}, {
		option: 'Level 18', troops: [
			{ option: 'Hoplite', x1: '00:04:44', x2: '00:02:22', x3: '00:01:35', x5: '00:00:57', x10: '00:00:28' },
			{ option: 'Sentinel', x1: '00:03:25', x2: '00:01:43', x3: '00:01:08', x5: '00:00:41', x10: '00:00:21' },
			{ option: 'Shieldsman', x1: '00:05:23', x2: '00:02:42', x3: '00:01:48', x5: '00:01:05', x10: '00:00:32' },
			{ option: 'Twinsteel Therion', x1: '00:05:52', x2: '00:02:56', x3: '00:01:57', x5: '00:01:10', x10: '00:00:35' },
			{ option: 'Elpida Rider', x1: '00:07:50', x2: '00:03:55', x3: '00:02:37', x5: '00:01:34', x10: '00:00:47' },
			{ option: 'Corinthian Crusher', x1: '00:09:32', x2: '00:04:46', x3: '00:03:11', x5: '00:01:54', x10: '00:00:57' },
			{ option: 'Ram', x1: '00:12:50', x2: '00:06:25', x3: '00:04:17', x5: '00:02:34', x10: '00:01:17' },
			{ option: 'Ballista', x1: '00:27:31', x2: '00:13:46', x3: '00:09:10', x5: '00:05:30', x10: '00:02:45' },
			{ option: 'Ephor', x1: '03:35:33', x2: '01:47:47', x3: '01:11:51', x5: '00:43:07', x10: '00:21:33' },
			{ option: 'Settler', x1: '01:34:47', x2: '00:47:24', x3: '00:31:36', x5: '00:18:57', x10: '00:09:29' }
		]
	}, {
		option: 'Level 19', troops: [
			{ option: 'Hoplite', x1: '00:04:15', x2: '00:02:08', x3: '00:01:25', x5: '00:00:51', x10: '00:00:26' },
			{ option: 'Sentinel', x1: '00:03:05', x2: '00:01:33', x3: '00:01:02', x5: '00:00:37', x10: '00:00:19' },
			{ option: 'Shieldsman', x1: '00:04:51', x2: '00:02:26', x3: '00:01:37', x5: '00:00:58', x10: '00:00:29' },
			{ option: 'Twinsteel Therion', x1: '00:05:17', x2: '00:02:39', x3: '00:01:46', x5: '00:01:03', x10: '00:00:32' },
			{ option: 'Elpida Rider', x1: '00:07:03', x2: '00:03:32', x3: '00:02:21', x5: '00:01:25', x10: '00:00:42' },
			{ option: 'Corinthian Crusher', x1: '00:08:35', x2: '00:04:18', x3: '00:02:52', x5: '00:01:43', x10: '00:00:52' },
			{ option: 'Ram', x1: '00:11:33', x2: '00:05:47', x3: '00:03:51', x5: '00:02:19', x10: '00:01:09' },
			{ option: 'Ballista', x1: '00:24:46', x2: '00:12:23', x3: '00:08:15', x5: '00:04:57', x10: '00:02:29' },
			{ option: 'Ephor', x1: '03:14:00', x2: '01:37:00', x3: '01:04:40', x5: '00:38:48', x10: '00:19:24' },
			{ option: 'Settler', x1: '01:25:18', x2: '00:42:39', x3: '00:28:26', x5: '00:17:04', x10: '00:08:32' }
		]
	}, {
		option: 'Level 20', troops: [
			{ option: 'Hoplite', x1: '00:03:50', x2: '00:01:55', x3: '00:01:17', x5: '00:00:46', x10: '00:00:23' },
			{ option: 'Sentinel', x1: '00:02:46', x2: '00:01:23', x3: '00:00:55', x5: '00:00:33', x10: '00:00:17' },
			{ option: 'Shieldsman', x1: '00:04:22', x2: '00:02:11', x3: '00:01:27', x5: '00:00:52', x10: '00:00:26' },
			{ option: 'Twinsteel Therion', x1: '00:04:45', x2: '00:02:23', x3: '00:01:35', x5: '00:00:57', x10: '00:00:29' },
			{ option: 'Elpida Rider', x1: '00:06:20', x2: '00:03:10', x3: '00:02:07', x5: '00:01:16', x10: '00:00:38' },
			{ option: 'Corinthian Crusher', x1: '00:07:44', x2: '00:03:52', x3: '00:02:35', x5: '00:01:33', x10: '00:00:46' },
			{ option: 'Ram', x1: '00:10:24', x2: '00:05:12', x3: '00:03:28', x5: '00:02:05', x10: '00:01:02' },
			{ option: 'Ballista', x1: '00:22:17', x2: '00:11:09', x3: '00:07:26', x5: '00:04:27', x10: '00:02:14' },
			{ option: 'Ephor', x1: '02:54:36', x2: '01:27:18', x3: '00:58:12', x5: '00:34:55', x10: '00:17:28' },
			{ option: 'Settler', x1: '01:16:46', x2: '00:38:23', x3: '00:25:35', x5: '00:15:21', x10: '00:07:41' }
		]
	}
];

export const TRIBES_TRAIN_LEVELS = [
	{ option: 'Romans', tribe: ROMAN_TROOPS_TRAIN_LEVELS },
	{ option: 'Teutons', tribe: TEUTONIC_TROOPS_TRAIN_LEVELS },
	{ option: 'Gallics', tribe: GALIC_TROOPS_TRAIN_LEVELS },
	{ option: 'Egyptians', tribe: EGYPTIAN_TROOPS_TRAIN_LEVELS },
	{ option: 'Huns', tribe: HUNS_TROOPS_TRAIN_LEVELS },
	{ option: 'Spartans', tribe: SPARTANS_TROOPS_TRAIN_LEVELS },
];
export interface HelmetsProps {
	option: string;
	percent: number;
}

export const HELMETS: HelmetsProps[] = [
	{ option: 'Without Helmet', percent: 0 },
	{ option: 'Helmet of the Mercenary', percent: 0.1 },
	{ option: 'Helmet of the Warrior', percent: 0.15 },
	{ option: 'Helmet of the Archon', percent: 0.2 },
];

export const ALLY_RECRUITMENT_BONUS: HelmetsProps[] = [
	{ option: 'Level 0 - 0%', percent: 0 },
	{ option: 'Level 1 - 2%', percent: 0.02 },
	{ option: 'Level 2 - 4%', percent: 0.04 },
	{ option: 'Level 3 - 6%', percent: 0.06 },
	{ option: 'Level 4 - 8%', percent: 0.08 },
	{ option: 'Level 5 - 10%', percent: 0.1 },
];

export const ROMAN_TROOPS_ICONS = [
	{ option: 'Legionnaire', icon: <Legionnaire /> as JSX.Element },
	{ option: 'Praetorian', icon: <Praetorian /> as JSX.Element },
	{ option: 'Imperian', icon: <Imperian /> as JSX.Element },
	{ option: 'Equites Legati', icon: <EquitesLegati /> as JSX.Element },
	{ option: 'Equites Imperatoris', icon: <EquitesImperatoris /> as JSX.Element },
	{ option: 'Equites Caesaris', icon: <EquitesCaesaris /> as JSX.Element },
	{ option: 'Battering ram', icon: <BatteringRam /> as JSX.Element },
	{ option: 'Fire Catapult', icon: <FireCatapult /> as JSX.Element },
];

export const RESOURCES_MANAGER = [
	{ village: '1', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '2', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '3', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '4', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '5', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '6', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '7', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '8', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '9', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
	{ village: '10', lumber: 0, clay: 0, iron: 0, crop: 0, total: 0 },
];

export const GAME_SPEED = [{ option: 'x1' }, { option: 'x2' }, { option: 'x3' }, { option: 'x5' }, { option: 'x10' }];

export const CULTURE_POINTS = [
	{ nr: 1, building: 'Sawmill', cp: [1, 1, 2, 2, 2] },
	{ nr: 2, building: 'Brickyard', cp: [1, 1, 2, 2, 2] },
	{ nr: 3, building: 'Iron Foundry', cp: [1, 1, 2, 2, 2] },
	{ nr: 4, building: 'Grain Mill', cp: [1, 1, 2, 2, 2] },
	{ nr: 5, building: 'Bakery', cp: [1, 1, 2, 2, 2] },
	{ nr: 6, building: 'Cranny', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6] },
	{ nr: 7, building: 'Woodcutter', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 8, building: 'Clay Pit', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 9, building: 'Iron Mine', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 10, building: 'Cropland', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 11, building: 'Rally Point', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 12, building: 'Warehouse', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 13, building: 'Granary', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 14, building: 'Barracks', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 15, building: 'City Wall', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 16, building: 'Stonemason', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 17, building: 'Hero`s Mansion', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 18, building: 'Tournament Square', cp: [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 9, 11, 13, 15, 18, 22, 27, 32, 38] },
	{ nr: 19, building: 'Main Building', cp: [2, 3, 3, 4, 5, 6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 44, 53, 64, 77] },
	{ nr: 20, building: 'Residence', cp: [2, 3, 3, 4, 5, 6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 44, 53, 64, 77] },
	{ nr: 21, building: 'Smithy', cp: [2, 3, 3, 4, 5, 6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 44, 53, 64, 77] },
	{ nr: 22, building: 'Stable', cp: [2, 3, 3, 4, 5, 6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 44, 53, 64, 77] },
	{ nr: 23, building: 'Marketplace', cp: [4, 4, 5, 6, 7, 9, 11, 13, 15, 19, 22, 27, 32, 39, 46, 55, 67, 80, 96, 115] },
	{ nr: 24, building: 'Trade Office', cp: [4, 4, 5, 6, 7, 9, 11, 13, 15, 19, 22, 27, 32, 39, 46, 55, 67, 80, 96, 115] },
	{ nr: 25, building: 'Horse Drinking Trough', cp: [4, 4, 5, 6, 7, 9, 11, 13, 15, 19, 22, 27, 32, 39, 46, 55, 67, 80, 96, 115] },
	{ nr: 26, building: 'Workshop', cp: [4, 4, 5, 6, 7, 9, 11, 13, 15, 19, 22, 27, 32, 39, 46, 55, 67, 80, 96, 115] },
	{ nr: 27, building: 'Academy', cp: [5, 6, 7, 8, 10, 12, 14, 17, 21, 25, 30, 36, 43, 51, 62, 74, 89, 106, 128, 153] },
	{ nr: 28, building: 'Embassy', cp: [5, 6, 7, 8, 10, 12, 14, 17, 21, 25, 30, 36, 43, 51, 62, 74, 89, 106, 128, 153] },
	{ nr: 29, building: 'Hospital', cp: [5, 6, 7, 8, 10, 12, 14, 17, 21, 25, 30, 36, 43, 51, 62, 74, 89, 106, 128, 153] },
	{ nr: 30, building: 'Town Hall', cp: [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192] },
	{ nr: 31, building: 'Palace', cp: [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192] },
	{ nr: 32, building: 'Treasury', cp: [7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230] },
];

/* ************************************ */
/**** Add xSpeed on troops training ****/
/* ************************************ */
// const setXSpeedOnTroops = () => {
// 	selectedTribe.map((level) => {
// 		level.troops.map((troop) => {
// 			const timeInSeconds = convertInSeconds(troop.x1) / 2;
// 			const timeInSeconds3 = convertInSeconds(troop.x1) / 3;
// 			const timeInSeconds5 = convertInSeconds(troop.x1) / 5;
// 			const timeInSeconds10 = convertInSeconds(troop.x1) / 10;
// 			const x2Time = convertInFormatedTime(timeInSeconds);
// 			const x3Time = convertInFormatedTime(timeInSeconds3);
// 			const x5Time = convertInFormatedTime(timeInSeconds5);
// 			const x10Time = convertInFormatedTime(timeInSeconds10);
// 			if (x2Time) {
// 				troop.x2 = x2Time;
// 				troop.x3 = x3Time;
// 				troop.x5 = x5Time;
// 				troop.x10 = x10Time;
// 			}
// 		})
// 		return level;
// 	});
// 	console.log('%cCN', `font-weight: 900; background-color: #06856F; color: #FFFFFF; padding: 5px 15px; border-radius: 4px;`, 'selectedTroops:', selectedTribe);
// }