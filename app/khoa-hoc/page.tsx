'use client'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function KhoaHocPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="lo-trinh"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">LỘ TRÌNH HỌC GUITAR CƠ BẢN – 6 GIAI ĐOẠN</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
          <div>
            <h4 className="font-bold text-black dark:text-white">Nhập môn (Tập 1)</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Có video hướng dẫn chi tiết.</li>
              <li>Làm quen đàn qua giáo trình TAB + nốt nhạc (có ghi tên nốt).</li>
              <li><strong>Kết quả:</strong> đọc nốt thành thạo, chơi nốt ở ngăn 1–3, biết hợp âm cơ bản, tự đệm hát nhịp 2/4, 3/4.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">Cơ bản (Tập 2–6)</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Học đệm từng điệu cụ thể.</li>
              <li>Mỗi điệu có giáo trình riêng kèm nhiều bài hát.</li>
              <li>Sắp xếp từ dễ → khó, học nhẹ nhàng, có động lực.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">Phát triển (Tập 7–14)</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Học điệu nâng cao.</li>
              <li>Luyện chuyển tone linh hoạt.</li>
              <li>Đệm hát cho bản thân và người khác.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">Đệm hát nâng cao</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Bổ sung nhiều cách đệm cho mỗi điệu.</li>
              <li>Học intro, câu báo, câu dồn để làm bài hát sinh động.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">Hòa tấu & Solo</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Học dùng nhạc nền để tự luyện.</li>
              <li>Hòa tấu với thầy, rèn giữ nhịp chuẩn.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">Cổ điển & Bán cổ điển</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Cá nhân hóa theo khả năng và mục tiêu riêng.</li>
              <li>Học theo giáo trình chuẩn (Nhạc viện, Carulli, Sor, Carcassi…).</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="thong-tin-lop-hoc"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">THÔNG TIN LỚP HỌC GUITAR VỚI THẦY SƠN</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
    
          <div>
            <h4 className="font-bold text-black dark:text-white text-lg">Lớp Trực Tiếp</h4>
            <p><strong>Địa Điểm:</strong> 89, đường số 3, phường Bàn Cờ, quận 3, Tp.HCM</p>
          </div>

          <div>
              <p><strong>Học phí học guitar với thầy Sơn:</strong> Học từ 1-2 buổi/tuần</p>
              <ul className="list-disc list-inside pl-4">
                  <li><strong>Lớp nhóm:</strong> 1.800.000đ/khóa (8 buổi × 60’)</li>
                  <li><strong>Ưu đãi HSSV:</strong> chỉ 1.500.000đ/khóa (giảm 300k)</li>
                  <li><strong>Học viên mới đặc biệt:</strong> Học phí “<b className="font-bold text-red-800 dark:text-red-400">TUỲ HỶ</b>” – đóng CUỐI KHOÁ theo mức độ hài lòng</li>
                  <li><strong>Lớp 1 kèm 1:</strong> 4.000.000đ/khóa (8 buổi × 45’)</li>
              </ul>
              <p className="mt-2">👉 Học phí minh bạch – Chất lượng đảm bảo – Trải nghiệm học tập thú vị và hiệu quả.</p>
          </div>

          <div>
              <p><strong>Lịch học:</strong></p>
              <div className="pl-4">
                  <p><strong>Sáng:</strong></p>
                  <ul className="list-disc list-inside pl-4">
                      <li>T3: 8h30-9h30, 9h30-10h30, 10h30-11h30</li>
                      <li>T5: 8h30-9h30, 9h30-10h30, 10h30-11h30</li>
                      <li>T7, CN: 8-9h, 9-10h, 10-11h</li>
                  </ul>
                  <p><strong>Chiều và Tối:</strong></p>
                  <ul className="list-disc list-inside pl-4">
                      <li>T3,4,5,6: 17-18h, 18-19h, 19-20h</li>
                      <li>T7, CN: 15-16h, 16-17h, 17-18h, 18-19h</li>
                  </ul>
              </div>
          </div>

          <div>
              <h4 className="font-bold text-black dark:text-white text-lg mt-4">Lớp Online</h4>
              <ul className="list-disc list-inside pl-4">
                  <li><strong>Lớp nhóm:</strong> Thông tin khai giảng thông báo trên fanpage</li>
                  <li><strong>Lớp 1 kèm 1:</strong> 4.000.000đ/khóa (8 buổi × 45’)</li>
              </ul>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white text-lg mt-4">Đăng ký</h4>
            <p>
              Đăng ký tại fanpage: <a href="https://www.facebook.com/guitarbuingocson/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-800 dark:hover:text-zinc-200">https://www.facebook.com/guitarbuingocson/</a>
            </p>
            <p>Hoặc</p>
            <p>SĐT: <a href="tel:0976246788" className="underline">0976246788</a> hoặc <a href="tel:0987301819" className="underline">0987301819</a> (Khuyến Nhạc)</p>
          </div>

        </div>
      </motion.section>

      <motion.section
        id="giao-trinh"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">BỘ GIÁO TRÌNH ĐỆM ĐÀN GUITAR 14+ TẬP</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
          <div>
            <h4 className="font-bold text-black dark:text-white">Danh sách:</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Tập 1: Nhập môn</li>
              <li>Tập 2: Valse</li>
              <li>Tập 3: Nhịp 2/4-Slow</li>
              <li>Tập 4: Boston</li>
              <li>Tập 5: Slow Rock</li>
              <li>Tập 6: Bollero</li>
              <li>Tập 7: Disco</li>
              <li>Tập 8: Nhịp 4/4 - Cách đệm móc đơn</li>
              <li>Tập 9: Nhịp 2/4 và 4/4 - Cách đệm móc kép</li>
              <li>Tập 10: Cha Cha Cha</li>
              <li>Tập 11: Slow Surf</li>
              <li>Tập 12: Rhumba</li>
              <li>Tập 13: Tango</li>
              <li>Tập 14: Pasodoble - Fox</li>
            </ul>
          </div>
          <div>
            <p><strong>Giá bán:</strong> 150.000đ/cuốn. Mua trọn bộ 14 cuốn: 1.6tr</p>
            <p>Cuốn 1 đã xuất bản và có đầy đủ video hướng dẫn từng bài.</p>
            <p>Từ cuốn số 2 trở đi, mỗi cuốn có video hướng dẫn về điệu đó và ít nhất 4-5 bài thực hành mẫu.</p>
            <p>Sách sẽ được cập nhật bài mới liên tục nên không xuất bản.</p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
