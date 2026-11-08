/* =========================================================
   DANH SÁCH SẢN PHẨM – LỘC BOONG STORE
   Sửa / thêm / xoá máy ở đây, trang catalog & trang bio tự cập nhật.
   - cat:   "iphone" | "samsung" | "ipad" | "laptop"
   - tag:   nhãn nhỏ góc trên (vd "Siêu lướt", "New seal", "Gaming")
   - price: để "" nếu muốn hiện "Inbox báo giá"
   - img:   ảnh sản phẩm, vd "assets/sp/ip18pm.webp"
   - featured: true để hiện ở mục "Hàng mới về" trên trang bio
   ========================================================= */
window.LB_PRODUCTS = [
  { cat:"iphone", img:"assets/sp/ip18pm2.webp", name:"iPhone 18 Pro Max – New seal", spec:"256GB · 512GB · 1TB · Đủ màu", note:"Hỗ trợ trả góp cho khách quanh 대전", price:"Từ 20xxk₩", tag:"Hot", featured:true },
  { cat:"iphone", img:"assets/sp/ip18cherry.webp", name:"iPhone 18 Pro Max – Cherry", spec:"Màu Cherry mới · Sẵn hàng", note:"Ship hoả tốc trong 대전", price:"", tag:"Mới", featured:true },
  { cat:"iphone", img:"assets/sp/ip18blue.webp", name:"iPhone 18 Pro Max 256GB – Xanh", spec:"Siêu lướt · Pin 100% · Sạc 21 lần", note:"Kích hoạt T10, còn bảo hành gần 1 năm", price:"", tag:"Siêu lướt", featured:true },
  { cat:"iphone", img:"assets/sp/ip18pm.webp", name:"iPhone 18 Pro Max – Bạc / Cherry", spec:"256GB · 512GB", note:"Full hộp, tặng combo phụ kiện", price:"", tag:"New seal" },
  { cat:"iphone", img:"assets/sp/ip18pro2.webp", name:"iPhone 18 Pro", spec:"256GB · 512GB", note:"Ship toàn Hàn, test máy thoải mái", price:"", tag:"Mới" },
  { cat:"iphone", img:"assets/sp/ip17pm.webp", name:"iPhone 17 Pro Max 256GB", spec:"Pin 100% · Sạc 8 lần · Phụ kiện full", note:"Bảo hành chính hãng tới T6/2027", price:"", tag:"Siêu lướt", featured:true },
  { cat:"iphone", img:"assets/sp/ip16pm.webp", name:"iPhone 16 Pro Max 256GB", spec:"Sạc 0 lần · Pin 100%", note:"Máy như mới, phụ kiện full", price:"", tag:"Like new" },
  { cat:"iphone", img:"assets/sp/ip15pro.webp", name:"iPhone 15 Pro 256GB", spec:"Pin zin dung lượng cao · Phụ kiện full", note:"Chip A17 Pro, khung Titanium", price:"8xxk₩", tag:"Giá tốt" },
  { cat:"iphone", img:"assets/sp/iphong.webp", name:"iPhone màu hồng 13 · 15 · 15 Plus · 16 Plus", spec:"Nhiều dung lượng", note:"Dành cho chị em thích màu hồng", price:"", tag:"Hồng" },

  { cat:"samsung", img:"assets/sp/zfold8.webp", name:"Samsung Galaxy Z Fold 8 – Tím", spec:"Máy gập cao cấp · Đẹp keng", note:"Unbox tại quán", price:"", tag:"Mới", featured:true },
  { cat:"samsung", img:"assets/sp/s24u.webp", name:"Samsung Galaxy S24 Ultra", spec:"Camera zoom · Bút S Pen", note:"Phụ kiện full, có thể mang về VN", price:"", tag:"Giá tốt" },

  { cat:"ipad", img:"assets/sp/ipadgen11.webp", name:"iPad Gen 11 128GB – New", spec:"Hơn chục máy sẵn tại quán", note:"Combo kèm Pen Type-C", price:"5xxk₩", tag:"Sale", featured:true },
  { cat:"ipad", img:"assets/sp/ipadair.webp", name:"iPad Air M4", spec:"Siêu lướt · Combo kèm Pencil Pro", note:"Mỏng nhẹ, chip M4 mạnh", price:"", tag:"Siêu lướt" },
  { cat:"ipad", img:"assets/sp/ipadprom2.webp", name:"iPad Pro M2 128GB", spec:"Pin zin 93% · Phụ kiện full", note:"Bảo hành 6 tháng", price:"8xxk₩", tag:"Hot" },
  { cat:"ipad", img:"assets/sp/ipadprom1.webp", name:"iPad Pro M1 128GB", spec:"Pin zin 9x% · Phụ kiện full", note:"Bảo hành 6 tháng", price:"8xxk₩", tag:"Giá tốt" },

  { cat:"laptop", img:"assets/sp/scar18.webp", name:"ASUS ROG Strix SCAR 18", spec:"i9-14900HX · RTX 4080 12GB · 18\" 2.5K 240Hz", note:"RAM 16–32GB DDR5 · SSD 1TB · HDR 1000", price:"", tag:"Gaming", featured:true },
  { cat:"laptop", img:"assets/sp/msi.webp", name:"MSI Alpha 17", spec:"Ryzen 9 7945HX · RTX 4070 8GB · 17\" 2.5K 240Hz", note:"RAM 16–32GB · SSD 512GB–1TB", price:"", tag:"Gaming" },
  { cat:"laptop", img:"assets/sp/legion.webp", name:"Lenovo Legion 5 Pro", spec:"Ryzen 7 · RTX 3070 8GB · 2.5K 165Hz", note:"Gaming, đồ hoạ nặng", price:"", tag:"Gaming" },
  { cat:"laptop", img:"assets/sp/g713.webp", name:"ASUS ROG Strix G713", spec:"Cấu hình khoẻ · Màn 17\"", note:"Valorant, CS2, LoL vô tư", price:"", tag:"Gaming" },
  { cat:"laptop", img:"assets/sp/loq.webp", name:"Lenovo LOQ 15IAX9E", spec:"i5-12450HX · RTX 3050 6GB · 16GB DDR5", note:"SSD 512GB · Gaming quốc dân", price:"", tag:"Gaming" },
  { cat:"laptop", img:"assets/sp/tuf.webp", name:"ASUS TUF Gaming F15", spec:"i7-11800H · RTX 3050 Ti 4GB · 144Hz", note:"RAM 16GB · SSD 512GB", price:"", tag:"Gaming" },
  { cat:"laptop", img:"assets/sp/nitro.webp", name:"Acer Nitro 5", spec:"GTX 1650 · Chiến game tốt", note:"Laptop gaming giá mềm", price:"4xxk₩", tag:"Giá tốt" },
  { cat:"laptop", img:"assets/sp/mba.webp", name:"MacBook Air M4", spec:"Siêu lướt · Sạc 13 lần", note:"Mỏng nhẹ, pin trâu", price:"", tag:"Siêu lướt", featured:true },
  { cat:"laptop", img:"assets/sp/zenbook.webp", name:"ASUS Zenbook UM425UAZ", spec:"Ryzen 7 5700U · 16GB · 512GB", note:"Màn 14\" 2K IPS 400 nits", price:"", tag:"Văn phòng" },
  { cat:"laptop", img:"assets/sp/yoga.webp", name:"Lenovo Yoga Slim 7", spec:"i7-1065G7 · 16GB · MX350 2GB", note:"SSD 512GB · Mỏng nhẹ sang trọng", price:"", tag:"Văn phòng" },
  { cat:"laptop", img:"assets/sp/elitebook.webp", name:"HP EliteBook 840 G9", spec:"Laptop doanh nhân · Gọn nhẹ", note:"Bảo hành dài, phụ kiện full", price:"", tag:"Văn phòng" },
  { cat:"laptop", img:"assets/sp/pavilion.webp", name:"HP Pavilion x360 – kèm bút", spec:"i5-10210U · 16GB · 512GB", note:"Màn 14\" cảm ứng, xoay gập 360°", price:"", tag:"Cảm ứng" },
  { cat:"laptop", img:"assets/sp/v15.webp", name:"Lenovo V15 G4 – New", spec:"Đẹp keng · Học tập văn phòng", note:"Máy mới nguyên hộp", price:"", tag:"New" }
];

window.LB_LINKS = {
  fanpage: "https://www.facebook.com/SoulAssassinStorekorea",
  tiktok:  "https://www.tiktok.com/@lc.boong.y",
  phone:   "tel:+821073842882"
};
