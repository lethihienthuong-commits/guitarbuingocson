'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import VideoAlbum from './VideoAlbum'
import HocVienThaySon from './HocVienThaySon'

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
                        Tôi giúp bạn học guitar <b className="font-bold text-red-800 dark:text-red-400">DỄ HIỂU</b> và <b className="font-bold text-red-800 dark:text-red-400">NHANH</b> gấp 3 lần tôi ngày xưa
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">GÓC CHƠI ĐÀN</h3>
        <VideoAlbum />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">HỌC VIÊN THẦY SƠN</h3>
        <HocVienThaySon />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">LỘ TRÌNH HỌC GUITAR CƠ BẢN – 6 GIAI ĐOẠN</h3>
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
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">THÔNG TIN LỚP HỌC GUITAR VỚI THẦY SƠN</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
    
          <div>
            <h4 className="font-bold text-black dark:text-white text-lg">Lớp Trực Tiếp</h4>
            <p><strong>Địa Điểm:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Địa chỉ mới: 89, đường số 3, Cư Xá Đô Thành, phường Bàn Cơ, Tp.HCM</li>
              <li>Địa chỉ cũ: 89, đường số 3, Cư Xá Đô Thành, phường 4, quận 3, Tp.HCM</li>
            </ul>
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
            <p>SĐT: 0976246788 hoặc 0987301819 (Khuyến Nhạc)</p>
          </div>

        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">BỘ GIÁO TRÌNH ĐỆM ĐÀN GUITAR 14+ TẬP</h3>
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

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">CÂU HỎI THƯỜNG GẶP</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-6">

          <div>
            <h4 className="font-bold text-black dark:text-white">Học bao lâu biết đàn?</h4>
            <p className="mb-4 text-justify"><i>Thông thường, sau khoảng 1-3 tháng luyện tập đều đặn khoảng 30’/ngày, bạn đã có thể chơi được những bài đơn giản, cảm nhận được niềm vui từ tiếng đàn và tự tin biểu diễn cho người thân, bạn bè nghe rồi.</i></p>
            <p className="mb-4 text-justify"><i>Nếu kiên trì hơn 6 tháng, phần lớn học viên của thầy Sơn đã có thể chơi những bản nhạc mình yêu thích một cách mượt mà. Tất nhiên, tốc độ tiến bộ của mỗi người sẽ phụ thuộc vào mức độ chăm chỉ và thời gian luyện tập hàng ngày nữa.</i></p>
            <p className="mb-4 text-justify"><i>Điểm mạnh của thầy Sơn là giáo trình được cá nhân hóa theo từng học viên, thầy Sơn luôn đồng hành sát sao để giúp bạn học đúng cách, tiến bộ nhanh nhất có thể, dù bạn học để giải trí hay theo đuổi nghiêm túc. Ngoài kỹ năng đàn, thầy còn rất chú trọng hướng dẫn bạn hát đúng cao độ và tiết tấu nữa, đồng thời hiểu hơn về hoà âm, giúp bạn vừa có kỹ năng đàn, vừa hiểu về âm nhạc, vừa phát triển khả năng cảm thụ âm nhạc nhanh chóng.</i></p>
            <p className="text-justify"><i>Bên cạnh đó, Khuyến Nhạc cũng thường xuyên tổ chức các buổi biểu diễn nhỏ để bạn vừa có động lực, vừa rèn luyện sự tự tin khi chơi nhạc.</i></p>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white">Người lớn tuổi học được không?</h4>
            <p className="mb-4 text-justify"><i>Phần lớn học viên tới học với thầy Sơn đều chưa biết gì về đàn.</i></p>
            <p className="mb-4 text-justify"><i>Thầy Sơn đã dạy rất nhiều anh chị lớn tuổi, trên 50,60 tuổi. Đam mê từ trẻ nhưng vì công việc gia đình nên bây giờ mới sắp xếp đi học đàn được.</i></p>
            <p className="mb-4 text-justify"><i>Đây là video cô Nguyệt học đàn guitar khi đã hơn 50 tuổi. Cô Nguyệt học đều, chăm chỉ, luyện tập đều đặn nên cô học được rất xa, xa hơn rất nhiều một số bạn trẻ nữa: <a href="https://www.facebook.com/share/p/1ZKrfH6NZn/" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
            <p className="mb-4 text-justify"><i>Đây là clip của cô Phi học đàn khi đã nghỉ hưu: <a href="https://www.facebook.com/share/v/1BLReUtyoX/" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
            <p className="text-justify"><i>Đây là clip 2 bố con anh Định cùng nhau hoà tấu. Anh Định cũng lớn tuổi rồi mới học đàn: <a href="https://www.youtube.com/watch?v=9UI5VA6S22k&list=PL8_S-ebgMkQHbrKBJYtjxEiTwyrkU3dTv&index=14" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white">Thầy Sơn có dạy Guitar cổ điển (Classic) không?</h4>
            <p className="text-justify"><i>Thầy Sơn tốt nghiệp Guitar Cổ điển tại Nhạc viện TP.HCM, nên có thể dạy Classic rất bài bản. Tuy nhiên, vì Guitar Cổ điển đòi hỏi kỹ thuật và thời gian luyện tập cao, thầy thường khuyên học viên nên bắt đầu từ Guitar đệm hát. Khi đã quen thị tấu (đọc bản nhạc và chơi ngay), học viên có thể chuyển sang Guitar Cổ điển. Cách này vừa tiết kiệm thời gian, vừa giúp nắm vững cả đệm hát lẫn Classic.</i></p>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white">Thầy Sơn có dạy đàn guitar tay trái không?</h4>
            <p className="mb-4 text-justify"><i>“Nhiều người hay hỏi tôi: “Thuận tay trái thì học guitar thế nào?”</i></p>
            <p className="mb-4 text-justify"><i>Hôm nay tôi chia sẻ một chút về điều này.</i></p>
            <p className="mb-4 text-justify"><i>Nếu bạn thuận tay trái, cách đơn giản nhất là đổi dây đàn ngược lại – tức là hoán đổi dây số 6 với dây số 1, các dây còn lại cũng đảo tương ứng. Như vậy, bạn vẫn có thể học theo mọi giáo trình, bài hát, hay lời hướng dẫn của giáo viên mà không có trở ngại nào.</i></p>
            <p className="mb-4 text-justify"><i>Tuy nhiên, có một bất lợi nhỏ: bạn sẽ khó mượn đàn của người khác, vì hầu hết đàn guitar đều dành cho người thuận tay phải.</i></p>
            <p className="mb-4 text-justify"><i>Thực tế thì rất nhiều người thuận tay trái vẫn học và chơi guitar, piano hay violin như người thuận tay phải – hoàn toàn không cần đổi dây hay thay đổi gì cả. Tôi nghĩ rằng với những nhạc cụ này, cả hai tay đều phải làm việc như nhau, nên không nhất thiết phải đổi dây.</i></p>
            <p className="mb-4 text-justify"><i>Dưới đây là bạn Đỉnh Phong 16 tuổi - thuận tay trái với hát bài Boulevard.</i></p>
            <p className="mb-4 text-justify"><i>Tôi luôn có guitar tay trái trong lớp cho học viên tay trái nhé, bạn nào còn băn khoăn thì hãy đến trải nghiệm ngay thôi!”</i></p>
            <p className="text-justify"><i>Đây là clip của bạn Đỉnh Phong: <a href="https://www.youtube.com/watch?v=JhMa5ByiD9I&list=PL8_S-ebgMkQHbrKBJYtjxEiTwyrkU3dTv&index=5" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white">Tôi có cần đem đàn theo không?</h4>
            <p className="mb-4 text-justify"><i>Khuyến Nhạc có chuẩn bị đàn guitar cho học viên nên bạn không cần mang đàn theo khi đi học. Tuy nhiên, bạn cần có 1 cây đàn guitar ở nhà để luyện tập.</i></p>
            <p className="mb-4 text-justify"><i>Nếu bạn chưa có đàn, có thể nhờ thầy Sơn tư vấn hoặc tham khảo video hướng dẫn lựa đàn của thầy Sơn để có thể tự lựa cho bản thân 1 cây đàn phù hợp.</i></p>
            <p className="text-justify"><i><a href="https://youtu.be/KByu_xM3b3A?si=uLKl1ƯybyIzvZc9O" target="_blank" rel="noopener noreferrer" className="underline">Video 1</a> và <a href="https://youtu.be/jpsZjmY8GYQ?si=ppZEg_L6zHvLRlGa" target="_blank" rel="noopener noreferrer" className="underline">Video 2</a></i></p>
          </div>

        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">CẢM NGHĨ CỦA HỌC VIÊN</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="text-justify">
            Đây là chia sẻ cảm nhận từ học viên anh Quốc Vũ, một người đã học nhiều nơi và cũng tìm nhiều trung tâm.
          </p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fguitarbuingocson%2Fvideos%2F994471148704883%2F&show_text=false&width=560"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Cảm nhận của học viên"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
                <h3 className="mb-5 text-lg font-medium text-green-800 dark:text-green-400">LIÊN HỆ</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Email:{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
