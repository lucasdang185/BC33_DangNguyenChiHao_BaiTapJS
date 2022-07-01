/**
 * BÀI TẬP 1
 * Sơ đồ 3 khối 
 * 
 * INPUT: LƯƠNG 1 NGÀY, SỐ NGÀY LÀM
 * 
 * PROCESS: (pseudo code)
 * 1. lấy được input (hardcode: xét cứng giá trị)
 * 2. tính lương = lương 1 ngày * số ngày làm
 * 3. log lương ra màn hình
 * 
 * OUTPUT: LƯƠNG
 */

var salaryPerDay = 100000;
var workingDays = 20;

var totalSalary = salaryPerDay * workingDays;
console.log("Tiền lương nhân viên:",totalSalary);

/**
 * BÀI TẬP 2
 * SƠ ĐỒ 3 KHỐI 
 * 
 * INPUT: SỐ THỰC
 *  
 * PROCESS:
 * 1. LẤY ĐƯỢC INPUT
 * 2. TRUNG BÌNH = TỔNG CÁC SỐ THỰC / N SỐ THỰC 
 * 3. LOG GIÁ TRỊ RTRUNG BÌNH RA MÀN HÌNH
 * 
 * OUTPUT: GIÁ TRỊ TRUNG BÌNH CỦA N SỐ THỰC (5 SỐ THỰC)
 */

var r1=1;
var r2=10;
var r3=3;
var r4=-5;
var r5=20;

var average = (r1+r2+r3+r4+r5)/5;
console.log("Giá trị trung bình là:", average);

/**
 * BÀI TẬP 3
 * SƠ ĐỒ 3 KHỐI 
 * 
 * INPUT: GIÁ USD->VND (1$=23.500), SỐ TIỀN NHẬP MỆNH GIÁ USD
 * 
 * PROCESS:
 * 1. LẤY ĐƯỢC INPUT 
 * 2. SỐ TIỀN VND = SỐ TIỀN USD * GIÁ USD->VND
 * 3. LOG SỐ TIỀN VND RA MÀN HÌNH
 * OUTPUT: SỐ TIỀN SAU KHI QUY ĐỔI TỪ USD -> VND
 */

var exchangeRate = 23500;
var amountUSD = 20;

var amountVND = amountUSD * exchangeRate;
console.log("Số tiền sau khi quy đổi từ USD -> VND là:",amountVND)

/**
 * BÀI TẬP 4
 * SƠ ĐỒ 3 KHỐI 
 * 
 * INPUT: CHIỀU DÀI, CHIỀU RỘNG HCN 
 * 
 * PORCESS:
 * 1. LẤY ĐƯỢC INPUT 
 * 2. DIỆN TÍCH = CHIỀU DÀI * CHIỀU RỘNG
 * 3. CHU VI = (CHIỀU DÀI + CHIỀU RỘNG)*2
 * 4. LOG RA DIỆN TÍCH VÀ CHU VI HCN RA MÀN HÌNH
 * 
 * 
 * OUTPUT: DIỆN TÍCH VÀ CHU VI CỦA HCN 
 * 
 */

var legth = 10;
var width = 5;

var s = legth * width;
var p = (legth+width)*2;
console.log("Diện tích của hình chữ nhật là:",s);
console.log("chu vi của hình chữ nhật là:",p);

/**
 * BÀI TẬP 5
 * SƠ ĐỒ 3 KHỐI 
 * 
 * INPUT: SỐ CÓ 2 CHỮ SỐ
 * 
 * PROCESS:
 * 1. LẤY INPUT 
 * 2. LẤY SỐ HÀNG ĐƠN VỊ: SỐ HÀNG ĐƠN VỊ = N % 10
 * 3. LẤY SỐ HÀNG CHỤC: SỐ HÀNG CHỤC = N /10 VÀ LÀM TRÒN XUỐNG VÌ JS CHIA HẾT, KHÔNG CHIA LÂY NGUYÊN
 * 4. TỔNG 2 KÝ SỐ VỪA NHẬP = SỐ HÀNG ĐƠN VỊ + SỐ HÀNG CHỤC
 * 5. LOG TỔNG 2 KÝ SỐ RA MÀN HÌNH
 * 
 * OUTPUT: TỔNG 2 KÝ SỐ CỦA SỐ VỪA NHẬP
 */

var n=99;
var units = n % 10 ;
var tens = Math.floor(n/10);

var sum = units + tens;
console.log("Tổng 2 ký số của",n,"là:",sum)