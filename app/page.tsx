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
            Tôi giúp bạn học guitar <b className="font-bold text-black dark:text-white">DỄ HIỂU</b> và <b className="font-bold text-black dark:text-white">NHANH</b> gấp 3 lần tôi ngày xưa
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">GÓC CHƠI ĐÀN</h3>
        <VideoAlbum />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">HỌC VIÊN THẦY SƠN</h3>
        <HocVienThaySon />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">THÔNG TIN LỚP HỌC GUITAR VỚI THẦY SƠN</h3>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
    
          <div>
            <h4 className="font-bold text-black dark:text-white text-lg">Lớp Trực Tiếp</h4>
            <p><strong>Địa Điểm:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Địa chỉ mới: 89, đường số 3, Cư Xá Đô Thành, phường Bàn Cờ, Tp.HCM</li>
              <li>Địa chỉ cũ: 89, đường số 3, Cư Xá Đô Thành, phường 4, quận 3, Tp.HCM</li>
            </ul>
          </div>

          <div>
              <p><strong>Học phí học guitar với thầy Sơn:</strong> Học từ 1-2 buổi/tuần</p>
              <ul className="list-disc list-inside pl-4">
                  <li><strong>Lớp nhóm:</strong> 1.800.000đ/khóa (8 buổi × 60’)</li>
                  <li><strong>Ưu đãi HSSV:</strong> chỉ 1.500.000đ/khóa (giảm 300k)</li>
                  <li><strong>Học viên mới đặc biệt:</strong> Học phí “TUỲ HỶ” – đóng CUỐI KHOÁ theo mức độ hài lòng</li>
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
            <p>SĐT: 0987301819 (có Zalo- Khuyến Nhạc)</p>
          </div>

        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
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
