// Danh sách sản phẩm - Soft & Care
const CATEGORIES = [
  { id: 'sua-tam', name: 'Sữa tắm', icon: '🛁' },
  { id: 'duong-the', name: 'Dưỡng thể', icon: '🧴' },
  { id: 'dau-goi', name: 'Dầu gội & xả', icon: '💇' },
  { id: 'duong-tay-moi', name: 'Dưỡng tay & môi', icon: '💋' },
  { id: 'rang-mieng', name: 'Chăm sóc răng miệng', icon: '🪥' },
  { id: 'dung-cu', name: 'Dụng cụ chăm sóc cá nhân', icon: '💆' },
  { id: 'rua-tay', name: 'Dung dịch rửa tay', icon: '🧼' },
];

const PRODUCTS = [
  { id:1, cat:'sua-tam', name:'Sữa tắm Safeguard Pure hương lựu 570g', price:175000, kw:'pomegranate,body,wash' },
  { id:2, cat:'sua-tam', name:'Sữa tắm CLEAR dành cho nam Vitality Sports 700g', price:126000, kw:'mens,shower,gel' },
  { id:3, cat:'sua-tam', name:'Sữa tắm Lux Lotus Charm 1000g', price:117000, kw:'lotus,body,wash' },
  { id:4, cat:'sua-tam', name:'Sữa tắm Liushen Extra Pack 1500g', price:181000, kw:'herbal,shower,gel' },
  { id:5, cat:'sua-tam', name:'Sữa tắm Dove hương Hoa anh đào 1000g', price:160000, kw:'cherry,blossom,shower' },

  { id:6, cat:'duong-the', name:'Kem dưỡng thể Vaseline dưỡng ẩm hàng ngày (chai đại)', price:160000, kw:'body,lotion' },
  { id:7, cat:'duong-the', name:'Sữa dưỡng thể Vaseline Essence Snow Melt Cream', price:264000, kw:'snow,cream,skincare' },
  { id:8, cat:'duong-the', name:'Kem dưỡng da toàn thân Vaseline Baby Repair Crystal Jelly', price:64000, kw:'baby,jelly,cream' },
  { id:9, cat:'duong-the', name:'Kem dưỡng ẩm body Dabao SOD mật ong 100g', price:48000, kw:'honey,cream' },
  { id:10, cat:'duong-the', name:'Sữa dưỡng thể Vaseline dưỡng ẩm hằng ngày 100g', price:67000, kw:'lotion,bottle' },

  { id:11, cat:'dau-goi', name:'Dầu gội trị gàu Clear Kiểm soát dầu 900g', price:241000, kw:'shampoo,bottle' },
  { id:12, cat:'dau-goi', name:'Dầu xả dưỡng ẩm Dove Air Volumizing 480g', price:165000, kw:'conditioner,hair' },
  { id:13, cat:'dau-goi', name:'Dầu gội gừng Liushen Polygonum Multiflorum', price:170000, kw:'ginger,shampoo' },
  { id:14, cat:'dau-goi', name:'Dầu gội Dove 700g dưỡng ẩm chuyên sâu', price:134000, kw:'dove,shampoo' },
  { id:15, cat:'dau-goi', name:'Dầu gội trị gàu Lux Hydrating Silky 480g', price:145000, kw:'silky,shampoo' },

  { id:16, cat:'duong-tay-moi', name:'Son dưỡng môi Vaseline cơ bản 7g', price:79000, kw:'lip,balm' },
  { id:17, cat:'duong-tay-moi', name:'Son dưỡng môi Vaseline Repairing Original 3.5g', price:67000, kw:'lipstick,balm' },
  { id:18, cat:'duong-tay-moi', name:'Kem tay dưỡng ẩm & phục hồi Extra Moisturizing 75g', price:27000, kw:'hand,cream' },
  { id:19, cat:'duong-tay-moi', name:'Kem dưỡng da tay Vaseline', price:51000, kw:'vaseline,hand' },
  { id:20, cat:'duong-tay-moi', name:'Kem dưỡng da tay MAXAM 175ml', price:122000, kw:'hand,lotion' },

  { id:21, cat:'rang-mieng', name:'Kem đánh răng Colgate', price:17000, kw:'toothpaste' },
  { id:22, cat:'rang-mieng', name:'Nước súc miệng Colgate Fresh Tea 500ml', price:61000, kw:'mouthwash' },
  { id:23, cat:'rang-mieng', name:'Bàn chải đánh răng Colgate (combo 6 chiếc)', price:32000, kw:'toothbrush' },
  { id:24, cat:'rang-mieng', name:'Kem đánh răng Darlie 190g', price:61000, kw:'toothpaste,tube' },
  { id:25, cat:'rang-mieng', name:'Bàn chải đánh răng Darlie (combo 8 chiếc)', price:150000, kw:'toothbrushes' },

  { id:26, cat:'dung-cu', name:'Máy rửa mặt', price:259000, kw:'facial,cleanser,device' },
  { id:27, cat:'dung-cu', name:'Máy sấy tóc', price:135000, kw:'hair,dryer' },
  { id:28, cat:'dung-cu', name:'Bàn chải điện', price:259000, kw:'electric,toothbrush' },
  { id:29, cat:'dung-cu', name:'Máy xông hơi da mặt', price:254000, kw:'facial,steamer' },
  { id:30, cat:'dung-cu', name:'Máy tỉa lông mặt', price:197000, kw:'trimmer,face' },

  { id:31, cat:'rua-tay', name:'Xà phòng rửa tay kháng khuẩn 500ml', price:49000, kw:'hand,soap' },
  { id:32, cat:'rua-tay', name:'Xà phòng rửa tay kháng khuẩn ngải cứu 500ml', price:55000, kw:'soap,herbal' },
  { id:33, cat:'rua-tay', name:'Xịt rửa tay kháng khuẩn Lux Fragrance 400g', price:51000, kw:'hand,sanitizer' },
  { id:34, cat:'rua-tay', name:'Nước rửa tay dạng bọt kháng khuẩn Lux 225g', price:67000, kw:'foam,soap' },
  { id:35, cat:'rua-tay', name:'Xà phòng rửa tay Safeguard hương chanh lô hội', price:39000, kw:'lemon,soap' },
];

function imgFor(p){
  const ext = {1:"jpg",2:"jpg",3:"jpg",4:"jpg",5:"png",6:"png",7:"png",8:"png",9:"png",10:"png",11:"jpg",12:"png",13:"png",14:"png",15:"png",16:"jpg",17:"jpg",18:"jpg",19:"jpg",20:"jpg",21:"jpg",22:"png",23:"jpg",24:"jpg",25:"jpg",26:"jpg",27:"jpg",28:"jpg",29:"jpg",30:"jpg",31:"png",32:"png",33:"png",34:"png",35:"png"};
  return `assets/products/p${p.id}.${ext[p.id]}`;
}

function fmtVND(n){ return n.toLocaleString('vi-VN') + '₫'; }
