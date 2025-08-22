'use client'
import { motion } from 'motion/react'
import VideoAlbum from '../VideoAlbum'
import HocVienThaySon from '../HocVienThaySon'

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

export default function ThuVienPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="goc-choi-dan"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">GÓC CHƠI ĐÀN</h3>
        <VideoAlbum />
      </motion.section>

      <motion.section
        id="hoc-vien"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium text-green-800 dark:text-green-400">HỌC VIÊN THẦY SƠN</h3>
        <HocVienThaySon />
      </motion.section>
    </motion.main>
  )
}
