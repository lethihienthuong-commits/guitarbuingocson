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

export default function FaqPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="faq"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">CÂU HỎI THƯỜNG GẶP</h3>
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
            <p className="mb-4 text-justify"><i>Đây là video cô Nguyệt học đàn guitar khi đã hơn 50 tuổi. Cô Nguyệt học đều, chăm chỉ, luyện tập đều đặn nên cô học được rất xa, xa hơn rất nhiều một số bạn trẻ nữa:</i></p>
            <p className="mb-4 text-justify"><i><a href="https://www.facebook.com/share/p/1ZKrfH6NZn/" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
            <p className="mb-4 text-justify"><i>Đây là clip của cô Phi học đàn khi đã nghỉ hưu:</i></p>
            <p className="mb-4 text-justify"><i><a href="https://www.facebook.com/share/v/1BLReUtyoX/" target="_blank" rel="noopener noreferrer" className="underline">Link video</a></i></p>
            <p className="text-justify"><i>Đây là clip 2 bố con anh Định cùng nhau hoà tấu. Anh Định cũng lớn tuổi rồi mới học đàn:</i></p>
            <div className="flex justify-center my-2">
              <iframe width="360" height="215" src="https://www.youtube.com/embed/9UI5VA6S22k" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
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
            <p className="text-justify"><i>Đây là clip của bạn Đỉnh Phong:</i></p>
            <div className="flex justify-center my-2">
              <iframe width="360" height="215" src="https://www.youtube.com/embed/JhMa5ByiD9I" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white">Tôi có cần đem đàn theo không?</h4>
            <p className="mb-4 text-justify"><i>Khuyến Nhạc có chuẩn bị đàn guitar cho học viên nên bạn không cần mang đàn theo khi đi học. Tuy nhiên, bạn cần có 1 cây đàn guitar ở nhà để luyện tập.</i></p>
            <p className="mb-4 text-justify"><i>Nếu bạn chưa có đàn, có thể nhờ thầy Sơn tư vấn hoặc tham khảo video hướng dẫn lựa đàn của thầy Sơn để có thể tự lựa cho bản thân 1 cây đàn phù hợp.</i></p>
            <p className="text-justify"><i>Video 1 và Video 2:</i></p>
            <div className="flex flex-row gap-4 my-2">
              <iframe width="360" height="215" src="https://www.youtube.com/embed/KByu_xM3b3A" title="YouTube video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <iframe width="360" height="215" src="https://www.youtube.com/embed/jpsZjmY8GYQ" title="YouTube video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

        </div>
      </motion.section>
    </motion.main>
  )
}
